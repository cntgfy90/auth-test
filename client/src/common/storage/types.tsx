export interface IStorage {
  set(key: unknown, value: unknown): void;
  get(key: unknown): unknown;
  remove(key: unknown): void;
}
