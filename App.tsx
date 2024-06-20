import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen.tsx';
import SecondScreen from './screen/SecondScreen.tsx';
import ProfileScreen from './screen/ProfileScreen.tsx';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import LoginScreen from './screen/LoginScreen.tsx';
import { useState } from 'react';

const tabs = createBottomTabNavigator();
const MainTabNavigator = ({ onLogout }) =>{
  return(
    <tabs.Navigator>
      <tabs.Screen name="Katalog" component={HomeScreen} options={{
        tabBarIcon: ({color, size}) =>(
          <Icon name="store-alt" color="black" size={25}/>
        )
      }}/>
      <tabs.Screen name="Tentang Kita" component={SecondScreen} options={{
        tabBarIcon: ({color, size}) =>(
          <Icon name="users" color="black" size={25}/>
        )
      }}/>
      <tabs.Screen
        name="Profile"
        children={() => <ProfileScreen onLogout={onLogout} />}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="user" color="black" size={25} />,
        }}/>
    </tabs.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainTabNavigator onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

export default App;