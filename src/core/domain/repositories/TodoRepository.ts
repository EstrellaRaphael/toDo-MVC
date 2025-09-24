import { Todo } from "../entities/Todo";

export interface TodoRepository {
    getAll(): Promise<Todo[]>;
    add(todo: Todo): Promise<void>;
    update(todo: Todo): Promise<void>;
    delete(id: string): Promise<void>;
}