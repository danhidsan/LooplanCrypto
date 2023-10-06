import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details } from '../views';

const MainStack = createNativeStackNavigator();

const Navigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Overview' }}
      />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
};

export default Navigator;
