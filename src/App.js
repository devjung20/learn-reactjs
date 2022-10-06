import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading/index';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';

function App() {
  const shouldRedirect = true;

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="todo">Todos</Link>
        <hr />
        <Link to="albums">Albums</Link>
      </nav>
      <Routes>
        <Route index element={<Header />} />
        <Route
          path="/loading"
          element={shouldRedirect ? <Navigate replace to="/" /> : <Loading />}
        />
        <Route path="/" element={<Header />} />
        <Route path="todo/*" element={<TodoFeature />} />
        {/* <Route path="todo" element={<CounterFeature />} /> */}

        <Route path="albums" element={<AlbumFeature />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
