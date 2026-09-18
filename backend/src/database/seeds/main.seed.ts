import { DataSource, In } from "typeorm";
import { type Seeder } from "typeorm-extension";
import { CategoryEntity } from "../../modules/master-data/category/entities/category.entity";
import { categories } from "./categories.seed";

export default class MainSeeder implements Seeder {
    public async run(database: DataSource): Promise<void> {
        await database.transaction(async (manager) => {
            await manager.save(CategoryEntity, categories);
        });
    }
}
