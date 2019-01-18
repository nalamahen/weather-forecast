import { shallow } from 'enzyme';
import React from 'react';
import Chart from '../../components/chart';

it('expect to number of component', () => {
    expect(shallow(<Chart />).length).toEqual(1);
});

it('expect to render chart component', () => {
    expect(shallow(<Chart />)).toMatchSnapshot();
});

