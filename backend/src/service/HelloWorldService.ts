import { HelloWorld } from "../model/HelloWorld";

export class HelloWorldService {
  public getHelloWorld(): HelloWorld {
    return {
      message: "Hello World! My Starter App backend is connected to the frontend.",
    };
  }
}
