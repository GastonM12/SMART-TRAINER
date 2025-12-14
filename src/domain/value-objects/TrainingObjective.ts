export type TrainingObjectiveType = 'FAT_LOSS' | 'hypertrophy' | 'endurance' | 'flexibility' | 'balance' |'SPORT_PERFORMANCE';

export class TrainingObjective {
  public readonly value: TrainingObjectiveType;

  private constructor(value: TrainingObjectiveType) {
    this.value = value;
  }
    static fatLoss() {
        return new TrainingObjective('FAT_LOSS');
    }
     static hypertrophy() {
        return new TrainingObjective('hypertrophy');
    }
    static endurance() {
        return new TrainingObjective('endurance');
    }
    static flexibility() {
        return new TrainingObjective('flexibility');
    }
    static balance() {
        return new TrainingObjective('balance');
    }
  
    static sportPerformance() { 
        return new TrainingObjective('SPORT_PERFORMANCE');
    }
}