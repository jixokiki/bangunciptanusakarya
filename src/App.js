import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Experience from './component/Experience';
import Residential from './component/Residential';
import Interior from './component/Interior';
import Hospitality from './component/Hospitality';
import Form from './component/Form/Form';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/residential" element={<Residential />}/>
          <Route path="/interior" element={<Interior />}/>
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/formApp" element={<Form />}/>
        </Route>
      </Routes>    
    </>

  );
}

export default App;
