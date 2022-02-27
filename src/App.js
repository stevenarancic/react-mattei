import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import ProductList from "./components/product-list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>

                <Switch>
                    <Route path="/product-list">
                        <ProductList />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
