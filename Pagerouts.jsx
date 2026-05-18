import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Patient from "./src/pages/Patient ";
import Newappointment from "./src/pages/Newappointment";
import Dashboard from "./src/pages/Dashboard";
import Alldoctors from "./src/pages/Alldoctors";
import Doctor from "./src/pages/Doctor Dashboard";
import Doctordetails from "./src/pages/Doctordetails";
import Adddoctor from "./src/pages/Adddoctor";
import Doctorsedule from "./src/pages/Doctorsedule";
import Patientone from "./src/pages/Patientone";
import Patientdetails from "./src/pages/Patientdetails";
import Createpatient from "./src/pages/Createpatient";
import ICU from "./src/pages/ICU";
import General from "./src/pages/General";
import Emenrgency from "./src/pages/Emenrgency";
import Childcare from "./src/pages/Childcare";
import Appoint from "./src/pages/Appointment";
import Calender from "./src/pages/Calender";
import Appointtonew from "./src/pages/Appointtonew";
import Private from "./src/pages/Private";
import Staff from "./src/pages/Staff";
const Pagerouts =()=>{
    return(
       <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/Newappoint" element={<Newappointment/>}/>
        <Route path="/Doctors" element={<Alldoctors/>}/>
        <Route path="/DoctorDashboard" element={<Doctor/>}/>
        <Route path="/Doctordetails" element={<Doctordetails/>}/>
        <Route path="/adddoctor" element={<Adddoctor/>}/>
        <Route path="/doctorschedule" element={<Doctorsedule/>}/>
        <Route path="/patientone" element={<Patientone/>}/>
        <Route path="/patientdetails" element={<Patientdetails/>}/>
        <Route path="/createpatient" element={<Createpatient/>}/>
        <Route path="/ICU" element={<ICU/>}/>
        <Route path="/General" element={<General/>}/>
        <Route path="/Private" element={<Private/>}/>
        <Route path="/Emenrgency" element={<Emenrgency/>}/>
        <Route path="/ChildCare" element={<Childcare/>}/>
        <Route path="/appointments" element={<Appoint/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/Appointtonew" element={<Appointtonew/>}/>
        <Route path="Private" element={<Private/>}/>
        <Route path="staffs" element={<Staff/>}/>

        
        
       </Routes> 
    );
};

export default Pagerouts;
