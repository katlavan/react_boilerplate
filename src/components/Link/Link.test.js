import React from 'react';
import Link from './';
import renderer from 'react-test-renderer';

it('Link renders correctly', () => {
  const tree = renderer
    .create(<Link
      url='https://instagram.com'
      title='Go to instagram.com'
      text='Instagram'
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});