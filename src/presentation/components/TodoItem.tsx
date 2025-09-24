import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Todo } from '../../core/domain/entities/Todo';
import { theme } from '../styles/theme';

interface TodoItemProps {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onToggle(todo)} style={styles.textContainer}>
                <Feather
                    name={todo.completed ? 'check-circle' : 'circle'}
                    size={24}
                    color={todo.completed ? theme.colors.accent : theme.colors.textSecondary}
                />
                <Text style={[styles.title, todo.completed && styles.titleCompleted]}>
                    {todo.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(todo.id)}>
                <Feather name="trash-2" size={22} color={theme.colors.danger} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.m,
        marginVertical: theme.spacing.s,
        marginHorizontal: theme.spacing.m,
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadii.m,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: theme.spacing.s,
    },
    title: {
        fontSize: theme.fontSizes.body,
        marginLeft: theme.spacing.m,
        color: theme.colors.text,
    },
    titleCompleted: {
        textDecorationLine: 'line-through',
        color: theme.colors.textSecondary,
    },
});