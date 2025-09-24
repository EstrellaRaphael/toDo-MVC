import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FilterType } from '../hooks/useTodosController';
import { theme } from '../styles/theme';

interface FilterButtonsProps {
    currentFilter: FilterType;
    onChangeFilter: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Ativos', value: 'active' },
    { label: 'Completos', value: 'completed' },
];

export const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onChangeFilter }) => {
    return (
        <View style={styles.container}>
            {filters.map(({ label, value }) => (
                <TouchableOpacity
                    key={value}
                    style={[
                        styles.button,
                        currentFilter === value && styles.buttonActive,
                    ]}
                    onPress={() => onChangeFilter(value)}
                >
                    <Text
                        style={[
                            styles.text,
                            currentFilter === value && styles.textActive,
                        ]}
                    >
                        {label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.m,
        backgroundColor: 'transparent',
        marginBottom: theme.spacing.s,
    },
    button: {
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadii.m,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    buttonActive: {
        backgroundColor: theme.colors.primary,
    },
    text: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    textActive: {
        color: theme.colors.white,
        fontWeight: 'bold',
    },
});