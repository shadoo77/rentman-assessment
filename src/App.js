import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RootContextProvider } from "./store";
// Components
import Home from "./components/Home";
import AppBar from "./components/layout/AppBar";
import InitialPage from "./components/layout/InitialPage";
import ErrorPage from "./components/layout/ErrorPage";
import LayoutContainer from "./components/layout/LayoutContainer";
// Material UI
import { Container } from "@material-ui/core";

const WrongPage = () => (
  <h2 style={{ color: "red" }}>
    <center>Error 404: Wrong page!</center>
  </h2>
);

function App() {
  return (
    <Router>
      <div className="App">
        <RootContextProvider>
          <Container maxWidth="md">
            <AppBar />
            <LayoutContainer>
              <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/error" exact component={ErrorPage} />
                {/* <Route path="/test" exact component={Home} /> */}
                <Route path="/search" exact component={Home} />
                <Route path="/search/:searchQuery" exact component={Home} />
                <Route path="/404" exact component={WrongPage} />
                <Route path="*" exact component={WrongPage} />
              </Switch>
            </LayoutContainer>
          </Container>
        </RootContextProvider>
      </div>
    </Router>
  );
}

export default App;
