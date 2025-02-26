import React from 'react'
import TopBalance from '../../components/TopBalance/TopBalance'
import FilterHeading from '../../components/FilterHeading/FilterHeading'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'

const Balance = () => {
  return (
    <div className='balance-main'>
      <TopBalance />
      <div className="bg-white border-radius-14 w-100 balance-history-box rounder-sm-0 padding-30 border-ea">
        <FilterHeading FilterHeadingName="Transaction History" showSelect={true} option1="Type" option2="Deposit" option3="Withdrawal" />
        <form id="ProfilePersonalForm" FormName="ProfilePersonalForm" className="w-100">
          <table className="table transaction-history-table" id="tblBalance">
            <thead className="bg-gray-100 rounded">
              <tr>
                <th className='border-0'>
                  <span className="f-size-12 text-primary-hover text-nowrap fw-medium"> 21 Feb 2025 - End of day balance</span>
                </th>
                <th className="w-sm-100 f-size-14 fw-bold text-primary-hover text-nowrap text-right border-0">
                  R652.77
                </th>
                <th className="w-sm-40 border-0">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-0 border-0">
                  <table>
                    <tr>
                      <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 border-0">
                        <i className="icon ico-wallet-transfer"></i>
                      </td>
                      <td className="label-text border-0">
                        <label>
                          <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                            Wallet Transfers
                          </span>
                          <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                            21 Feb 2025
                          </span>
                        </label>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="w-sm-100 f-size-14 text-primary-hover fw-medium text-right border-0">
                  <label>
                    <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                      -R 10.95
                    </span>
                  </label>
                </td>
                <td className="w-sm-40">
                  <Link to="/transaction-detail">
                    <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-0 border-0">
                  <table>
                    <tr>
                      <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 border-0">
                        <i className="icon ico-withdrwal"></i>
                      </td>
                      <td className="label-text">
                        <label>
                          <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap border-0">
                            Redemption
                          </span>
                          <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block border-0">
                            21 Feb 2025
                          </span>
                        </label>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="w-sm-100 f-size-14 text-primary-hover fw-medium text-right border-0">
                  <label>
                    <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                      R 25.00
                    </span>
                  </label>
                </td>
                <td className="w-sm-40 border-0">
                  <Link to="/transaction-detail">
                    <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <thead className="bg-gray-100 rounded">
              <tr>
                <th className='border-0'>
                  <span className="f-size-12 text-primary-hover text-nowrap fw-medium"> 19 Feb 2025 - End of day balance</span>
                </th>
                <th className="w-sm-100 f-size-14 fw-bold text-primary-hover text-nowrap text-right border-0">
                  R688.95
                </th>
                <th className="w-sm-40 border-0">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-0 border-0">
                  <table>
                    <tr>
                      <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 border-0">
                        <i className="icon ico-wallet-transfer"></i>
                      </td>
                      <td className="label-text border-0">
                        <label>
                          <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                            Wallet Transfers
                          </span>
                          <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                            21 Feb 2025
                          </span>
                        </label>
                      </td>
                    </tr>
                  </table>
                </td>
                <td className="w-sm-100 f-size-14 text-primary-hover fw-medium text-right border-0">
                  <label>
                    <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                      -R 100.00
                    </span>
                  </label>
                </td>
                <td className="w-sm-40 border-0">
                  <Link to="/transaction-detail">
                    <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination TotalCount="1 to 10 of 51" pgIndex={"1" || "2"  || "3"  || "4"} />
        </form>
      </div>
    </div>
  )
}

export default Balance