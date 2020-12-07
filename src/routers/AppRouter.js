import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
                {/* <Navbar/> */}
                <Switch>
                    <PublicRoute 
                        exact
                        path="/login" 
                        component={ LoginScreen }
                        isAuth={ user.logged }
                    />
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes }
                        isAuth={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
