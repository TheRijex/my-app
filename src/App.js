import './App.css';
import Header from './components/Header/header';
import ProFile from './components/profile/proFile';
import NavBar from './components/Navbar/navBar';

function App() {
  return (
    <div className="AppWrapper">
    	<Header/>
		  <NavBar/>
		  <ProFile/>
    </div>
  );
}

export default App;
