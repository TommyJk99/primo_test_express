import express from "express";
import apiRouter from "./apiRouter.js";

const server = express();
const port = 3030;

/*Collega apiRouter per gestire tutte le richieste dirette alle rotte che iniziano con '/api'.Avrò quindi /api/test  /api/body  /api/ */
/*Questo insieme di percorsi viene preso dal file apiRouter.js */
server.use("/api", apiRouter);

/*Questo comando fa partire il server*/
server.listen(port, () => {
  console.log("Server listening to port: " + port);
});
