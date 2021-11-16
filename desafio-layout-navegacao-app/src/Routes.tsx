import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalog from "./page/Catalog";
import Home from "./page/Home";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/cars">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;