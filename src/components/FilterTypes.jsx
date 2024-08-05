import React from 'react';

function FilterTypes({ selectedOption, handleChange }) {

    const filter_type = () => {
        switch(selectedOption.filter_type) {
            case 'number':
                return <select onChange={handleChange} name='number_filter'>
                            <option value="Equals">Equals</option>
                            <option value="Less than">Less than</option>
                            <option value="Less than or equal">Less than or equal</option>
                            <option value="Greater than">Greater than</option>
                            <option value="Greater than or equal">Greater than or equal</option>
                            <option value="Range">Range</option>
                            <option value="Not equal">Not equal</option>
                        </select>
            case 'string':
                return <select onChange={handleChange} name='string_filter'>
                            <option value="Contains">Contains</option>
                            <option value="Not contains">Not contains</option>
                            <option value="Equals">Equals</option>
                            <option value="Not equal">Not equal</option>
                            <option value="Ends with">Ends with</option>
                            <option value="Is null">Is null</option>
                            <option value="Is not null">Is not null</option>
                        </select>
            case 'date':
                return <input type="date" placeholder="Enter date" />
            case 'boolean':
                return <select onChange={handleChange} name='boolean_filter'>
                            <option value="Is null">Is null</option>
                            <option value="Is not null">Is not null</option>
                            <option value="Equals">Equals</option>
                        </select>
            case 'datetime':
                return <input type="datetime-local" placeholder="Enter datetime" />
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
        {filter_type()}
    </>
  )
}

export default FilterTypes;
