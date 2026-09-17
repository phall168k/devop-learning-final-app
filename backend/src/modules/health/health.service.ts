import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    public healthCheck() {
        return {
            status: 'healthy',
            timestamp: Date.now(),
            uptime: process.uptime(),
        };
    }
}
