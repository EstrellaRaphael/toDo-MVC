import { use, useCallback, useEffect, useMemo, useState } from "react";
import { AddTodo } from "../../core/domain/usecases/AddTodo";
import { DeleteTodo } from "../../core/domain/usecases/DeleteTodo";
import { GetTodos } from "../../core/domain/usecases/GetTodos";
import { UpdateTodo } from "../../core/domain/usecases/UpdateTodo";
import { AsyncStorageTodoRepository } from "../../core/infra/repositories/AsyncStorageTodoRepository"
import { Todo } from "../../core/domain/entities/Todo";

export type FilterType = 'all' | 'active' | 'completed';

export const useTodosController = () => {

    const todoRepository = new AsyncStorageTodoRepository();

    const getTodosUseCase = new GetTodos(todoRepository);
    const addTodoUseCase = new AddTodo(todoRepository);
    const updateTodoUseCase = new UpdateTodo(todoRepository);
    const deleteTodoUseCase = new DeleteTodo(todoRepository);

    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'all':
            default:
                return todos;
        }
    }, [todos, filter]);

    const loadTodos = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const fetchedTodos = await getTodosUseCase.execute();
            setTodos(fetchedTodos);
        } catch (e) {
            setError("Falha ao carregar as tarefas");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addTodo = useCallback(async (title: string) => {
        try {
            if (!title.trim()) return;
            const newTodo = await addTodoUseCase.execute(title);
            setTodos(prevTodos => [newTodo, ...prevTodos]);
        } catch (e) {
            setError("Falha ao adicionar a tarefa");
            console.error(e);
        }
    }, []);

    const toggleTodo = useCallback(async (todo: Todo) => {
        try {
            const updateTodo = { ...todo, completed: !todo.completed };
            await updateTodoUseCase.execute(updateTodo);
            setTodos(prevTodos =>
                prevTodos.map(t => (t.id === updateTodo.id ? updateTodo : t))
            );
        } catch (e) {
            setError("Falha ao atualizar a tarefa");
            console.error(e);
        }
    }, []);

    const deleteTodo = useCallback(async (id: string) => {
        try {
            await deleteTodoUseCase.execute(id);
            setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
        } catch (e) {
            setError("Falha ao deletar a tarefa");
            console.error(e);
        }
    }, []);

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    return {
        todos: filteredTodos,
        isLoading,
        error,
        filter,
        actions: {
            addTodo,
            toggleTodo,
            deleteTodo,
            reload: loadTodos,
            changeFilter: setFilter,
        },
    };
}