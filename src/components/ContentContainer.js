import { StyleSheet, Text, View } from 'react-native';

export default function ContentContainer(props) {
    return (
        <View style={styles.content}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#456',
        marginBottom: 0
    }
});
