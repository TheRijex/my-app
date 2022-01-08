import './App.css';
import Header from './components/Header/header';
import ProFile from './components/profile/proFile';
import NavBar from './components/Navbar/navBar';
import Dialog from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="AppWrapper">
    	<Header/>
        <NavBar/>
        {/*<ProFile/>*/}
        <div className='AppWrapperContent'>
            <Dialog/>
        </div>
    </div>
  );    
}

export default App;
