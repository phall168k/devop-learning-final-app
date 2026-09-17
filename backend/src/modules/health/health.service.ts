import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    public healthCheck() {
        return {
            status: 'healthys',
            timestamp: Date.now(),
            uptime: process.uptime(),
        };
    }
}
