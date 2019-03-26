import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FiTableFilteringDirective} from './fi-table-filtering.directive';
import {FiTablePagingDirective} from './fi-table-paging.directive';
import {FiTableSortingDirective} from './fi-table-sorting.directive';
import {FiTableComponent} from './fi-table.component';
import {FormsModule} from '@angular/forms';
import {FiTableCellComponent} from './fi-table-cell.component';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule],
  declarations: [FiTableComponent, FiTableFilteringDirective, FiTablePagingDirective, FiTableSortingDirective,FiTableCellComponent],
  exports: [FiTableComponent, FiTableFilteringDirective, FiTablePagingDirective, FiTableSortingDirective,FiTableCellComponent]
})
export class Ng2TableModule {
}
