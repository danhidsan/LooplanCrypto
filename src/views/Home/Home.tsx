import React, { FC, useCallback, useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { ListRenderItemInfo } from 'react-native/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Coin } from '../../services/types';
import TextInput from '../../components/TextInput';
import { useCoins } from '../../hooks/coins';
import { ScreenProps } from '../../navigator/types';

import {
  Container,
  CryptoList,
  CryptoListSeparator,
  SearchContainer,
} from './Home.styles';
import CoinItem from './CoinItem';

const Home: FC = () => {
  const navigation = useNavigation<ScreenProps<'Home'>['navigation']>();
  const [search, setSearch] = useState<string>();

  const { coins, isLoading, isFetching } = useCoins();

  const handlePressCryptoItem = useCallback(
    (coinId: string) => {
      navigation.navigate('Details', {
        coin: coins.find(({ id }) => id === coinId),
      });
    },
    [navigation, coins],
  );

  const renderCryptoItem = useCallback(
    ({
      item: { name, current_price, high_24h, id, image, low_24h, symbol },
    }: ListRenderItemInfo<Coin>) => (
      <CoinItem
        id={id}
        name={name}
        currentPrice={current_price}
        symbol={symbol}
        highPrice24h={high_24h}
        lowPrice24h={low_24h}
        image={image}
        onPress={handlePressCryptoItem}
      />
    ),
    [handlePressCryptoItem],
  );

  const handleChangeSearch = (text: string) => {
    setSearch(text);
  };

  const filteredCoins = useMemo(() => {
    const searchText = search?.toLocaleLowerCase();
    return (
      searchText &&
      coins.filter(({ name, symbol }) => {
        const matchWithName = name.toLocaleLowerCase().includes(searchText);
        const matchWithSymbol = symbol.toLocaleLowerCase().includes(searchText);
        return matchWithName || matchWithSymbol;
      })
    );
  }, [search, coins]);

  const { bottom, top } = useSafeAreaInsets();

  return (
    <Container safeTop={top} safeBottom={bottom}>
      <SearchContainer>
        <TextInput placeholder="Search" onChangeText={handleChangeSearch} />
      </SearchContainer>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <CryptoList
          data={filteredCoins || coins}
          renderItem={renderCryptoItem}
          ItemSeparatorComponent={CryptoListSeparator}
        />
      )}
    </Container>
  );
};

export default Home;
