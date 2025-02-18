import express from "express";
import cors from "cors";
import { ApiRouter } from "./routes/api/ApiRouter";
import { HelloWorldService } from "./service/HelloWorldService";

export const createApp = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Services as dependecies
  const helloWorldService = new HelloWorldService();

  // Routes with injected services
  const apiRouter = new ApiRouter(helloWorldService);
  app.use("/api", apiRouter.getRouter());

  return app;
};
