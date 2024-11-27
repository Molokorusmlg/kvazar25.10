import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/header";
import Signup from "./components/signUp/signUp";
import MainPrograms from "./components/main_programs/mainPrograms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/signUp/register";
import CoursesMeny from "./components/courses/courses";
import './css/app.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/programs/main" element={<MainPrograms />}></Route>
        <Route path="/courses/main" element={<CoursesMeny />}></Route>
      </Routes>
    </div>
  );
}
reportWebVitals();
export default App;
