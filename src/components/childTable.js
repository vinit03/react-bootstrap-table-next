import React, {useEffect} from "react";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";

let filterFunc = {};

const ChildTable = ({cell, rowIndex, data}) => {

        useEffect(() => {
                filterFunc[rowIndex](data.search)
        }, [data.search])

        const column = [{
                dataField: "id", text: "id",
        }, {
                dataField: "variant", text: "variant", filter: textFilter({
                        getFilter: (filter) => {
                                filterFunc[rowIndex] = filter
                        }
                })
        }];

        return (<BootstrapTable keyField='id' data={cell} columns={column} filter={filterFactory()} noDataIndication="No data available"/>);
}
export default ChildTable;