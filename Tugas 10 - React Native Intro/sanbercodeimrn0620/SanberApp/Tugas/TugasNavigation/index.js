import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {AddScreen} from './AddScreen';
import {ProjectScreen} from './ProjectScreen';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AboutScreen from './AboutScreen';
import SkillScreen from './SkillScreen';

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = ({ route }) => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="About" component={AboutStackScreen} />
  </Drawer.Navigator>
);

const AboutStackScreen = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="About" component={AboutScreen} />
  </AboutStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Skill" component={SkillScreen} />
    <Tabs.Screen name="Add" component={AddScreen} />
    <Tabs.Screen name="Project" component={ProjectScreen} />
  </Tabs.Navigator>
);

export default () => (
  <NavigationContainer>
    {/*<MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Register" component={RegisterScreen} />
    </MainStack.Navigator>*/}
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={TabsScreen} />
      <Drawer.Screen name='About' component={AboutStackScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);