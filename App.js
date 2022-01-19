import './css/App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <div className={'wrapper'}>
                <Header/>
                <Sidebar/>
                <Switch>
                    <Route path="/profile" > <Profile posts={props.posts} profile={props.profile}/> </Route>
                    <Route path="/dialogs" > <Dialogs contactsInfo={props.contactsInfo} chatMessages={props.chatMessages}/> </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
