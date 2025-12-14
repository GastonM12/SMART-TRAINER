export class TrainingPlan {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly week: number,
    public readonly description: string
  ) {} 
}