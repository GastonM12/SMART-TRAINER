import { User } from '../entities/User';
import { TrainingPlan } from '../entities/TrainingPlan';

export interface TrainingRepository {
  generateTrainingPlan(user: User): Promise<TrainingPlan>;
}