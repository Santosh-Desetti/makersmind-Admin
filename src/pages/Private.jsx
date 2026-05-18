import React from "react";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaFilter } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
function Private(){
    return(
        <>
     <div className="page-wrapper">
    
                {/* CONTENT */}
    
                <div className="content pb-0">
    
                    {/* PAGE HEADER */}
    
                    <div className="mb-4">
    
                        <h1 className="title">
                           Private - Room Allotment
                        </h1>
    
                        
    
                    </div>
    
                    {/* ICU CARDS */}
    
                    <div className="row g-4 mb-4">
    
                        {/* CARD 1 */}
    
                        <div className="col-xl-4 col-md-6 d-flex">
    
                            <div className="card flex-fill shadow-sm border-0 icu-card total-card">
    
                                <div className="card-body d-flex align-items-center">
    
                                    <div className="icon-box blue">
    
                                        <div className="hotelbed1"><MdHotel /></div>
    
                                    </div>
    
                                    <div className="ms-3">
    
                                        <h6>Total Private Beds</h6>
    
                                        <h2>40</h2>
    
                                        <p>100% Private Capacity</p>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                        {/* CARD 2 */}
    
                        <div className="col-xl-4 col-md-6 d-flex">
    
                            <div className="card flex-fill shadow-sm border-0 icu-card occupied-card">
    
                                <div className="card-body d-flex align-items-center">
    
                                    <div className="icon-box red">
    
                                         <div className="hotelbed2"><MdHotel /></div>
    
                                    </div>
    
                                    <div className="ms-3">
    
                                        <h6>Occupied Private Beds</h6>
    
                                        <h2>32</h2>
    
                                        <p>80% Occupied</p>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                        {/* CARD 3 */}
    
                        <div className="col-xl-4 col-md-6 d-flex">
    
                            <div className="card flex-fill shadow-sm border-0 icu-card available-card">
    
                                <div className="card-body d-flex align-items-center  border: 1px solid var(--border-color);">
    
                                    <div className="icon-box green">
    
                                       <div className="hotelbed3"><MdHotel /></div>
    
                                    </div>
    
                                    <div className="ms-3">
    
                                        <h6>Available Private Beds</h6>
    
                                        <h2>08</h2>
    
                                        <p>20% Available</p>
    
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    {/* FILTER BOX */}
    
                    <div className="card shadow-sm border-0 filter-card mb-4">
    
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
    
                                    <label className="form-label fw-semibold">
                                        Floor
                                    </label>
    
                                    <select className="form-select">
    
                                        <option>All Floors</option>
    
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
    
                                {/* NURSE */}
    
                                <div className="col-xl-2 col-md-6">
    
                                    <label className="form-label fw-semibold">
                                        Nurse
                                    </label>
    
                                    <select className="form-select">
    
                                        <option>All Nurses</option>
    
                                    </select>
    
                                </div>
    
                                {/* BUTTONS */}
    
                                <div className="col-xl-3">
    
                                    <div className="d-flex gap-3 filter">
    
                                        <button className="btn btn-outline-primary w-50 ">
    
                                           <i className="resert"><GrPowerReset /></i>
    
                                            Reset
    
                                        </button>
    
                                        <button className="btn btn-primary w-50 ">
    
                                             <i className="filtericon"><FaFilter /></i>
    
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
    
                            <table className="table align-middle mb-0">
    
                                <thead>
    
                                    <tr>
    
                                        <th>Bed No.</th>
    
                                        <th>Patient Name</th>
    
                                        <th>Floor No.</th>
    
                                        <th>Doctor Assigned</th>
    
                                        <th>Admission Date</th>
    
                                        <th>Nurse Assigned</th>
    
                                        <th>Status</th>
    
                                        <th>Actions</th>
    
                                    </tr>
    
                                </thead>
    
                                <tbody>
    
                                    {/* ROW */}
    
                                    <tr>
    
                                        <td>ICU-101</td>
    
                                        <td>
    
                                            <div className="d-flex align-items-center gap-2">
    
                                                <div className="avatar-circle blue-avatar">
                                                    
                                                </div>
    
                                                Ravi Kumar
    
                                            </div>
    
                                        </td>
    
                                        <td>1st Floor</td>
    
                                        <td>Dr. Rajesh Kumar</td>
    
                                        <td>
    
                                            <i className="fa-regular fa-calendar me-2"></i>
    
                                            12 May 2025
    
                                        </td>
    
                                        <td>Sister Anjali</td>
    
    
                                        <td>
    
                                            <span className="status-badge occupied">
                                                Occupied
                                            </span>
    
                                        </td>
    
                                        <td>
    
                                            <div className="d-flex gap-2">
    
                                                <button className="action-btn edit-primary">
    
                                                    <i ><CiEdit /></i>
    
                                                </button>
    
                                                <button className="action-btn delete-danger">
    
                                                     <i ><MdOutlineDeleteForever /></i>
    
                                                </button>
    
                                            </div>
    
                                        </td>
    
                                    </tr>
    
                                    {/* ROW */}
    
                                    <tr>
    
                                        <td>ICU-104</td>
    
                                        <td>
    
                                            <div className="d-flex align-items-center gap-2">
    
                                                <div className="avatar-circle pink-avatar">
                                                    
                                                </div>
    
                                                Pooja Mehta
    
                                            </div>
    
                                        </td>
    
                                        <td>2nd Floor</td>
    
                                        <td>Dr. Neha Reddy</td>
    
                                        <td>
    
                                            <i className="fa-regular fa-calendar me-2"></i>
    
                                            13 May 2025
    
                                        </td>
    
                                        <td>Sister Kavya</td>
    
                                        
    
                                        <td>
    
                                            <span className="status-badge available">
                                                Available
                                            </span>
    
                                        </td>
    
                                        <td>
    
                                            <div className="d-flex gap-2">
    
                                                <button className="action-btn edit-primary">
    
                                                    <i ><CiEdit /></i>
    
                                                </button>
    
                                                <button className="action-btn delete-danger">
    
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
                                Showing 1 to 8 of 40 entries
                            </p>
    
                            <div className="d-flex gap-2">
    
                                {/* <button className="page-btn">
    
                                    <i className="fa-solid fa-angle-left"></i>
    
                                </button> */}
    
                                <button className="page-btn active">
                                    1
                                </button>
    
                                <button className="page-btn active">
                                    2
                                </button>
    
                                <button className="page-btn active">
                                    3
                                </button>
    
                                {/* <button className="page-btn">
    
                                    <i className="fa-solid fa-angle-right"></i>
    
                                </button> */}
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
        </>
    )
}
export default Private