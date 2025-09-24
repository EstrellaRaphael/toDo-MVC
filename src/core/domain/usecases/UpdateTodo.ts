import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class UpdateTodo {
    constructor(private todoRepository: TodoRepository) { }

    async execute(todoToUpdate: Todo): Promise<void> {
        if (!todoToUpdate || !todoToUpdate.id) {
            throw new Error("Invalid Todo provided for update.");
        }

        await this.todoRepository.update(todoToUpdate);
    }
}