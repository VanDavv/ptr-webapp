import React from "react";
import {Route, IndexRoute} from "react-router";
import Dashboard from "./components/Dashboard";
import Wrapper from "./components/Wrapper";

const routes = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Dashboard} />
    </Route>
);

export default routes