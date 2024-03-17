import React, { useContext } from 'react';
import { routeList } from '../routes/routeArr';
import { loginContext } from '../App';
import { Route, Routes } from 'react-router-dom';

function ProtectedRoute() {
    const login = useContext(loginContext);
  return (
    <>
      <Routes>
      {
        routeList.map((routeItem , index) => {
            if(routeItem.path === '/products'){
                return <Route key={index} path={routeItem.path} element={routeItem.element}>
                        <Route path=':id'/>
                    </Route>
            }
            else if(routeItem.isPrivate && login.login){
                return <Route key={index} path={routeItem.path} element={routeItem.element}/>
            }
            else if(!routeItem.isPrivate && !login.login){
                return <Route key={index} path={routeItem.path} element={routeItem.element}/>
            }
        })
      }
      </Routes>
    </>
  )
}

export default ProtectedRoute;
