import Home from "./components/Home";
import Second from "./components/Second";
import Home2 from "./components/home2";
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import FullPicture from "./components/pictureFull";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home2/>}></Route>       
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path="/picture" element={<FullPicture/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
