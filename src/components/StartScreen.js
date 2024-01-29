import { StyleSheet, Text, View } from 'react-native';

export default function StartScreen() {
    return (
        <View style={styles.start}>
            <Text>This is where first "loader wil go"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    start: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#816',
        marginBottom: 0
    }
});
