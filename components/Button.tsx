import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { colours, Colours } from "../styles/colours";

interface ButtonProps {
    text: string;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export function Button({ text, style, onPress }: ButtonProps) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.buttonBackground,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colours.buttonBackground,
        borderRadius: 5,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    buttonText: {
        color: colours.buttonText,
        fontSize: 16,
        fontWeight: "bold",
    },
});