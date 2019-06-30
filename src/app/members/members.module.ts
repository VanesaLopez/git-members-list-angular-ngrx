import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';
import { MemberFormComponent } from './member-form/member-form.component';

@NgModule({
  imports: [
    PaginationModule.forRoot(),
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('organization', reducers.organization)
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    MemberFormComponent,
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
