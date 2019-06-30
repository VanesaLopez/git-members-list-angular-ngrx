import * as organization from '../actions/change-organization.action';

export interface State {
  organization: string;
}

const initialState = {
  organization: 'lemoncode'
};

export function reducer(state = initialState, action: organization.Actions): State {
  switch (action.type) {
    case organization.SET_ORGANIZATION:
      return {
        ...state,
        organization: state.organization,
      };
    default:
      return state;
  }
}