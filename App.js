import './css/App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className={'wrapper'}>
                <Header/>
                <Sidebar/>
                <Switch>
                    {/*<Route path="/"> <Profile /> </Route>*/}
                    <Route path="/profile" > <Profile /> </Route>
                    <Route path="/dialogs" > <Dialogs /> </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
