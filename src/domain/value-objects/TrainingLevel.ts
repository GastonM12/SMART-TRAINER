export type TrainingLevelType =
  | 'BEGINNER'
  | 'INTERMEDIATE'
  | 'ADVANCED'
  | 'EXPERT';

export class TrainingLevel {
  public readonly value: TrainingLevelType;

  private constructor(value: TrainingLevelType) {
    this.value = value;
  }

  static beginner() {
    return new TrainingLevel('BEGINNER');
  }

  static intermediate() {
    return new TrainingLevel('INTERMEDIATE');
  }

  static advanced() {
    return new TrainingLevel('ADVANCED');
  }

  static expert() {
    return new TrainingLevel('EXPERT');
  }
}
