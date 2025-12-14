export type TrainingLevelType = 'BEGINNER' | 'intermediate' | 'advanced' | 'expert';

export class TrainingLevel {
  public readonly value: TrainingLevelType;

  private constructor(value: TrainingLevelType) {
    this.value = value;
  }
    static beginner() {
        return new TrainingLevel('BEGINNER');
    }
     static intermediate() {
        return new TrainingLevel('intermediate');
    }
    static advanced() {
        return new TrainingLevel('advanced');
    }
    static expert() {
        return new TrainingLevel('expert');
    }

}