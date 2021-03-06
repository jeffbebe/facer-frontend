export const HTTP_STATUS = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500,
  SERVER_ERROR_UNKNOWN: 599,
} as const;

export const isUnhandledError = (status: number): boolean =>
  status >= HTTP_STATUS.METHOD_NOT_ALLOWED;
