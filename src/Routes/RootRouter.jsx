import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom"
import Login from "Scenes/Login";
import MainLayout from "../Layouts/MainLayout";
import {useSelector} from "react-redux";

const RootRouter = () => {
  const [redirectLocation, setRedirectLocation] = useState();
  const {location} = useLocation();
  const user = useSelector(store => store.userSlice);

  const renderForGuestUser = (Scene) => {
    if (!user.isLoggedIn) {
      return Scene
    } else {
      console.log("navigate to list place");
      return <Navigate to={redirectLocation || "/list"}/>
    }
  }

  const renderLoggedInUser = (Scene) => {
    if (user.isLoggedIn) {
      return Scene
    } else {
      console.log("navigate to login place");
      setRedirectLocation(location);
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <Routes>
      <Route path={"/login"} element={renderForGuestUser(<MainLayout/>)}>
        <Route index element={<Login/>}/>
      </Route>
    </Routes>
  );
}

RootRouter.propTypes = {};
RootRouter.defaultProps = {};

export default RootRouter;