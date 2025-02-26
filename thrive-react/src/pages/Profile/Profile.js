import React, { useState } from 'react'
import Personal from './Personal'
import Shop from './Shop'
import Thrive from './Thrive'
import Marketing from './Marketing'
import TermsAndConditions from "./TermsAndConditions";
import Support from './Support'
import DeleteAccount from './DeleteAccount'
const Profile = () => {
    const [activeTab, setActiveTab] = useState("personal");
    return (
        <div className='profile-main'>
            <div className="d-flex align-items-start modal-body-content">
                <div className="nav flex-column nav-pills modal-profile-tabs w-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "personal" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("personal")}>
                        <i className="tab-icon ico-user margin-r-10"></i>Personal
                    </button>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "shop" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("shop")}>
                        <i className="tab-icon ico-shop margin-r-10"></i>Shop
                    </button>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "thrive" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("thrive")}>
                        <i className="tab-icon ico-thrive margin-r-10"></i>Thrive
                    </button>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "marketing" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("marketing")}>
                        <i className="tab-icon ico-marketing margin-r-10"></i>Marketing
                    </button>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "termsandconditions" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("termsandconditions")}>
                        <i className="tab-icon ico-tc margin-r-10"></i>Terms & conditions
                    </button>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center margin-b-10 ${activeTab === "support" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("support")}>
                        <i className="tab-icon ico-support margin-r-10"></i>Support
                    </button>
                    <div className="divider margin-b-10"></div>
                    <button className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center ${activeTab === "deleteaccount" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("deleteaccount")}>
                        <i className="tab-icon ico-delete margin-r-10"></i>Delete account
                    </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    {activeTab === "personal" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <Personal />
                            </div>
                        </div>
                    )}
                    {activeTab === "shop" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <Shop />
                            </div>
                        </div>
                    )}
                    {activeTab === "thrive" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <Thrive />
                            </div>
                        </div>
                    )}
                    {activeTab === "marketing" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <Marketing />
                            </div>
                        </div>
                    )}
                    {activeTab === "termsandconditions" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <TermsAndConditions />
                            </div>
                        </div>
                    )}
                    {activeTab === "support" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <Support />
                            </div>
                        </div>
                    )}
                    {activeTab === "deleteaccount" && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="modal-tab-content">
                                <DeleteAccount />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile