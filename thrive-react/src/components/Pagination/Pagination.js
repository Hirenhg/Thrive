import React from 'react'

const Pagination = () => {
    return (
        <div className='pagination-main'>
            <div className="d-flex align-items-center justify-content-between pt-1">
                <div className="f-size-14 text-primary line-height-20 text-nowrap margin-r-10">
                    <span className="d-none d-sm-inline"> Showing </span> TotalCount <span className="d-none d-sm-inline">results</span>
                </div>
                <div className="pagination-block">
                    <ul className="pagination mb-0">
                        <li className="page-item w-sm-40 page-first page-back disabled">
                            <a className="page-link text-center d-flex align-items-center justify-content-center h-100">
                                <i className="icon ico-back"></i><i className="icon ico-back"></i>
                            </a>
                        </li>
                        <li className="page-item w-sm-40 page-back disabled">
                            <a className="page-link text-center d-flex align-items-center justify-content-center h-100">
                                <i className="icon ico-back"></i>
                            </a>
                        </li>
                        <li className="page-item w-sm-40">
                            <a className="page-link text-center f-size-14 fw-semibold">...</a>
                        </li>
                        <li className="page-item w-sm-40 active">
                            <a className="page-link text-center f-size-14 fw-semibold">pgIndex</a>
                        </li>
                        <li className="page-item w-sm-40">
                            <a className="page-link text-center f-size-14 fw-semibold">...</a>
                        </li>
                        <li className="page-item w-sm-40 page-next disabled">
                            <a className="page-link text-center d-flex align-items-center justify-content-center h-100">
                                <i className="icon ico-next"></i>
                            </a>
                        </li>
                        <li className="page-item w-sm-40 page-last page-next disabled">
                            <a className="page-link text-center d-flex align-items-center justify-content-center h-100">
                                <i className="icon ico-next"></i><i className="icon ico-next"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination