import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Quotes from './components/Quotes';
import Error from './components/Error';
import Calculator from './components/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
