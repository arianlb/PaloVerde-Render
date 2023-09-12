import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsMongoId, Min } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsMongoId()
    readonly offer: string;

    @ApiProperty()
    @IsMongoId()
    readonly price: string;

    @ApiProperty()
    @IsMongoId()
    readonly picture: string;

    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    readonly quantity: number;
}
