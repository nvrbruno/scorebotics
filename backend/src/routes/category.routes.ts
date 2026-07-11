import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
const CategoryRoutes = Router();

const categoryController = new CategoryController();

CategoryRoutes.get('/category', categoryController.findAll);
CategoryRoutes.get('/category/:id', categoryController.findById);
CategoryRoutes.post('/category', categoryController.create);
CategoryRoutes.put('/category/:id', categoryController.update);
CategoryRoutes.delete('/category/:id',categoryController.delete);

export default CategoryRoutes;