import { Fleet } from '../entities/Fleet';

export abstract class FleetRepository {
  abstract create(fleet: Fleet): Promise<void>;
  abstract findById(id: string): Promise<Fleet | null>;
  abstract delete(id: string): Promise<void>;
  abstract save(fleet: Fleet): Promise<void>;
  abstract findAll(
    page: number,
    perPage: number
  ): Promise<Fleet[]>;
};
