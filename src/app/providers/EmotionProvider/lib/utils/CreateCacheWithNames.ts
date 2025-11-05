import createCache, {
  type Options,
  type StylisElement,
  type StylisPlugin,
} from '@emotion/cache';

export const createCacheWithNames = (
  options: Omit<Options, 'stylisPlugins'> & {
    stylisPlugins?: StylisPlugin[];
  }
) => {
  const isDev = process.env.NODE_ENV === 'development';

  const finalOptions: Options = {
    ...options,
    ...(isDev
      ? {
          stylisPlugins: [debugStylisPlugin],
        }
      : {}),
  };

  return createCache(finalOptions);
};

const debugStylisPlugin: StylisPlugin = (element) => {
  if (element.type === 'rule' && Array.isArray(element.props)) {
    const componentName = getComponentName(element);
    element.props = element.props.map((prop) => `${prop}-${componentName}`);
  }
};

type StylisElementWithSource = StylisElement & {
  root?: {
    source?: {
      fileName?: string;
      line?: number;
      column?: number;
    };
  };
};

const getComponentName = (element: StylisElement): string => {
  try {
    const source = (element as StylisElementWithSource).root?.source?.fileName;
    if (source) {
      return source.split('/').pop()?.split('.')[0] ?? 'unknown';
    }
    const error = new Error();
    const stackLine = error.stack?.split('\n')[3] ?? '';
    const match = stackLine.match(/at (\w+)/);
    return match?.[1] ?? 'anonymous';
  } catch {
    return 'unknown';
  }
};
