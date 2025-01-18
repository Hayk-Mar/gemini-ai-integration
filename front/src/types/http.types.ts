export type FetchRequestType = {
  params?: Record<string, string | number>;
};

export type PostRequestType = {
  data?: Record<string, string | number>;
  signal?: AbortSignal;
};

export enum HttpStatus {
  OK = "OK",
  NOT_FOUND = "NOT_FOUND",
}
