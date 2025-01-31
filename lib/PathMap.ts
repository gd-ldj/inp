export const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === '1';
export const isProduction = process.env.NODE_ENV === 'production' && !isPreview;
// export const isProduction = true;

export function WithHost(path: string) {
  const prodHost = ``;
  // const devHost = `https://test-sign.many.gold`;
  const devHost = `https://preview-inphura.aggregation.top`;
  const host = isProduction ? prodHost : devHost;
  return `${host}${path}`;
}

export const Paths = {
  register: WithHost('/server/list'),
  serverList: WithHost('/server/list'),
  airdropInfo: WithHost('/airdrop/info'),
  userLedger: WithHost('/user/ledger'),
  userActivities: WithHost('/user/activities'),
};
