import { TodoRepository } from "../repositories/TodoRepository";

export class DeleteTodo {
    constructor(private todoRepository: TodoRepository) { }

    async execute(id: string): Promise<void> {
        if (!id) {
            throw new Error("An ID must be provided to delete a Todo.");
        }

        await this.todoRepository.delete(id);
    }
}