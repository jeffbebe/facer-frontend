import { urlConcat } from '../utils/url-concat.util';

export const Paths = {
  auth: {
    login: 'login',
    register: 'register',
  },
  main: {
    default: '',
    pictures: 'pictures',
  },
};

export const AbsolutePaths = {
  auth: urlConcat('auth', Paths.auth),
  main: urlConcat('main', Paths.main),
};
