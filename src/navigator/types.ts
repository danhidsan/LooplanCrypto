import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ParamList = {
  Home: {};
  Details: {
    coinId: string;
  };
};

export interface ScreenProps<ScreenName extends keyof ParamList> {
  navigation: NavigationProp<ParamList, ScreenName>;
  route: RouteProp<ParamList, ScreenName>;
}
