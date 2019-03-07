import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiTableComponent } from './fi-table.component';
import { FiTableFilteringDirective } from './fi-table-filtering.directive';
import { FiTablePagingDirective } from './fi-table-paging.directive';
import { FiTableSortingDirective } from './fi-table-sorting.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FiTableComponent, FiTableFilteringDirective, FiTablePagingDirective, FiTableSortingDirective],
  exports: [FiTableComponent, FiTableFilteringDirective, FiTablePagingDirective, FiTableSortingDirective]
})
export class Ng2TableModule {
}