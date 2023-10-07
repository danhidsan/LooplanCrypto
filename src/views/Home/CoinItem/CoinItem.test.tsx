import React from 'react';
import renderer from 'react-test-renderer';

import CoinItem from './CoinItem';

describe('CoinItem tests', () => {
  test('CoinItem renders correctly and green text', () => {
    const tree = renderer
      .create(
        <CoinItem
          id="tether"
          symbol="usdt"
          currentPrice={0.999496}
          image="hola"
          name="Tether"
          changePercentage={0.01}
        />,
      )
      .toJSON();

    const changePercentStyle =
      tree?.children[0].children[1].children[1].children[1].props.style[1];

    expect(tree).toBeTruthy();
    expect(changePercentStyle.color).toBe('green');
  });

  test('CoinItem text renders red', () => {
    const tree = renderer
      .create(
        <CoinItem
          id="tether"
          symbol="usdt"
          currentPrice={0.999496}
          image="hola"
          name="Tether"
          changePercentage={-0.01}
        />,
      )
      .toJSON();

    const changePercentStyle =
      tree?.children[0].children[1].children[1].children[1].props.style[1];

    expect(changePercentStyle.color).toBe('red');
  });
});
