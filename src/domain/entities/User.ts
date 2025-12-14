import { TrainingObjective } from "../value-objects/TrainingObjetive";
import { TrainingLevel } from "../value-objects/TrainingLevel";

export class User{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly objective: TrainingObjective,
        public readonly level: TrainingLevel,
        public readonly availableDays: number,
        public readonly sessionMinutes: number
    ){
        if(availableDays < 1 || availableDays > 7){
            throw new Error("Available days must be between 1 and 7");
        }
    }
}