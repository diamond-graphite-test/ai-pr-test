import { ApiProperty } from "@nestjs/swagger";

export class Disaster {
  @ApiProperty({ description: "재난 ID", example: 1 })
  id: number;

  @ApiProperty({ description: "재난 유형", example: "태풍" })
  type: string;

  @ApiProperty({ description: "재난 발생 지역", example: "서울특별시" })
  location: string;

  @ApiProperty({
    description: "재난 발생 시간",
    example: "2024-03-20T09:00:00Z",
  })
  occurredAt: string;

  @ApiProperty({ description: "재난 상태", example: "진행중" })
  status: string;

  @ApiProperty({ description: "피해 상황", example: "도로 침수, 건물 파손" })
  damage: string;

  @ApiProperty({
    description: "대응 조치",
    example: "긴급 구조대 파견, 대피소 운영",
  })
  response: string;

  @ApiProperty({ description: "생성 시간", example: "2024-03-20T09:00:00Z" })
  createdAt: string;

  @ApiProperty({ description: "수정 시간", example: "2024-03-20T09:00:00Z" })
  updatedAt: string;

  constructor() {
    this.id = 0;
    this.type = "";
    this.location = "";
    this.occurredAt = new Date().toISOString();
    this.status = "";
    this.damage = "";
    this.response = "";
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
