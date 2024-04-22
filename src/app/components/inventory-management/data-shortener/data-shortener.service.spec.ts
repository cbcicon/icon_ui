import { DataShortenerService } from './data-shortener.service';

describe('DataShortenerService', () => {
  const service: DataShortenerService = new DataShortenerService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
