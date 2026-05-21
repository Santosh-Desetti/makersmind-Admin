import React from "react"
import { Link } from "react-router-dom";
function Newappointment() {
    return (
        <>
            <div className="page-wrapper">
                {/* Start Content */}
                <div className="content">
                    {/* row start */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* page header start */}
                            <div className="mb-4">
                                <h6 className="fw-bold mb-0 d-flex align-items-center">
                                    {" "}
                                    <a href="appointments.html" className="text-dark">
                                        {" "}
                                        <i className="ti ti-chevron-left me-1" />
                                        Appointments
                                    </a>
                                </h6>
                            </div>
                            {/* page header end */}
                            {/* card start */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="form">
                                        <div className="mb-3">
                                            <label className="form-label mb-1 fw-medium">
                                                Appointment ID<span className="text-danger ms-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="AP234354"
                                                disabled=""
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                                        <label className="form-label mb-0 fw-medium">
                                                            Patient<span className="text-danger ms-1">*</span>
                                                        </label>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#add_modal"
                                                        >
                                                            <i className="ti ti-circle-plus me-1" />
                                                            Add New
                                                        </a>
                                                    </div>
                                                    <select className="select">
                                                        <option value="m-1">Select</option>
                                                        <option value="m-2">Alberto Ripley</option>
                                                        <option value="m-3">Susan Babin</option>
                                                        <option value="m-4">Martin Lisa</option>
                                                        <option value="m-5">Stella Mary</option>
                                                        <option value="m-6">Carol Lam</option>
                                                        <option value="m-7">Jesus Adams</option>
                                                        <option value="m-8">Ezra Belcher</option>
                                                        <option value="m-9">Unit Manager</option>
                                                        <option value="m-10">Bernard Griffith</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 fw-medium">
                                                        Department<span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <select className="select">
                                                        <option value="m-1">Select</option>
                                                        <option value="m-2">General Medicine</option>
                                                        <option value="m-3">Pediatrics</option>
                                                        <option value="m-4">Gynecology</option>
                                                        <option value="m-5">Cardiology</option>
                                                        <option value="m-6">Orthopedics</option>
                                                        <option value="m-7">Dermatology</option>
                                                        <option value="m-8">ENT</option>
                                                        <option value="m-9">Neurology</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 fw-medium">
                                                        Doctor<span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <select className="select">
                                                        <option value="m-1">Select</option>
                                                        <option value="m-2">Dr. Mick Thompson</option>
                                                        <option value="m-3">Dr. Sarah Johnson</option>
                                                        <option value="m-4">Dr. Emily Carter</option>
                                                        <option value="m-5">Dr. David Lee</option>
                                                        <option value="m-6">Dr. Anna Kim</option>
                                                        <option value="m-7">Dr. John Smith</option>
                                                        <option value="m-8">Dr. Lisa White</option>
                                                        <option value="m-9">Dr. Patrica Brown</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 fw-medium">
                                                        Appointment Type
                                                        <span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <select className="select">
                                                        <option value="m-1">Select</option>
                                                        <option value="m-2">In Person</option>
                                                        <option value="m-3">Online</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 fw-medium">
                                                        Date of Appointment
                                                        <span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <div className="input-icon-end position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control datetimepicker"
                                                            placeholder="dd/mm/yyyy"
                                                            defaultValue="dd/mm/yyyy"
                                                        />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-calendar" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label mb-1 fw-medium">
                                                        Time<span className="text-danger ms-1">*</span>
                                                    </label>
                                                    <div className="input-icon-end position-relative">
                                                        <input type="text" className="form-control timepicker" />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-clock text-gray-7" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label mb-1 fw-medium">
                                                Appointment Reason<span className="text-danger ms-1">*</span>
                                            </label>
                                            <textarea className="form-control" rows={3} defaultValue={""} />
                                        </div>
                                        <div className="mb-0">
                                            <label className="form-label mb-1 fw-medium">
                                                Status<span className="text-danger ms-1">*</span>
                                            </label>
                                            <select className=" checkedout">
                                                <option value="m-1">Select</option>
                                                <option value="m-2">Checked Out</option>
                                                <option value="m-3">Checked In</option>
                                                <option value="m-4">Cancelled</option>
                                                <option value="m-5">Schedule</option>
                                                <option value="m-6">Confirmed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="javascript:void(0);" className="btn btn-light me-2">
                                    Cancel
                                </a>
                                <a href="javascript:void(0);" className="btn btn-primary">
                                    Create Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
                {/* End Content */}
                {/* Footer Start */}

                {/* Footer End */}
            </div>

        </>
    )
}
export default Newappointment;