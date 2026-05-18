function Createpatient(){
    return(
        <>
    <div className="page-wrapper">
  {/* Start Content */}
  <div className="content">
    {/* row start */}
    <div className="row justify-content-center">
      <div className="col-lg-10">
        {/* page header start */}
        <div className="mb-4">
          <h6 className="fw-bold mb-0 d-flex align-items-center">
            {" "}
            <a href="patients.html" className="text-dark">
              {" "}
              <i className="ti ti-chevron-left me-1" />
              Patients
            </a>
          </h6>
        </div>
        {/* page header end */}
        {/* card start */}
        <div className="card">
          <div className="card-body pb-0">
            <div className="form">
              <h6 className="fw-bold mb-3">Patient Information</h6>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex align-items-center">
                    <label className="form-label mb-0">Profile Image</label>
                    <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                      <i className="ti ti-user-plus fs-16" />
                      <input
                        type="file"
                        className="form-control image-sign"
                        multiple=""
                      />
                      <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                        <a
                          href="javascript:void(0);"
                          className="text-white d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-photo fs-14" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Phone Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Primary Doctor<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option value="m-1">Select</option>
                      <option value="m-2">Dr. Mick Thompson</option>
                      <option value="m-3">Dr. Sarah Johnson</option>
                      <option value="m-4">Dr. Emily Carter</option>
                      <option value="m-5">Dr. David Lee</option>
                      <option value="m-6">Dr. Anna Kim</option>
                      <option value="m-7">Dr. John Smith</option>
                      <option value="m-8">Dr. Lisa White</option>
                      <option value="m-9">Dr. Patrica Brown</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      DOB<span className="text-danger ms-1">*</span>
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
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Gender<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option value="m-1">Select</option>
                      <option value="m-2">Male</option>
                      <option value="m-3">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Blood Group<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option value="m-1">Select</option>
                      <option value="m-2">O+</option>
                      <option value="m-3">O-</option>
                      <option value="m-3">A+</option>
                      <option value="m-3">A-</option>
                      <option value="m-3">B+</option>
                      <option value="m-3">B-</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Status<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option value="m-1">Select</option>
                      <option value="m-2">Available</option>
                      <option value="m-3">Unavailable</option>
                    </select>
                  </div>
                </div>
              </div>
              <h6 className="fw-bold mb-3 border-top pt-3">
                Address Information
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Address 1<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 fw-medium">
                      Address 2<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Country<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option>Select</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      State<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option>Select</option>
                      <option>California</option>
                      <option>Ontario</option>
                      <option>Bavaria</option>
                      <option>Wellington</option>
                      <option>Le-de-France</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      City<span className="text-danger ms-1">*</span>
                    </label>
                    <select className="select">
                      <option>Select</option>
                      <option>Los Angeles</option>
                      <option>Toronto</option>
                      <option>London</option>
                      <option>Munich</option>
                      <option>Sydney</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Pincode<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card end */}
        <div className="d-flex align-items-center justify-content-end">
          <a href="javascript:void(0);" className="btn btn-light me-2">
            Cancel
          </a>
          <a href="javascript:void(0);" className="btn btn-primary">
            Add New Patient
          </a>
        </div>
      </div>
    </div>
    {/* row end */}
  </div>
  {/* End Content */}
 
</div>

        </>
    )
}
export default Createpatient