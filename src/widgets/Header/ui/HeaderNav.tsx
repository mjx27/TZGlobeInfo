'use client';
import { usePathname } from 'next/navigation';

import { Link, LINK_STYLES_NAMES } from '@/shared/ui/Link';

import { LINK_HEADER_PATHS } from '../lib/constants';

export const HeaderNav = () => {
  const globalPath = usePathname();
  return (
    <nav>
      {Object.entries(LINK_HEADER_PATHS).map(([name, path]) => (
        <Link
          key={name}
          href={path}
          isActive={path === globalPath}
          styleType={LINK_STYLES_NAMES.LINED}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
