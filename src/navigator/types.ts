import { NavigationProp, RouteProp } from '@react-navigation/native';

import { Coin } from '../services/types';

export type ParamList = {
  Home: {};
  Details: {
    coin?: Coin;
  };
};

export interface ScreenProps<ScreenName extends keyof ParamList> {
  navigation: NavigationProp<ParamList, ScreenName>;
  route: RouteProp<ParamList, ScreenName>;
}
