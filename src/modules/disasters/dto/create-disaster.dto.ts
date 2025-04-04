import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsDateString } from "class-validator";

export class CreateDisasterDto {
  @ApiProperty({ description: "재난 유형" })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ description: "재난 발생 지역" })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ description: "재난 발생 시간" })
  @IsDateString()
  @IsNotEmpty()
  occurredAt: string;

  @ApiProperty({ description: "재난 상태" })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ description: "피해 상황" })
  @IsString()
  @IsNotEmpty()
  damage: string;

  @ApiProperty({ description: "대응 조치" })
  @IsString()
  @IsNotEmpty()
  response: string;
}
