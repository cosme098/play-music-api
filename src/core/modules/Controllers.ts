import { HttpRequest } from "../http/HttpRequests";
import { HttpResponse } from "../http/HttpResponse";

interface Controller {
  handle(request: HttpRequest): Promise<HttpResponse>;
}

interface Service {
  execute(...request: any): Promise<any>;
}
export { Controller, Service };
