import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Shared/Header/Header';
import Home from './Components/Main/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Appointment from './Components/NavigationSite/Appointment/Appointment';
import NotFound from './Components/NotFound/NotFound';
import AppointmentMain from './Components/NavigationSite/AppointmentMain/AppointmentMain';
import TestTimeline from './Components/NavigationSite/TestTimeline/TestTimeline';
import Login from './Components/NavigationSite/Login/Login';
import Register from './Components/NavigationSite/Login/Register';
import RequireAuth from './Components/NavigationSite/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/NavigationSite/Dashboard/Dashboard';
import MyAppiontment from './Components/NavigationSite/Dashboard/MyAppointment/MyAppiontment';
import Review from './Components/NavigationSite/Dashboard/Review/Review';
import Users from './Components/NavigationSite/Dashboard/Users';
import RequireAdmin from './Components/NavigationSite/Dashboard/RequireAdmin';
import AddDoctor from './Components/NavigationSite/Dashboard/AddDoctor';
import ManageDoctors from './Components/NavigationSite/Dashboard/ManageDoctors';
import Payment from './Components/NavigationSite/Dashboard/Payment';
function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <AppointmentMain />
        </RequireAuth>}></Route>
        <Route path='/test' element={<TestTimeline></TestTimeline>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }  >
          <Route index element={<MyAppiontment></MyAppiontment>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element= {<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>

        </Route>
        {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
