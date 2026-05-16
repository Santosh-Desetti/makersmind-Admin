
import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [layoutOpen, setLayoutOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [patientOpen, setPatientOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar" id="sidebar">
          {/* Start Logo */}
          <div className="sidebar-logo">
            <div>
              {/* Logo Normal */}
              <a href="index.html" className="logo logo-normal">
                <img src="assets/img/Untitled design.png" alt="Logo" />
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

              <ul>
                <li className="menu-title">
                  <span>Main Menu</span>
                </li>

                <li>
                  <ul>
                    <li className="submenu">

                      <Link
                        to="/dashboard"
                        className="active subdrop"
                      >
                        <i className="ti ti-layout-dashboard" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="/DoctorDashboard "
                        className="active subdrop"
                      >
                        <i className="ti ti-layout-dashboard" />
                        <span>Doctor Dashboard</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="/patient"
                        className="active subdrop"
                      >
                        <i className="ti ti-layout-dashboard" />
                        <span>Patient Dashboard</span>
                      </Link>
                    </li>
                    {/* <li className="submenu">

                      <a
                        href="#"
                        className="subdrop"
                        onClick={(e) => {
                          e.preventDefault();
                          setAppOpen(!appOpen);
                        }}
                      >
                        <i className="ti ti-apps" />
                        <span>Applications</span>
                        <span className="menu-arrow" />
                      </a>

                      {appOpen && (
                        <ul style={{ display: "block" }}>

                          <li>
                            <Link to="/chat">
                              Chat
                            </Link>
                          </li>

                          <li className="submenu submenu-two">

                            <a href="#">
                              Calls
                              <span className="menu-arrow inside-submenu" />
                            </a>

                            <ul>
                              <li>
                                <Link to="/voice-call">
                                  Voice Call
                                </Link>
                              </li>

                              <li>
                                <Link to="/video-call">
                                  Video Call
                                </Link>
                              </li>

                              <li>
                                <Link to="/outgoing-call">
                                  Outgoing Call
                                </Link>
                              </li>

                              <li>
                                <Link to="/incoming-call">
                                  Incoming Call
                                </Link>
                              </li>

                              <li>
                                <Link to="/call-history">
                                  Call History
                                </Link>
                              </li>
                            </ul>

                          </li>

                          <li>
                            <Link to="/calendar">
                              Calendar
                            </Link>
                          </li>

                          <li>
                            <Link to="/contacts">
                              Contacts
                            </Link>
                          </li>

                          <li>
                            <Link to="/email">
                              Email
                            </Link>
                          </li>

                          <li className="submenu submenu-two">

                            <a href="#">
                              Invoices
                              <span className="menu-arrow inside-submenu" />
                            </a>

                            <ul>
                              <li>
                                <Link to="/invoice">
                                  Invoices
                                </Link>
                              </li>

                              <li>
                                <Link to="/invoice-details">
                                  Invoice Details
                                </Link>
                              </li>
                            </ul>

                          </li>

                          <li>
                            <Link to="/todo">
                              To Do
                            </Link>
                          </li>

                          <li>
                            <Link to="/notes">
                              Notes
                            </Link>
                          </li>

                          <li>
                            <Link to="/kanban-view">
                              Kanban Board
                            </Link>
                          </li>

                          <li>
                            <Link to="/file-manager">
                              File Manager
                            </Link>
                          </li>

                          <li>
                            <Link to="/social-feed">
                              Social Feed
                            </Link>
                          </li>

                          <li>
                            <Link to="/search-list">
                              Search Result
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li className="submenu">

                      <a
                        href="#"
                        className="subdrop"
                        onClick={(e) => {
                          e.preventDefault();
                          setLayoutOpen(!layoutOpen);
                        }}
                      >
                        <i className="ti ti-layout-sidebar" />
                        <span>Layouts</span>
                        <span className="menu-arrow" />
                      </a>

                      {layoutOpen && (

                        <ul style={{ display: "block" }}>

                          <li>
                            <Link to="/Dashboard">
                              Default
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-mini">
                              Mini
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-hover-view">
                              Hover View
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-hidden">
                              Hidden
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-full-width">
                              Full Width
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-rtl">
                              RTL
                            </Link>
                          </li>

                          <li>
                            <Link to="/layout-dark">
                              Dark
                            </Link>
                          </li>

                        </ul>

                      )}

                    </li> */}
                  </ul>
                </li>


                <li className="menu-title">
                  <span>Clinic</span>
                </li>
                <li>
                  <ul>
                    <li className="submenu">

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setDoctorOpen(!doctorOpen);
                        }}
                        className={doctorOpen ? "active subdrop" : ""}
                      >
                        <i className="ti ti-user-plus" />
                        <span>Doctors</span>
                        <span className="menu-arrow" />
                      </a>

                      {doctorOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/Doctors">
                              Doctors
                            </Link>
                          </li>

                          <li>
                            <Link to="/Doctordetails">
                              Doctor Details
                            </Link>
                          </li>

                          <li>
                            <Link to="/adddoctor">
                              Add Doctor
                            </Link>
                          </li>

                          <li>
                            <Link to="/doctorschedule">
                              Doctor Schedule
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li className="submenu">

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setPatientOpen(!patientOpen);
                        }}
                        className={patientOpen ? "active subdrop" : ""}
                      >
                        <i className="ti ti-user-heart" />
                        <span>Patients</span>
                        <span className="menu-arrow" />
                      </a>

                      {patientOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/patientone">
                              Patients
                            </Link>
                          </li>

                          <li>
                            <Link to="/patientdetails">
                              Patient Details
                            </Link>
                          </li>

                          <li>
                            <Link to="/createpatient">
                              Create Patient
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>


                    <li className="submenu">

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setAppointmentOpen(!appointmentOpen);
                        }}
                        className={appointmentOpen ? "active subdrop" : ""}
                      >
                        <i className="ti ti-calendar-check" />
                        <span>Appointments</span>
                        <span className="menu-arrow" />
                      </a>

                      {appointmentOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/appointments">
                              Appointments
                            </Link>
                          </li>

                          <li>
                            <Link to="/Appointtonew">
                              New Appointment
                            </Link>
                          </li>

                          <li>
                            <Link to="/calender">
                              Calendar
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li className="submenu">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setLeaveOpen(!leaveOpen);
                        }}
                        className={leaveOpen ? "active subdrop" : ""}
                      >
                        <i className="ri-hotel-bed-fill" />
                        <span>Room Allotments</span>
                        <span className="menu-arrow" />
                      </a>

                      {leaveOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/ICU">
                              ICU
                            </Link>
                          </li>

                          <li>
                            <Link to="/General">
                              General
                            </Link>
                          </li>

                          <li>
                            <Link to="/Private">
                              Private
                            </Link>
                          </li>
                          <li>
                            <Link to="/Emenrgency">
                              Emenrgency
                            </Link>
                          </li>
                          <li>
                            <Link to="/ ChildCare">
                              Child Care
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li>

                      <Link to="/locations">

                        <i className="ti ti-map-pin" />

                        <span>Locations</span>

                      </Link>

                    </li>

                    <li>
                      <Link to="/services">
                        <i className="ti ti-user-cog" />
                        <span>Services</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/specializations">
                        <i className="ti ti-user-shield" />
                        <span>Specializations</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/assets">
                        <i className="ti ti-asset" />
                        <span>Assets</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/activities">
                        <i className="ti ti-activity" />
                        <span>Activities</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/messages">
                        <i className="ti ti-messages" />
                        <span>Messages</span>
                      </Link>
                    </li>

                  </ul>
                </li>
                <li className="menu-title">
                  <span>HRM</span>
                </li>
                <li>
                  <ul>

                    <li>
                      <Link to="/staffs">
                        <i className="ti ti-users-group" />
                        <span>Staffs</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/hrm-departments">
                        <i className="ti ti-building-bank" />
                        <span>Departments</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/designation">
                        <i className="ti ti-user-cog" />
                        <span>Designation</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/attendance">
                        <i className="ti ti-user-check" />
                        <span>Attendance</span>
                      </Link>
                    </li>



                    <li>
                      <Link to="/holidays">
                        <i className="ti ti-home-exclamation" />
                        <span>Holidays</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/payroll">
                        <i className="ti ti-coin" />
                        <span>Payroll</span>
                      </Link>
                    </li>

                  </ul>
                </li>
                <li className="menu-title">
                  <span>Finance &amp; Accounts</span>
                </li>
                <li>
                  <ul>
                    <li className="submenu">

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setExpenseOpen(!expenseOpen);
                        }}
                        className={expenseOpen ? "active subdrop" : ""}
                      >
                        <i className="ti ti-credit-card" />
                        <span>Expenses</span>
                        <span className="menu-arrow" />
                      </a>

                      {expenseOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/expenses">
                              Expenses
                            </Link>
                          </li>

                          <li>
                            <Link to="/expense-category">
                              Expense Category
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li>
                      <Link to="/income">
                        <i className="ti ti-coins" />
                        <span>Income</span>
                      </Link>
                    </li>
                    <li className="submenu">

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setInvoiceOpen(!invoiceOpen);
                        }}
                        className={invoiceOpen ? "active subdrop" : ""}
                      >
                        <i className="ti ti-file-invoice" />
                        <span>Invoices</span>
                        <span className="menu-arrow" />
                      </a>

                      {invoiceOpen && (
                        <ul className="dropDowns">

                          <li>
                            <Link to="/invoices">
                              Invoices
                            </Link>
                          </li>

                          <li>
                            <Link to="/invoices-details">
                              Invoice Details
                            </Link>
                          </li>

                        </ul>
                      )}

                    </li>
                    <li>
                      <Link to="/payments">
                        <i className="ti ti-cards" />
                        <span>Payments</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/transactions">
                        <i className="ti ti-transition-right" />
                        <span>Transactions</span>
                      </Link>
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
                          <a href="forgot-password-illustration.html">Illustration</a>
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
                          <a href="reset-password-illustration.html">Illustration</a>
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
                          <a href="maintenance-mode-settings.html">Maintenance Mode</a>
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
                          <a href="email-templates-settings.html">Email Templates</a>
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
                          <a href="payment-methods-settings.html">Payment Methods</a>
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
                          <a href="database-backup-settings.html">Database Backup</a>
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
                              <a href="form-grid-gutters.html">Grid &amp; Gutters</a>
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
                              <a href="form-floating-labels.html">Floating Labels</a>
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
                            Multilevel 2<span className="menu-arrow inside-submenu" />
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
            <div className="sidebar-footer ">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;