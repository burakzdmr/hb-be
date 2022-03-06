import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FilterDto {

    @Field(() => String, { defaultValue: '' })
    name?: string;

    @Field(() => String, { defaultValue: '' })
    value?: string;

    @Field(() => Number, { defaultValue: 0 })
    count?: number;

    @Field(() => Number, { defaultValue: 0 })
    type?: number;
}
