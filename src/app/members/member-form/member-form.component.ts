import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as organization from '../actions/change-organization.action';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styles: []
})
export class MemberFormComponent {
  organization: string;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  changeOrganization() {
    this.store.dispatch(new organization.SetOrganization(this.organization));
  }

}
