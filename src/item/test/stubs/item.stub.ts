import { DataDto } from "src/item/dataDto"

export const itemStub = (): DataDto => {
    return {
        filters: [
            {
                count: 4,
                name: "Apple",
                type: 1
            },
            {
                count: 4,
                name: "Siyah",
                type: 2
            }
        ],
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
        ],
        pageCount: 1
    }
} 