import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../item.entity';
import { ItemService } from '../item.service'
type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};
describe('CustomerService', () => {
    let service: ItemService;
    const customerRepositoryMock: MockType<Repository<Item>> = {
    }
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ItemService,
                {
                    provide: getRepositoryToken(Item), useValue: customerRepositoryMock,

                }
            ]
        }).compile();
        service = module.get<ItemService>(ItemService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('findByFilter', () => {
        it('should find By Filter', async () => {

            //  customerRepositoryMock.find.mockReturnValue({ name: "app", brand: "Apple", color: "Siyah", page: "0" });
            const foundCustomers = await service.findByFilter("app", "Apple", "Siyah", "0")
            expect(foundCustomers).toContainEqual({
                paginatedItemList: [
                    {
                        brand: "Apple",
                        changepercent: 12,
                        color: "Siyah",
                        createddate: "1646482298719",
                        id: 1,
                        imageurl: "blackIphone.png",
                        name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
                        oldprice: 124,
                        price: 90.85
                    },
                    {
                        brand: "Apple",
                        changepercent: 12,
                        color: "Siyah",
                        createddate: "1646482298719",
                        id: 5,
                        imageurl: "blackIphone.png",
                        name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
                        oldprice: 124,
                        price: 90.85
                    },
                    {
                        brand: "Apple",
                        changepercent: 12,
                        color: "Siyah",
                        createddate: "1646482298719",
                        id: 9,
                        imageurl: "blackIphone.png",
                        name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
                        oldprice: 124,
                        price: 90.85
                    },
                    {
                        brand: "Apple",
                        changepercent: 12,
                        color: "Siyah",
                        createddate: "1646482298719",
                        id: 13,
                        imageurl: "blackIphone.png",
                        name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
                        oldprice: 124,
                        price: 90.85
                    }
                ]
            })
            expect(ItemService).toHaveBeenCalled()
        })
    })
});
