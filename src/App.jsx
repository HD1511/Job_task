import React from "react";
import axios from "axios";
import Table from "./components/Table";
import Filter from "./components/Filter";

function App() {
  const [tableData, setTableData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => { 
      const response = await axios.get("https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c"); 
      let stringifyData = response.data;
      if(typeof stringifyData === 'string') {
        stringifyData = stringifyData.slice(17)
        stringifyData = stringifyData.slice(0, stringifyData.length - 2);
        // console.log(eval(stringifyData));
        setTableData(eval(stringifyData));
        setFilterData(eval(stringifyData));
      }
    };

    fetchData();
  }, []);

  const numberFilter = (column_name, filter_condition) => {
    switch(filter_condition) {
      case 'Equals':
        return setFilterData(tableData.filter((data) => data[column_name] === value));
      case 'Less than':
        return setFilterData(tableData.filter((data) => data[column_name] < value));
      case 'Less than or equal':
        return setFilterData(tableData.filter((data) => data[column_name] <= value));
      case 'Greater than':
        return setFilterData(tableData.filter((data) => data[column_name] > value));
      case 'Greater than or equal':
        return setFilterData(tableData.filter((data) => data[column_name] >= value));
      case 'Range':
        return setFilterData(tableData.filter((data) => data[column_name] >= value && data[column_name] <= value));
      case 'Not equal':
        return setFilterData(tableData.filter((data) => data[column_name] !== value));
    }
  }

  const stringFilter = (column_name, filter_condition) => {
    switch(filter_condition) {
      case 'Contains':
        return setFilterData(tableData.filter((data) => data[column_name].toLowerCase().includes(value.toLocaleLowerCase())));
      case 'Not contains':
        return setFilterData(tableData.filter((data) => !data[column_name].toLowerCase().includes(value.toLocaleLowerCase())));
      case 'Equals':
        return setFilterData(tableData.filter((data) => data[column_name].toLocaleLowerCase() === value.toLocaleLowerCase()));
      case 'Not equal':
        return setFilterData(tableData.filter((data) => data[column_name].toLocaleLowerCase() !== value.toLocaleLowerCase()));
      case 'Ends with':
        return setFilterData(tableData.filter((data) => data[column_name].toLowerCase().endsWith(value.toLocaleLowerCase())));
      case 'Is null':
        return setFilterData(tableData.filter((data) => data[column_name] === null));
      case 'Is not null':
        return setFilterData(tableData.filter((data) => data[column_name] !== null));
    }
  }

  const booleanFilter = (column_name, filter_condition) => {
    switch(filter_condition) {
      case 'Is null':
        return setFilterData(tableData.filter((data) => data[column_name] === null));
      case 'Is not null':
        return setFilterData(tableData.filter((data) => data[column_name] !== null));
      case 'Equals':
        return setFilterData(tableData.filter((data) => data[column_name].toString().toLocaleLowerCase() === value.toLocaleLowerCase()));
    }
  }

  const handleSearch = (selectedOption) => {
    console.log(selectedOption);
      switch(selectedOption.filter_type) {
        case 'number':
          return numberFilter(selectedOption.column_filter, selectedOption.filter_condition);
        case 'string':
          return stringFilter(selectedOption.column_filter, selectedOption.filter_condition);
        case 'boolean':
            return booleanFilter(selectedOption.column_filter, selectedOption.filter_condition);
        case 'enum':
            return <select onChange={handleChange} name='enum_filter'>
                        <option value="In">In</option>
                        <option value="Equals">Equals</option>
                        <option value="Not equal">Not equal</option>
                        <option value="Not in">Not in</option>
                        <option value="Is null">Is null</option>
                    </select>
        default:
            return <input type="text" placeholder="Enter text" />
     }
  };

  return (
    <>
      <div>
        <Filter handleSearch={handleSearch} setValue={setValue} />
        <Table data={filterData} />
      </div>
    </>
  )
}

export default App;