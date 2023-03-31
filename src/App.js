import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Quote from './components/Quote';
import Error from './components/Error';
import Calculator from './components/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
