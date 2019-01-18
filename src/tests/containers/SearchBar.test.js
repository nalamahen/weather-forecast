import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from '../../containers/searchBar';

it('expect to render SearchBar component', () => {
    expect(shallow(<SearchBar />)).toMatchSnapshot();
});
