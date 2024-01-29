import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
    return (
        <View style={styles.dashboard}>
            <Text>Dashboard</Text>
            <Text style={{ color: "#fff" }}>Jump Rope</Text>
            <Text>by Picoito</Text>
            <Text>This is where an Overview will go</Text>
            <Text>Calendar</Text>
            <Text>Streak Count</Text>
            <Text></Text>
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
