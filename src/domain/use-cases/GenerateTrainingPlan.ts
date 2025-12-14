import { User } from '../entities/User';
import { TrainingPlan } from '../entities/TrainingPlan';
import { TrainingRepository } from '../repositories/TrainingRepository';

export class GenerateTrainingPlan {
  private readonly repository: TrainingRepository;

  constructor(repository: TrainingRepository) {
    this.repository = repository;
  }

  async execute(user: User): Promise<TrainingPlan> {
    return this.repository.generateTrainingPlan(user);
  }
}