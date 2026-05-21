import React from "react"
import { Link } from "react-router-dom";
function Calender() {
  return (
    <>
 <div className="main-wrapper">
  {/* Topbar Start */}
 
  {/* Topbar End */}
  {/* Search Modal */}
 
  {/* Sidenav Menu End */}
  {/* ========================
			Start Page Content
		========================= */}
  <div className="page-wrapper">
    {/* Start Content */}
    <div className="content">
      {/* Start Page Header */}
      <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div className="flex-grow-1">
          <h4 className="fw-semibold mb-0"> Appointment </h4>
        </div>
        <div className="text-end d-flex">
          {/* dropdown*/}
          <div className="dropdown me-1">
            <a
              href="javascript:void(0);"
              className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export
              <i className="ti ti-chevron-down ms-2" />
            </a>
            <ul className="dropdown-menu p-2">
              <li>
                <a className="dropdown-item" href="#">
                  Download as PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Download as Excel
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
            <a
              href="appointments.html"
              className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              {" "}
              <i className="ti ti-list fs-14 text-body" />
            </a>
            <a
              href="appointment-calendar.html"
              className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              {" "}
              <i className="ti ti-calendar-event fs-14 text-body" />{" "}
            </a>
          </div>
          <a
            href="new-appointment.html"
            className="btn btn-primary ms-2 fs-13 btn-md"
          >
            <i className="ti ti-plus me-1" /> New Appointment{" "}
          </a>
        </div>
      </div>
      {/* End Page Header */}
      {/*  Start Filter */}
      <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex right-content align-items-center flex-wrap mb-3">
            <div
              id="reportrange"
              className="reportrange-picker d-flex align-items-center"
            >
              <i className="ti ti-calendar text-gray-5 fs-14 me-1" />
              <span className="reportrange-picker-field">
                16 Apr 25 - 16 Apr 25
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
          <div className="dropdown me-2">
            <a
              href="javascript:void(0);"
              className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i className="ti ti-filter text-gray-5 me-1" />
              Filters
            </a>
            <div
              className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                <h4 className="mb-0 fw-bold">Filter</h4>
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="link-danger text-decoration-underline"
                  >
                    Clear All
                  </a>
                </div>
              </div>
              <form action="#">
                <div className="filter-body pb-0">
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="form-label">Patient</label>
                      <a
                        href="javascript:void(0);"
                        className="link-primary mb-1"
                      >
                        Reset
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i className="ti ti-chevron-down ms-auto" />
                      </a>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div className="mb-3">
                          <div className="input-icon-start input-icon position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-3">
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/users/user-33.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Alberto Ripley
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/users/user-12.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Bernard Griffith
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/users/user-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Carol Lam
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/users/user-08.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Ezra Belcher
                            </label>
                          </li>
                        </ul>
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-white w-100 close-filter"
                            >
                              Cancel
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary w-100"
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="form-label">Doctor</label>
                      <a
                        href="javascript:void(0);"
                        className="link-primary mb-1"
                      >
                        Reset
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i className="ti ti-chevron-down ms-auto" />
                      </a>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div className="mb-3">
                          <div className="input-icon-start input-icon position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-3">
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/doctors/doctor-01.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dr. Mick Thompson
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/doctors/doctor-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dr. Sarah Johnson
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/doctors/doctor-03.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dr. Emily Carter
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/doctors/doctor-04.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dr. David Lee
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-xs rounded-circle me-2">
                                <img
                                  src="assets/img/doctors/doctor-05.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dr. Anna Kim
                            </label>
                          </li>
                        </ul>
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-white w-100 close-filter"
                            >
                              Cancel
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary w-100"
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="form-label">Designation</label>
                      <a
                        href="javascript:void(0);"
                        className="link-primary mb-1"
                      >
                        Reset
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i className="ti ti-chevron-down ms-auto" />
                      </a>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div className="mb-3">
                          <div className="input-icon-start input-icon position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-3">
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Cardiologist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Orthopedic Surgeon
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Pediatrician
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Gynecologist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Psychiatrist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Neurosurgeon
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Oncologist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Pulmonologist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Urologist
                            </label>
                          </li>
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Dermatologist
                            </label>
                          </li>
                        </ul>
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-white w-100 close-filter"
                            >
                              Cancel
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary w-100"
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="form-label">Mode</label>
                      <a
                        href="javascript:void(0);"
                        className="link-primary mb-1"
                      >
                        Reset
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i className="ti ti-chevron-down ms-auto" />
                      </a>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div className="mb-3">
                          <div className="input-icon-start input-icon position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-3">
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              In Person
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Online
                            </label>
                          </li>
                        </ul>
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-white w-100 close-filter"
                            >
                              Cancel
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary w-100"
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-icon-end position-relative">
                      <input
                        type="text"
                        className="form-control bookingrange"
                        placeholder="dd/mm/yyyy"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="form-label">Status</label>
                      <a
                        href="javascript:void(0);"
                        className="link-primary mb-1"
                      >
                        Reset
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i className="ti ti-chevron-down ms-auto" />
                      </a>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div className="mb-3">
                          <div className="input-icon-start input-icon position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-3">
                          <li className="mb-1">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Checked Out
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Checked In
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Cancelled
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Schedule
                            </label>
                          </li>
                          <li className="mb-0">
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Confirmed
                            </label>
                          </li>
                        </ul>
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-white w-100 close-filter"
                            >
                              Cancel
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary w-100"
                            >
                              Select
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-light btn-md me-2 fw-medium"
                    id="close-filter"
                  >
                    Close
                  </a>
                  <button
                    type="submit"
                    className="btn btn-primary btn-md fw-medium"
                  >
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span className="me-1"> Sort By : </span> Recent
            </a>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Recent
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item rounded-1"
                >
                  Oldest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  End Filter */}
      {/* start Card */}
      <div className="card mb-0">
        <div className="card-body">
          <div id="calendar" />
        </div>
      </div>
      {/* end card */}
    </div>
    {/* End Content */}
  
  </div>
  {/* ========================
			End Page Content
		========================= */}
</div>

  
</>

  );
}
export default Calender;