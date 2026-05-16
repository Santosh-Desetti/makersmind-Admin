import React from "react"
import { Link } from "react-router-dom";
function Newappointment() {
    return (
        <>
            <div className="main-wrapper">
                {/* Topbar Start */}
               
                {/* Topbar End */}
                {/* Search Modal */}
                <div className="modal fade" id="searchModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content bg-transparent">
                            <div className="card shadow-none mb-0">
                                <div
                                    className="px-3 py-2 d-flex flex-row align-items-center"
                                    id="search-top"
                                >
                                    <i className="ti ti-search fs-22" />
                                    <input
                                        type="search"
                                        className="form-control border-0"
                                        placeholder="Search"
                                    />
                                    <button
                                        type="button"
                                        className="btn p-0"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <i className="ti ti-x fs-22" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sidenav Menu Start */}
                <div className="sidebar" id="sidebar">
                    {/* Start Logo */}
                    <div className="sidebar-logo">
                        <div>
                            {/* Logo Normal */}
                            <a href="index.html" className="logo logo-normal">
                                <img src="assets/img/logo.svg" alt="Logo" />
                            </a>
                            {/* Logo Small */}
                            <a href="index.html" className="logo-small">
                                <img src="assets/img/logo-small.svg" alt="Logo" />
                            </a>
                            {/* Logo Dark */}
                            <a href="index.html" className="dark-logo">
                                <img src="assets/img/logo-white.svg" alt="Logo" />
                            </a>
                        </div>
                        <button
                            className="sidenav-toggle-btn btn border-0 p-0 active"
                            id="toggle_btn"
                        >
                            <i className="ti ti-arrow-left text-body" />
                        </button>
                        {/* Sidebar Menu Close */}
                        <button className="sidebar-close">
                            <i className="ti ti-x align-middle" />
                        </button>
                    </div>
                    {/* End Logo */}
                    {/* Sidenav Menu */}
                    <div className="sidebar-inner" data-simplebar="">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <div className="sidebar-top shadow-sm p-2 rounded-1 mb-3 dropend">
                                <a
                                    href="javascript:void(0);"
                                    className="drop-arrow-none"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    data-bs-offset="0,22"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <span className="avatar rounded-circle flex-shrink-0 p-2">
                                                <img src="assets/img/icons/trustcare.svg" alt="img" />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="fs-14 fw-semibold mb-0">Trustcare Clinic</h6>
                                                <p className="fs-13 mb-0">Lasvegas</p>
                                            </div>
                                        </div>
                                        <i className="ti ti-arrows-transfer-up" />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg">
                                    <div className="p-2">
                                        <label className="dropdown-item d-flex align-items-center justify-content-between p-1">
                                            <span className="d-flex align-items-center">
                                                <span className="me-2">
                                                    <img src="assets/img/icons/clinic-01.svg" alt="" />
                                                </span>
                                                <span className="fw-semibold text-dark">
                                                    CureWell Medical Hub
                                                    <small className="d-block text-muted fw-normal fs-13">
                                                        Ohio
                                                    </small>
                                                </span>
                                            </span>
                                            <input
                                                className="form-check-input m-0 me-2"
                                                type="checkbox"
                                            />
                                        </label>
                                        <label className="dropdown-item d-flex align-items-center justify-content-between p-1">
                                            <span className="d-flex align-items-center">
                                                <span className="me-2">
                                                    <img src="assets/img/icons/clinic-02.svg" alt="" />
                                                </span>
                                                <span className="fw-semibold text-dark">
                                                    Trustcare Clinic
                                                    <small className="d-block text-muted fw-normal fs-13">
                                                        Lasvegas
                                                    </small>
                                                </span>
                                            </span>
                                            <input
                                                className="form-check-input m-0 me-2"
                                                type="checkbox"
                                            />
                                        </label>
                                        <label className="dropdown-item d-flex align-items-center justify-content-between p-1">
                                            <span className="d-flex align-items-center">
                                                <span className="me-2">
                                                    <img src="assets/img/icons/clinic-03.svg" alt="" />
                                                </span>
                                                <span className="fw-semibold text-dark">
                                                    NovaCare Medical
                                                    <small className="d-block text-muted fw-normal fs-13">
                                                        Washington
                                                    </small>
                                                </span>
                                            </span>
                                            <input
                                                className="form-check-input m-0 me-2"
                                                type="checkbox"
                                            />
                                        </label>
                                        <label className="dropdown-item d-flex align-items-center justify-content-between p-1">
                                            <span className="d-flex align-items-center">
                                                <span className="me-2">
                                                    <img src="assets/img/icons/clinic-04.svg" alt="" />
                                                </span>
                                                <span className="fw-semibold text-dark">
                                                    Greeny Medical Clinic
                                                    <small className="d-block text-muted fw-normal fs-13">
                                                        Illinios
                                                    </small>
                                                </span>
                                            </span>
                                            <input
                                                className="form-check-input m-0 me-2"
                                                type="checkbox"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li className="menu-title">
                                    <span>Main Menu</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-layout-dashboard" />
                                                <span>Dashboard</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="index.html">Admin Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="doctor-dashboard.html">Doctor Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="patient-dashboard.html">Patient Dashboard</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-apps" />
                                                <span>Applications</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="chat.html">Chat</a>
                                                </li>
                                                <li className="submenu submenu-two">
                                                    <a href="#">
                                                        Calls
                                                        <span className="menu-arrow inside-submenu" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="voice-call.html">Voice Call</a>
                                                        </li>
                                                        <li>
                                                            <a href="video-call.html">Video Call</a>
                                                        </li>
                                                        <li>
                                                            <a href="outgoing-call.html">Outgoing Call</a>
                                                        </li>
                                                        <li>
                                                            <a href="incoming-call.html">Incoming Call</a>
                                                        </li>
                                                        <li>
                                                            <a href="call-history.html">Call History</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="calendar.html">Calendar</a>
                                                </li>
                                                <li>
                                                    <a href="contacts.html">Contacts</a>
                                                </li>
                                                <li>
                                                    <a href="email.html">Email</a>
                                                </li>
                                                <li className="submenu submenu-two">
                                                    <a href="#">
                                                        Invoices
                                                        <span className="menu-arrow inside-submenu" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="invoice.html">Invoices</a>
                                                        </li>
                                                        <li>
                                                            <a href="invoice-details.html">Invoice Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="todo.html">To Do</a>
                                                </li>
                                                <li>
                                                    <a href="notes.html">Notes</a>
                                                </li>
                                                <li>
                                                    <a href="kanban-view.html">Kanban Board</a>
                                                </li>
                                                <li>
                                                    <a href="file-manager.html">File Manager</a>
                                                </li>
                                                <li>
                                                    <a href="social-feed.html">Social Feed</a>
                                                </li>
                                                <li>
                                                    <a href="search-list.html">Search Result</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-layout-sidebar" />
                                                <span>Layouts</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="index.html">Default</a>
                                                </li>
                                                <li>
                                                    <a href="layout-mini.html">Mini</a>
                                                </li>
                                                <li>
                                                    <a href="layout-hover-view.html">Hover View</a>
                                                </li>
                                                <li>
                                                    <a href="layout-hidden.html">Hidden</a>
                                                </li>
                                                <li>
                                                    <a href="layout-full-width.html">Full Width</a>
                                                </li>
                                                <li>
                                                    <a href="layout-rtl.html">RTL</a>
                                                </li>
                                                <li>
                                                    <a href="layout-dark.html">Dark</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Clinic</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-user-plus" />
                                                <span>Doctors</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="doctors.html">Doctors</a>
                                                </li>
                                                <li>
                                                    <a href="doctor-details.html">Doctor Details</a>
                                                </li>
                                                <li>
                                                    <a href="add-doctor.html">Add Doctor</a>
                                                </li>
                                                <li>
                                                    <a href="doctor-schedule.html">Doctor Schedule</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-user-heart" />
                                                <span>Patients</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="patients.html">Patients</a>
                                                </li>
                                                <li>
                                                    <a href="patient-details.html">Patient Details</a>
                                                </li>
                                                <li>
                                                    <a href="create-patient.html">Create Patient</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);" className="active subdrop">
                                                <i className="ti ti-calendar-check" />
                                                <span>Appointments</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="appointments.html">Appointments</a>
                                                </li>
                                                <li>
                                                    <a href="new-appointment.html" className="active">
                                                        New Appointment
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="appointment-calendar.html">Calendar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="locations.html">
                                                <i className="ti ti-map-pin" />
                                                <span>Locations</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="services.html">
                                                <i className="ti ti-user-cog" />
                                                <span>Services</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="specializations.html">
                                                <i className="ti ti-user-shield" />
                                                <span>Specializations</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="assets.html">
                                                <i className="ti ti-asset" />
                                                <span>Assets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="activities.html">
                                                <i className="ti ti-activity" />
                                                <span>Activities</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="messages.html">
                                                <i className="ti ti-messages" />
                                                <span>Messages</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>HRM</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="staffs.html">
                                                <i className="ti ti-users-group" />
                                                <span>Staffs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="hrm-departments.html">
                                                <i className="ti ti-building-bank" />
                                                <span>Departments</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="designation.html">
                                                <i className="ti ti-user-cog" />
                                                <span>Designation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="attendance.html">
                                                <i className="ti ti-user-check" />
                                                <span>Attendance</span>
                                            </a>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-users-minus" />
                                                <span>Leaves</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="leaves.html">Leaves</a>
                                                </li>
                                                <li>
                                                    <a href="leave-type.html">Leave Type</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="holidays.html">
                                                <i className="ti ti-home-exclamation" />
                                                <span>Holidays</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="payroll.html">
                                                <i className="ti ti-coin" />
                                                <span>Payroll</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Finance &amp; Accounts</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-credit-card" />
                                                <span>Expenses</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="expenses.html">Expenses</a>
                                                </li>
                                                <li>
                                                    <a href="expense-category.html">Expense Category</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="income.html">
                                                <i className="ti ti-coins" />
                                                <span>Income</span>
                                            </a>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-file-invoice" />
                                                <span>Invoices</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="invoices.html">Invoices</a>
                                                </li>
                                                <li>
                                                    <a href="invoices-details.html">Invoice Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="payments.html">
                                                <i className="ti ti-cards" />
                                                <span>Payments</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="transactions.html">
                                                <i className="ti ti-transition-right" />
                                                <span>Transactions</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Administration</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-user" />
                                                <span>Users</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="roles-and-permissions.html">
                                                        Roles &amp; Permissions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="delete-account-request.html">
                                                        Delete Account Request
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-report" />
                                                <span>Reports</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="income-report.html">Income Report</a>
                                                </li>
                                                <li>
                                                    <a href="expense-report.html">Expense Report</a>
                                                </li>
                                                <li>
                                                    <a href="profit-and-loss.html">Profit &amp; Loss</a>
                                                </li>
                                                <li>
                                                    <a href="appointment-report.html">Appointment Report</a>
                                                </li>
                                                <li>
                                                    <a href="patient-report.html">Patient Report</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Content</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="pages.html">
                                                <i className="ti ti-brand-pagekit" />
                                                <span>Pages</span>
                                            </a>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-brand-blogger" />
                                                <span>Blogs</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="add-blog.html">Add Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blogs.html">Blogs</a>
                                                </li>
                                                <li>
                                                    <a href="blog-categories.html">Blog Categories</a>
                                                </li>
                                                <li>
                                                    <a href="blog-comments.html">Blog Comments</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-map-pins" />
                                                <span>Location</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="countries.html">Countries</a>
                                                </li>
                                                <li>
                                                    <a href="states.html">States</a>
                                                </li>
                                                <li>
                                                    <a href="cities.html">Cities</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="testimonials.html">
                                                <i className="ti ti-brand-wechat" />
                                                <span>Testimonials</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="faq.html">
                                                <i className="ti ti-question-mark" />
                                                <span>FAQ</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Support</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="contact-messages.html">
                                                <i className="ti ti-message-dots" />
                                                <span>Contact Messages</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tickets.html">
                                                <i className="ti ti-ticket" />
                                                <span>Tickets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="announcements.html">
                                                <i className="ti ti-speakerphone" />
                                                <span>Announcements</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="newsletters.html">
                                                <i className="ti ti-mail-bolt" />
                                                <span>Newsletters</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Pages</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="starter.html">
                                                <i className="ti ti-player-play" />
                                                <span>Starter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="profile.html">
                                                <i className="ti ti-user-circle" />
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">
                                                <i className="ti ti-photo" />
                                                <span>Gallery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="timeline.html">
                                                <i className="ti ti-timeline-event-text" />
                                                <span>Timeline</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">
                                                <i className="ti ti-tag" />
                                                <span>Pricing</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html">
                                                <i className="ti ti-sparkles" />
                                                <span>Coming Soon</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="under-maintenance.html">
                                                <i className="ti ti-settings-down" />
                                                <span>Under Maintenance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html">
                                                <i className="ti ti-shield-check" />
                                                <span>Privacy Policy</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="terms-and-conditions.html">
                                                <i className="ti ti-file-time" />
                                                <span>Terms &amp; Conditions</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Authentication</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-login" />
                                                <span>Login</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="login-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="login-illustration.html">Illustration</a>
                                                </li>
                                                <li>
                                                    <a href="login-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-file-pencil" />
                                                <span>Register</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="register-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="register-illustration.html">Illustration</a>
                                                </li>
                                                <li>
                                                    <a href="register-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-lock-exclamation" />
                                                <span>Forgot Password</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="forgot-password-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="forgot-password-illustration.html">
                                                        Illustration
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forgot-password-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-restore" />
                                                <span>Reset Password</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="reset-password-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="reset-password-illustration.html">
                                                        Illustration
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="reset-password-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-mail-check" />
                                                <span>Email Verification</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="email-verification-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="email-verification-illustration.html">
                                                        Illustration
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="email-verification-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-discount-check" />
                                                <span>2 Step Verification</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="two-step-verification-cover.html">Cover</a>
                                                </li>
                                                <li>
                                                    <a href="two-step-verification-illustration.html">
                                                        Illustration
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="two-step-verification-basic.html">Basic</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="lock-screen.html">
                                                <i className="ti ti-lock" />
                                                <span>Lock Screen</span>
                                            </a>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-exclamation-mark-off" />
                                                <span>Error Pages</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="error-404.html">404 Error</a>
                                                </li>
                                                <li>
                                                    <a href="error-500.html">500 Error</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Settings</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-user-cog" />
                                                <span>Account Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="profile-settings.html">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="security-settings.html">Security</a>
                                                </li>
                                                <li>
                                                    <a href="notifications-settings.html">Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="integrations-settings.html">Integrations</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-world-cog" />
                                                <span>Website Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="organization-settings.html">Organization</a>
                                                </li>
                                                <li>
                                                    <a href="localization-settings.html">Localization</a>
                                                </li>
                                                <li>
                                                    <a href="prefixes-settings.html">Prefixes</a>
                                                </li>
                                                <li>
                                                    <a href="seo-setup-settings.html">SEO Setup</a>
                                                </li>
                                                <li>
                                                    <a href="language-settings.html">Language</a>
                                                </li>
                                                <li>
                                                    <a href="maintenance-mode-settings.html">
                                                        Maintenance Mode
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="login-and-register-settings.html">
                                                        Login &amp; Register
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="preferences-settings.html">Preferences</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-building-hospital" />
                                                <span>Clinic Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="appointment-settings.html">Appointment</a>
                                                </li>
                                                <li>
                                                    <a href="working-hours-settings.html">Working Hours</a>
                                                </li>
                                                <li>
                                                    <a href="cancellation-reason-settings.html">
                                                        Cancellation Reason
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-device-mobile-cog" />
                                                <span>App Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="invoice-settings.html">Invoice Settings</a>
                                                </li>
                                                <li>
                                                    <a href="invoice-templates-settings.html">
                                                        Invoice Templates
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="signatures-settings.html">Signatures</a>
                                                </li>
                                                <li>
                                                    <a href="custom-fields-settings.html">Custom Fields</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-device-desktop-cog" />
                                                <span>System Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="email-settings.html">Email Settings</a>
                                                </li>
                                                <li>
                                                    <a href="email-templates-settings.html">
                                                        Email Templates
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sms-gateways-settings.html">SMS Gateways</a>
                                                </li>
                                                <li>
                                                    <a href="sms-templates-settings.html">SMS Templates</a>
                                                </li>
                                                <li>
                                                    <a href="gdpr-cookies-settings.html">GDPR Cookies</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-settings-dollar" />
                                                <span>Finance &amp; Accounts</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="payment-methods-settings.html">
                                                        Payment Methods
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="bank-accounts-settings.html">Bank Accounts</a>
                                                </li>
                                                <li>
                                                    <a href="tax-rates-settings.html">Tax Rates</a>
                                                </li>
                                                <li>
                                                    <a href="currencies-settings.html">Currencies</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-settings-2" />
                                                <span>Other Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="sitemap-settings.html">Sitemap</a>
                                                </li>
                                                <li>
                                                    <a href="clear-cache-settings.html">Clear Cache</a>
                                                </li>
                                                <li>
                                                    <a href="storage-settings.html">Storage</a>
                                                </li>
                                                <li>
                                                    <a href="cronjob-settings.html">Cronjob</a>
                                                </li>
                                                <li>
                                                    <a href="ban-ip-address-settings.html">Ban IP Address</a>
                                                </li>
                                                <li>
                                                    <a href="system-backup-settings.html">System Backup</a>
                                                </li>
                                                <li>
                                                    <a href="database-backup-settings.html">
                                                        Database Backup
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="system-update.html">System Update</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>UI Interface</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-chart-pie" />
                                                <span>Base UI</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="ui-accordion.html">Accordion</a>
                                                </li>
                                                <li>
                                                    <a href="ui-alerts.html">Alerts</a>
                                                </li>
                                                <li>
                                                    <a href="ui-avatar.html">Avatar</a>
                                                </li>
                                                <li>
                                                    <a href="ui-badges.html">Badges</a>
                                                </li>
                                                <li>
                                                    <a href="ui-breadcrumb.html">Breadcrumb</a>
                                                </li>
                                                <li>
                                                    <a href="ui-buttons.html">Buttons</a>
                                                </li>
                                                <li>
                                                    <a href="ui-buttons-group.html">Button Group</a>
                                                </li>
                                                <li>
                                                    <a href="ui-cards.html">Card</a>
                                                </li>
                                                <li>
                                                    <a href="ui-carousel.html">Carousel</a>
                                                </li>
                                                <li>
                                                    <a href="ui-collapse.html">Collapse</a>
                                                </li>
                                                <li>
                                                    <a href="ui-dropdowns.html">Dropdowns</a>
                                                </li>
                                                <li>
                                                    <a href="ui-ratio.html">Ratio</a>
                                                </li>
                                                <li>
                                                    <a href="ui-grid.html">Grid</a>
                                                </li>
                                                <li>
                                                    <a href="ui-images.html">Images</a>
                                                </li>
                                                <li>
                                                    <a href="ui-links.html">Links</a>
                                                </li>
                                                <li>
                                                    <a href="ui-list-group.html">List Group</a>
                                                </li>
                                                <li>
                                                    <a href="ui-modals.html">Modals</a>
                                                </li>
                                                <li>
                                                    <a href="ui-offcanvas.html">Offcanvas</a>
                                                </li>
                                                <li>
                                                    <a href="ui-pagination.html">Pagination</a>
                                                </li>
                                                <li>
                                                    <a href="ui-placeholders.html">Placeholders</a>
                                                </li>
                                                <li>
                                                    <a href="ui-popovers.html">Popovers</a>
                                                </li>
                                                <li>
                                                    <a href="ui-progress.html">Progress</a>
                                                </li>
                                                <li>
                                                    <a href="ui-scrollspy.html">Scrollspy</a>
                                                </li>
                                                <li>
                                                    <a href="ui-spinner.html">Spinner</a>
                                                </li>
                                                <li>
                                                    <a href="ui-nav-tabs.html">Tabs</a>
                                                </li>
                                                <li>
                                                    <a href="ui-toasts.html">Toasts</a>
                                                </li>
                                                <li>
                                                    <a href="ui-tooltips.html">Tooltips</a>
                                                </li>
                                                <li>
                                                    <a href="ui-typography.html">Typography</a>
                                                </li>
                                                <li>
                                                    <a href="ui-utilities.html">Utilities</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-radar" />
                                                <span>Advanced UI</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="extended-dragula.html">Dragula</a>
                                                </li>
                                                <li>
                                                    <a href="ui-clipboard.html">Clipboard</a>
                                                </li>
                                                <li>
                                                    <a href="ui-rangeslider.html">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="ui-sweetalerts.html">Sweet Alerts</a>
                                                </li>
                                                <li>
                                                    <a href="ui-lightbox.html">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="ui-scrollbar.html">Scrollbar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-forms" />
                                                <span>Forms</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li className="submenu submenu-two">
                                                    <a href="javascript:void(0);">
                                                        Form Elements
                                                        <span className="menu-arrow inside-submenu" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="form-basic-inputs.html">Basic Inputs</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-checkbox-radios.html">
                                                                Checkbox &amp; Radios
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="form-input-groups.html">Input Groups</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-grid-gutters.html">
                                                                Grid &amp; Gutters
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="form-mask.html">Input Masks</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-fileupload.html">File Uploads</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two">
                                                    <a href="javascript:void(0);">
                                                        Layouts
                                                        <span className="menu-arrow inside-submenu" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="form-horizontal.html">Horizontal Form</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-vertical.html">Vertical Form</a>
                                                        </li>
                                                        <li>
                                                            <a href="form-floating-labels.html">
                                                                Floating Labels
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="form-validation.html">Form Validation</a>
                                                </li>
                                                <li>
                                                    <a href="form-select2.html">Select2</a>
                                                </li>
                                                <li>
                                                    <a href="form-wizard.html">Form Wizard</a>
                                                </li>
                                                <li>
                                                    <a href="form-pickers.html">Form Picker</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-table-row" />
                                                <span>Tables</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="tables-basic.html">Basic Tables </a>
                                                </li>
                                                <li>
                                                    <a href="data-tables.html">Data Table </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-chart-donut" />
                                                <span>Charts</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="chart-apex.html">Apex Charts</a>
                                                </li>
                                                <li>
                                                    <a href="chart-c3.html">Chart C3</a>
                                                </li>
                                                <li>
                                                    <a href="chart-js.html">Chart Js</a>
                                                </li>
                                                <li>
                                                    <a href="chart-morris.html">Morris Charts</a>
                                                </li>
                                                <li>
                                                    <a href="chart-flot.html">Flot Charts</a>
                                                </li>
                                                <li>
                                                    <a href="chart-peity.html">Peity Charts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-icons" />
                                                <span>Icons</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="icon-fontawesome.html">Fontawesome Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-tabler.html">Tabler Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-bootstrap.html">Bootstrap Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-remix.html">Remix Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-feather.html">Feather Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-ionic.html">Ionic Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-material.html">Material Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-pe7.html">Pe7 Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-simpleline.html">Simpleline Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-themify.html">Themify Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-weather.html">Weather Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-typicons.html">Typicons Icons</a>
                                                </li>
                                                <li>
                                                    <a href="icon-flag.html">Flag Icons</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title">
                                    <span>Help</span>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://preclinic.dreamstechnologies.com/documentation/html.html"
                                                target="_blank"
                                            >
                                                <i className="ti ti-file-dots" />
                                                <span>Documentation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://preclinic.dreamstechnologies.com/documentation/changelog.html"
                                                target="_blank"
                                            >
                                                <i className="ti ti-status-change" />
                                                <span>Changelog</span>
                                            </a>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i className="ti ti-versions" />
                                                <span>Multi Level</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">Multilevel 1</a>
                                                </li>
                                                <li className="submenu submenu-two">
                                                    <a href="javascript:void(0);">
                                                        Multilevel 2
                                                        <span className="menu-arrow inside-submenu" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0);">Multilevel 2.1</a>
                                                        </li>
                                                        <li className="submenu submenu-two submenu-three">
                                                            <a href="javascript:void(0);">
                                                                Multilevel 2.2
                                                                <span className="menu-arrow inside-submenu inside-submenu-two" />
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0);">Multilevel 2.2.1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0);">Multilevel 2.2.2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Multilevel 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-footer border-top mt-3">
                            <div className="trial-item mt-0 p-3 text-center">
                                <div className="trial-item-icon rounded-4 mb-3 p-2 text-center shadow-sm d-inline-flex">
                                    <img src="assets/img/icons/sidebar-icon.svg" alt="img" />
                                </div>
                                <div>
                                    <h6 className="fs-14 fw-semibold mb-1">Upgrade To Pro</h6>
                                    <p className="fs-13 mb-0">
                                        Check 1 min video and begin use Preclinic like a pro
                                    </p>
                                </div>
                                <a href="javascript:void(0);" className="close-icon shadow-sm">
                                    <i className="ti ti-x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sidenav Menu End */}
                {/* ========================
			Start Page Content
		========================= */}
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
                                        <a href="appointments.html" className="text-dark">
                                            {" "}
                                            <i className="ti ti-chevron-left me-1" />
                                            Appointments
                                        </a>
                                    </h6>
                                </div>
                                {/* page header end */}
                                {/* card start */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form">
                                            <div className="mb-3">
                                                <label className="form-label mb-1 fw-medium">
                                                    Appointment ID<span className="text-danger ms-1">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="AP234354"
                                                    disabled=""
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                            <label className="form-label mb-0 fw-medium">
                                                                Patient<span className="text-danger ms-1">*</span>
                                                            </label>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="link-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#add_modal"
                                                            >
                                                                <i className="ti ti-circle-plus me-1" />
                                                                Add New
                                                            </a>
                                                        </div>
                                                        <select className="select">
                                                            <option value="m-1">Select</option>
                                                            <option value="m-2">Alberto Ripley</option>
                                                            <option value="m-3">Susan Babin</option>
                                                            <option value="m-4">Martin Lisa</option>
                                                            <option value="m-5">Stella Mary</option>
                                                            <option value="m-6">Carol Lam</option>
                                                            <option value="m-7">Jesus Adams</option>
                                                            <option value="m-8">Ezra Belcher</option>
                                                            <option value="m-9">Unit Manager</option>
                                                            <option value="m-10">Bernard Griffith</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label mb-1 fw-medium">
                                                            Department<span className="text-danger ms-1">*</span>
                                                        </label>
                                                        <select className="select">
                                                            <option value="m-1">Select</option>
                                                            <option value="m-2">General Medicine</option>
                                                            <option value="m-3">Pediatrics</option>
                                                            <option value="m-4">Gynecology</option>
                                                            <option value="m-5">Cardiology</option>
                                                            <option value="m-6">Orthopedics</option>
                                                            <option value="m-7">Dermatology</option>
                                                            <option value="m-8">ENT</option>
                                                            <option value="m-9">Neurology</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label mb-1 fw-medium">
                                                            Doctor<span className="text-danger ms-1">*</span>
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
                                                            Appointment Type
                                                            <span className="text-danger ms-1">*</span>
                                                        </label>
                                                        <select className="select">
                                                            <option value="m-1">Select</option>
                                                            <option value="m-2">In Person</option>
                                                            <option value="m-3">Online</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label mb-1 fw-medium">
                                                            Date of Appointment
                                                            <span className="text-danger ms-1">*</span>
                                                        </label>
                                                        <div className="input-icon-end position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control datetimepicker"
                                                                placeholder="dd/mm/yyyy"
                                                                defaultValue="dd/mm/yyyy"
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
                                                            Time<span className="text-danger ms-1">*</span>
                                                        </label>
                                                        <div className="input-icon-end position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control timepicker"
                                                            />
                                                            <span className="input-icon-addon">
                                                                <i className="ti ti-clock text-gray-7" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label mb-1 fw-medium">
                                                    Appointment Reason
                                                    <span className="text-danger ms-1">*</span>
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows={3}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="mb-0">
                                                <label className="form-label mb-1 fw-medium">
                                                    Status<span className="text-danger ms-1">*</span>
                                                </label>
                                                <select className="select">
                                                    <option value="m-1">Select</option>
                                                    <option value="m-2">Checked Out</option>
                                                    <option value="m-3">Checked In</option>
                                                    <option value="m-4">Cancelled</option>
                                                    <option value="m-5">Schedule</option>
                                                    <option value="m-6">Confirmed</option>
                                                </select>
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
                                        Create Appointment
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
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
                {/* ========================
			End Page Content
		========================= */}
            </div>
            {/* End Wrapper */}
            {/* Start Add modal */}
            <div className="modal fade" id="add_modal">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark fw-bold">Add New Patient</h5>
                            <button
                                type="button"
                                className="btn-close custom-btn-close opacity-100"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x bg-white fs-16 text-dark" />
                            </button>
                        </div>
                        <div className="modal-body pb-0">
                            {/* form start */}
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
                            {/* form end */}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm fs-13 fw-medium"
                            >
                                Add New Patient
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Newappointment;