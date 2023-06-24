import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import JobVacancy from './Pages/JobVacancy';
import JobDetail from './Pages/JobDetail';
import About from './Pages/About';
import { GlobalProvider } from './Context/globalContext';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-vacancy" element={<JobVacancy />} />
            <Route path="/job-vacancy/:idData" element={<JobDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
