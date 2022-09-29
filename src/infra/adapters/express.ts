/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import { HttpRequest } from "core/http/HttpRequests";

class ExpressAdapter {
  static create =
    (CtxController) =>
    async (request: Request, response: Response): Promise<Response> => {
      const requestData: HttpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
      };

      const controller = CtxController();

      const httpResponse = await controller.handle(requestData, response);

      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        return response.status(httpResponse.statusCode).json(httpResponse.body);
      }

      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error,
      });
    };
}

export { ExpressAdapter };
