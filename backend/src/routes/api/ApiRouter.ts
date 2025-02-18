import { BaseRouter } from "../BaseRouter";
import { HelloWorldRouter } from "../hello-world/HelloWorldRouter";
import { HelloWorldService } from "../../service/HelloWorldService";

export class ApiRouter extends BaseRouter {
  constructor(private helloWorldService: HelloWorldService) {
    super();
  }

  protected initializeRoutes(): void {
    const helloWorldRouter = new HelloWorldRouter(this.helloWorldService);
    this.router.use("/hello-world", helloWorldRouter.getRouter()); // api/hello-world
  }
}
