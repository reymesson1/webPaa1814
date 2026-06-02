import React, { useState } from 'react';

function ProductView() {
  const [qty, setQty] = useState(1);

  const product = {
    name: 'Taladro Percutor Bosch Profesional',
    brand: 'Bosch',
    price: 125,
    stock: 'Disponible',
    category: 'Herramientas Eléctricas',
    description:
      'Taladro percutor de alto rendimiento ideal para concreto, acero y madera. Diseñado para uso industrial y proyectos de construcción exigentes.',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581147036324-c1c5b3d8fc63?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    ],
    specs: [
      'Potencia: 800W',
      'Velocidad variable',
      'Modo percusión',
      'Mandril metálico reforzado',
      'Uso industrial',
    ],
  };

  const related = [
    {
      name: 'Sierra Circular DeWalt',
      price: 189,
      image:
        'https://images.unsplash.com/photo-1581147036324-c1c5b3d8fc63?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Pulidora Makita',
      price: 145,
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Martillo Demoledor Bosch',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Images */}
          <div>
            <div className="rounded-3xl overflow-hidden border border-zinc-800">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className="h-28 w-full object-cover rounded-xl border border-zinc-800 hover:border-yellow-400 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-3">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-black mb-4">
              {product.name}
            </h1>

            <p className="text-zinc-400 mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-yellow-400">
                ${product.price}
              </span>

              <span className="text-green-400 text-sm font-bold">
                ● {product.stock}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 bg-zinc-800 rounded-xl"
              >
                -
              </button>

              <span className="text-xl font-bold">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 bg-zinc-800 rounded-xl"
              >
                +
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition">
                Agregar a Cotización
              </button>

              <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:border-yellow-400 hover:text-yellow-400 transition">
                Solicitar Asesoría
              </button>
            </div>

            {/* Specs */}
            <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-black mb-4">
                Especificaciones
              </h3>

              <ul className="space-y-2 text-zinc-300">
                {product.specs.map((spec, i) => (
                  <li key={i}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-black mb-8">
            Productos Relacionados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group"
              >
                <img
                  src={item.image}
                  className="h-56 w-full object-cover group-hover:scale-105 transition"
                  alt={item.name}
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item.name}
                  </h3>

                  <p className="text-yellow-400 font-bold mb-4">
                    ${item.price}
                  </p>

                  <button className="w-full bg-zinc-800 hover:bg-yellow-400 hover:text-black transition py-3 rounded-xl font-bold">
                    Ver Producto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety / Note */}
        <div className="mt-20 bg-yellow-400/10 border border-yellow-400/30 rounded-3xl p-8">
          <h3 className="text-yellow-400 font-black text-2xl mb-3">
            Recomendación de Uso
          </h3>

          <p className="text-zinc-300">
            Utilice siempre equipo de protección personal (guantes, gafas y casco).
            Este producto está diseñado para uso profesional en construcción y
            trabajos industriales.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductView;