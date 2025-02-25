import React from 'react'
import TopBalance from '../../components/TopBalance/TopBalance'
import FilterHeading from '../../components/FilterHeading/FilterHeading'

const Balance = () => {
  return (
    <div className='balance-main'>
      <TopBalance />
      <div className="bg-white border-radius-14 w-100 balance-history-box rounder-sm-0 padding-30 border-ea">
        <FilterHeading/>
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
                  <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
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
                  <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
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
                  <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-arrow-right"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex align-items-center justify-content-between pt-1">
            <div class="f-size-14 text-primary line-height-20 text-nowrap margin-r-10">
              <span class="d-none d-sm-inline"> Showing </span> 1 to 10 of 51 <span class="d-none d-sm-inline">results</span></div>
            <div class="pagination-block">
              <ul class="pagination mb-0">
                <li class="page-item w-sm-40 page-first page-back disabled">
                  <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                    <i class="icon ico-back"></i>
                    <i class="icon ico-back"></i>
                  </a>
                </li>
                <li class="page-item w-sm-40 page-back disabled">
                  <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                    <i class="icon ico-back"></i>
                  </a>
                </li>
                <li class="page-item w-sm-40 active">
                  <a class="page-link text-center f-size-14 fw-semibold">1</a>
                </li>
                <li class="page-item w-sm-40">
                  <a class="page-link text-center f-size-14 fw-semibold">2</a>
                </li>
                <li class="page-item w-sm-40">
                  <a class="page-link text-center f-size-14 fw-semibold">3</a>
                </li>
                <li class="page-item w-sm-40">
                  <a class="page-link text-center f-size-14 fw-semibold">4</a>
                </li>
                <li class="page-item w-sm-40">
                  <a class="page-link text-center f-size-14 fw-semibold">5</a>
                </li>
                <li class="page-item w-sm-40">
                  <a class="page-link text-center f-size-14 fw-semibold">...</a>
                </li>
                <li class="page-item w-sm-40 page-next">
                  <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                    <i class="icon ico-next"></i>
                  </a>
                </li>
                <li class="page-item w-sm-40 page-last page-next ">
                  <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                    <i class="icon ico-next"></i>
                    <i class="icon ico-next"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Balance