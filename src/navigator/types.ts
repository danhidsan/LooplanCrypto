import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ParamList = {
  Home: {};
  Details: {};
};

export interface ScreenProps<ScreenName extends keyof ParamList> {
  navigation: NavigationProp<ParamList, ScreenName>;
  route: RouteProp<ParamList, ScreenName>;
}
