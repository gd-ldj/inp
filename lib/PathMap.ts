export const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === '1';
export const isProduction = process.env.NODE_ENV === 'production' && !isPreview;
// export const isProduction = true;

export function WithHost(path: string) {
  const prodHost = ``;
  // const devHost = `https://test-sign.many.gold`;
  const devHost = ``;
  const host = isProduction ? prodHost : devHost;
  return `${host}${path}`;
}

export const Paths = {};