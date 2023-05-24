<script src="http://localhost:8097"></script>


import MeatAndEatNavigation from './src/routes/MeatAndEatNavigation';
import AuthNavigation from './src/routes/AuthNavigation';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';
import { store } from './store'


import { Provider } from 'react-redux'

export default function App() {
  // fonts
  const [fontsLoaded] = useFonts({
    'Sigmar-Regular': require('./src/fonts/Sigmar-Regular.ttf'),
  });

  // // appLoading
  // if (!fontsLoaded) {
  //   return <AppLoading/>
  // }
  const user = false
  
  return (
    <Provider store={store}>
      { user ? <MeatAndEatNavigation/> : <AuthNavigation/> }
    </Provider>
  );
}
