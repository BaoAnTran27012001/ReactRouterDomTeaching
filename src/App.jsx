import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './components/SharedLayout';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route  index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='*' element={<Error />} />
          </Route>
          <Route path='dashboard' element={<div>Dashboard</div>}>
            <Route path='about' element={<div>About Dashboard</div>}></Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
