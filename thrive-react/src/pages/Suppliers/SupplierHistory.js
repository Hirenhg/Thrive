import React, { useEffect, useState } from 'react';
import FilterHeading from '../../components/FilterHeading/FilterHeading';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

const SupplierHistory = () => {
  const [historyList, setHistoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  // Fetch data from backend
  const fetchSupplierHistory = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/suppliers/history`, {
        params: {
          page,
          pageSize,
        },
      });

      setHistoryList(response.data.data || []);
      setTotalCount(response.data.totalCount || 0);
    } catch (error) {
      console.error('Error fetching supplier history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupplierHistory(pageIndex);
  }, [pageIndex]);

  const handlePdfDownload = (transactionId) => {
    // Example logic, replace with real endpoint
    window.open(`/api/suppliers/history/${transactionId}/pdf`, '_blank');
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="bg-white border-radius-14 w-100 contant-detail-box view-supplier-contant rounder-sm-0 padding-30 border-ea">
      <FilterHeading FilterHeadingName="History" showSelect={false} showdatepicker={true} />

      {loading ? (
        <div className="text-center p-3">Loading history...</div>
      ) : historyList.length === 0 ? (
        <div className="text-center text-gray-400 f-size-12">No transaction history found.</div>
      ) : (
        <>
          <table className="table margin-b-20">
            <tbody>
              {historyList.map((item, index) => (
                <tr key={index}>
                  <td className="px-0">
                    <table>
                      <tbody>
                        <tr>
                          <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                            <i className="icon-img icon-placeholder"></i>
                          </td>
                          <td className="label-text">
                            <label>
                              <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18">
                                Payment to {item.receiverName} Thrive ID {item.thriveId}
                              </span>
                              <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                                {new Date(item.date).toLocaleDateString('en-ZA', {
                                  day: '2-digit',
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="f-size-12 text-primary fw-medium text-right text-nowrap">
                    R{item.amount.toFixed(2)}
                  </td>
                  <td className="w-sm-100 m-width-auto">
                    <button
                      className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"
                      onClick={() => handlePdfDownload(item.transactionId)}
                    >
                      <span className="d-none d-sm-inline">Pdf</span> <i className="ico-download"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            TotalCount={`Showing ${(pageIndex - 1) * pageSize + 1} to ${Math.min(
              pageIndex * pageSize,
              totalCount
            )} of ${totalCount}`}
            pgIndex={pageIndex}
            onPageChange={(page) => setPageIndex(page)}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default SupplierHistory;
