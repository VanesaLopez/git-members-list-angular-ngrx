import {ActionReducerMap} from '@ngrx/store';
import * as organization from '../reducers/change-organization.reducer';

export interface State {
    organization: string;
}

export const reducers: ActionReducerMap<State> = {
    organization: organization.reducer
};