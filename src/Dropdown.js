import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
    const id = `use-dropdown-${label.replace(" ","-").toLowerCase()}`;
    const [state, setState] = useState(defaultState);

    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select type="text" id={id} value={state} placeholder={label}
            onChange= { e => setState(e.target.value) }
            onBlur= { e => setState(e.target.value) }
            disabled={!options.length}
            >
                <option>All</option>
                {options.map(item => (
                    <option key = {item.toLowerCase()} value={item}> {item} </option>
                ))}
            </select>
        </label>
    );

    return [state, Dropdown, setState];
};

export default useDropdown;
