import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps {
  title: string | number;
}

export function ButtonRound({title, ...props}: Props) {
  return <Pressable {...props} style={styles.container} >
    <Text style={styles.title}>{title}</Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC33',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#13100C',
    textAlign: 'center',
  },
});
