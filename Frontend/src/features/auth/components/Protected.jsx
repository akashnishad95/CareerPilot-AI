
import {useAuth} from '../hooks/useAuth.jsx';

import {Navigate} from "react-router";
import React from 'react';

const Protected = ({children}) => {
  const {loading, user} = useAuth();
  

  if (loading) {
    return <main><div>Loading...</div></main>;
  }

  if (!user) {
    return <Navigate to={"/login"} />
    
  }

  return children;
}

export default Protected;