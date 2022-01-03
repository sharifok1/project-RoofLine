import { LinearProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const{user,isLoading} = useAuth();
    // const navigate = useNavigate()
  
    const location = useLocation()
    if(isLoading){
      return <LinearProgress color="success" sx={{m:10, mt:40}}/>
  }
  if (!user.email) {
    //  return navigate('/Login')
    return <Navigate to="/Login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;