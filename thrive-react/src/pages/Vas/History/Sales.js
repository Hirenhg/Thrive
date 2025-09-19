import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from '../../../components/Pagination/Pagination';
import IndividualSales from "./IndividualSales";
import { Link } from "react-router-dom";

const Sales = () => {
  const [salesHistory, setSalesHistory] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [showIndividual, setShowIndividual] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);


  useEffect(() => {
    axios.get("/api/vas/sales.json").then((res) => {
      setSalesHistory(res.data.data);
      setTotalCount(res.data.totalCount);
    });
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

   if (showIndividual && selectedSale) {
    return (
      <IndividualSales
        data={selectedSale}
        onBack={() => setShowIndividual(false)}
      />
    );
  }

  return (
    <div className="sales-main">
      <div className="margin-b-20 text-primary fw-medium">VAS sale history</div>

      <div className="vas-history-list" id="VasHistoryList">
        <div className="history-list-content-block">
          <ul className="history-list-title d-grid align-items-center pb-3">
            <li className="f-size-12 text-gray-300 text-nowrap">Trade Date</li>
            <li className="f-size-12 text-gray-300 text-nowrap text-center">
              Total VAS Sales
            </li>
            <li className="f-size-12 text-gray-300 text-nowrap text-right">
              Commission Accrued
            </li>
            <li></li>
          </ul>
        <div className="accordion-item-block mb-3">
            {salesHistory.map((sale, index) => (
                <div key={index} className="accordion-item border-0">
                  <div
                    className="accordion-header cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="list-item-row d-grid align-items-center">
                      <span className="f-size-14 text-primary fw-medium text-nowrap">
                        {new Date(sale.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="f-size-12 text-gray-300 fw-medium text-center">
                        R{sale.totalSales.toFixed(2)}
                      </span>
                      <span className="f-size-12 text-gray-300 fw-medium text-end">
                        R{sale.commission.toFixed(2)}
                      </span>
                      <span>
                        <button className="accordion-button border-0"></button>
                      </span>
                    </div>
                  </div>

                  {expandedIndex === index && (
                    <div className="accordion-collapse">
                      <div className="accordion-body p-3">
                        {sale.items.map((item, i) => (
                          <div
                            key={i}
                            className="sale-item d-grid align-items-center"
                          >
                            <div className="d-flex align-items-center">
                              <span
                                className="network-card border-radius-6 text-center margin-r-10"
                                style={{ flex: "0 0 45px" }}
                              >
                                <img
                                  alt={`${item.name}-logo`}
                                  src={item.logo}
                                  width={30}
                                  height={30}
                                />
                              </span>
                              <div className="sale-info">
                                <div className="item-name f-size-10 text-gray-300 fw-medium pb-1 text-capitalize">
                                  {item.name}
                                </div>
                                <Link className="f-size-12 fw-semibold text-underline cursor-pointer"
                                  onClick={() => {
                                      setSelectedSale(sale);
                                      setShowIndividual(true);
                                    }}
                                >
                                  View items
                                </Link>
                              </div>
                            </div>
                            <div className="sale-amount f-size-10 text-gray-300 fw-medium text-center">
                              R{item.amount.toFixed(2)}
                            </div>
                            <div className="sale-commission f-size-10 text-gray-300 fw-medium text-end">
                              R{item.commission.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                
              </div>
            ))}
          </div>
          <Pagination TotalCount="1 to 10 of 11" pgIndex={"1" || "2"  || "3"  || "4"} />  
        </div>
      </div>
    </div>
  );
};

export default Sales;
