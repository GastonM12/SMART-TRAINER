export type TrainingObjectiveType =
  | 'FAT_LOSS'
  | 'HYPERTROPHY'
  | 'ENDURANCE'
  | 'FLEXIBILITY'
  | 'BALANCE'
  | 'SPORT_PERFORMANCE';

export class TrainingObjective {
  public readonly value: TrainingObjectiveType;

  private constructor(value: TrainingObjectiveType) {
    this.value = value;
  }

  static fatLoss() {
    return new TrainingObjective('FAT_LOSS');
  }

  static hypertrophy() {
    return new TrainingObjective('HYPERTROPHY');
  }

  static endurance() {
    return new TrainingObjective('ENDURANCE');
  }

  static flexibility() {
    return new TrainingObjective('FLEXIBILITY');
  }

  static balance() {
    return new TrainingObjective('BALANCE');
  }

  static sportPerformance() {
    return new TrainingObjective('SPORT_PERFORMANCE');
  }
}
