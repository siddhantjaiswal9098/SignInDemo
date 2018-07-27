import {createStackNavigator} from 'react-navigation';
  import Signup from '../components/Signup';
  import logIn from '../components/logIn';

  const navigator = createStackNavigator({
    Signup: { screen: Signup },
    logIn: { screen: logIn },
  });
  
  export default navigator;