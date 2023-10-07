import React, { FC, useCallback, useState, useMemo } from 'react';
import { ListRenderItemInfo } from 'react-native/types';

import { cryptosMock } from '../../data/mock';
import { Crypto } from '../../data/types';
import TextInput from '../../components/TextInput';

import {
  Container,
  CryptoList,
  CryptoListSeparator,
  SearchContainer,
} from './Home.styles';
import CryptoItem from './CryptoItem';

const Home: FC = () => {
  const [search, setSearch] = useState<string>();
  const handlePressCryptoItem = useCallback((cryptoId: string) => {
    console.log(cryptoId);
  }, []);
  const renderCryptoItem = useCallback(
    ({
      item: { name, current_price, high_24h, id, image, low_24h, symbol },
    }: ListRenderItemInfo<Crypto>) => (
      <CryptoItem
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

  const filteredCryptos = useMemo(() => {
    const searchText = search?.toLocaleLowerCase();
    return (
      searchText &&
      cryptosMock.filter(({ name, symbol }) => {
        const matchWithName = name.toLocaleLowerCase().includes(searchText);
        const matchWithSymbol = symbol.toLocaleLowerCase().includes(searchText);
        return matchWithName || matchWithSymbol;
      })
    );
  }, [search]);

  return (
    <Container>
      <SearchContainer>
        <TextInput placeholder="Search" onChangeText={handleChangeSearch} />
      </SearchContainer>
      <CryptoList
        data={filteredCryptos || cryptosMock}
        renderItem={renderCryptoItem}
        ItemSeparatorComponent={CryptoListSeparator}
      />
    </Container>
  );
};

export default Home;
