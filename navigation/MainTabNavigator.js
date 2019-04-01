import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CreateUser from '../screens/CreateUser';
import ReadUser from '../screens/ReadUser';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CreateUserStack = createStackNavigator({
  CreateUser: CreateUser,
});

CreateUserStack.navigationOptions = {
  tabBarLabel: 'CreateUser',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  ),
};

const ReadUserStack = createStackNavigator({
  Settings: ReadUser,
});

ReadUserStack.navigationOptions = {
  tabBarLabel: 'Read User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CreateUserStack,
  ReadUserStack,
});
