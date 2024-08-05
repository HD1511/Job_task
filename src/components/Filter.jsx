import React from 'react';
import FilterTypes from './FilterTypes';

function Filter({ handleSearch, setValue }) {
    const [selectedOption, setSelectedOption] = React.useState({
        column_filter: 'id',
        filter_type: 'number',
        filter_condition: 'Equals',
    });
    
    
    const map = {
        'id': 'number',
        'name': 'string',
        'age': 'number',
        'role': 'enum',
        'hireDate': 'date',
        'isActive': 'boolean',
        'salary': 'number',
        'department': 'string',
        'projectsCompleted': 'number',
        'lastLogin': 'datetime',
        'accessLevel': 'enum',
    };

    const handleChange = (event) => {
        // console.log(event.target.value);
        const { name, value } = event.target;
        if(name === 'column_filter') {
            // const [_, type] = value.split(' ');
            setSelectedOption({
                ...selectedOption,
                column_filter: value,
                filter_type: map[value],
            });
        }

        // console.log(event.target.name, event.target.value);
        
        switch(event.target.name) {
            case 'number_filter':
                setSelectedOption({
                    ...selectedOption,
                    filter_condition: event.target.value,
                });
                break;
            case 'string_filter':
                setSelectedOption({
                    ...selectedOption,
                    filter_condition: event.target.value,
                });
                break;
            case 'boolean_filter':
                setSelectedOption({
                    ...selectedOption,
                    filter_condition: event.target.value,
                });
                break;
            case 'enum_filter':
                setSelectedOption({
                    ...selectedOption,
                    filter_condition: event.target.value,
                });
                break;
            default:
                break;
        }
        // setSelectedOption(event.target.value);
    };

    const inputHandle = () => {
        switch(selectedOption.filter_type) {
            case 'number':
                return <input type="number" placeholder="Enter number" onChange={(e) => setValue(Number(e.target.value))} />
            case 'string':
                return <input type="text" placeholder="Enter text" onChange={(e) => setValue(e.target.value)} />
            case 'date':
                return <input type="date" placeholder="Enter date" onChange={(e) => setValue(e.target.value)} />
            case 'boolean':
                return <select onChange={(e) => setValue(e.target.value)}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
            case 'enum': 
                if(selectedOption.column_filter === 'role'){
                return <select onChange={(e) => setValue(e.target.value)}>
                            <option value="Engineer">Engineer</option>
                            <option value="Manager">Manager</option>
                            <option value="Intern">Intern</option>
                            <option value="Director">Director</option>
                            <option value="Designer">Designer</option>
                            <option value="Senior Manager">Senior Manager</option>
                            <option value="Product">Product</option>
                        </select>
                }
                return <select onChange={(e) => setValue(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                         </select>
               
        }
    }

  return (
    <div>
        <select onChange={handleChange} name='column_filter'>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="age">Age</option> 
            <option value="role">Role</option>
            <option value="hireDate">Hire Date</option>
            <option value="isActive">Is Active</option>
            <option value="salary">Salary</option>
            <option value="department">Department</option>
            <option value="projectsCompleted">Projects</option>
            <option value="lastLogin">Last Login</option>
            <option value="accessLevel">Access Level</option>
        </select>
        <FilterTypes selectedOption={selectedOption} handleChange={handleChange} />
        {inputHandle()}
        <button onClick={() => handleSearch(selectedOption)}>
            Search
        </button>
    </div>
  )
}

export default Filter;
