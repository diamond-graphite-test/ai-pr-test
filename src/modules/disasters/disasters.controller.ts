import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { DisastersService } from "./disasters.service";
import { CreateDisasterDto } from "./dto/create-disaster.dto";
import { UpdateDisasterDto } from "./dto/update-disaster.dto";
import { Disaster } from "./entities/disaster.entity";

@ApiTags("재난현황")
@Controller("disasters")
export class DisastersController {
  constructor(private readonly disastersService: DisastersService) {}

  @Post()
  @ApiOperation({ summary: "재난현황 생성" })
  @ApiResponse({
    status: 201,
    description: "재난현황이 생성되었습니다.",
    type: Disaster,
  })
  create(@Body() createDisasterDto: CreateDisasterDto) {
    return this.disastersService.create(createDisasterDto);
  }

  @Get()
  @ApiOperation({ summary: "모든 재난현황 조회" })
  @ApiResponse({
    status: 200,
    description: "모든 재난현황을 조회합니다.",
    type: [Disaster],
  })
  findAll() {
    return this.disastersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "특정 재난현황 조회" })
  @ApiResponse({
    status: 200,
    description: "특정 재난현황을 조회합니다.",
    type: Disaster,
  })
  @ApiResponse({ status: 404, description: "재난현황을 찾을 수 없습니다." })
  findOne(@Param("id") id: string) {
    return this.disastersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "재난현황 업데이트" })
  @ApiResponse({
    status: 200,
    description: "재난현황이 업데이트되었습니다.",
    type: Disaster,
  })
  @ApiResponse({ status: 404, description: "재난현황을 찾을 수 없습니다." })
  update(
    @Param("id") id: string,
    @Body() updateDisasterDto: UpdateDisasterDto
  ) {
    return this.disastersService.update(+id, updateDisasterDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "재난현황 삭제" })
  @ApiResponse({
    status: 200,
    description: "재난현황이 삭제되었습니다.",
    type: Disaster,
  })
  @ApiResponse({ status: 404, description: "재난현황을 찾을 수 없습니다." })
  remove(@Param("id") id: string) {
    return this.disastersService.remove(+id);
  }
}
