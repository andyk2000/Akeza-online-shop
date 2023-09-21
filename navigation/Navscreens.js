import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Signup from '../screens/SigninScreen';
import Login from '../screens/LoginScreen';
import OnboardingSCreen from '../screens/OnboardingScreen';
import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

const Nav = () => {
  const [defaultRoute, setDefaultRoute] = useState(null);
  const { user } = useAuth;
  if(user){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
          name='Onboarding'
          component={OnboardingSCreen}
          options={{header: ()=> null}}
          />
          <Stack.Screen 
          name='Login'
          component={Login}
          options={{header: ()=> null}}
          />
          <Stack.Screen 
          name='Signup'
          component={Signup}
          />
          <Stack.Screen
          name='Home'
          component={Home}
          options={{header: ()=> null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'>
          <Stack.Screen 
          name='Onboarding'
          component={OnboardingSCreen}
          options={{header: ()=> null}}
          />
          <Stack.Screen 
          name='Login'
          component={Login}
          options={{header: ()=> null}}
          />
          <Stack.Screen 
          name='Signup'
          component={Signup}
          />
          <Stack.Screen
          name='Home'
          component={Home}
          options={{header: ()=> null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
}

export default Nav;