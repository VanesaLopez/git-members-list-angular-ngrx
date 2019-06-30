import {ActionReducerMap} from '@ngrx/store';
import * as organization from '../reducers/change-organization.reducer';

export interface State {
    organizaton: organization.State;
}

export const reducers: ActionReducerMap<State> = {
    organizaton: organization.reducer
};