<script src="http://localhost:8097"></script>


import MeatAndEatNavigation from './src/routes/MeatAndEatNavigation';
import AuthNavigation from './src/routes/AuthNavigation';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';
import { store } from './store'


import { Provider } from 'react-redux'
import AuthUserProvider from './src/contexts/AuthUserProvider';
import RootNavigator from './src/routes/RootNavigator';

export default function App() {
  // fonts
  const [fontsLoaded] = useFonts({
    'Sigmar-Regular': require('./src/fonts/Sigmar-Regular.ttf'),
  });

  // // appLoading
  // if (!fontsLoaded) {
  //   return <AppLoading/>
  // }
  
  return (
    <Provider store={store}>
      <AuthUserProvider>
        <RootNavigator/>
      </AuthUserProvider>
    </Provider>
  );
}
