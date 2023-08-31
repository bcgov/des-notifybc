import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministratorsModule } from './api/administrators/administrators.module';
import { BouncesModule } from './api/bounces/bounces.module';
import { ConfigurationsModule } from './api/configurations/configurations.module';
import { NotificationsModule } from './api/notifications/notifications.module';
import { SubscriptionsModule } from './api/subscriptions/subscriptions.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DbConfigService } from './config/db-config.service';

@Module({
  imports: [
    ConfigModule,
    ConfigurationsModule,
    NotificationsModule,
    SubscriptionsModule,
    AdministratorsModule,
    BouncesModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (dbConfigService: DbConfigService) => {
        const dbConfig = dbConfigService.get();
        if (dbConfig.uri) return dbConfig;
        const mongod =
          await require('mongodb-memory-server').MongoMemoryServer.create({
            instance: dbConfig,
          });
        const uri = mongod.getUri();
        Logger.log(`mongodb-memory-server started at ${uri}`, AppModule.name);
        return {
          uri,
        };
      },
      inject: [DbConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}