import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '.';

describe('Input', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Input />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
