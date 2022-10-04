import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryServices';

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const CreateCategoryServiceM = new CreateCategoryService(categoriesRepositories);

    CreateCategoryServiceM.execute({name, description});

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepositories.list();
    return response.json(all);
})

export { categoriesRoutes };