import MeatAndEat from './src/routes/MeatAndEat';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';




export default function App() {
  // fonts
  // const [fontsLoaded] = useFonts({
  //   'Sigmar-Regular': require('./src/fonts/Sigmar-Regular.ttf'),
  // });

  // // appLoading
  // if (!fontsLoaded) {
  //   return (<AppLoading/>)
  // }
  
  return (
    <MeatAndEat/>
  );
}
