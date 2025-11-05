'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const EmotionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cache] = useState(() => {
    const cache = createCache({
      key: 'css',
      prepend: true,
      nonce: Math.random().toString(36).substring(2),
    });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) {
      return null;
    }

    const names = entries.map(([key]) => key);
    const styles = entries.map(([, value]) => value).join(' ');

    cache.inserted = {};

    return (
      <style
        dangerouslySetInnerHTML={{ __html: styles }}
        data-emotion={`${cache.key} ${names.join(' ')}`}
      />
    );
  });

  useEffect(() => {
    return () => {
      Object.keys(cache.inserted).forEach((key) => {
        delete cache.inserted[key];
      });
    };
  }, [cache]);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
