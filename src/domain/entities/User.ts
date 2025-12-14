import { TrainingObjective } from '../value-objects/TrainingObjective';
import { TrainingLevel } from '../value-objects/TrainingLevel';

export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly objective: TrainingObjective;
  public readonly level: TrainingLevel;
  public readonly availableDays: number;
  public readonly sessionMinutes: number;

  constructor(
    id: string,
    name: string,
    objective: TrainingObjective,
    level: TrainingLevel,
    availableDays: number,
    sessionMinutes: number
  ) {
    if (!id) {
      throw new Error('User id is required');
    }

    if (!name) {
      throw new Error('User name is required');
    }

    if (availableDays < 1 || availableDays > 7) {
      throw new Error('Available days must be between 1 and 7');
    }

    if (sessionMinutes < 20 || sessionMinutes > 180) {
      throw new Error('Session minutes must be between 20 and 180');
    }

    this.id = id;
    this.name = name;
    this.objective = objective;
    this.level = level;
    this.availableDays = availableDays;
    this.sessionMinutes = sessionMinutes;
  }
}
