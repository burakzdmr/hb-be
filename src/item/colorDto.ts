import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ColorDto {

    @Field(() => String, { defaultValue: '' })
    color?: string;

    @Field(() => Number, { defaultValue: 0 })
    count?: number;

}
