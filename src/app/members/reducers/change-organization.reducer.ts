import * as organization from '../actions/change-organization.action';

const ORGANIZATION = 'lemoncode';

export function reducer(state: string = '', action: organization.Actions): string {
  switch (action.type) {
    case organization.SET_ORGANIZATION:
      return action.payload ? action.payload : ORGANIZATION;
    default:
      return state;
  }
}