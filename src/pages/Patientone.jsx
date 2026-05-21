import React from "react";
import { Link } from "react-router-dom";
function patientone() {
  return (
    <>

      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Patients List{" "}
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Patients : 565
                </span>
              </h4>
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
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to="/patientone"
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-body" />
                </Link>
                <Link
                  to="/Patientsgrid"
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-layout-grid fs-14 text-body" />
                </Link>
              </div>
              <a
                href="create-patient.html"
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" />
                New Patient
              </a>
            </div>
          </div>
          {/* End Page Header */}
          {/*  Start Filter */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap">
            <div>
              <div className="search-set mb-3">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="table-search d-flex align-items-center mb-0">
                    <div className="search-input">
                      <a href="javascript:void(0);" className="btn-searchset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
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
                            <ul className="mb-3">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Available
                                </label>
                              </li>
                              <li className="mb-0">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Unavailable
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
          {/*  Start Table */}
          <div className="table-responsive">
            <table className="table datatable table-nowrap">
              <thead className="">
                <tr>
                  <th>Patient</th>
                  <th>Phone</th>
                  <th>Doctor</th>
                  <th>Address</th>
                  <th>Last Visit</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-08.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Alberto Ripley{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          26, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 41245 54132</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-01.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Mick Thompson
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Cardiologist</p>
                      </div>
                    </div>
                  </td>
                  <td>Miami, Florida</td>
                  <td>30 Apr 2025</td>
                  <td>
                    <span className="badge badge-soft-success rounded text-success border border-success fs-13 fw-medium">
                      Available
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-16.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Susan Babin{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          21, Female{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 54554 54789</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-02.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Sarah Johnson
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Orthopedic Surgeon</p>
                      </div>
                    </div>
                  </td>
                  <td>Austin, Texas</td>
                  <td>15 Apr 2025</td>
                  <td>
                    <span className="badge badge-soft-danger rounded text-danger border border-danger fs-13 fw-medium">
                      Unavailable
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-06.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Carol Lam{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          28, Female{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 43554 54985</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-03.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Emily Carter
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Pediatrician</p>
                      </div>
                    </div>
                  </td>
                  <td>Seattle, Washington</td>
                  <td>02 Apr 2025</td>
                  <td>
                    <span className="badge badge-soft-success rounded text-success border border-success fs-13 fw-medium">
                      Available
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-25.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Marsha Noland{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          25, Female{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 47554 54257</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-04.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. David Lee
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Gynecologist</p>
                      </div>
                    </div>
                  </td>
                  <td>Chicago, Illinois</td>
                  <td>27 Mar 2025</td>
                  <td>
                    <span className="badge badge-soft-danger rounded text-danger border border-danger fs-13 fw-medium">
                      Unavailable
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-39.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Irma Armstrong{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          32, Female{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 54114 57526</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-05.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Anna Kim
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Psychiatrist</p>
                      </div>
                    </div>
                  </td>
                  <td>Phoenix, Arizona</td>
                  <td>12 Mar 2025</td>
                  <td>
                    <span className="badge badge-soft-success rounded text-success border border-success fs-13 fw-medium">
                      Available
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-14.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Jesus Adams{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          27, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 51247 56574</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-06.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. John Smith
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Neurosurgeon</p>
                      </div>
                    </div>
                  </td>
                  <td>Atlanta, Georgia</td>
                  <td>05 Mar 2025</td>
                  <td>
                    <span className="badge badge-soft-danger rounded text-danger border border-danger fs-13 fw-medium">
                      Unavailable
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Ezra Belcher{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          28, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 41452 25741</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-07.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Lisa White
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Oncologist</p>
                      </div>
                    </div>
                  </td>
                  <td>San Diego, California</td>
                  <td>24 Feb 2025</td>
                  <td>
                    <span className="badge badge-soft-success rounded text-success border border-success fs-13 fw-medium">
                      Available
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-05.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Glen Lentz{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          22, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 51425 21498</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-08.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Patricia Brown
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Pulmonologist</p>
                      </div>
                    </div>
                  </td>
                  <td>Denver, Colorado</td>
                  <td>16 Feb 2025</td>
                  <td>
                    <span className="badge badge-soft-danger rounded text-danger border border-danger fs-13 fw-medium">
                      Unavailable
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-07.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        Bernard Griffith{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          34, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 45214 98741</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-09.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Rachel Green
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Urologist</p>
                      </div>
                    </div>
                  </td>
                  <td>Boston, Massachusetts</td>
                  <td>01 Feb 2025</td>
                  <td>
                    <span className="badge badge-soft-success rounded text-success border border-success fs-13 fw-medium">
                      Available
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar avatar-md me-2"
                      >
                        <img
                          src="assets/img/users/user-17.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </a>
                      <a
                        href="patientdetails"
                        className="text-dark fw-semibold"
                      >
                        John Elsass{" "}
                        <span className="text-body fs-13 fw-normal d-block">
                          {" "}
                          23, Male{" "}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td>+1 41245 32540</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a
                        href="patientdetails"
                        className="avatar me-2 flex-shrink-0"
                      >
                        <img
                          src="assets/img/doctors/doctor-10.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14 mb-1">
                          <a href="patientdetails" className="fw-semibold">
                            Dr. Michael Smith
                          </a>
                        </h6>
                        <p className="mb-0 fs-13">Cardiologist</p>
                      </div>
                    </div>
                  </td>
                  <td>Orlando, Florida</td>
                  <td>25 Jan 2025</td>
                  <td>
                    <span className="badge badge-soft-danger rounded text-danger border border-danger fs-13 fw-medium">
                      Unavailable
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <a
                        href="appointments.html"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-cog" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="edit-patient.html"
                            className="dropdown-item d-flex align-items-center"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="patientdetails"
                            className="dropdown-item d-flex align-items-center"
                          >
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  End Table */}
        </div>
        {/* End Content */}

      </div>

    </>
  )
}
export default patientone;