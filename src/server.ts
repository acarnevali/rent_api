import Express from "express";

import { categoriesRouter } from "../router/categoriresRouter";

const app = Express();

app.use(Express.json());
app.use("/categories", categoriesRouter);

app.listen(3333);
