import express from "express";
import router from "./routes/routes";
import { env } from "node:process";

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(env.SERVER_PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${env.SERVER_PORT}`);
})