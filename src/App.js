import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
    Switch,
    Route
} from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
    return (
            <div className="App">
                <Header/>

                <div className="app__body">
                    <Sidebar/>

                    <Switch>
                        <Route path="/mail">
                            <Mail/>
                        </Route>
                         <Route path="/">
                            <EmailList/>
                        </Route>
                    </Switch>
                </div>

            </div>
    );
}

export default App;
