import type { TrainingRepository } from './TrainingRepository';
import { User } from '../entities/User';
import { TrainingPlan } from '../entities/TrainingPlan';

export class FakeTrainingRepository implements TrainingRepository {
     async generateTrainingPlan(user: User): Promise<TrainingPlan> {
        return new TrainingPlan(
            'plan-1',
            user.id,
            1,
            'This is a fake training plan for testing purposes.'
        )
    }
}