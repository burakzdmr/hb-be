import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';
import { BrandDto } from './brandDto';
import { ColorDto } from './colorDto';
import { FilterDto } from './filterDto';
import { DataDto } from './dataDto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
  ) { }

  async findByFilter(name: string, color: string, brand: string, page: string): Promise<DataDto> {
    const pg = parseInt(page)
    const skp = pg === 0 || pg === 1 ? 0 : (pg - 1) * 12;
    const lmt = 12
    let query = this.itemRepo.createQueryBuilder("items")
      .where("LOWER(items.name) like :name", { name: `%${name.toLowerCase()}%` });
    if (brand && brand !== "")
      query.andWhere('items.brand = :brn', { brn: brand });
    if (color && color !== "")
      query.andWhere('items.color = :clr', { clr: color });
    const allItems = await query.getMany()
    const exact = allItems.length / 12
    const residual = allItems.length % 12
    let pageCount = parseInt(exact.toString())
    pageCount = residual !== 0 ? (pageCount + 1) : pageCount
    const items = await query.skip(skp).take(lmt).getMany();

    const data: DataDto = {
      filteredItemList: allItems,
      paginatedItemList: items,
      pageCount: pageCount
    }
    return data;
  }


}



