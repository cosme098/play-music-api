import { HttpStatusCodes } from "../../shared/Error/HttpStatusCode";

export type HttpResponse = {
  statusCode: number;
  body: any;
};

const ok = <T>(dto?: T): HttpResponse => {
  return {
    statusCode: 200,
    body: dto,
  };
};

const noContent = (): HttpResponse => {
  return {
    statusCode: HttpStatusCodes.NO_CONTENT,
    body: undefined,
  };
};

const created = <T>(dto?: T): HttpResponse => {
  return {
    statusCode: HttpStatusCodes.CREATED,
    body: dto,
  };
};

const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: HttpStatusCodes.BAD_REQUEST,
    body: {
      error: error.message,
    },
  };
};

const notFound = (error: Error): HttpResponse => {
  return {
    statusCode: HttpStatusCodes.NOT_FOUND,
    body: {
      error: error.message,
    },
  };
};

export { ok, noContent, created, badRequest, notFound };
