// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  // const[alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042744";
      // showAlert("dark mode has been enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light mode has been enabled","success");
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={"this is alert"}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Textform heading="Enter the text here to analyze" mode={mode}/>  
          </Route> */}

        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={"this is alert"} />
        <div className="container my-3">
          <Routes>
           <Route exact path="/" element={<Textform/>}/>
           <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

//class by className
//for by htmlFor
