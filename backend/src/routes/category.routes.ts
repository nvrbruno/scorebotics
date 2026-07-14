import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";
const CategoryRoutes = Router();

const categoryController = new CategoryController();

CategoryRoutes.get('/category', categoryController.findAll);
CategoryRoutes.get('/category/:id', categoryController.findById);
CategoryRoutes.post('/category', authenticate, requireAdmin, categoryController.create);
CategoryRoutes.put('/category/:id', authenticate, requireAdmin, categoryController.update);
CategoryRoutes.delete('/category/:id', authenticate, requireAdmin, categoryController.delete);

export default CategoryRoutes;