import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice';
import Button from '../components/ui/Button';

const HelloPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default HelloPage;
