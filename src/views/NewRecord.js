import { StyleSheet, Text, View } from 'react-native';

export default function NewRecord() {
    return (
        <View style={styles.newRecord}>
            <Text>New Record</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newRecord: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#816',
        marginBottom: 0
    }
});
