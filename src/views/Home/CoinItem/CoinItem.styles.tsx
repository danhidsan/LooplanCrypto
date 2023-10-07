import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextProps } from 'react-native/types';

interface CoinPriceChangeProps extends TextProps {
  readonly isPositive: boolean;
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  min-height: 50px;
  padding: 0 20px;
`;

export const ImageContainer = styled.View`
  width: 50px;
`;

export const NameContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding-left: 20px;
  gap: 4px;
`;

export const CoinItemRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SymbolContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceText = styled.Text`
  font-size: 18px;
`;

export const SymbolText = styled.Text`
  font-size: 14px;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CryptoImage = styled(FastImage)`
  flex: 1;
`;

export const CoinPriceChange = styled.Text<CoinPriceChangeProps>`
  font-size: 14px;
`;
