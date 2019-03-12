import {Component, OnInit} from '@angular/core';
import {TableData, TableData2} from '../fi-table/table-data';
import {FiTableCol, FiTableConfig} from '../fi-table/fiTableInterfaces';
import {FiColType, FiEditorType} from '../fi-table/FiTableEnums';

@Component({
    selector: 'app-test-comp',
    templateUrl: './test-comp.component.html',
    styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

    // , sort: 'asc' tanımlarsa açılışta sıralasın
    public columns: FiTableCol[] = [
        {
            title: 'Name', field: 'name', filtering: {filterString: '', placeholder: 'Filter by name'},
            filterAction: (ficolumn, fiComp) => {
                //console.log('fiCol:', ficolumn);
                //console.log('FiComp:', fiComp);
                this.tblTest.rows = TableData2;
                //console.log('testComp:config rows set edildi');
            }
        },
        {title: 'Position', field: 'position', sort: false, filtering: {filterString: '', placeholder: 'Filter by position'}},
        {title: 'Office', className: ['office-header', 'text-success'], field: 'office'},
        {title: 'Extn.', field: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
        {title: 'Start date', className: 'text-warning', field: 'startDate',colType:FiColType.date},
        {title: 'Salary ($)', field: 'salary',colType:FiColType.double},
        {
            title: 'Confirm', field: 'confirm', editorType: FiEditorType.Button,
            editorAction: (row, cellValue, fiColumn, fiComp: HTMLButtonElement) => {
                console.log('Confirmed', row, cellValue, fiComp);
                fiComp.textContent = 'Ok';
                fiColumn.editorRenderer(row, cellValue, fiComp);
                /*fiComp.classList.add('btn-secondary');*/

            }, editorHeader: 'Confirm'
            , editorRenderer: (row, cellValue, fiComp: HTMLButtonElement) => {
                fiComp.classList.add('btn-primary');
            }
        }
    ];

    //public length = 0;

    public tblTest: FiTableConfig = {
        columns: this.columns,
        className: ['table-bordered'],
        filterAuto: true,
        paging: false,
        sorting: {columns: this.columns},
        pageSize:6
    };

    // Methods

    public constructor() {
        //this.length = this.data.length;
    }

    public ngOnInit(): void {
        this.tblTest.rows = TableData; //this.data;
    }

    public onCellClick(data: any): any {
        console.log(data);
    }

    public onChangeTable() {

    }




    // Eski Metodlar

    // public changePage(page: any, data: any[] = this.data): any[] {
    //     let start = (page.page - 1) * page.itemsPerPage;
    //     let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    //     return data.slice(start, end);
    // }


    // public changeSort(data:any, config:any):any {
    //   if (!config.sorting) {
    //     return data;
    //   }

    //   let columns = this.config.sorting.columns || [];
    //   let columnName:string = void 0;
    //   let sort:string = void 0;

    //   for (let i = 0; i < columns.length; i++) {
    //     if (columns[i].sort !== '' && columns[i].sort !== false) {
    //       columnName = columns[i].name;
    //       sort = columns[i].sort;
    //     }
    //   }

    //   if (!columnName) {
    //     return data;
    //   }

    //   // simple sorting
    //   return data.sort((previous:any, current:any) => {
    //     if (previous[columnName] > current[columnName]) {
    //       return sort === 'desc' ? -1 : 1;
    //     } else if (previous[columnName] < current[columnName]) {
    //       return sort === 'asc' ? -1 : 1;
    //     }
    //     return 0;
    //   });
    // }

    // public changeFilter(data:any, config:any):any {
    //   let filteredData:Array<any> = data;
    //   this.columns.forEach((column:any) => {
    //     if (column.filtering) {
    //       filteredData = filteredData.filter((item:any) => {
    //         return item[column.name].match(column.filtering.filterString);
    //       });
    //     }
    //   });

    //   if (!config.filtering) {
    //     return filteredData;
    //   }

    //   if (config.filtering.columnName) {
    //     return filteredData.filter((item:any) =>
    //       item[config.filtering.columnName].match(this.config.filtering.filterString));
    //   }

    //   let tempArray:Array<any> = [];
    //   filteredData.forEach((item:any) => {
    //     let flag = false;
    //     this.columns.forEach((column:any) => {
    //       if (item[column.name].toString().match(this.config.filtering.filterString)) {
    //         flag = true;
    //       }
    //     });
    //     if (flag) {
    //       tempArray.push(item);
    //     }
    //   });
    //   filteredData = tempArray;

    //   return filteredData;
    // }

    // public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {

    //   // if (config.filtering) {
    //   //   Object.assign(this.config.filtering, config.filtering);
    //   // }

    //   // if (config.sorting) {
    //   //   Object.assign(this.config.sorting, config.sorting);
    //   // }

    //   // let filteredData = this.changeFilter(this.data, this.config);
    //   // let sortedData = this.changeSort(filteredData, this.config);
    //   // this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    //   // this.length = sortedData.length;

    // }


}
