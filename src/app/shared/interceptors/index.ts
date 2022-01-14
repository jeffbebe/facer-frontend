import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeoutInterceptor } from './timeout.interceptor';

import { TokenInterceptor } from './token.interceptor';

export { TokenInterceptor, TimeoutInterceptor };

export default [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimeoutInterceptor,
    multi: true,
  },
];
