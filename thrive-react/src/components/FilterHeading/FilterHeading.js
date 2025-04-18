import React from 'react'
// import PropTypes from 'prop-types';

const FilterHeading = (props) => {
    return (
        <div className='filter-heading-main'>
            <div className="d-flex align-items-md-center flex-column flex-md-row justify-content-between margin-b-20">
                <h6 className="margin-b-20 mb-md-0 margin-r-10 text-capitalize">
                    {props.FilterHeadingName}
                </h6>
                <div className="d-flex align-items-md-center flex-column flex-md-row justify-content-md-end flex-grow-1 flex-shrink-1">
                    <div className="form-group margin-r-10 mw-md-200 searchbar">
                        <input type="text" id="txtSearch"
                            className="form-control w-100 f-size-12 fw-medium text-gray-400"
                            placeholder="Search"
                        />
                    </div>
                    {props.showSelect && (
                        <div className="mw-md-150 w-100 margin-r-10">
                            <select className="form-select form-control w-100 f-size-12 fw-medium text-gray-400">
                                <option>{props.option1}</option>
                                <option>{props.option2}</option>
                                <option>{props.option3}</option>
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
                                />
                            </div>
                        </div>
                    )}
                    <div className="btns d-flex align-items-center">
                        <button id="btnSearch" type="button" className="btn btn-primary btn-primary-hover rounded f-size-12 fw-medium">Search</button>
                        <button id="btnClear" type="button" className="btn btn-primary btn-primary-hover rounded f-size-12 fw-medium margin-l-10">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// FilterHeading.propTypes = {
//     filterHeadingName: PropTypes.string.isRequired,
//     showSelect: PropTypes.bool,
//     option1: PropTypes.string,
//     option2: PropTypes.string,
//     option3: PropTypes.string,
//     showDatepicker: PropTypes.bool,
// };

// FilterHeading.defaultProps = {
//     showSelect: false,
//     option1: 'Option 1',
//     option2: 'Option 2',
//     option3: 'Option 3',
//     showDatepicker: false,
// };

export default FilterHeading
