import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
    return (
        <View style={styles.login}>
            <Text>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'green',
        marginBottom: 0
    }
});
