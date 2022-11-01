import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../src/model/Category";

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const category: Category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);
  return response.status(201).json({ category });
});

export { categoriesRouter };