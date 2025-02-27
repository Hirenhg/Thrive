import React from 'react'
import PageHeadingIcon from './PageHeadingIcon';

const PageHeading = (props) => {
    return (
        <div className='page-heading-main'>
            <div className="d-flex align-items-center">
                <PageHeadingIcon className={props.iconClassName} to={props.iconTo} />
                <h6 className="mb-0 text-primary fw-medium text-capitalize d-flex align-items-center">
                    {props.PageHeadingName}
                </h6>
            </div>
        </div>
    )
}

export default PageHeading