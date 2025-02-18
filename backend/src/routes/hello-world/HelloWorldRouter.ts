import { BaseRouter } from "../BaseRouter";
import { HelloWorldController } from "../../controller/HelloWorldController";
import { HelloWorldService } from "../../service/HelloWorldService";

export class HelloWorldRouter extends BaseRouter {
  private helloWorldController: HelloWorldController;

  constructor(helloWorldService: HelloWorldService) {
    super();
    this.helloWorldController = new HelloWorldController(helloWorldService);
  }

  protected initializeRoutes(): void {
    this.router.get("/", this.helloWorldController.getHelloWorld.bind(this.helloWorldController));
  }
}
