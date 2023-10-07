import React, { FC, useCallback } from 'react';
import FastImage from 'react-native-fast-image';

import { CryptoItemProps } from './CoinItem.types';
import {
  Container,
  ImageContainer,
  NameContainer,
  SymbolContainer,
  PriceText,
  NameText,
  CryptoImage,
  CoinItemRow,
  CoinPriceChange,
  SymbolText,
} from './CoinItem.styles';

const CoinItem: FC<CryptoItemProps> = ({
  id,
  name,
  currentPrice,
  symbol,
  image,
  changePercentage,
  onPress,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [id, onPress]);

  return (
    <Container onPress={handlePress}>
      <ImageContainer>
        <CryptoImage
          source={{ uri: image }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </ImageContainer>
      <NameContainer>
        <CoinItemRow>
          <NameText>{name}</NameText>
          <PriceText>${currentPrice.toLocaleString('en-EN')}</PriceText>
        </CoinItemRow>
        <SymbolContainer>
          <SymbolText>{symbol.toUpperCase()}</SymbolText>
          <CoinPriceChange
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: Math.sign(changePercentage) === 1 ? 'green' : 'red',
            }}>
            {`${Math.abs(changePercentage).toFixed(2)}%`}
          </CoinPriceChange>
        </SymbolContainer>
      </NameContainer>
    </Container>
  );
};

export default CoinItem;
