import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';

@NgModule({
  declarations: [TodoItemListRowComponent, TodoItemCardComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
