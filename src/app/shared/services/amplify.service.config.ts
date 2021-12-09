import { environment } from '$environment';

const authConfig = {
  region: environment.region,
  userPoolId: environment.userPoolId,
  userPoolWebClientId: environment.userPoolWebClientId,
};

export const amplifyConfig = {
  Auth: authConfig,
};
