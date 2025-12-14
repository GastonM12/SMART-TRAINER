export class TrainingPlan {
  public readonly id: string;
  public readonly userId: string;
  public readonly week: number;
  public readonly description: string;

  constructor(
    id: string,
    userId: string,
    week: number,
    description: string
  ) {
    this.id = id;
    this.userId = userId;
    this.week = week;
    this.description = description;
  }
}
