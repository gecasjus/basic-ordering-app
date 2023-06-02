import { Test, TestingModule } from '@nestjs/testing';
import { GrafanaService } from './grafana.service';

describe('GrafanaService', () => {
  let service: GrafanaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrafanaService],
    }).compile();

    service = module.get<GrafanaService>(GrafanaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
