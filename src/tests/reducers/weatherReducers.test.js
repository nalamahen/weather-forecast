import { FETCH_WEATHER } from '../../actions/index';
import weatherReducer from '../../reducers/weatherReducer';

describe('weatherReducer', () => {
    const initialState = [];

    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual([]);
    });

});