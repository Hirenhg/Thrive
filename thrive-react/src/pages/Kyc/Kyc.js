import React, { useState } from 'react';
import BusinessType from './BusinessType';
import BusinessDetail from './BusinessDetail';
import BusinessAddress from './BusinessAddress';
import CompanyDocuments from './CompanyDocuments';
import Representative from './Representative';
import RepresentAddress from './RepresentAddress';
import RepresentativeList from './RepresentativeList';
import KycDeclaration from './KycDeclaration';
import Verification from './Verification';
import Iidentifii from './Iidentifii';
import { images } from '../../config/images'

const Kyc = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const businessDetailViewModel = {};
  const businessAddressViewModel = {};
  const companyDocuments = {};
  const currentRepresentative = {};
  const businessRepresentative = { BusinessRepresentatives: [] };
  const representAddressViewModel = {};
  const representativeVms = [];
  const kycDeclarationViewModel = {};
  const verificationViewModel = {};
   const iframeURL = '';
  const kycDeclaration = {};

  const supportEmail = 'support@thrive.trade';
  const supportPhone = '011 6363 640';

  const NextStep = () => setCurrentStep((s) => s + 1);
  const PreviousStep = () => setCurrentStep((s) => s - 1);
  const IdentifyPageBack = () => setCurrentStep(1);

  return (
    <div className="kyc-block">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center">
          {currentStep === 11 ? (
            <span className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center cursor-pointer" onClick={IdentifyPageBack}>
              <i className="icon ico-back"></i>
            </span>
          ) : (
            <a className="icon ico-dashboard" href="/dashboard"></a>
          )}
        </div>
        <h6 className="mb-0 text-primary fw-medium text-capitalize">Business Setup</h6>
      </div>

      {currentStep === 1 && (
        <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
          <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
            <div className="text-center">
              <div className="icon-block">
                <i className="ico-status-note"></i>
              </div>
              <h5 className="margin-b-20 text-primary fw-semibold">Please Note:</h5>
              <p className="margin-b-20 text-primary fw-medium f-size-14">
                By continuing you are giving us your consent to:
              </p>
              <p className="margin-b-20 text-gray-300 f-size-14">
                Collect and process your personal information through third parties, only for the purpose of verifying your identity.
              </p>
              <p className="margin-b-30 text-gray-300 f-size-14">
                Carry out identity and fraud prevention checks through the South African fraud prevention service.
              </p>
              <div className="form-group margin-b-30 d-flex align-items-center justify-content-between">
                <a className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" href="/dashboard">Cancel</a>
                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" onClick={NextStep}>Begin</button>
              </div>
              <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                Need help? Contact support <br />
                <a href={`mailto:${supportEmail}`} title={supportEmail} className="text-primary">{supportEmail}</a> or
                <a href={`tel:${supportPhone}`} title="Contact support" className="text-primary">{supportPhone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <BusinessType
          businessDetailViewModel={businessDetailViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 3 && (
        <BusinessDetail
          businessDetailViewModel={businessDetailViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 4 && (
        <BusinessAddress
          businessAddressViewModel={businessAddressViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 5 && (
        <CompanyDocuments
          companyDocumentsData={companyDocuments}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 6 && (
        <Representative
          businessRepresentativeVm={currentRepresentative}
          representatives={businessRepresentative.BusinessRepresentatives}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 7 && (
        <RepresentAddress
          representAddressVm={representAddressViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 8 && (
        <RepresentativeList
          representativesVm={representativeVms}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 9 && (
        <KycDeclaration
          kycDeclarationData={kycDeclarationViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 10 && (
        <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
          <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
            <div className="w-100 verification-details">
              <div className="margin-b-30 logo">
                  <img src={images.Logo} alt="logo" />
              </div>
              <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Verification</h4>
              <p className="margin-b-20 text-gray-300">Identification verification</p>
              <div className="kyc-form">
                <div className="w-100 mw-sm-150 identification-proof text-center m-auto mb-4">
                  <img alt="proof" src={images.identificationProof} />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                  <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
                  <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center" onClick={NextStep}>Next <i className="arrow-right mx-2"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 11 && (
        <Verification
          verificationViewModel={verificationViewModel}
          NextStep={NextStep}
          PreviousStep={PreviousStep}
        />
      )}
      {currentStep === 12 && (
        <Iidentifii iframeURL={iframeURL} kycDeclaration={kycDeclaration} />
      )}
    </div>
  );
};

export default Kyc;
