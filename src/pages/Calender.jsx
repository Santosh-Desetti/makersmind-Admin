import React from "react"
import { Link } from "react-router-dom";
function Calender() {
  return (
    <>
      {/* Start Content */}
     <div className="page-wrapper">
  {/* Start Content */}
  <div className="content content-two">
    {/* Page Header */}
    <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
      <div className="flex-grow-1">
        <h4 className="fs-18 fw-semibold mb-0">Calendar</h4>
      </div>
      <div className="text-end">
        <ol className="breadcrumb m-0 py-0">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Applications</a>
          </li>
          <li className="breadcrumb-item active">Calendar</li>
        </ol>
      </div>
    </div>
    {/* End Page Header */}
    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
      <div className="dropdown">
        <a
          href="javascript:void(0);"
          className="dropdown-toggle btn btn-outline-light btn-sm bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
          data-bs-toggle="dropdown"
        >
          <i className="ti ti-file-export me-1" />
          Export
          <i className="ti ti-chevron-down align-middle ms-1" />
        </a>
        <ul className="dropdown-menu  dropdown-menu-start">
          <li>
            <a href="javascript:void(0);" className="dropdown-item rounded-1">
              <i className="ti ti-file-type-pdf me-1" />
              Export as PDF
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" className="dropdown-item rounded-1">
              <i className="ti ti-file-type-xls me-1" />
              Export as Excel{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#add_event"
          className="btn btn-sm btn-primary"
        >
          <i className="ti ti-plus me-1" />
          Create
        </a>
      </div>
    </div>
    {/* start Card */}
    <div className="card mb-0">
      <div className="card-body">
        <div id="calendar" />
      </div>
    </div>
    {/* end card */}
  </div>
  {/* End Content */}
  {/* Footer Start */}
  <div className="footer text-center bg-white p-2 border-top">
    <p className="text-dark mb-0">
      2026 ©{" "}
      <a href="javascript:void(0);" className="link-primary">
        Preclinic
      </a>
      , All Rights Reserved
    </p>
  </div>
  {/* Footer End */}
</div>

      {/* End Content */}
    </>
  );
}
export default Calender;