import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterHeading from "../../../components/FilterHeading/FilterHeading";
import PageHeadingIcon from "../../../components/PageHeading/PageHeadingIcon";
import Pagination from "../../../components/Pagination/Pagination";

const Documents = () => {
  const [activeTab, setActiveTab] = useState("statements");
  const [documents, setdocuments] = useState(null);

  useEffect(() => {
    axios
      .get("/api/documents/documents.json") 
      .then((res) => {
        setdocuments(res.data);
      })
      .catch((err) => {
        console.error("Error loading documents.json:", err);
      });
  }, []);

  if (!documents) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="documents-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <PageHeadingIcon PageHeadingName="Documents" iconClassName="ico-documents" />
        <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded" id="pills-tab" role="tablist">
          <button
            className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${
              activeTab === "statements" ? "active" : ""
            }`}
            type="button"
            role="tab"
            onClick={() => setActiveTab("statements")}
          >
            Statements
          </button>
          <button
            className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${
              activeTab === "proof-payments" ? "active" : ""
            }`}
            type="button"
            role="tab"
            onClick={() => setActiveTab("proof-payments")}
          >
            Proof of payments
          </button>
          <button
            className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${
              activeTab === "credit-notes" ? "active" : ""
            }`}
            type="button"
            role="tab"
            onClick={() => setActiveTab("credit-notes")}
          >
            Credit Notes
          </button>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        {/* Statements Tab */}
        {activeTab === "statements" && (
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
              <div className="d-flex flex-wrap justify-content-between">
                {/* Statements List */}
                <div className="statement-list-col">
                  <div className="statement-list-heading d-flex justify-content-between align-items-center margin-b-20">
                    <h6 className="mb-0 text-primary fw-medium text-capitalize">
                      Statements
                    </h6>
                  </div>
                  <div className="statement-list-contant">
                    <ul className="list-group">
                      {documents.statements.map((statement, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="bg-gray-100 rounded iconbox w-sm-40 margin-r-10">
                              <i className="ico-invoice"></i>
                            </div>
                            <span className="f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-nowrap">
                              {statement.month} {statement.year}
                            </span>
                          </div>
                          <a
                            href={statement.path}
                            download
                            className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"
                          >
                            <span className="d-none d-sm-inline">Pdf</span>{" "}
                            <i className="ico-download"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Proof of Payments Tab */}
        {activeTab === "proof-payments" && (
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
              <FilterHeading FilterHeadingName="Proof of payments" showSelect={false} />
              <table className="table margin-b-20 border-t" id="tblPOPList">
                <tbody>
                  {documents.proofPayments.map((payment, i) => (
                    <tr key={i}>
                      <td className="px-0">
                        <table>
                          <tbody>
                            <tr>
                              <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                <i className="icon-img icon-placeholder"></i>
                              </td>
                              <td className="document-info">
                                <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                                  {payment.vendor}
                                </span>
                                <p className="d-flex align-items-sm-center flex-column flex-sm-row pt-1 mb-0">
                                  <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">
                                    {payment.type}
                                  </label>
                                  <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                                    {payment.status} – {payment.date}
                                  </span>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="f-size-12 text-primary fw-medium text-right payment-amount text-nowrap">
                        {payment.amount}
                      </td>
                      <td className="w-sm-75 m-width-auto">
                        <button className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf">
                          <span className="d-none d-sm-inline">Pdf</span>
                          <i className="ico-download"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                TotalCount={`1 to ${documents.proofPayments.length} of ${documents.proofPayments.length}`}
                pgIndex={"1"}
              />
            </div>
          </div>
        )}

        {/* Credit Notes Tab */}
        {activeTab === "credit-notes" && (
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="statement-list-col">
                  <div className="statement-list-heading d-flex justify-content-between align-items-center margin-b-20">
                    <h6 className="mb-0 text-primary fw-medium text-capitalize">
                      Credit Notes
                    </h6>
                  </div>
                  <div className="statement-list-contant">
                    <ul className="list-group">
                      {documents.creditNotes.map((note, i) => (
                        <li
                          key={i}
                          className="list-group-item d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <div className="bg-gray-100 rounded iconbox w-sm-40 margin-r-10">
                              <i className="ico-invoice"></i>
                            </div>
                            <span className="f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-nowrap">
                              {note.month} {note.year}
                            </span>
                          </div>
                          <a
                            href={note.path}
                            download
                            className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"
                          >
                            <span className="d-none d-sm-inline">Pdf</span>
                            <i className="ico-download"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
