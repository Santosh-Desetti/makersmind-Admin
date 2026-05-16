import React from "react"
import { FaRegEye } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
function Patient() {
  return (
    <>
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h4 className="fw-bold mb-0">Patient Dashboard</h4>
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
            </div>
          </div>
          {/* End Page Header */}
          {/* row start */}
          <div className="row rowWidth">
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-primary rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-calendar-heart" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Total Appointments</p>
                      <h3 className="fw-bold mb-0">24</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                      +95%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-danger rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-users" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Online Consultations</p>
                      <h3 className="fw-bold mb-0">36</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge fw-medium bg-danger flex-shrink-0 me-2">
                      -15%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Blood Pressure</p>
                      <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                        +95%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">89</h3>
                      <p className="mb-0">g/dl</p>
                    </div>
                  </div>
                  <div id="s-col-8" className="chart-set" />
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Heart Rate</p>
                      <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                        +95%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">87</h3>
                      <p className="mb-0">bpm</p>
                    </div>
                  </div>
                  <div id="s-col-9" className="chart-set" />
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* patient tabel */}
          <div className="container-fluid patientsBlock">
            <div className="row">
              <div className="col-md-12 tabelColor">
                <div className="table-box">

                  {/* Header */}
                  <div className="table-headerPatient">
                    <h3 className="Recent">Recent Invoices</h3>

                    <p>
                      <a href="#">
                        <button className="addPatients">
                          + Add Patients
                        </button>
                      </a>
                    </p>
                  </div>

                  {/* Search & Filters */}
                  <div className="inputfeelds">

                    <div className="searchBox">
                      <p>
                        <LuSearch />
                      </p>

                      <input
                        type="text"
                        placeholder="Search patients..."
                      />
                    </div>

                    <select>
                      <option>All Doctors</option>
                    </select>

                    <select>
                      <option>All Status</option>
                    </select>

                  </div>

                  {/* Table */}
                  <div className="innerBox">

                    <table className="PatientsData">

                      {/* Table Head */}
                      <thead>
                        <tr className="nameHead">
                          <th>Name</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Contact</th>
                          <th>Last Visit</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>

                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="active deactive">
                              Active
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="active deactive">
                              Active
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="statusdeng nopaid">
                              Deactive
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="statusdeng nopaid">
                              Deactive
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="statusdeng nopaid">
                              Deactive
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="Doctor">John Doe</td>
                          <td>35</td>
                          <td>Male</td>
                          <td>9876543210</td>
                          <td>12 Aug 2024</td>

                          <td>
                            <span className="statusdeng nopaid">
                              Deactive
                            </span>
                          </td>

                          <td>
                            <div className="reacticons">

                              <h5>
                                <FaRegEye />
                              </h5>

                              <h5>
                                <LuNotebookPen />
                              </h5>

                              <h5>
                                <RiDeleteBin6Line />
                              </h5>

                            </div>
                          </td>
                        </tr>

                      </tbody>

                    </table>

                  </div>

                  {/* Pagination */}
                  <div className="showing">

                    <div className="entites">
                      <p className="entries">Showing 1 to 8 of 100 entries</p>
                    </div>
                   

                    <div className="pagination">

                      {/* LEFT BUTTON */}
                      <button className="left">
                        <FaAngleLeft />
                      </button>

                      <button className="pagesOne">
                        1
                      </button>

                      <button className="pages">
                        2
                      </button>

                      <button className="pages">
                        3
                      </button>

                      <span className="dots">
                        ...
                      </span>

                      <button className="pages">
                        13
                      </button>

                      {/* RIGHT BUTTON */}
                      <button className="right">
                        <FaAngleRight />
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* patient tabel end */}
          {/* Vitals */}
          <div className="card shadow-sm">
  <div className="card-header">
    <h5 className="fw-bold mb-0">Vitals</h5>
  </div>
  <div className="card-body">
    {/* row start */}
    <div className="row row-gap-3 row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/weight.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1">Weight</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">100</span> Kg
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/rotate-left.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1">Height</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">154</span> Cm
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/user-cirlce-add.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1">BMI</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">19.2</span> kg/cm
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/driver-2.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1">Pulse</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">97%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/wind.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1">SPO2</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">98%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
      {/* col start */}
      <div className="col d-flex">
        <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
          <div className="d-flex align-items-center">
            <span className="avatar bg-primary rounded-circle flex-shrink-0">
              <img
                src="assets/img/icons/sun.svg"
                alt="img"
                className="w-auto h-auto"
              />
            </span>
            <div className="ms-1">
              <p className="mb-1 text-truncate">Temprature</p>
              <p className="text-truncate">
                <span className="fs-18 fw-bold text-dark">101</span> C
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* col end */}
    </div>
    {/* row end */}
  </div>
</div>

          {/* Vitals end */}

        </div>
        {/* End Content */}

      </div>

    </>
  )
}
export default Patient