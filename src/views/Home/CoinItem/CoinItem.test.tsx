import React from 'react';
import renderer from 'react-test-renderer';

import CoinItem from './CoinItem';

describe('CoinItem tests', () => {
  const tree = renderer.create(
    <CoinItem
      id="tether"
      symbol="usdt"
      currentPrice={0.999496}
      highPrice24h={1.002}
      image="hola"
      lowPrice24h={0.998128}
      name="Tether"
    />,
  );

  it('CoinItem renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });
});
