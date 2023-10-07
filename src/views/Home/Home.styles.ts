import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

import { Coin } from '../../services/types';

import { HomeContainerProps } from './Home.types';

export const Container = styled.View<HomeContainerProps>`
  flex: 1;
  background-color: white;
  padding-top: ${({ safeTop }) => safeTop}px;
  padding-bottom: ${({ safeBottom }) => safeBottom}px;
`;

export const SearchContainer = styled.View`
  padding: 20px;
`;

export const CryptoList = styled(FlatList as FlatList<Coin>)`
  padding-top: 20px;
`;

export const CryptoListSeparator = styled.View`
  height: 20px;
`;
