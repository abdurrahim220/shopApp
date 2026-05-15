import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HelloPage from './src/screens/hello';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HelloPage />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
