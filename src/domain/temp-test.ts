import { User } from './entities/User';
import { TrainingObjective } from './value-objects/TrainingObjective';
import { TrainingLevel } from './value-objects/TrainingLevel';
import { GenerateTrainingPlan } from './use-cases/GenerateTrainingPlan';
import { FakeTrainingRepository } from './repositories/FakeTrainingRepository';

async function main() {
  const user = new User(
    '1',
    'Gaston',
    TrainingObjective.fatLoss(),
    TrainingLevel.beginner(),
    4,
    60
  );

  const repo = new FakeTrainingRepository();
  const useCase = new GenerateTrainingPlan(repo);

  const plan = await useCase.execute(user);

  console.log('Plan generado:', plan);
}

main();