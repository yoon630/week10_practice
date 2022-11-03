import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "./routes/login";
import selectRouter from "./routes/select";
import deleteRouter from "./routes/delete";

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // json형태 (중괄호로 {키,벨류}되어있는 형태)로 가져오겠다.

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");

app.use(logger("dev"));

app.use("/", loginRouter);
app.use("/select", selectRouter);
app.use("/delete", deleteRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
