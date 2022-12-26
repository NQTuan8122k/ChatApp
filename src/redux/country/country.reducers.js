import {COUNTRY_ACTION_TYPES} from './country.actionTypes';

const initialState = {
  country: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.SUCCESS: {
      console.log('********ACTION_COUNTRY**********');
      console.log(action?.payload[0]);
      const coutryData = action?.payload?.map(country => {
        return {
          name: country?.name.common,
          flag: country?.flag,
          flags: country?.flags,
        };
      });
      console.log('121111111111111111', coutryData?.[0]);
      return {
        ...state,
        country: coutryData,
      };
    }
    case COUNTRY_ACTION_TYPES?.GET_ALL_COUNTRY.FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default countryReducer;
