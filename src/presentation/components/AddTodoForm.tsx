import { useState } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from "../styles/theme";
import { Feather } from '@expo/vector-icons';


interface AddTodoFormProps {
    onAdd: (title: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleAddPress = () => {
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicionar tarefa"
                placeholderTextColor={theme.colors.textSecondary}
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleAddPress}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddPress}>
                <Feather name="plus" size={24} color={theme.colors.white} />
            </TouchableOpacity>        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.m,
    },
    input: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.m,
        borderRadius: theme.borderRadii.m,
        fontSize: theme.fontSizes.body,
        color: theme.colors.text,
        marginRight: theme.spacing.m,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        padding: theme.spacing.m,
        backgroundColor: theme.colors.primary,
        borderRadius: 50, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
});
