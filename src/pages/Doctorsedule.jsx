import React from "react";
import { Link } from "react-router-dom";
function Doctorsedule(){
    return(
        <>
        <div className="page-wrapper">
  {/* Start Content */}
  <div className="content">
    {/* Start Page Header */}
    <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
      <div className="flex-grow-1">
        <h4 className="fw-bold mb-0">
          {" "}
          Doctor Schedule
          <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
            Total Doctors : 565
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
      </div>
    </div>
    {/* End Page Header */}
    <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
      <div className="search-set mb-3">
        <div className="d-flex align-items-center flex-wrap gap-2">
          <div className="table-search d-flex align-items-center mb-0">
            <div className="search-input">
              <a href="javascript:void(0);" className="btn-searchset" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
        <div className="dropdown me-2">
          <a
            href="javascript:void(0);"
            className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
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
              <h4 className="mb-0">Filter</h4>
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
                    <label className="form-label">Doctor</label>
                    <a href="javascript:void(0);" className="link-primary mb-1">
                      Reset
                    </a>
                  </div>
                  <select className="select2" multiple="multiple">
                    <option value="m-1" selected="">
                      Dr. Mick Thompson
                    </option>
                    <option value="m-2">Dr. Sarah Johnson</option>
                    <option value="m-3">Dr. Emily Carter</option>
                    <option value="m-4">Dr. David Lee</option>
                    <option value="m-5">Dr. Anna Kim</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Designation</label>
                    <a href="javascript:void(0);" className="link-primary mb-1">
                      Reset
                    </a>
                  </div>
                  <select className="select2" multiple="multiple">
                    <option value="m-1" selected="">
                      Cardiologist
                    </option>
                    <option value="m-2">Orthopedic Surgeon</option>
                    <option value="m-3">Pediatrician</option>
                    <option value="m-4">Gynecologist</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Department</label>
                    <a href="javascript:void(0);" className="link-primary mb-1">
                      Reset
                    </a>
                  </div>
                  <select className="select2" multiple="multiple">
                    <option value="m-1" selected="">
                      Cardiology
                    </option>
                    <option value="m-2">Orthopedics</option>
                    <option value="m-3">Pediatrics</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Date<span className="text-danger">*</span>
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
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Amount</label>
                    <a href="javascript:void(0);" className="link-primary mb-1">
                      Reset
                    </a>
                  </div>
                  <select className="select2" multiple="multiple">
                    <option value="m-1" selected="">
                      $501 - $1000
                    </option>
                    <option value="m-2">$501 - $1100</option>
                    <option value="m-3">$701 - $1200</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Status</label>
                    <a href="javascript:void(0);" className="link-primary mb-1">
                      Reset
                    </a>
                  </div>
                  <select className="select2" multiple="multiple">
                    <option value="m-1" selected="">
                      Available
                    </option>
                    <option value="m-2">Unavailable</option>
                  </select>
                </div>
              </div>
              <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light btn-md me-2"
                  id="close-filter"
                >
                  Close
                </a>
                <button type="submit" className="btn btn-primary btn-md">
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
              <a href="javascript:void(0);" className="dropdown-item rounded-1">
                Recently Added
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">
                Ascending
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">
                Desending
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">
                Last Month
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="dropdown-item rounded-1">
                Last 7 Days
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="table-responsive">
      <table className="table table-nowrap datatable">
        <thead className="thead-light">
          <tr>
            <th>Doctor</th>
            <th>Department</th>
            <th>Phone</th>
            <th>Availability</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-01.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Mick Thompson</a>
                  </h6>
                  <span className="fs-13 d-block"> Cardiologist </span>
                </div>
              </div>
            </td>
            <td>Cardiology </td>
            <td>+1 54554 54584</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio1"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio2"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio3"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio4"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio5"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio5"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio6"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio6"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio7"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio7"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-02.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Sarah Johnson</a>
                  </h6>
                  <span className="fs-13 d-block"> Orthopedic Surgeon </span>
                </div>
              </div>
            </td>
            <td>Orthopedics</td>
            <td>+1 43554 54584</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio8"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio8"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio9"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio9"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio10"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio10"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio11"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio11"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio12"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio12"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio13"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio13"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio-2"
                    id="btnradio14"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio14"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-03.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Emily Carter</a>
                  </h6>
                  <span className="fs-13 d-block"> Pediatrician </span>
                </div>
              </div>
            </td>
            <td>Pediatrics</td>
            <td>+1 471254 54585</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio15"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio15"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio16"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio16"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio17"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio17"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio18"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio18"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio19"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio19"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio20"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio20"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio21"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio21"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-04.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. David Lee</a>
                  </h6>
                  <span className="fs-13 d-block">Gynecologist</span>
                </div>
              </div>
            </td>
            <td>Gynecology</td>
            <td>+1 54114 54586</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio22"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio22"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio23"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio23"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio24"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio24"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio25"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio25"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio26"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio26"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio27"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio27"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio28"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio28"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-05.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Anna Kim</a>
                  </h6>
                  <span className="fs-13 d-block">Psychiatrist</span>
                </div>
              </div>
            </td>
            <td>Psychiatry</td>
            <td>+1 51247 54587</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio29"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio29"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio30"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio30"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio31"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio31"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio32"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio32"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio33"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio33"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio34"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio34"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio35"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio35"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-06.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. John Smith</a>
                  </h6>
                  <span className="fs-13 d-block">Neurosurgeon</span>
                </div>
              </div>
            </td>
            <td>Neurology</td>
            <td>+1 41452 54588</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio36"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio36"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio37"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio37"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio38"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio38"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio39"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio39"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio40"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio40"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio41"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio41"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio42"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio42"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-07.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Lisa White</a>
                  </h6>
                  <span className="fs-13 d-block">Oncologist</span>
                </div>
              </div>
            </td>
            <td>Oncologist</td>
            <td>+1 51425 54589</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio43"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio43"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio44"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio44"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio45"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio45"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio46"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio46"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio47"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio47"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio48"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio48"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio49"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio49"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-08.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Patricia Brown</a>
                  </h6>
                  <span className="fs-13 d-block">Pulmonologist</span>
                </div>
              </div>
            </td>
            <td>Pulmonologist</td>
            <td>+1 42565 54590</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio50"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio50"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio51"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio51"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio52"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio52"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio53"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio53"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio54"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio54"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio55"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio55"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio56"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio56"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-09.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Rachel Green</a>
                  </h6>
                  <span className="fs-13 d-block">Urologist</span>
                </div>
              </div>
            </td>
            <td>Urologist</td>
            <td>+1 45214 54591</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio57"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio57"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio58"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio58"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio59"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio59"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio60"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio60"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio61"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio61"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio62"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio62"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio63"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio63"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <a href="doctor-details.html" className="avatar me-2">
                  <img
                    src="assets/img/doctors/doctor-09.jpg"
                    alt="Doctor"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="mb-1 fs-14 fw-semibold">
                    <a href="doctor-details.html">Dr. Michael Smith</a>
                  </h6>
                  <span className="fs-13 d-block">Cardiologist</span>
                </div>
              </div>
            </td>
            <td>Cardiologist</td>
            <td>+1 41245 54592</td>
            <td>
              <div
                className="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio64"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio64"
                  >
                    M
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio65"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio65"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio66"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio66"
                  >
                    W
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio67"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio67"
                  >
                    T
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio68"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio68"
                  >
                    F
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio69"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio69"
                  >
                    S
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio70"
                  />
                  <label
                    className="btn btn-icon btn-sm rounded-circle btn-light"
                    htmlFor="btnradio70"
                  >
                    S
                  </label>
                </div>
              </div>
            </td>
            <td>
              <div className="action-item d-flex align-items-center gap-2">
                <a href="appointment-calendar.html">
                  <i className="ti ti-calendar-cog" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i className="ti ti-eye" />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  {/* End Content */}
 
</div>

        </>
    )
}
export default Doctorsedule