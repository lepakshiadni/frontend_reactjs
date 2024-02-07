import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Suspense, lazy } from 'react';

import Header from '../components/header&footer/Header.jsx';
import "./RouteCompo.css"
import Bird from '../components/assets/bird.png'
const Signup = lazy(() => import('./../components/login/Signup'));
const TrainerSiginUp = lazy(() => import('../components/login/TrainerSiginUp'));
const Employee = lazy(() => import('../components/login/EmployerSiginUp.jsx'));
const RoleSelection = lazy(() => import('../components/login/RoleSelection'));
const Login = lazy(() => import('../components/login/Login'));
const Chat = lazy(() => import('../components/pages/messages/Chat'))
const Dashboard=lazy(()=>import ('../components/pages/dashboard/Dashboard.jsx'))
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const TrainerDashboard=lazy(()=>import ('../components/pages/dashboard/TrainerDashboard.jsx'))
const TrainerProfileEdit=lazy(()=>import ('../components/pages/trainerprofile/TrainerProfileEdit.jsx'))
const TrainerProfile=lazy(()=>import('../components/pages/trainerprofile/TrainerProfile.jsx'))
const PostRequirement=lazy(()=>import('../components/pages/postrequirements/Requirements.js'))




function RouteCompo() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className='route-lazy-parent'><img src={Bird} alt='imglazy' className='lazy-img' /></div>}>
               
        <Routes>

          <Route element={<PrivateRoute />}>
          </Route>
            {/* <Route path='/chat' element={<Chat />} /> */}
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/trainersignup' element={<TrainerSiginUp />} />
            <Route path='/selectrole' element={<RoleSelection />} />
            <Route path='/' element={<Signup />} />
            <Route path='/otpverify' element={<Login />} />
            <Route path='/employersignup' element={<Employee />} />
            <Route path='/trainerDashboard/*' element={<TrainerDashboard/>}/>
            <Route path="/trainerProfileEdit" element={<TrainerProfileEdit/>}/>
            <Route path='/trainerProfile' element={<TrainerProfile/>}/>
            <Route path='/postRequirement' element={<PostRequirement/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

}


export default RouteCompo