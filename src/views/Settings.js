import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.settings}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    settings: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#816',
        marginBottom: 0
    }
});
