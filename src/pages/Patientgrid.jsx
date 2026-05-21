import React from "react"
import { Link } from "react-router-dom";
function Patientgrid(){
  return(
<>
<div className="page-wrapper">
  {/* Start Content */}
  <div className="content">
    {/* Start Page Header */}
    <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
      <div className="flex-grow-1">
        <h4 className="fw-bold mb-0">
          Patient Grid{" "}
          <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
            Total Patients : 565
          </span>
        </h4>
      </div>
    </div>
    {/* End Page Header */}
    {/* row start */}
    <div className="row">
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-08.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Alberto Ripley{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    26, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Mon, 30 Apr 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Green Square, New York, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href="Doctordetails"
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-16.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Susan Babin{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    21, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Wed, 15 Apr 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Lakeview Drive, Chicago, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-06.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Carol Lam{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    28, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Tue, 02 Apr 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Ocean Avenue, Miami, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-25.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Marsha Noland{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    25, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Thu, 27 Mar 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Elm Road, Austin, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-39.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Irma Armstrong{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    32, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Thu, 12 Mar 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Elm Road, Austin, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-14.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Jesus Adams{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    27, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Fri, 05 Mar 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Maple Street, San Francisco, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/profiles/avatar-27.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Ezra Belcher{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    28, Male
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Sat, 24 Feb 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Pine Valley, Seattle, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-05.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Glen Lentz{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    22, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Sat, 16 Feb 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Pine Valley, Seattle, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-07.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Bernard Griffith{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    34, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Tue, 01 Feb 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              River Walk, Houston, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-17.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  John Elsass{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    23, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Mon, 25 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Forest Hill, Denver, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-38.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Martin Lisa{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    26, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Thu, 22 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Garden Circle, Orlando, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-37.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Ava Mitchell{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    25, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Sat, 18 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Crystal Court, Atlanta, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-10.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Noah Davis{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    32, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Wed, 15 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Oakwood Street, Phoenix, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-34.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Emily Ross{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    29, Female{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Fri, 10 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Hilltop Lane, Dallas, USA
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <a
                  href=""
                  className="avatar avatar-lg me-2"
                >
                  <img
                    src="assets/img/users/user-31.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href=""
                  className="text-dark fw-semibold"
                >
                  Ryan Anderson{" "}
                  <span className="text-body fs-13 fw-normal d-block">
                    {" "}
                    30, Male{" "}
                  </span>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                    href="javascript:void(0);"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    href="appointments.html"
                    className="dropdown-item d-flex align-items-center"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-calendar me-1 text-dark" />
              Last Appointment : Tue, 04 Jan 2025
            </p>
            <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
              <i className="ti ti-location-pin me-1 text-dark" />
              Hilltop Lane, Dallas, USA
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* row end */}
    <div className="text-center">
      <a href="javascript:void(0);" className="btn btn-outline-white bg-white">
        Load More
        <i className="ti ti-loader-2 ms-1" />
      </a>
    </div>
  </div>
</div>


</>
)

}
export default Patientgrid;