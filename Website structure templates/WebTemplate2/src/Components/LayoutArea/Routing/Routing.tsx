import "./Routing.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from"../../LayoutArea/Login/Login";
import Interview from "../../LayoutArea/Login/Login";
import Community from "../../LayoutArea/Login/Login";
import Login from "../../LayoutArea/Login/Login";
import Page404 from "../../LayoutArea/E404/E404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/interview" component={Interview} exact />
                <Route path="/community" component={Community} exact />
                <Route path="/login" component={Login} exact />
                <Route component={Page404}/> 
            </Switch>
        </div>
    );
}

export default Routing;

