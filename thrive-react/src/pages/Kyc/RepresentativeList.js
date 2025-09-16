import React, { useEffect, useState } from "react";
import { images } from "../../config/images";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RepresentativeList = ({ NextStep, PreviousStep }) => {
  const [shareholders, setShareholders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/kyc/shareholders.json")
      .then((res) => setShareholders(res.data))
      .catch((err) => console.error("Error fetching shareholders:", err));
  }, []);

  const handleRemove = (id) => {
    setShareholders((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="w-100 shareholders-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src={images.Logo} />
          </div>

          <p className="text-center text-primary f-size-12 margin-b-30">
            This includes the directors (as per CIPCI registration) <br />
            and shareholders of the business
          </p>

          <h4 className="margin-b-20 text-primary fw-semibold d-flex align-items-center justify-content-between">
            Directors & Shareholders
            <button
              onClick={() => navigate("/Representative")}
              className="plus-shareholders btn btn-link text-primary p-0"
              title="Add Representative"
            >
              + Add
            </button>
          </h4>

          <div className="kyc-form">
            <div
              className="accordion shareholder-accordion margin-b-10"
              id="accordionbody-contant"
            >
              {shareholders.map((person, idx) => (
                <div
                  key={person.id}
                  className="accordion-item margin-b-20 border rounded"
                >
                  <div className="accordion-header d-block" id={person.id}>
                    <button
                      className={`accordion-button border-0 bg-transparent f-size-12 fw-medium text-primary shadow-none ${
                        idx !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${person.id}`}
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={`collapse-${person.id}`}
                    >
                      {person.name} {person.surname}
                    </button>
                  </div>

                  <div
                    id={`collapse-${person.id}`}
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
                    aria-labelledby={person.id}
                    data-bs-parent="#accordionbody-contant"
                  >
                    <div className="accordion-body mw-sm-340 m-auto px-sm-0 pt-2">
                      {/* Row 1 */}
                      <div className="form-group-row d-sm-flex justify-content-sm-between">
                        <div className="form-group margin-b-10 w-100 me-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Name
                          </label>
                          <input
                            type="text"
                            value={person.name}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                        <div className="form-group margin-b-10 w-100 ms-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Surname
                          </label>
                          <input
                            type="text"
                            value={person.surname}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="form-group-row d-sm-flex justify-content-sm-between">
                        <div className="form-group margin-b-10 w-100 me-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Identity Number
                          </label>
                          <input
                            type="text"
                            value={person.identityNumber}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                        <div className="form-group margin-b-10 w-100 ms-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Cell Phone
                          </label>
                          <input
                            type="text"
                            value={person.cellphone}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="form-group-row d-sm-flex justify-content-sm-between">
                        <div className="form-group margin-b-10 w-100 me-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={person.dob}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                        <div className="form-group margin-b-10 w-100 ms-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Country of Residence
                          </label>
                          <input
                            type="text"
                            value={person.country}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* Row 4 */}
                      <div className="form-group-row d-sm-flex justify-content-sm-between">
                        <div className="form-group margin-b-10 w-100 me-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Director
                          </label>
                          <input
                            type="text"
                            value={person.director}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                        <div className="form-group margin-b-10 w-100 ms-sm-1">
                          <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                            Percentage Shares
                          </label>
                          <input
                            type="text"
                            value={person.shares}
                            className="form-control f-size-12 fw-medium"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="form-group d-flex align-items-center justify-content-between">
                        {idx > 0 && (
                          <button
                            type="button"
                            onClick={() => handleRemove(person.id)}
                            className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10"
                          >
                            Remove
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() =>
                            navigate(`/Representative?id=${person.id}`)
                          }
                          className="btn btn-outline border border-gray-200 bg-gray-200 text-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-primary f-size-12 margin-b-30">
              Shareholder % must be equal to 100% before proceeding
            </p>

            <div className="form-group d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10"
                onClick={PreviousStep}
              >
                Back
              </button>
              <button
                type="button"
                onClick={NextStep}
                className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
              >
                Next <i className="arrow-right mx-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeList;