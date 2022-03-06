import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BrandDto {

    @Field(() => String, { defaultValue: '' })
    brand?: string;

    @Field(() => Number, { defaultValue: 0 })
    count?: number;

}
