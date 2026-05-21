import React from "react"
import { Link } from "react-router-dom";
function Editdoctor(){
  return(
<>
<div className="page-wrapper">
  {/* Start Content */}
  <div className="content">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {/* Start Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-0 d-flex align-items-center">
              <a href="doctors.html">
                <i className="ti ti-chevron-left me-1 fs-14" />
                Doctor
              </a>
            </h6>
          </div>
        </div>
        {/* End Page Header */}
        {/* Start Add Doctor */}
        <div className="card mb-0">
          {/* <div class="card-header">
                          
                      </div> */}
          <div className="card-body">
            <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
              <h5 className="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
            </div>
            <form action="https://preclinic.dreamstechnologies.com/html/doctors.html">
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Contact Information</h6>
              </div>
              <div className="pb-0">
                {/* start row*/}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 d-flex align-items-center">
                      <label className="form-label">Profile Image</label>
                      <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                        <img
                          src="assets/img/doctors/doctor-01.jpg"
                          className="position-relative z-n1"
                          alt=""
                        />
                        <input
                          type="file"
                          className="form-control image-sign"
                          multiple=""
                        />
                        <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                          <a
                            href="javascript:void(0);"
                            className="text-white d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-photo fs-14" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Dr.Mick Thompson"
                          />
                        </div>
                      </div>
                      {/* end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Andrew"
                          />
                        </div>
                      </div>
                      {/* end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="+1 47895 58974"
                          />
                        </div>
                      </div>
                      {/* end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="mick@example.com"
                          />
                        </div>
                      </div>
                      {/* end col*/}
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            DOB <span className="text-danger">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Year Of Experience{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="+5 Years"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Department
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option selected="">Cardiology </option>
                            <option>Orthopedics</option>
                            <option>Pediatrics</option>
                            <option>Gynecology</option>
                            <option>Psychiatry</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Designation{" "}
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option selected="">Cardiologist</option>
                            <option>Orthopedic Surgeon</option>
                            <option>Pediatrics</option>
                            <option>Gynecology</option>
                            <option>Psychiatry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Medical License Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="MGF14578"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Language Spoken</label>
                          <input
                            className="input-tags form-control"
                            id="inputBox"
                            type="text"
                            data-role="tagsinput"
                            name="specialist"
                            defaultValue="English,French"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Blood Group
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option selected="">O+</option>
                            <option>O-</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Gender <span className="text-danger ms-1">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option selected="">Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={
                          "Dr.Mick Thompson is a compassionate and experienced internal medicine physician with over 5 years of clinical practice."
                        }
                      />
                    </div>
                    <div className="form-check form-switch mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="switchCheckDefault3"
                      >
                        Feature On Website
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchCheckDefault3"
                      />
                    </div>
                  </div>
                </div>
                {/* end row*/}
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Address Information</h6>
              </div>
              <div className="pb-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Address 1</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="2900 Alpha Avenue"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Address 2 </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="2900 Alpha Avenue"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Country</label>
                      <select className="select">
                        <option>Select</option>
                        <option selected="">United States</option>
                        <option>India</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>Brazil</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <select className="select">
                        <option>Select</option>
                        <option selected="">Los Angeles</option>
                        <option>San Francisco</option>
                        <option>San Francisco</option>
                        <option>San Jose</option>
                        <option>Fresno</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">State</label>
                      <select className="select">
                        <option>Select</option>
                        <option selected="">California</option>
                        <option>Texas</option>
                        <option>New York</option>
                        <option>Florida</option>
                        <option>Illinois</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="PA 15650"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Address Information</h6>
              </div>
              <div>
                <ul
                  className="nav nav-pills schedule-tab mb-3"
                  id="pills-tab2"
                  role="tablist"
                >
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-8"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Monday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-9"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Tuesday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-10"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Wednesday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-11"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Thursday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-12"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Friday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-13"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Saturday
                    </button>
                  </li>
                  <li className="nav-item me-1" role="presentation">
                    <button
                      className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                      data-bs-toggle="pill"
                      data-bs-target="#schedules-14"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Sunday
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent2">
                  <div
                    className="tab-pane fade active show"
                    id="schedules-8"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option selected="">Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-9"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-10"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-11"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-12"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-13"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="schedules-14"
                    role="tabpanel"
                  >
                    <div className="add-schedule-list">
                      <div className="row gx-3">
                        <div className="col-lg-5">
                          <div className="mb-3">
                            <label className="form-label">Session</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Morning</option>
                              <option>Noon</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="row align-items-end gx-3">
                            <div className="col-lg-9">
                              <div className="row gx-3">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">From</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">To</label>
                                    <div className="input-icon-end position-relative">
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="03 : 05  AM"
                                      />
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock-hour-10" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <a
                                  href="#"
                                  className="add-schedule-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                                >
                                  <i className="ti ti-plus fs-16" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <a href="#" className="btn btn-dark">
                    Apply All
                  </a>
                </div>
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Appointment Information</h6>
              </div>
              <div className="pb-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Appointment Type</label>
                      <select className="select">
                        <option>Select</option>
                        <option selected="">Online Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6" />
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Accept bookings (in Advance)
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={2}
                        />
                        <span className="input-group-text bg-transparent text-dark fs-14">
                          Days
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Appointment Duration</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={30}
                        />
                        <span className="input-group-text bg-transparent text-dark fs-14">
                          Mins
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Consultation Charge</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="$100"
                        />
                        <span className="input-group-text bg-transparent text-dark fs-14">
                          $
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Max Bookings Per Slot
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="switchCheckDefault2"
                      >
                        Display on Booking Page
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchCheckDefault2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Educational Information</h6>
              </div>
              <div className="pb-0">
                <div className="add-education-list">
                  <div className="row align-items-end">
                    <div className="col-lg-11">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="mb-3">
                            <label className="form-label">
                              Educational Degree
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="M.B.B.S"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mb-3">
                            <label className="form-label">University</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Harvard Medical School"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mb-3">
                            <label className="form-label">From</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="mb-3">
                            <label className="form-label">To</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="mb-3">
                        <a
                          href="#"
                          className="add-education-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus fs-16" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
              </div>
              <div className="pb-0">
                <div className="add-award-list">
                  <div className="row align-items-end">
                    <div className="col-lg-11">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Harvard Medical School"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">From</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="mb-3">
                        <a
                          href="#"
                          className="add-award-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus fs-16" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2 mb-3 feild-head">
                <h6 className="fw-bold mb-0">Certifications</h6>
              </div>
              <div className="pb-3 mb-3 border-bottom">
                <div className="add-certification-list">
                  <div className="row align-items-end">
                    <div className="col-lg-11">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Harvard Medical School"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">From</label>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="mb-3">
                        <a
                          href="#"
                          className="add-certification-btn p-2 bg-light btn-icon text-body rounded d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus fs-16" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-end gap-2">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light btm-md"
                  data-bs-dismiss="offcanvas"
                >
                  Cancel
                </a>
                <button className="btn btn-primary btm-md">Save Changes</button>
              </div>
            </form>
          </div>
          {/* <div class="card-footer">
                          
                      </div> */}
        </div>
        {/* End Add Doctor */}
      </div>
    </div>
  </div>
  {/* End Content */}
 
</div>

</>
)
}
export default Editdoctor