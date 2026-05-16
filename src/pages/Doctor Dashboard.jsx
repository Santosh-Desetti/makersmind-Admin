
import React from "react"
import { Link } from "react-router-dom";
function Doctor (){
return(
    <>
    <div className="page-wrapper">
  {/* Start Content */}
  <div className="content pb-0">
    {/* Page Header */}
    <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
      <div>
        <h4 className="fw-bold mb-0">Doctor Dashboard</h4>
      </div>
      <div className="d-flex align-items-center flex-wrap gap-2">
        <a
          href="javascript:void(0);"
          className="btn btn-primary d-inline-flex align-items-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#new_appointment"
        >
          <i className="ti ti-plus me-1" />
          New Appointment
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-outline-white bg-white d-inline-flex align-items-center"
        >
          <i className="ti ti-calendar-time me-1" />
          Schedule Availability
        </a>
      </div>
    </div>
    {/* End Page Header */}
    {/* row start */}
    <div className="row">
      {/* col start */}
      <div className="col-xl-4 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <p className="mb-1">Total Appointments</p>
                <div className="d-flex align-items-center gap-1">
                  <h3 className="fw-bold mb-0">658</h3>
                  <span className="badge fw-medium bg-success flex-shrink-0">
                    +95%
                  </span>
                </div>
              </div>
              <span className="avatar border border-primary text-primary rounded-2 flex-shrink-0">
                <i className="ti ti-calendar-heart fs-20" />
              </span>
            </div>
            <div className="d-flex align-items-end">
              <div id="s-col-5" className="chart-set" />
              <span className="badge fw-medium badge-soft-success flex-shrink-0 ms-2">
                +21% <i className="ti ti-arrow-up ms-1" />
              </span>
              <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col-xl-4 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <p className="mb-1">Online Consultations</p>
                <div className="d-flex align-items-center gap-1">
                  <h3 className="fw-bold mb-0">125</h3>
                  <span className="badge fw-medium bg-danger flex-shrink-0">
                    -15%
                  </span>
                </div>
              </div>
              <span className="avatar border border-danger text-danger rounded-2 flex-shrink-0">
                <i className="ti ti-users fs-20" />
              </span>
            </div>
            <div className="d-flex align-items-end">
              <div id="s-col-6" className="chart-set" />
              <span className="badge fw-medium badge-soft-danger flex-shrink-0 ms-2">
                +21% <i className="ti ti-arrow-down ms-1" />
              </span>
              <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col-xl-4 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <p className="mb-1">Cancelled Appointments</p>
                <div className="d-flex align-items-center gap-1">
                  <h3 className="fw-bold mb-0">35</h3>
                  <span className="badge fw-medium bg-success flex-shrink-0">
                    +45%
                  </span>
                </div>
              </div>
              <span className="avatar border border-success text-success rounded-2 flex-shrink-0">
                <i className="ti ti-versions fs-20" />
              </span>
            </div>
            <div className="d-flex align-items-end">
              <div id="s-col-7" className="chart-set" />
              <span className="badge fw-medium badge-soft-success flex-shrink-0 ms-2">
                +31% <i className="ti ti-arrow-up ms-1" />
              </span>
              <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
    </div>
    {/* row end */}
    {/* row start */}
    <div className="row">
      {/* col start */}
      <div className="col-xl-4 d-flex">
        {/* card start */}
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0 text-truncate">
              Upcoming Appointments
            </h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Today <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Week
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <a
                href="javascript:void(0);"
                className="avatar me-2 flex-shrink-0"
              >
                <img
                  src="assets/img/doctors/doctor-01.jpg"
                  alt="img"
                  className="rounded-circle"
                />
              </a>
              <div>
                <h6 className="fs-14 mb-1 text-truncate">
                  <a href="javascript:void(0);" className="fw-semibold">
                    Andrew Billard
                  </a>
                </h6>
                <p className="mb-0 fs-13 text-truncate">#AP455698</p>
              </div>
            </div>
            <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-calendar-time text-dark me-1" />
                Monday, 31 Mar 2025
              </p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock text-dark me-1" />
                06:30 PM{" "}
              </p>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="fs-13 fw-semibold mb-1">Department</h6>
                <p>Cardiology</p>
              </div>
              <div className="col">
                <h6 className="fs-13 fw-semibold mb-1">Type</h6>
                <p className="text-truncate">Online Consultation</p>
              </div>
            </div>
            <div className="my-3 border-bottom pb-3">
              <a href="javascript:void(0);" className="btn btn-primary w-100">
                Start Appointment
              </a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="javascript:void(0);" className="btn btn-dark w-100">
                <i className="ti ti-brand-hipchat me-1" />
                Chat Now
              </a>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-white w-100"
              >
                <i className="ti ti-video me-1" />
                Video Consutation
              </a>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col-xl-8 d-flex">
        {/* card start */}
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0">Appointments</h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Monthly <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex align-items-center justify-content-end gap-2 mb-1 flex-wrap mb-3">
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-point-filled me-1 fs-18 text-primary" />
                Total Appointments
              </p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-point-filled me-1 fs-18 text-success" />
                Completed Appointments
              </p>
            </div>
            <div className="chart-set" id="s-col-20" />
          </div>
        </div>
        {/* card end */}
      </div>
      {/* col end */}
    </div>
    {/* row end */}
    {/* row start */}
    <div className="row row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-primary rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-user" />
            </span>
            <p className="mb-1 text-truncate">Total Patient</p>
            <h3 className="fw-bold mb-2">658</h3>
            <p className="mb-0 text-success text-truncate">+31% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-secondary rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-video" />
            </span>
            <p className="mb-1 text-truncate">Video Consultation</p>
            <h3 className="fw-bold mb-2">256</h3>
            <p className="mb-0 text-danger text-truncate">-21% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-success rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-calendar-up" />
            </span>
            <p className="mb-1 text-truncate">Rescheduled</p>
            <h3 className="fw-bold mb-2">141</h3>
            <p className="mb-0 text-success text-truncate">+64% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-danger rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-checklist" />
            </span>
            <p className="mb-1 text-truncate">Pre Visit Bookings</p>
            <h3 className="fw-bold mb-2">524</h3>
            <p className="mb-0 text-success text-truncate">+38% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-info rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-calendar-share" />
            </span>
            <p className="mb-1 text-truncate">Walkin Bookings</p>
            <h3 className="fw-bold mb-2">21</h3>
            <p className="mb-0 text-success text-truncate">+95% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <span className="avatar bg-soft-success text-success rounded-2 fs-20 d-inline-flex mb-2">
              <i className="ti ti-carousel-vertical" />
            </span>
            <p className="mb-1 text-truncate">Follow Ups</p>
            <h3 className="fw-bold mb-2">451</h3>
            <p className="mb-0 text-success text-truncate">+76% Last Week</p>
          </div>
        </div>
      </div>
      {/* col end */}
    </div>
    {/* row start */}
    {/* row start */}
    <div className="row">
      <div className="col-12 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0">Recent Appointments</h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Weekly <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            {/* Table start */}
            <div className="table-responsive table-nowrap">
              <table className="table border">
                <thead className="thead-light">
                  <tr>
                    <th>Patient</th>
                    <th>Date &amp; Time</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Consultation Fees</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </a>
                        <div>
                          <h6 className="fs-14 mb-1">
                            <a href="javascript:void(0);" className="fw-medium">
                              Alberto Ripley
                            </a>
                          </h6>
                          <p className="mb-0 fs-13">+1 56556 54565</p>
                        </div>
                      </div>
                    </td>
                    <td>27 May 2025 - 09:30 AM</td>
                    <td>Online</td>
                    <td>
                      <span className="badge bg-success fw-medium">
                        Checked Out
                      </span>
                    </td>
                    <td className="fw-semibold text-dark">$400</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-plus" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#edit_appointment"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-2" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </a>
                        <div>
                          <h6 className="fs-14 mb-1">
                            <a href="javascript:void(0);" className="fw-medium">
                              Susan Babin
                            </a>
                          </h6>
                          <p className="mb-0 fs-13">+1 65658 95654</p>
                        </div>
                      </div>
                    </td>
                    <td>26 May 2025 - 10:15 AM</td>
                    <td>Online</td>
                    <td>
                      <span className="badge bg-warning fw-medium">
                        Checked in
                      </span>
                    </td>
                    <td className="fw-semibold text-dark">$370</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-plus" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#edit_appointment"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-2" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </a>
                        <div>
                          <h6 className="fs-14 mb-1">
                            <a href="javascript:void(0);" className="fw-medium">
                              Carol Lam
                            </a>
                          </h6>
                          <p className="mb-0 fs-13">+1 55654 56647</p>
                        </div>
                      </div>
                    </td>
                    <td>25 May 2025 - 02:40 PM</td>
                    <td>In-Person</td>
                    <td>
                      <span className="badge bg-danger fw-medium">
                        Cancelled
                      </span>
                    </td>
                    <td className="fw-semibold text-dark">$450</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-plus" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#edit_appointment"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-2" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            src="assets/img/profiles/avatar-22.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </a>
                        <div>
                          <h6 className="fs-14 mb-1">
                            <a href="javascript:void(0);" className="fw-medium">
                              Marsha Noland
                            </a>
                          </h6>
                          <p className="mb-0 fs-13">+1 65668 54558</p>
                        </div>
                      </div>
                    </td>
                    <td>24 May 2025 - 11:30 AM</td>
                    <td>In-Person</td>
                    <td>
                      <span className="badge bg-info fw-medium">Schedule</span>
                    </td>
                    <td className="fw-semibold text-dark">$310</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-plus" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#edit_appointment"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-2" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            src="assets/img/profiles/avatar-25.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </a>
                        <div>
                          <h6 className="fs-14 mb-1">
                            <a href="javascript:void(0);" className="fw-medium">
                              John Elsass
                            </a>
                          </h6>
                          <p className="mb-0 fs-13">47851263</p>
                        </div>
                      </div>
                    </td>
                    <td>23 May 2025 - 04:10 PM</td>
                    <td>Online</td>
                    <td>
                      <span className="badge bg-info fw-medium">Schedule</span>
                    </td>
                    <td className="fw-semibold text-dark">$400</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                      >
                        <i className="ti ti-calendar-plus" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#edit_appointment"
                          >
                            <i className="ti ti-edit me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash me-2" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Table end */}
          </div>
        </div>
      </div>
    </div>
    {/* row end */}
    {/* row start */}
    <div className="row">
      {/* col start */}
      <div className="col-xl-4 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0">Availability</h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Trustcare Clinic <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    CureWell Medical Hub
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Trustcare Clinic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    NovaCare Medical
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    Greeny Medical Clinic
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Mon</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Tue</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Wed</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Thu</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Fri</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
              <p className="text-dark fw-semibold mb-0">Sat</p>
              <p className="mb-0 d-inline-flex align-items-center">
                <i className="ti ti-clock me-1" />
                11:00 PM - 12:30 PM
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 pb-2">
              <p className="text-dark fw-semibold mb-0">Sun</p>
              <p className="mb-0 d-inline-flex align-items-center text-danger">
                <i className="ti ti-clock me-1" />
                Closed
              </p>
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-light w-100 mt-2 fs-13"
            >
              Edit Availability
            </a>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col-xl-4 col-lg-6 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0 text-truncate">
              Appointment Statistics
            </h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Monthly <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div id="circle-chart-2" className="chart-set" />
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <div className="text-center">
                <p className="d-flex align-items-center mb-1 fs-13">
                  <i className="ti ti-circle-filled text-success fs-10 me-1" />
                  Completed
                </p>
                <h5 className="fw-bold mb-0">260</h5>
              </div>
              <div className="text-center">
                <p className="d-flex align-items-center mb-1 fs-13">
                  <i className="ti ti-circle-filled text-warning fs-10 me-1" />
                  Pending
                </p>
                <h5 className="fw-bold mb-0">21</h5>
              </div>
              <div className="text-center">
                <p className="d-flex align-items-center mb-1 fs-13">
                  <i className="ti ti-circle-filled text-danger fs-10 me-1" />
                  Cancelled
                </p>
                <h5 className="fw-bold mb-0">50</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col-xl-4 col-lg-6 d-flex">
        <div className="card shadow-sm flex-fill w-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0">Top Patients</h5>
            <div className="dropdown">
              <a
                href="javascript:void(0);"
                className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Weekly <i className="ti ti-chevron-down ms-1" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  className="avatar me-2 flex-shrink-0"
                >
                  <img
                    src="assets/img/profiles/avatar-06.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="fs-14 mb-1 text-truncate">
                    <a href="javascript:void(0);" className="fw-medium">
                      Alberto Ripley
                    </a>
                  </h6>
                  <p className="mb-0 fs-13 text-truncate">+1 56556 54565</p>
                </div>
              </div>
              <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                20 Appointments
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  className="avatar me-2 flex-shrink-0"
                >
                  <img
                    src="assets/img/profiles/avatar-12.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="fs-14 mb-1 text-truncate">
                    <a href="javascript:void(0);" className="fw-medium">
                      Susan Babin
                    </a>
                  </h6>
                  <p className="mb-0 fs-13 text-truncate">+1 65658 95654</p>
                </div>
              </div>
              <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                18 Appointments
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  className="avatar me-2 flex-shrink-0"
                >
                  <img
                    src="assets/img/profiles/avatar-08.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="fs-14 mb-1 text-truncate">
                    <a href="javascript:void(0);" className="fw-medium">
                      Carol Lam
                    </a>
                  </h6>
                  <p className="mb-0 fs-13 text-truncate">+1 55654 56647</p>
                </div>
              </div>
              <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                16 Appointments
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  className="avatar me-2 flex-shrink-0"
                >
                  <img
                    src="assets/img/profiles/avatar-22.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="fs-14 mb-1 text-truncate">
                    <a href="javascript:void(0);" className="fw-medium">
                      Marsha Noland
                    </a>
                  </h6>
                  <p className="mb-0 fs-13 text-truncate">+1 65668 54558</p>
                </div>
              </div>
              <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                14 Appointments
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-0">
              <div className="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  className="avatar me-2 flex-shrink-0"
                >
                  <img
                    src="assets/img/profiles/avatar-17.jpg"
                    alt="img"
                    className="rounded-circle"
                  />
                </a>
                <div>
                  <h6 className="fs-14 mb-1 text-truncate">
                    <a href="javascript:void(0);" className="fw-medium">
                      Irma Armstrong
                    </a>
                  </h6>
                  <p className="mb-0 fs-13 text-truncate">+1 45214 66568</p>
                </div>
              </div>
              <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                12 Appointments
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
    </div>
    {/* row end */}
  </div>
  {/* End Content */}
  {/* Footer Start */}
  {/* <div className="footer text-center bg-white p-2 border-top">
    <p className="text-dark mb-0">
      2026 ©{" "}
      <a href="javascript:void(0);" className="link-primary">
        Preclinic
      </a>
      , All Rights Reserved
    </p>
  </div> */}
  {/* Footer End */}
</div>

    </>
)
}
export default Doctor;