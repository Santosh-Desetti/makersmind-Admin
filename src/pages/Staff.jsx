import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import {
    FaUsers,
    FaUserCheck,
    FaUserClock,
    FaUserXmark,
    FaMagnifyingGlass,
    FaPen,
    FaTrash,
} from "react-icons/fa6";
function Staff() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content p-4">

                    {/* PAGE HEADER */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

                        <div>
                            <h2 className="fw-bold staff-title mb-2">
                                Staff Management
                            </h2>

                        </div>

                        <button className="btn btn-primary add-staff-btn">
                            + Add New Staff
                        </button>

                    </div>

                    {/* STAFF CARDS */}
                    <div className="row g-4 mb-4">

                        {/* CARD 1 */}
                        <div className="col-xl-3 col-md-6">

                            <div className="card border-0 shadow-sm staff-card total-card">

                                <div className="card-body d-flex align-items-center">

                                    <div className="icon-box bg-primary-subtle text-primary">
                                        <FaUsers />
                                    </div>

                                    <div className="ms-3">

                                        <h6>Total Staff</h6>

                                        <h2>128</h2>

                                        <p>100% Total Staff</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="col-xl-3 col-md-6">

                            <div className="card border-0 shadow-sm staff-card active-card">

                                <div className="card-body d-flex align-items-center">

                                    <div className="staff-icon green-icon">
                                        <FaUserCheck />
                                    </div>

                                    <div className="ms-3">

                                        <h6>Active Staff</h6>

                                        <h2>112</h2>

                                        <p>87.5% Active</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* CARD 3 */}
                        <div className="col-xl-3 col-md-6">

                            <div className="card border-0 shadow-sm staff-card leave-card">

                                <div className="card-body d-flex align-items-center">

                                    <div className="staff-icon orange-icon">
                                        <FaUserClock />
                                    </div>

                                    <div className="ms-3">

                                        <h6>On Leave</h6>

                                        <h2>10</h2>

                                        <p>7.8% On Leave</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* CARD 4 */}
                        <div className="col-xl-3 col-md-6">

                            <div className="card border-0 shadow-sm staff-card inactive-card">

                                <div className="card-body d-flex align-items-center">

                                    <div className="staff-icon red-icon">
                                        <FaUserTimes />
                                    </div>

                                    <div className="ms-3">

                                        <h6>Inactive Staff</h6>

                                        <h2>06</h2>

                                        <p>4.7% Inactive</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FILTER SECTION */}
                    <div className="card border-0 shadow-sm mb-4">

                        <div className="card-body">

                            <div className="row g-3 align-items-end">

                                {/* SEARCH */}
                                <div className="col-xl-3 col-md-6">

                                    <label className="form-label fw-semibold">
                                        Search Staff
                                    </label>

                                    <div className="search-input">

                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="form-control"
                                        />

                                        <i><HiMiniMagnifyingGlass /></i>


                                    </div>

                                </div>

                                {/* DEPARTMENT */}
                                <div className="col-xl-3 col-md-6">

                                    <label className="form-label fw-semibold">
                                        Department
                                    </label>

                                    <select className="form-select">
                                        <option>All Departments</option>
                                    </select>

                                </div>

                                {/* DESIGNATION */}
                                <div className="col-xl-2 col-md-6">

                                    <label className="form-label fw-semibold">
                                        Designation
                                    </label>

                                    <select className="form-select">
                                        <option>All Designations</option>
                                    </select>

                                </div>

                                {/* STATUS */}
                                <div className="col-xl-2 col-md-6">

                                    <label className="form-label fw-semibold">
                                        Status
                                    </label>

                                    <select className="form-select">
                                        <option>All Status</option>
                                    </select>

                                </div>

                                {/* BUTTONS */}
                                <div className="col-xl-2">

                                    <div className="d-flex gap-2">

                                        <button className="btn btn-outline-primary w-50">
                                            Reset
                                        </button>

                                        <button className="btn btn-primary w-50">
                                            Filter
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* TABLE */}
                    <div className="card border-0 shadow-sm">

                        <div className="table-responsive">

                            <table className="table align-middle mb-0 staff-table">

                                <thead>
                                    <tr>
                                        <th>Staff ID</th>
                                        <th>Staff Name</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Join Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {/* ROW */}
                                    <tr>

                                        <td>STF-001</td>

                                        <td>
                                            <div className="d-flex align-items-center gap-2">

                                                <div className="staff-avatar blue-avatar">
                                                    RK
                                                </div>

                                                Ravi Kumar

                                            </div>
                                        </td>

                                        <td>Cardiology</td>
                                        <td>Cardiologist</td>
                                        <td>ravi.kumar@medicare.com</td>
                                        <td>+91 9876543210</td>
                                        <td>12 Jan 2024</td>

                                        <td>
                                            <span className="status-badge active-status">
                                                Active
                                            </span>
                                        </td>

                                        <td>

                                            <div className="d-flex gap-2">

                                                <button className="action-btn edit-btn edi">
                                                    <CiEdit />
                                                </button>

                                                <button className="action-btn del">
                                                    <MdOutlineDeleteForever />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                    {/* ROW */}
                                    <tr>

                                        <td>STF-002</td>

                                        <td>
                                            <div className="d-flex align-items-center gap-2">

                                                <div className="staff-avatar green-avatar">
                                                    AS
                                                </div>

                                                Anita Sharma

                                            </div>
                                        </td>

                                        <td>Neurology</td>
                                        <td>Nurse</td>
                                        <td>anita.sharma@medicare.com</td>
                                        <td>+91 9876543211</td>
                                        <td>18 Feb 2024</td>

                                        <td>
                                            <span className="status-badge active-status">
                                                Active
                                            </span>
                                        </td>

                                        <td>

                                           <div className="d-flex gap-2">

                                                <button className="action-btn edit-btn edi">
                                                    <CiEdit />
                                                </button>

                                                <button className="action-btn del">
                                                    <MdOutlineDeleteForever />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* PAGINATION */}
                        <div className="d-flex justify-content-between align-items-center p-4 flex-wrap gap-3">

                            <p className="mb-0 text-muted">
                                Showing 1 to 8 of 128 entries
                            </p>

                            <div className="d-flex gap-2">

                                <button className="page-btn active-page">
                                    1
                                </button>

                                <button className="page-btn">
                                    2
                                </button>

                                <button className="page-btn">
                                    3
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Staff