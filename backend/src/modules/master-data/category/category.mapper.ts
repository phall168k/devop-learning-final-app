import { CategoryResponseDto } from "./dto/category-response.dto";
import { CreateCategoryRequestDto } from "./dto/create-category-request.dto";
import { UpdateCategoryRequestDto } from "./dto/update-category-request.dto";
import { CategoryEntity } from "./entities/category.entity";

export class CategoryMapper {
    public static async toDto(entity: CategoryEntity): Promise<CategoryResponseDto> {
        const dto = new CategoryResponseDto();

        dto.id = entity.id;
        dto.name = entity.name;
        dto.description = entity.description;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        dto.deletedAt = entity.deletedAt;

        return dto;
    }

    public static toCreateEntity(dto: CreateCategoryRequestDto): CategoryEntity {
        const entity = new CategoryEntity();

        entity.name = dto.name;
        entity.description = dto.description;
        
        return entity;
    }

    public static toUpdateEntity(entity: CategoryEntity, dto: UpdateCategoryRequestDto): CategoryEntity {
        entity.name = dto.name;
        entity.description = dto.description;
        
        return entity;
    }
}