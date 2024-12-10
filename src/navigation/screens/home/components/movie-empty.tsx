import { StyleSheet, Text } from 'react-native';

export function MovieEmpty() {
  return (
    <Text style={styles.text}>There are no result</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
