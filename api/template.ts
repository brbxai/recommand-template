import { Server } from "@recommand/lib/api";
import { actionFailure, actionSuccess } from "@recommand/lib/utils";

const server = new Server();

const getTemplate = server.get("/hello", async (c) => {
  try {    
    return c.json(actionSuccess({ message: "Hello World" }));
  } catch (e) {
    console.error(e);
    return c.json(actionFailure("Hello World failed"), 500);
  }
});

export type Tasks = typeof getTemplate;

export default server;
