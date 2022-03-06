import { ObjectType, Field } from '@nestjs/graphql';
import { Item } from './item.entity';
import { FilterDto } from './filterDto';
@ObjectType()
export class DataDto {

    @Field(() => [Item], { defaultValue: [] })
    filteredItemList?: Item[];

    @Field(() => [Item], { defaultValue: [] })
    paginatedItemList?: Item[];

    @Field(() => [FilterDto], { defaultValue: [] })
    filters?: FilterDto[];

    @Field(() => Number, { defaultValue: 0 })
    pageCount?: number;
}
