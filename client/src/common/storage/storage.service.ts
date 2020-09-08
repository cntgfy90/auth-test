import { IStorage } from "./types";

export class StorageService implements IStorage {
  constructor(private readonly storage: IStorage) {}

  set(key: unknown, value: unknown) {
    return this.storage.set(key, value);
  }

  get(key: unknown) {
    return this.storage.get(key);
  }

  remove(key: unknown) {
    return this.storage.remove(key);
  }
}
