import React from "react";
import { Link } from "react-router-dom";

import { MdHotel } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { FaFilter } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
function Childcare() {
    return (
        <>
            <div className="page-wrapper">

                {/* CONTENT */}

                <div className="content pb-0 ">

                    {/* PAGE HEADER */}

                    <div className="mb-4">

                        <h1 className="child-title">
                            Child - Room Allotment
                        </h1>

                    </div>

                    {/* CHILD CARDS */}

                    <div className="row g-4 mb-4">

                        {/* CARD 1 */}

                        <div className="col-xl-4 col-md-6 d-flex">

                            <div className="card flex-fill shadow-sm border-0 child-main-card child-total-card">

                                <div className="card-body d-flex align-items-center justify-content-between blueshadow">

                                    <div className="d-flex align-items-center">

                                        <div className="child-icon-box child-purple-box">

                                            <MdHotel />

                                        </div>

                                        <div className="ms-3">

                                            <h6>Total Child Beds</h6>

                                            <h2>40</h2>

                                            <p>100% Total Capacity</p>

                                        </div>

                                    </div>

                                    <img
                                        src="assets/img/blueteddy-removebg-preview.png"
                                        alt="bear"
                                        className="child-bear-img"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* CARD 2 */}

                        <div className="col-xl-4 col-md-6 d-flex">

                            <div className="card flex-fill shadow-sm border-0 child-main-card child-occupied-cards ">

                                <div className="card-body d-flex align-items-center justify-content-between purpuleshadow">

                                    <div className="d-flex align-items-center">

                                        <div className="child-icon-box child-pink-box">

                                            <MdHotel />

                                        </div>

                                        <div className="ms-3">

                                            <h6>Occupied Child Beds</h6>

                                            <h2>28</h2>

                                            <p>70% Occupied</p>

                                        </div>

                                    </div>

                                    <img
                                        src="assets/img/purpuleteddy-removebg-preview.png "
                                        alt="crib"
                                        className="child-bear-img"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* CARD 3 */}

                        <div className="col-xl-4 col-md-6 d-flex">

                            <div className="card flex-fill shadow-sm border-0 child-main-card child-available-card">

                                <div className="card-body d-flex align-items-center justify-content-between redshadow">

                                    <div className="d-flex align-items-center">

                                        <div className="child-icon-box child-green-box">

                                            <MdHotel />

                                        </div>

                                        <div className="ms-3">

                                            <h6>Available Child Beds</h6>

                                            <h2>12</h2>

                                            <p>30% Available</p>

                                        </div>

                                    </div>

                                    <img
                                        src="assets/img/greenteddy-removebg-preview.png"
                                        alt="bear"
                                        className="lastgreenimg"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FILTER */}

                    <div className="card border-0 shadow-sm child-filter-card mb-4">

                        <div className="card-body">

                            <div className="row g-3 align-items-end">

                                {/* SEARCH */}

                                <div className="col-xl-3 col-md-6">

                                    <label className="form-label fw-semibold">
                                        Search Bed / Patient / Nurse
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

                                {/* FLOOR */}

                                <div className="col-xl-2 col-md-6">

                                    <label className="child-label">
                                        Floor
                                    </label>

                                    <select className="form-select child-select">

                                        <option>All Floors</option>

                                    </select>

                                </div>

                                {/* STATUS */}

                                <div className="col-xl-2 col-md-6">

                                    <label className="child-label">
                                        Status
                                    </label>

                                    <select className="form-select child-select">

                                        <option>All Status</option>

                                    </select>

                                </div>

                                {/* NURSE */}

                                <div className="col-xl-2 col-md-6">

                                    <label className="child-label">
                                        Nurse
                                    </label>

                                    <select className="form-select child-select">

                                        <option>All Nurses</option>

                                    </select>

                                </div>

                                {/* BUTTONS */}

                                <div className="col-xl-3">

                                    <div className="d-flex gap-3 filter">

                                        <button className="btn btn-outline-primary w-50 ">

                                            <i className="resert2"><GrPowerReset /></i>

                                            Reset

                                        </button>

                                        <button className="btn btn-primary w-50 ">

                                            <i className="filtericon2"><FaFilter /></i>

                                            Filter

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* TABLE */}

                    <div className="card border-0 shadow-sm child-table-card">

                        <div className="table-responsive">

                            <table className="table align-middle mb-0 child-table">

                                <thead>

                                    <tr>

                                        <th>Bed No.</th>

                                        <th>Patient Name</th>

                                        <th>Age</th>

                                        <th>Floor No.</th>

                                        <th>Doctor Assigned</th>

                                        <th>Nurse Assigned</th>

                                        <th>Admission Date</th>


                                        <th>Status</th>

                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>CH-101</td>

                                        <td>

                                            <div className="d-flex align-items-center gap-2">

                                                <img
                                                    src="/assets/img/baby1.png"
                                                    alt=""
                                                    className="child-avatar"
                                                />

                                                Baby Aarav

                                            </div>

                                        </td>

                                        <td>1 Y 8 M</td>

                                        <td>1st Floor</td>

                                        <td>Dr. Neha Reddy</td>

                                        <td>Sister Anjali</td>

                                        <td>12 May 2025</td>


                                      <td>

                                        <span className="status-badge occupied2">
                                            Occupied
                                        </span>

                                    </td>

                                        <td>

                                            <div className="d-flex gap-2">

                                                <button className="action-btn edit-primary2">

                                                    <i ><CiEdit /></i>

                                                </button>

                                                <button className="action-btn delete-danger2">

                                                    <i ><MdOutlineDeleteForever /></i>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>CH-102</td>

                                        <td>

                                            <div className="d-flex align-items-center gap-2">

                                                <img
                                                    src="/assets/img/baby2.png"
                                                    alt=""
                                                    className="child-avatar"
                                                />

                                                Baby Divya

                                            </div>

                                        </td>

                                        <td>1 Y 6 M</td>

                                        <td>1st Floor</td>

                                        <td>Dr. Priya Verma</td>

                                        <td>Sister Neha</td>

                                        <td>11 May 2025</td>


                                        <td>

                                           <td>

                                        <span className="status-badge available2">
                                            Available
                                        </span>

                                    </td>

                                        </td>

                                        <td>

                                            <div className="d-flex gap-2">

                                                <button className="action-btn edit-primary2">

                                                    <i ><CiEdit /></i>

                                                </button>

                                                <button className="action-btn delete-danger2">

                                                    <i ><MdOutlineDeleteForever /></i>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        {/* PAGINATION */}

                        <div className="d-flex justify-content-between align-items-center p-4">

                            <p className="mb-0 text-muted">
                                Showing 1 to 6 of 40 entries
                            </p>

                            <div className="d-flex gap-2">

                                <button className="child-page-btn active-page">
                                    1
                                </button>

                                <button className="child-page-btn">
                                    2
                                </button>

                                <button className="child-page-btn">
                                    3
                                </button>

                                <button className="child-page-btn">
                                    4
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Childcare