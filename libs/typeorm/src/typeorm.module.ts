import { ConfigModule } from '@app/config';
import { DatabaseConfigService } from '@app/config/services/database-config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule as DefaultTypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DefaultTypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: DatabaseConfigService) => {
      const config = configService.getConfig()

      return {
        type: config.TYPE,
        url: config.URL,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
      }
    }
  })],
})
export class TypeOrmModule { }
