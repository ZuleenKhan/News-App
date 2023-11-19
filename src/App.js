import './App.css';
//import {Routes, Route, Link} from 'react-router-dom' ; 
// import About from './pages/About';
// import Login from './pages/Login';
// import Pricing from './pages/Pricing';
// import NotFound from './pages/NotFound';
import NewsFetch from './components/NewsFetch';

function App() {
  return (

    <div className="App">
        {/* Hello!!
        <Link to="/about" >About</Link> 
        <Link to="/login" >Login</Link> 
        <Link to="/pricing" >Pricing</Link> 
        <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/pricing' element={<Pricing/>}/>
             
        </Routes> */}
        <NewsFetch/>

      </div>

  ); 

}

export default App;
