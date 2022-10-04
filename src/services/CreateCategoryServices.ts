import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest{
    name: string,
    description: string;
}

class CreateCategoryService {
    constructor (private categoriesRepositories: CategoriesRepository){}
    
    execute({name, description}: IRequest):void{
        const categoryAlreadyExists = this.categoriesRepositories.findByName(name);
    if(categoryAlreadyExists){
        throw new Error("Category already exists");
    }
    this.categoriesRepositories.create({name, description});
    }
}

export { CreateCategoryService }