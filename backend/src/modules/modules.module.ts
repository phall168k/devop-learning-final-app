import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AdminModule } from './admin/admin.module';
import { MasterDataModule } from './master-data/master-data.module';

@Module({
  imports: [HealthModule, AdminModule, MasterDataModule]
})
export class ModulesModule {}
