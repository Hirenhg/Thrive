import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from '../../../components/Pagination/Pagination';

const Transfers = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
     axios.get("/api/vas/transfers.json").then((res) => {
      setTransfers(res.data.data);
    });
  }, []);

  return (
    <div className="vas-history-list" id="VasTransferHistoryList">
    <div className="margin-b-20 text-primary fw-medium">
        VAS transfer history
    </div>
      <div className="history-list-content-block">
        <div className="history-list-data">
          <ul className="history-list-title d-grid align-items-center pb-3">
            <li className="f-size-12 text-gray-300 text-nowrap">Date</li>
            <li className="text-end"></li>
            <li className="f-size-12 text-gray-300 text-nowrap text-end">
              Total Wallet transfers
            </li>
            <li></li>
          </ul>
          <div className="accordion" id="accordion-transfers-history">
           <div className="accordion-item-block mb-3">
              {transfers.map((t, index) => (
                  <div key={index} className="accordion-item border-0">
                    <div className="accordion-header" id={`heading-${index}`}>
                      <div className="list-item-row d-grid align-items-center">
                        <span className="f-size-14 text-primary fw-medium text-nowrap">
                          {t.date}
                        </span>
                        <span className="text-end"></span>
                        <span className="f-size-12 text-gray-300 fw-medium text-end">
                          {t.total}
                        </span>
                        <span>
                          <button
                            className="accordion-button border-0 d-flex align-items-center collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded="false"
                             aria-controls={`collapse-${index}`} 
                          ></button>
                        </span>
                      </div>
                    </div>
                    <div
                      id={`collapse-${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion-transfers-history"
                      aria-labelledby={`heading-${index}`}
                    >
                      <div className="accordion-body px-3 py-2">
                        {t.items.map((item, i) => (
                          <div className="transfer-item d-grid align-items-center" key={i}>
                            <div></div>
                            <div className="transfer-wallet f-size-10 text-gray-300 fw-medium text-end">
                              {item.wallet}
                            </div>
                            <div className="transfer-amount f-size-10 text-gray-300 fw-medium text-end">
                              {item.amount}
                            </div>
                            <div></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              ))} 
          </div>
          </div>
        </div>
      </div>
      <Pagination TotalCount="1 to 10 of 11" pgIndex={"1" || "2"  || "3"  || "4"} />  
    </div>
  );
};

export default Transfers;
