import React, { FC, useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native/types';

import { cryptosMock } from '../../data/mock';
import { Crypto } from '../../data/types';

import { Container, CryptoList, CryptoListSeparator } from './Home.styles';
import CryptoItem from './CryptoItem';

const Home: FC = () => {
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

  return (
    <Container>
      <CryptoList
        data={cryptosMock}
        renderItem={renderCryptoItem}
        ItemSeparatorComponent={CryptoListSeparator}
      />
    </Container>
  );
};

export default Home;
