import { TodoRepository } from '../repositories/TodoRepository';
import { Todo } from '../entities/Todo';

export class GetTodos {
    constructor(private todoRepository: TodoRepository) { }

    async execute(): Promise<Todo[]> {
        const todos = await this.todoRepository.getAll();
        return todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
}