import { StorageService } from './storage.service';
import localStorageService from './local-storage';

const storage = new StorageService(localStorageService);

export default storage;
