import {
    createStackNavigator,
  } from 'react-navigation';
  import FormHome from '../components/FormHome';
  import Formshow from '../components/Formshow';
  import FormScreen from '../components/FormScreen';
  
  const navigator = createStackNavigator({
    FormHome: { screen: FormHome },
    Formshow: { screen: Formshow },
    FormScreen : {screen: FormScreen },
  });
  
  export default navigator;