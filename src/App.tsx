import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
