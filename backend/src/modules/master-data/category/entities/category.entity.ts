import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../../database/entities/base.entity";

@Entity({
    schema: 'admin',
    name: 'categories'
})
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'id',
    })
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        unique: true,
        length: 250,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 250,
        nullable: true,
    })
    description: string;

    constructor(partial?: Partial<CategoryEntity>) {
        super();
        Object.assign(this, partial);
    }
}
