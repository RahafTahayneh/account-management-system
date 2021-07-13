import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import history from "./history";
import {Layout} from "../layout";
import {Dashboard} from "../pages/dashboard";


const RouterComponent = () => {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                </Switch>
            </Layout>
        </Router>
    )

}

export default RouterComponent