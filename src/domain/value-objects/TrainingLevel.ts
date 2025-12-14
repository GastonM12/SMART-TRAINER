export type TrainingLevelType = 'BEGINNER' | 'intermediate' | 'advanced' | 'expert';

export class TrainingLevel {
  private constructor(
    public readonly value: TrainingLevelType
  ) {}
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