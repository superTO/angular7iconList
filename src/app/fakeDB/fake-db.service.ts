import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IconsFakeDb } from './icons';

export class FakeDBService implements InMemoryDbService{
  createDb(): any{
    return {
      // Icons
      'icons': IconsFakeDb.icons
    }
  };
}
