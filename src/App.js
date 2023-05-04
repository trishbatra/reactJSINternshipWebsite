import './App.css';
import ElemSprecific from './Components/ElemSprecific';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route
        path="/specific"
        element={<ElemSprecific />}
      />
     <Route/>
</Routes>
  );
}

export default App;
