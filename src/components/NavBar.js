import { StyleSheet, Text, View } from 'react-native';

export default function NavBar() {
    return (
        <View style={styles.footer}>
            <Text>NavBar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#816',
        marginBottom: 0
    }
});
