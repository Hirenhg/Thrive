import React from 'react'

const Thrive = () => {
    return (
        <div className='thrive-main'>
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Thrive
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="form-group margin-b-20">
                    <label for="thriveID" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Thrive ID</label>
                    <input className="form-control f-size-12 fw-medium" readonly />
                </div>
                <div className="form-group margin-b-20 d-none">
                    <label for="thriveID" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Active devices</label>
                    <input className="form-control f-size-12 fw-medium" readonly />
                </div>
                <div className="device-list-block margin-b-20 d-md-none d-none">
                    <div className="margin-b-10">
                        <div className="d-flex align-items-center justify-content-between margin-b-10">
                            <div className="f-size-12 fw-medium text-primary">Active devices</div>
                            <div className="device-count f-size-12 fw-medium text-primary">
                                2
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                    <div className="device-lists d-none">
                        <div className="margin-b-10">
                            <div className="f-size-12 fw-medium text-gray-400"></div>
                            <div className="device-number f-size-12 fw-medium text-primary margin-b-10">DeviceId</div>
                            <div className="divider"></div>

                            <div className="d-flex align-items-center margin-b-10">
                                <div className="f-size-12 fw-medium text-gray-400 w-sm-60 margin-r-10">Device 1</div>
                                <div className="device-number f-size-12 fw-medium text-primary w-sm-100 margin-l-10">78486237598</div>
                                <div className="device-status-tag f-size-10 fw-medium text-white text-uppercase margin-l-10">Active</div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        <div className="margin-b-10">
                            <div className="d-flex align-items-center margin-b-10">
                                <div className="f-size-12 fw-medium text-gray-400 w-sm-60 margin-r-10">Device 2</div>
                                <div className="device-number f-size-12 fw-medium text-primary w-sm-100 margin-l-10">78486237598</div>
                                <div className="device-status-tag f-size-10 fw-medium text-white text-uppercase margin-l-10">Active</div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        <div className="margin-b-10">
                            <div className="d-flex align-items-center margin-b-10">
                                <div className="f-size-12 fw-medium text-gray-400 w-sm-60 margin-r-10">Device 3</div>
                                <div className="device-number f-size-12 fw-medium text-primary w-sm-100 margin-l-10">78486237598</div>
                                <div className="device-status-tag f-size-10 fw-medium text-white text-uppercase inactive margin-l-10">Inactive</div>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
                <div className="form-group margin-b-20 d-none">
                    <label for="consultantName" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Growth Consultant Name</label>
                    <input type="text" className="form-control f-size-12 fw-medium" id="consultantName" value="Thabo Moseki" readonly />
                </div>
                <div className="form-group margin-b-20 d-none">
                    <label for="contactNumber" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Contact Number</label>
                    <div className="d-flex align-items-center call-number">
                        <input type="text" className="form-control f-size-12 fw-medium margin-r-10" id="contactNumber" value="086 273 1543" readonly />
                        <button type="button" className="btn btn-outline border border-gray-200 mw-sm-90 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-call margin-r-10"></i> Call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thrive