// src/presentation/screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import { useTodosController } from '../hooks/useTodosController';
import { TodoList } from '../components/TodoList';
import { AddTodoForm } from '../components/AddTodoForm';
import { FilterButtons } from '../components/FilterButtons';
import { theme } from '../styles/theme';

export default function HomeScreen() {
    const { todos, isLoading, error, filter, actions } = useTodosController();

    const renderContent = () => {
        if (isLoading) {
            return <ActivityIndicator size="large" style={styles.centered} />;
        }

        if (error) {
            return (
                <View style={styles.centered}>
                    <Text style={styles.errorText}>{error}</Text>
                    <Button title="Tentar Novamente" onPress={actions.reload} />
                </View>
            );
        }

        return (
            <TodoList
                todos={todos}
                onToggle={actions.toggleTodo}
                onDelete={actions.deleteTodo}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Tarefas</Text>
            </View>
            <AddTodoForm onAdd={actions.addTodo} />

            <FilterButtons
                currentFilter={filter}
                onChangeFilter={actions.changeFilter}
            />

            <View style={styles.listContainer}>
                {renderContent()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        padding: theme.spacing.m,
        paddingTop: theme.spacing.xl,
    },
    title: {
        fontSize: theme.fontSizes.title,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
    },
    listContainer: {
        flex: 1,
    }
});