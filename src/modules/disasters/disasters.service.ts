import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDisasterDto } from "./dto/create-disaster.dto";
import { UpdateDisasterDto } from "./dto/update-disaster.dto";
import { Disaster } from "./entities/disaster.entity";

@Injectable()
export class DisastersService {
  private disasters: Disaster[] = [];

  create(createDisasterDto: CreateDisasterDto): Disaster {
    const disaster = new Disaster();
    const id = this.disasters.length + 1;
    const now = new Date().toISOString();

    Object.assign(disaster, {
      ...createDisasterDto,
      id,
      createdAt: now,
      updatedAt: now,
    });

    this.disasters.push(disaster);
    return disaster;
  }

  findAll(): Disaster[] {
    return this.disasters;
  }

  findOne(id: number): Disaster {
    const disaster = this.disasters.find((d) => d.id === id);
    if (!disaster) {
      throw new NotFoundException(`재난현황 ID ${id}를 찾을 수 없습니다.`);
    }
    return disaster;
  }

  update(id: number, updateDisasterDto: UpdateDisasterDto): Disaster {
    const index = this.disasters.findIndex((d) => d.id === id);
    if (index === -1) {
      throw new NotFoundException(`재난현황 ID ${id}를 찾을 수 없습니다.`);
    }

    const disaster = this.disasters[index];
    Object.assign(disaster, {
      ...updateDisasterDto,
      updatedAt: new Date().toISOString(),
    });

    return disaster;
  }

  remove(id: number): Disaster {
    const index = this.disasters.findIndex((d) => d.id === id);
    if (index === -1) {
      throw new NotFoundException(`재난현황 ID ${id}를 찾을 수 없습니다.`);
    }
    return this.disasters.splice(index, 1)[0];
  }
}
