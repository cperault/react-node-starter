import { Request, Response } from "express";
import { HelloWorldService } from "../service/HelloWorldService";

interface ErrorResponse {
  error: string;
}

export class HelloWorldController {
  constructor(private helloWorldService: HelloWorldService) {}

  private handleError(error: unknown): ErrorResponse {
    return {
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }

  public getHelloWorld(req: Request, res: Response): void {
    try {
      const message = this.helloWorldService.getHelloWorld();
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json(this.handleError(error));
    }
  }
}
