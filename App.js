import * as  React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './components/dashboard'



const Stack = createStackNavigator() ;
 
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="signup"
      >
      <Stack.Screen name="login" component={Login}  />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
export default  function App() {
  return(
    <NavigationContainer>
     <MyStack/>
    </NavigationContainer>
  );
}
