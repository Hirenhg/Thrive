import React, { useEffect, useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import FilterHeading from '../../components/FilterHeading/FilterHeading';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

const Documents = () => {
    const [activeTab, setActiveTab] = useState('statements');
    const [statements, setStatements] = useState([]);
    const [proofs, setProofs] = useState([]);
    const [creditNotes, setCreditNotes] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [pageIndex, setPageIndex] = useState(1);

    // Fetch data on tab/year change
    useEffect(() => {
        if (activeTab === 'statements') {
            fetchStatements();
        } else if (activeTab === 'proof-payments') {
            fetchProofOfPayments();
        } else if (activeTab === 'credit-notes') {
            fetchCreditNotes();
        }
    }, [activeTab, selectedYear, pageIndex]);

    const fetchStatements = async () => {
        const { data } = await axios.get(`/api/documents/statements?year=${selectedYear}`);
        setStatements(data);
    };

    const fetchProofOfPayments = async () => {
        const { data } = await axios.get(`/api/documents/proof-of-payments?page=${pageIndex}`);
        setProofs(data.items);
    };

    const fetchCreditNotes = async () => {
        const { data } = await axios.get(`/api/documents/credit-notes?year=${selectedYear}`);
        setCreditNotes(data);
    };

    return (
        <div className="documents-main">
            <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
                <PageHeading PageHeadingName="Documents" iconClassName="ico-documents" />
                <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded">
                    {["statements", "proof-payments", "credit-notes"].map(tab => (
                        <button key={tab}
                            className={`nav-link rounded f-size-12 fw-medium text-center ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}>
                            {tab.replace("-", " ").replace(/^\w/, c => c.toUpperCase())}
                        </button>
                    ))}
                </div>
            </div>

            {/* Statements */}
            {activeTab === 'statements' && (
                <div className="tab-pane fade show active">
                    <div className="bg-white border-radius-14 contant-detail-box border-ea">
                        <div className="d-flex flex-wrap justify-content-between">
                            {/* Download Custom Statement */}
                            <div className="custom-statement-box">
                                <div className="accordion-item bg-gray-100 border-gray-200">
                                    <h6 className="padding-20 text-primary fw-medium">Custom statement</h6>
                                    <div className="padding-20">
                                        <form>
                                            <div className="form-group margin-b-10">
                                                <label className="form-label">Start Date</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className="form-group margin-b-10">
                                                <label className="form-label">End Date</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className="form-group margin-b-20">
                                                <label className="form-label">Format</label>
                                                <select className="form-control">
                                                    <option value="excel">Excel</option>
                                                    <option value="csv">CSV</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Download</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Statement List */}
                            <div className="statement-list-col">
                                <div className="d-flex justify-content-between align-items-center margin-b-20">
                                    <h6 className="mb-0 text-primary fw-medium">Statements</h6>
                                    <select className="form-control w-sm-150" onChange={e => setSelectedYear(e.target.value)}>
                                        {[2025, 2024, 2023].map(y => (
                                            <option key={y} value={y}>{y}</option>
                                        ))}
                                    </select>
                                </div>
                                <ul className="list-group">
                                    {statements.map(statement => (
                                        <li key={statement.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-gray-100 iconbox margin-r-10">
                                                    <i className="ico-invoice" />
                                                </div>
                                                <span>{statement.month} {statement.year}</span>
                                            </div>
                                            <a href={statement.pdfUrl} download className="btn btn-outline btn-pdf">Pdf <i className="ico-download"></i></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Proof of Payments */}
            {activeTab === 'proof-payments' && (
                <div className="tab-pane fade show active">
                    <div className="bg-white border-radius-14 contant-detail-box border-ea">
                        <FilterHeading FilterHeadingName="Proof of payments" showSelect={false} />
                        <table className="table border-t">
                            <tbody>
                                {proofs.map((proof, i) => (
                                    <tr key={i}>
                                        <td className="px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="iconbox margin-r-10"><i className="icon-placeholder" /></div>
                                                <div>
                                                    <span>{proof.supplierName}</span>
                                                    <p className="f-size-10 text-gray-400">Paid on {proof.paidDate}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-primary text-right">+R {proof.amount}</td>
                                        <td>
                                            <a href={proof.pdfUrl} className="btn btn-outline btn-pdf" download>Pdf <i className="ico-download" /></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination TotalCount="1 to 10 of 119" pgIndex={pageIndex} setPgIndex={setPageIndex} />
                    </div>
                </div>
            )}

            {/* Credit Notes */}
            {activeTab === 'credit-notes' && (
                <div className="tab-pane fade show active">
                    <div className="bg-white border-radius-14 contant-detail-box border-ea">
                        <div className="d-flex justify-content-between align-items-center margin-b-20">
                            <h6 className="mb-0 text-primary fw-medium">Credit Notes</h6>
                            <select className="form-control w-sm-150" onChange={e => setSelectedYear(e.target.value)}>
                                {[2025, 2024, 2023].map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <ul className="list-group">
                            {creditNotes.map(note => (
                                <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-gray-100 iconbox margin-r-10"><i className="ico-invoice" /></div>
                                        <span>{note.month} {note.year}</span>
                                    </div>
                                    <a href={note.pdfUrl} download className="btn btn-outline btn-pdf">Pdf <i className="ico-download" /></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Documents;
