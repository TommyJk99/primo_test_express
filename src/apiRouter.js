import express from "express";

/* è usata per registrare un middleware che analizza i corpi delle richieste in entrata in formato JSON*/
const apiRouter = express.Router();

apiRouter.use(express.json());

/*Posso rispondere ad una richiesta con codice html*/
apiRouter.get("/", (req, res) => {
  res.status(200).send(`
  <div>Hello Doggo</div>
  `);
});

/*Posso ricevere informaioni dal server quando chiamo l'URL http://localhost:3030/api/test */
apiRouter.get("/test", (req, res) => {
  res.json({ message: "Hello, world!" });
});

/*Se posto su api/body ricevo uno stato 200 va tutto bene*/
apiRouter.post("/body", (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

export default apiRouter;
