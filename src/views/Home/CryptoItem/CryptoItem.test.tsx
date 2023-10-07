import React from 'react';
import renderer from 'react-test-renderer';

import CryptoItem from './CryptoItem';

describe('CryptoItem tests', () => {
  const tree = renderer.create(
    <CryptoItem
      id="tether"
      symbol="usdt"
      currentPrice={0.999496}
      highPrice24h={1.002}
      image="hola"
      lowPrice24h={0.998128}
      name="Tether"
    />,
  );

  it('CryptoItem renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });
});
