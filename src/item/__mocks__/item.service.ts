import { itemStub } from "../test/stubs/item.stub";

export const ItemService = jest.fn().mockReturnValue({
    findByFilter: jest.fn().mockResolvedValue(itemStub())
})