import React from "react";
import { Link } from "react-router-dom";
function Alldoctors() {
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
                        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
                            <div className="flex-grow-1">
                                <h4 className="fw-bold mb-0">
                                    {" "}
                                    Doctor Grid{" "}
                                    <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                                        Total Doctors : 565
                                    </span>
                                </h4>
                            </div>
                            <div className="text-end d-flex">
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
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary mb-1"
                                                        >
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
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary mb-1"
                                                        >
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
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary mb-1"
                                                        >
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
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary mb-1"
                                                        >
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
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="link-primary mb-1"
                                                        >
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
                                <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                                    <a
                                        href="doctors-list.html"
                                        className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                                    >
                                        {" "}
                                        <i className="ti ti-list fs-14 text-body" />
                                    </a>
                                    <a
                                        href="doctors.html"
                                        className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                                    >
                                        {" "}
                                        <i className="ti ti-layout-grid fs-14 text-body" />{" "}
                                    </a>
                                </div>
                                <a
                                    href="add-doctor.html"
                                    className="btn btn-primary ms-2 fs-13 btn-md"
                                >
                                    <i className="ti ti-plus me-1" />
                                    New Doctor
                                </a>
                            </div>
                        </div>
                        {/* End Page Header */}
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-01.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Mick Thompson</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Cardiologist</span>
                                            <p className="mb-2 fs-13">Available : Mon, 20 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $499
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-02.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Sarah Johnson</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Orthopedic Surgeon</span>
                                            <p className="mb-2 fs-13">Available : Wed, 22 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $450
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-03.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Emily Carter</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Pediatrician</span>
                                            <p className="mb-2 fs-13">Available : Fri, 24 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $300
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-04.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. David Lee</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Gynecologist</span>
                                            <p className="mb-2 fs-13">Available : Tue, 21 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $250
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-05.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Anna Kim</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Psychiatrist</span>
                                            <p className="mb-2 fs-13">Available : Mon, 27 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $350
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-06.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. John Smith</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Neurosurgeon</span>
                                            <p className="mb-2 fs-13">Available : Thu, Jan 30, 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $499
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-07.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Lisa White</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Oncologist</span>
                                            <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $200
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-08.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Patricia Brown</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Pulmonologist</span>
                                            <p className="mb-2 fs-13">Available : Sun, 01 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $450
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-09.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Rachel Green</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Urologist</span>
                                            <p className="mb-2 fs-13">Available : Tue, 28 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $400
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-10.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Michael Smith</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Cardiologist</span>
                                            <p className="mb-2 fs-13">Available : Thu, 05 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $300
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-11.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Sarah Johnson</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Surgeon</span>
                                            <p className="mb-2 fs-13">Available : Mon, 09 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $500
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-12.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Adrian White</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Practitioner</span>
                                            <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $200
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-13.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Ken Clark</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Dermatologist</span>
                                            <p className="mb-2 fs-13">Available : Wed, 12 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $350
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-14.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Oliver King</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Orthopedist</span>
                                            <p className="mb-2 fs-13">Available : Fri, 14 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $600
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                            <div className="col-xl-4 col-md-6">
                                <div className="card">
                                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                                        <div className="me-3 doctor-profile-img">
                                            <Link to="/Doctordetails">
                                                <img
                                                    src="assets/img/doctors/doctor-15.jpg"
                                                    className="rounded"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 fw-semibold">
                                                     <Link to="/Doctordetails">Dr. Avan Davis</Link>
                                                </h6>
                                                <div className="action-item">
                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                                        <i className="ti ti-dots-vertical" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                href="edit-doctor.html"
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <span className="d-block mb-2 fs-13">Endocrinologist</span>
                                            <p className="mb-2 fs-13">Available : Tue, 17 Feb 2025</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h6 className="text-primary fs-14 mb-0">
                                                    <span className="text-muted fs-13 fw-normal">
                                                        Starts From :{" "}
                                                    </span>{" "}
                                                    $375
                                                </h6>
                                                <a
                                                    href="appointment-calendar.html"
                                                    className="avatar avatar-xs border text-muted fs-14"
                                                >
                                                    <i className="ti ti-calendar-cog" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card body */}
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col */}
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-white bg-white text-dark fs-13">
                                Load More
                                <span className="spinner-border spinner-border-sm ms-1" />
                            </a>
                        </div>
                    </div>
                    {/* End Content */}
                </div>
                {/* ========================
			End Page Content
		========================= */}
                {/* Start Delete Modal  */}
                <div className="modal fade" id="delete_modal">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-body text-center position-relative z-1">
                                <img
                                    src="assets/img/bg/delete-modal-bg-01.png"
                                    alt=""
                                    className="img-fluid position-absolute top-0 start-0 z-n1"
                                />
                                <img
                                    src="assets/img/bg/delete-modal-bg-02.png"
                                    alt=""
                                    className="img-fluid position-absolute bottom-0 end-0 z-n1"
                                />
                                <div className="mb-3">
                                    <span className="avatar avatar-lg bg-danger text-white">
                                        <i className="ti ti-trash fs-24" />
                                    </span>
                                </div>
                                <h5 className="fw-bold mb-1">Delete Confirmation</h5>
                                <p className="mb-3">Are you sure want to delete?</p>
                                <div className="d-flex justify-content-center">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn btn-light position-relative z-1 me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </a>
                                    <a
                                        href="doctors.html"
                                        className="btn btn-danger position-relative z-1"
                                    >
                                        Yes, Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Delete Modal  */}
                {/* Start Delete Modal  */}
                <div className="modal fade" id="success_modal">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-body text-center position-relative z-1">
                                <div className="mb-3">
                                    <span className="avatar avatar-lg bg-success text-white">
                                        <i className="ti ti-check fs-24" />
                                    </span>
                                </div>
                                <h5 className="fw-bold mb-1">Added Successfully</h5>
                                <p className="mb-3">Doctor has been added to your List</p>
                                <div className="d-flex justify-content-center">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn btn-light position-relative z-1 me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </a>
                                    <a
                                        href="Doctordetails.html"
                                        className="btn btn-primary position-relative z-1"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Delete Modal  */}
            </div>

        </>
    )
}
export default Alldoctors