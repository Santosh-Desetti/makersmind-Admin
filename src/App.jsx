import { useState, useEffect } from "react";
import Patient from "./pages/Patient ";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from"./pages/Doctor Dashboard"
import Doctordetails from "./pages/Doctordetails";
import Adddoctor from "./pages/Adddoctor";
import Doctorsedule from "./pages/Doctorsedule";
import Newappointment from "./pages/Newappointment";
import Sidebar from "./Shared/Sidebar";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import Patientone from "./pages/Patientone";
import Alldoctors from "./pages/Alldoctors";
import Patientdetails from "./pages/Patientdetails";
import createpatient from "./pages/Createpatient";
import Childcare from "./pages/Childcare";
import Emenrgency from "./pages/Emenrgency";
import Private from "./Shared/Private";
import General from "./pages/General";
import ICU from "./pages/ICU";
import Appoint from "./pages/Appointment";
import Appointtonew from "./pages/Appointtonew";

import "./App.css";
import Pagerouts from "../Pagerouts";
import Calender from "./pages/Calender";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="main-wrapper">

      <Header toggleTheme={toggleTheme} darkMode={darkMode} />

      <Sidebar />

      <Pagerouts />

      <Footer />

    </div>
  );
}

export default App;
