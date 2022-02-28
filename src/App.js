import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/product-list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

export default function App() {
    return (
        <Router>
            <div>
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
