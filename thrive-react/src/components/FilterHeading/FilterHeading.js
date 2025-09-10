import { useState } from 'react'
const FilterHeading = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(props.option1 || '');
    const [selectedDate, setSelectedDate] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle select option change
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Handle date change
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        if (!props.data) return;

        let filteredResults = [...props.data];

        // Filter by search term
        if (searchTerm) {
            filteredResults = filteredResults.filter(item => {
                // Search in all string properties of the item
                return Object.values(item).some(value => 
                    typeof value === 'string' && 
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }

        // Filter by selected option
        if (selectedOption && selectedOption !== props.option1) {
            filteredResults = filteredResults.filter(item => {
                // Assuming there's a type/category field in your data
                return item.type === selectedOption;
            });
        }

        // Filter by date if date picker is enabled
        if (props.showdatepicker && selectedDate) {
            filteredResults = filteredResults.filter(item => {
                // Assuming there's a date field in your data
                return item.date === selectedDate;
            });
        }

        setSearchResults(filteredResults);
        
        // Call the parent component's callback with search results
        if (props.onSearch) {
            props.onSearch(filteredResults);
        }
    };

    // Handle clear button click
    const handleClear = () => {
        setSearchTerm('');
        setSelectedOption(props.option1 || '');
        setSelectedDate('');
        setSearchResults([]);
        
        // Reset the parent component's data
        if (props.onSearch) {
            props.onSearch(props.data || []);
        }
    };

    return (
        <div className='filter-heading-main'>
            <div className="d-flex align-items-md-center flex-column flex-md-row justify-content-between">
                <div className="available-amount-col margin-b-20 d-none">
                    <div className="f-size-12 text-gray-400 fw-semibold w-100 d-block text-uppercase">available Amount</div>
                    <div className="f-size-20 text-primary fw-medium w-100 d-block">R147,975.00</div>
                </div>
                <h6 className="margin-b-20 text-capitalize">
                    {props.FilterHeadingName}
                </h6>
                <div className="d-flex align-items-md-center flex-column flex-md-row justify-content-md-end flex-grow-1 flex-shrink-1 margin-b-20">
                    <div className="form-group margin-r-10 mw-md-200 searchbar">
                        <input 
                            type="text" 
                            id="txtSearch"
                            className="form-control w-100 f-size-12 fw-medium text-gray-400"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    {props.showSelect && (
                        <div className="mw-md-150 w-100 margin-r-10">
                            <select 
                                className="form-select form-control w-100 f-size-12 fw-medium text-gray-400"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                <option value={props.option1}>{props.option1}</option>
                                <option value={props.option2}>{props.option2}</option>
                                <option value={props.option3}>{props.option3}</option>
                            </select>
                        </div>
                    )}
                    {props.showdatepicker && (
                        <div className="mw-md-150 w-100 margin-r-10">
                            <div className="form-group">
                                <input
                                    className="form-control f-size-12 fw-medium"
                                    placeholder="Date"
                                    type='date'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>
                    )}
                    <div className="btns d-flex align-items-center">
                        <button 
                            id="btnSearch" 
                            type="button" 
                            className="btn btn-primary btn-primary-hover rounded f-size-12 fw-medium"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                        <button 
                            id="btnClear" 
                            type="button" 
                            className="btn btn-primary btn-primary-hover rounded f-size-12 fw-medium margin-l-10"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterHeading
