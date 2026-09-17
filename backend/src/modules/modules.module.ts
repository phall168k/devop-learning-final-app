import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [HealthModule, AdminModule]
})
export class ModulesModule {}
