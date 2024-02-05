import { Fleet } from '../entities/Fleet';

export abstract class FleetRepository {
  abstract create(fleet: Fleet): Promise<void>;
}
