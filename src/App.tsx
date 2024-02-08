import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Home from './Home';


function App() {
  return (
   <>
            <Reset />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />               
              </Routes>
            </BrowserRouter>
   </>
  )
}

export default App;
