import logo from './logo.svg';
import './css/App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
      <div className="body">
            <div className={'wrapper'}>
                <Header />
                <Sidebar />
                <Profile />
            </div>
      </div>
  );
}

export default App;
