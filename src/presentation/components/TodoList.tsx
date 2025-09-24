import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { Todo } from '../../core/domain/entities/Todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggle: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return <Text style={styles.emptyText}>Nenhuma tarefa ainda. Adicione uma!</Text>;
    }

    return (
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TodoItem todo={item} onToggle={onToggle} onDelete={onDelete} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#888',
    }
})