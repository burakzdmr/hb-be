import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { FilterDto } from './filterDto';
import { DataDto } from './dataDto';


@Resolver(() => Item)
export class ItemResolver {
  constructor(
    private readonly itemService: ItemService,
  ) { }

  @Query(() => DataDto, { nullable: true })
  async fetchData(@Args('name') name: string, @Args('brand') brand: string, @Args('color') color: string, @Args('page') page: string): Promise<DataDto> {
    const data = await this.itemService.findByFilter(name, color, brand, page);
    let filters: FilterDto[] = []
    if (data?.filteredItemList && data?.filteredItemList.length > 0) {
      data?.filteredItemList.forEach((item) => {
        const isExistBrand = filters.find(x => x.name === item.brand);
        if (!isExistBrand) {
          const items = data?.filteredItemList.filter(x => x.brand === item.brand);
          const filter: FilterDto = {
            name: item.brand,
            count: items.length,
            type: 1
          };
          filters.push(filter)
        }
        const isExistColor = filters.find(x => x.name === item.color);
        if (!isExistColor) {
          const items = data?.filteredItemList.filter(x => x.color === item.color);
          const filter: FilterDto = {
            name: item.color,
            count: items.length,
            type: 2
          };
          filters.push(filter)
        }
      }
      )
    }
    data.filters = filters;
    return data;
  }

}
