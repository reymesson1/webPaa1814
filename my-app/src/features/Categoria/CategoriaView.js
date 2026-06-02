import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CategoriaView() {
  const [products] = useState([
    {
      id: 1,
      name: 'Taladro Industrial Bosch',
      brand: 'Bosch',
      price: 125,
      image:
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Sierra Circular DeWalt',
      brand: 'DeWalt',
      price: 189,
      image:
        'https://images.unsplash.com/photo-1581147036324-c1c5b3d8fc63?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Pulidora Profesional',
      brand: 'Makita',
      price: 145,
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Martillo Demoledor',
      brand: 'Bosch',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=1200&auto=format&fit=crop',
    },
  ]);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1600&auto=format&fit=crop"
          alt="Herramientas"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-3">
            Categoría
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Herramientas Eléctricas
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto">
            Equipos profesionales para construcción, remodelación
            y mantenimiento industrial.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-fit">
            <h2 className="text-2xl font-black mb-6">
              Filtros
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-zinc-400 block mb-2">
                  Buscar
                </label>

                <input
                  type="text"
                  placeholder="Buscar producto..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="text-zinc-400 block mb-2">
                  Marca
                </label>

                <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400">
                  <option>Todas</option>
                  <option>Bosch</option>
                  <option>Makita</option>
                  <option>DeWalt</option>
                </select>
              </div>

              <div>
                <label className="text-zinc-400 block mb-2">
                  Precio Máximo
                </label>

                <input
                  type="range"
                  min="0"
                  max="500"
                  className="w-full accent-yellow-400"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black">
                Productos
              </h2>

              <span className="text-zinc-400">
                {products.length} productos
              </span>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-yellow-400 text-sm uppercase">
                      {product.brand}
                    </span>

                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {product.name}
                    </h3>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-yellow-400">
                        ${product.price}
                      </span>

                      <Link to="/product" className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold hover:bg-yellow-300 transition">
                        Cotizar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-16">
              <button className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800">
                1
              </button>

              <button className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400">
                2
              </button>

              <button className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400">
                3
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoriaView;