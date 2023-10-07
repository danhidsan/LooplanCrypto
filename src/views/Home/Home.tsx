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
      item: {
        name,
        current_price,
        id,
        image,
        symbol,
        price_change_percentage_24h,
      },
    }: ListRenderItemInfo<Coin>) => (
      <CoinItem
        id={id}
        name={name}
        currentPrice={current_price}
        symbol={symbol}
        image={image}
        changePercentage={price_change_percentage_24h}
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
    <Container style={{ paddingTop: top, paddingBottom: bottom }}>
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
