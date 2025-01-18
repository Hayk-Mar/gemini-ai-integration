import axios from "axios";
import { FetchRequestType, PostRequestType } from "types/http.types";
import { HttpStatusCodes } from "./http-status-codes";

export const getJSON = async <R extends object | null | void>(url: string, options?: FetchRequestType) => {
  return new Promise<R>(async (resolve, reject) => {
    try {
      const result = await axios.get(url, {
        params: options?.params,
      });

      if (result.status === HttpStatusCodes.OK) {
        return resolve(result.data);
      }

      throw { status: HttpStatusCodes.NOT_FOUND };
    } catch (err: any) {
      throw reject(err.status);
    }
  });
};

export const PostJSON = async <R extends object | null | void>(url: string, options?: PostRequestType) => {
  return new Promise<R>(async (resolve, reject) => {
    try {
      const result = await axios.post(url, options?.data, { signal: options?.signal });

      if (result.status === HttpStatusCodes.OK) {
        return resolve(result.data);
      }

      throw { status: HttpStatusCodes.NOT_FOUND };
    } catch (err: any) {
      throw reject(err.status);
    }
  });
};
