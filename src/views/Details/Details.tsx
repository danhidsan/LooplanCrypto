import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { format } from 'date-fns';

import { ScreenProps } from '../../navigator/types';

import {
  CoinImage,
  Container,
  HeaderContainer,
  CoinName,
  CoinSymbol,
  CoinPrice,
  PriceContainer,
  CoinPriceChange,
  DetailsContainer,
} from './Details.styles';
import DetailsItem from './DetailsItem';

const Details: FC = () => {
  const route = useRoute<ScreenProps<'Details'>['route']>();
  const coin = route.params.coin;

  if (coin) {
    const priceChange = coin.price_change_percentage_24h;
    return (
      <Container>
        <HeaderContainer>
          <CoinImage
            resizeMode={FastImage.resizeMode.cover}
            source={{ uri: coin.image }}
          />
          <CoinName>{coin.name}</CoinName>
          <CoinSymbol>{coin.symbol.toLocaleUpperCase()}</CoinSymbol>
          <PriceContainer>
            <CoinPrice>${coin.current_price}</CoinPrice>
            <CoinPriceChange isPositive={Math.sign(priceChange) === 1}>
              {Math.abs(priceChange).toFixed(2)}%
            </CoinPriceChange>
          </PriceContainer>
        </HeaderContainer>
        <DetailsContainer>
          <DetailsItem
            label="Price Change (24h)"
            value={`$${coin.price_change_24h}`}
          />
          <DetailsItem
            label="High price (24h)"
            value={`$${coin.high_24h.toLocaleString('en-US')}`}
          />
          <DetailsItem
            label="Low price (24h)"
            value={`$${coin.low_24h.toLocaleString('en-US')}`}
          />
          <DetailsItem
            label="Market Cap"
            value={`$${coin.market_cap.toLocaleString('en-US')}`}
          />
          <DetailsItem label="Market Cap Rank" value={coin.market_cap_rank} />
          <DetailsItem
            label="Fully Diluted val"
            value={`$${coin.fully_diluted_valuation.toLocaleString('en-US')}`}
          />
          <DetailsItem
            label="Total volume"
            value={`$${coin.total_volume.toLocaleString('en-US')}`}
          />
          <DetailsItem
            label="Mkt Cap Change (24h)"
            value={`$${coin.market_cap_change_24h.toFixed(2)}`}
          />
          <DetailsItem
            label="Mkt Cap % Change (24h)"
            value={`${coin.market_cap_change_percentage_24h.toFixed(2)}%`}
          />
          <DetailsItem
            label="Circulating Supply"
            value={`${coin.circulating_supply.toLocaleString(
              'en-US',
            )} ${coin.symbol.toUpperCase()}`}
          />
          <DetailsItem
            label="Total Supply"
            value={`${coin.total_supply.toLocaleString(
              'en-US',
            )} ${coin.symbol.toUpperCase()}`}
          />
          <DetailsItem
            label="Max Supply"
            value={`${coin.max_supply.toLocaleString(
              'en-US',
            )} ${coin.symbol.toUpperCase()}`}
          />
          <DetailsItem label="ATH" value={`$${coin.ath}`} />
          <DetailsItem
            label="ATH Change %"
            value={`${coin.ath_change_percentage.toFixed(2)}%`}
          />
          <DetailsItem
            label="ATH Date"
            value={format(new Date(coin.ath_date), 'MM-dd-yyyy')}
          />
          <DetailsItem label="ALT" value={coin.atl} />
          <DetailsItem
            label="ALT change %"
            value={`${coin.atl_change_percentage.toFixed(2)}%`}
          />
          <DetailsItem
            label="ALT Date"
            value={format(new Date(coin.atl_date), 'MM-dd-yyyy')}
          />
          <DetailsItem
            label="Last Updated"
            value={format(new Date(coin.last_updated), 'MM-dd-yyyy')}
          />
        </DetailsContainer>
      </Container>
    );
  } else {
    return null;
  }
};

export default Details;
