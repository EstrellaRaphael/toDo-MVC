import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class AddTodo {
    constructor(private todoRepository: TodoRepository) { }

    async execute(title: string): Promise<Todo> {
        if (!title) {
            throw new Error("Title cannot be empty.");
        }

        const newTodo: Todo = {
            id: new Date().toISOString(),
            title,
            completed: false,
            createdAt: new Date(),
        };

        await this.todoRepository.add(newTodo);
        return newTodo;
    }
}