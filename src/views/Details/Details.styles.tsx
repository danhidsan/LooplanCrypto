import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 40px 0;
  align-items: center;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

export const CoinImage = styled(FastImage)`
  width: 100px;
  height: 100px;
`;

export const CoinName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-top: 10px;
`;

export const CoinSymbol = styled.Text`
  font-size: 16px;
`;

export const CoinPrice = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

export const CoinPriceChange = styled.Text<{ isPositive: boolean }>`
  font-size: 18px;
  color: ${({ isPositive }) => (isPositive ? 'green' : 'red')};
`;

export const DetailsContainer = styled(ScrollView)``;
