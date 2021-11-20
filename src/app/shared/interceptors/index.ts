import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { TokenInterceptor } from "./token.interceptor";
import { UnauthorizedInterceptor } from "./unauthorized.interceptor";

export { TokenInterceptor, UnauthorizedInterceptor };

export default [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true,
  },
];