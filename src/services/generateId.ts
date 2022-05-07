import { v4 } from "uuid";

export class IdGenerator {
  static generateId = (): string => {
    return v4();
  };
}
