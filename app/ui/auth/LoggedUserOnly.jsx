// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { Loading } from '../components/spinner/Loading';
import { RoutePaths } from '../components/main/RoutePaths';

export const LoggedUserOnly = ({ children }) => {
 const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
 const location = useLocation();
      if (isLoadingLoggedUser) {
        return <Loading />;
      }
 if (!loggedUser) {
return (
<Navigate to={RoutePaths.ACCESS} state={{ from: location }} replace />

 );
}
return children;
};
