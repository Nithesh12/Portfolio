import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './App'
import Project from "./project"
// import Resume from "./resume"
function Main(){
    return(
        <div>
    <BrowserRouter>
    <Routes>
             <Route exact path='/' element={< App />}></Route>
             <Route exact path='/project' element={< Project />}></Route>
             <Route exact path='/resume' element={< App />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    )
}
export default Main;
