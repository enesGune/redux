import React, {Component,} from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
import * as ROUTES  from "../constants/routePaths";
import HomePageComponent from "../pages/homePage";



class RoutesComponent extends Component{
   

    render() {
        return (
            <div>
                 <Route exact path={ROUTES.HOME_PAGE} component={HomePageComponent}/>
            </div>

        );
    }
}

export default connect() (RoutesComponent);
