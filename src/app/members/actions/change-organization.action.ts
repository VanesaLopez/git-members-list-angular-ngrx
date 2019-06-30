import { Action } from '@ngrx/store';

export const SET_ORGANIZATION = 'SET_ORGANIZATION';

export class SetOrganization implements Action {
  readonly type = SET_ORGANIZATION;
  constructor(public payload: string){}
}

export type Actions = SetOrganization;