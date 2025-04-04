import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DisastersModule } from "./modules/disasters/disasters.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV ?? "development"}`,
      isGlobal: true,
    }),
    DisastersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
