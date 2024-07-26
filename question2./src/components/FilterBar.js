import React from 'react';

const FilterBar = ({ setFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    return (
        <div className="filter-bar">
            <select name="company" onChange={handleFilterChange}>
                <option value="AMZ">Amazon</option>
                <option value="FLP">Flipkart</option>
                <option value="SNP">Snapdeal</option>
                <option value="MYN">Myntra</option>
                <option value="AZO">Azoo</option>
            </select>
            <select name="category" onChange={handleFilterChange}>
                <option value="Laptop">Laptop</option>
                <option value="Phone">Phone</option>
                <option value="TV">TV</option>
                {/* Add more categories as needed */}
            </select>
            {/* Add more filters such as price range, rating, etc. */}
        </div>
    );
};

export default FilterBar;
