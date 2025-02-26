import React from 'react'
import { Link } from 'react-router-dom'

const PageHeadingIcon = ({ className, to }) => {
  return (
    <div className="page-heading-icon-main">
      <Link to={to} className='bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center'>
        <i className={`icon ${className}`}></i>
      </Link>
    </div>
  )
}

export default PageHeadingIcon