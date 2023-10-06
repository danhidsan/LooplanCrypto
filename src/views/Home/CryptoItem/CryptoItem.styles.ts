import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  height: 50px;
  padding: 0 20px;
`;

export const ImageContainer = styled.View`
  width: 50px;
`;

export const NameContainer = styled.View`
  width: 100px;
  justify-content: center;
  padding-left: 20px;
  gap: 4px;
`;

export const PriceContainer = styled.View`
  flex: 1;
  width: 100px;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
`;

export const SymbolContainer = styled.View`
  flex-direction: row;
`;

export const MaxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceText = styled.Text``;
export const MaxText = styled.Text`
  font-weight: bold;
`;

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CryptoImage = styled(FastImage)`
  flex: 1;
`;
