import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {useState} from "react";
import ChildTable from "./components/childTable";

const productData = [{
        id: 1, name: "good", variants: [{id: '1-1', variant: 'red 1'}, {id: '1-2', variant: 'blue 1'}], price: 100,
}, {
        id: 2, name: "Bad", variants: [{id: '2-1', variant: 'red 2'}, {id: '2-2', variant: 'blue 2'}], price: 500,
},];

function App() {
        const [search, setSearch] = useState("")

        function priceFormatter(cell, row, rowIndex, formatExtraData) {
                return (<ChildTable cell={cell} rowIndex={rowIndex} data={formatExtraData}/>);
        }

        const columns = [{
                dataField: "id", text: "id",
        }, {
                dataField: "name", text: "name",
        }, {
                dataField: 'variants',
                text: "variants",
                headerClasses: 'demo-row-odd',
                formatter: priceFormatter,
                formatExtraData: {search}
        }, {
                dataField: 'price', text: "price",
        }];


        return (<div className="App">
                <BootstrapTable keyField='id' data={productData} columns={columns}/>
                <input className="absolute" value={search} onChange={(e) => {
                        setSearch(e.target.value)
                }}/>
        </div>);
}

export default App;
