import { Router } from "express";

import { CategoriesRepository } from "../src/repository/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlredyExist = categoriesRepository.findByName(name);

  if (categoryAlredyExist) {
    return response.status(400).json({ error: "Category alredy exist!" });
  }
  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRouter };
