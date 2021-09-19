import logo from './logo.svg';
import './css/App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";


const App = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}


export default App;
