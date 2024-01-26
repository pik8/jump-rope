import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
    return (
        <View style={styles.dashboard}>
            <Text>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#816',
        marginBottom: 0
    }
});
