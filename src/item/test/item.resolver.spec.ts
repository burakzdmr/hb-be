import { Test } from '@nestjs/testing'
import { DataDto } from '../dataDto';
import { ItemResolver } from '../item.resolver';
import { ItemService } from '../item.service'

jest.mock('../item.service');

describe('ItemResolver', () => {

    let itemResolver: ItemResolver;
    let itemService: ItemService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [ItemService]
        }).compile();

        itemResolver = moduleRef.get<ItemResolver>(ItemResolver);
        itemService = moduleRef.get<ItemService>(ItemService);
        jest.clearAllMocks();
    })

    describe('fetchData', () => {
        describe('when fetchData called', () => {
            let items: DataDto;

            beforeEach(async () => {
                items = await itemResolver.fetchData("app", "Apple", "Siyah", "0");
            })

            test('then it should call itemService', () => {
                expect(itemService.findByFilter).toBeCalledWith("app", "Apple", "Siyah", "0");
            })
        })
    })
})