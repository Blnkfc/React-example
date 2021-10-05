import logo from './logo.svg';
import './css/App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";


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
