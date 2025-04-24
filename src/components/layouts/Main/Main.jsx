import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { SearchBar } from '../SearchBar/SearchBar';

export const Main = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos', error);
        setLoading(false);
      });
  }, []);



  return (
    <main className="main-container">
      <div className="grid-container">
        {loading ? (
          <p>Cargando productos...</p>
        ) : productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              title={producto.title}
              image={producto.image}
              price={producto.price}
            />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </main>
  );
};
