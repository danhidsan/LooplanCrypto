import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

import { Crypto } from '../../data/types';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const SearchContainer = styled.View`
  padding: 20px;
`;

export const CryptoList = styled(FlatList as FlatList<Crypto>)`
  padding-top: 20px;
`;

export const CryptoListSeparator = styled.View`
  height: 20px;
`;
