import React, { useState } from "react";
import { images } from "../../config/images";
import { storeLogos } from "../../config/images";
import ViewBarcode from "../../components/Dialogs/ViewBarcode/ViewBarcode";

const StoreDeposit = () => {
  const [openViewBarcode, setOpenViewBarcode] = useState(false);

  const wholesalers = [
    "Savemor Cash & Carry",
    "Olifants Cash & Carry",
    "Springs Cash & Carry",
    "Market Cash & Carry",
    "Pretoria West Cash & Carry",
    "Sunshine Hillfox Cash & Carry",
  ];
  return (
    <>
      <div className="space-y-4">
        <div className="bg-white border-radius-14 w-100 rounder-sm-0 border-ea padding-30 margin-b-20 text-center">
          <a className="payat-logo margin-b-20 d-block">
            <img src={images.payaLogo} alt="payat" />
          </a>
          <div className="text-gray-400 f-size-14 margin-b-10">
            You can now make cash deposits at any Pay store to update your Thrive
            balance.
          </div>
          <div className="fw-medium text-primary-hover f-size-14 margin-b-10">
            My reference number <br />
            <span className="pt-1 d-block">118245098544</span>
          </div>
          <div className="barcode-img margin-b-20">
            <img src={images.barcodeImage} alt="barcode" className="mx-auto" />
          </div>
          <button onClick={() => setOpenViewBarcode(true)} className="btn btn-primary w-100 view-barcode-btn f-size-12">
            View barcode
          </button>
        </div>
        <div className="bg-white border-radius-14 w-100 rounder-sm-0 border-ea padding-30">
          <div className="margin-b-20">
            <div className="text-primary fw-medium margin-b-10">
              Pay deposit fees
            </div>
            <div className="text-gray-400 f-size-14">
              R 8.05 (incl. VAT) + 8.05% (incl. VAT)
            </div>
          </div>
          <div className="fw-medium text-primary margin-b-10">Pay Stores</div>
          <div className="d-grid align-items-center stores-logos-row margin-b-20">
            {storeLogos.map((logo, i) => (
              <a key={i} className="store-logo d-flex align-items-center justify-content-center overflow-hidden">
                <img src={logo} alt={`store-logo-${i}`} />
              </a>
            ))
            }
          </div>
          <div className="fw-medium text-primary margin-b-10">Pay wholesalers</div>
          <div className="d-grid pay-wholesalers-row">
            {wholesalers.map((name, i) => (
              <div key={i} className="wholesaler-name d-flex align-items-center">
                <i className="ico-super-spaza me-1"></i>
                <span className="fw-medium text-primary-hover f-size-14">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ViewBarcode open={openViewBarcode} onClose={() => setOpenViewBarcode(false)} referenceNumber="118245098544" />
    </>
  );
};

export default StoreDeposit;
