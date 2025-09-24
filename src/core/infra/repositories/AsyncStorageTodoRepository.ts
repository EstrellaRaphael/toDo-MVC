import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

const STORAGE_KEY = "@todos";

export class AsyncStorageTodoRepository implements TodoRepository {

    async getAll(): Promise<Todo[]> {
        try {
            const todosString = await AsyncStorage.getItem(STORAGE_KEY);
            if (todosString) {
                const parsedTodos = JSON.parse(todosString);
                return parsedTodos.map((todo: any) => ({
                    ...todo,
                    createdAt: new Date(todo.createdAt)
                }));
            }
            return [];
        } catch (error) {
            console.error("Falha ao obter todas as tarefas", error);
            return [];
        }
    }

    async add(todo: Todo): Promise<void> {
        try {
            const currentTodos = await this.getAll();
            const newTodos = [...currentTodos, todo];
            const todosString = JSON.stringify(newTodos);
            await AsyncStorage.setItem(STORAGE_KEY, todosString);
        } catch (error) {
            console.error("Falha ao adicionar tarefa", error);
            throw new Error("Falha ao adicionar tarefa.");
        }
    }

    async update(todoToUpdate: Todo): Promise<void> {
        try {
            const currentTodos = await this.getAll();
            const updatedTodos = currentTodos.map(todo =>
                todo.id === todoToUpdate.id ? todoToUpdate : todo
            );
            const todosString = JSON.stringify(updatedTodos);
            await AsyncStorage.setItem(STORAGE_KEY, todosString);
        } catch (error) {
            console.error("Falha ao atualizar tarefa", error);
            throw new Error("Falha ao atualizar tarefa.");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const currentTodos = await this.getAll();
            const remainingTodos = currentTodos.filter(todo => todo.id !== id);
            const todosString = JSON.stringify(remainingTodos);
            await AsyncStorage.setItem(STORAGE_KEY, todosString);
        } catch (error) {
            console.error("Falha ao deletar tarefa", error);
            throw new Error("Falha ao deletar tarefa.");
        }
    }
}