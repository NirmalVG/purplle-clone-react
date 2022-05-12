import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import PrimerPage from "./pages/PrimerPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/primer">
                    <PrimerPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
