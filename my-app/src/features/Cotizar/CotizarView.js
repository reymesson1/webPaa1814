import React, { useState } from 'react';

function CotizarView() {
  const [items] = useState([
    {
      id: 1,
      name: 'Taladro Industrial Bosch',
      qty: 2,
      price: 125,
      image:
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Cemento Gris 50kg',
      qty: 10,
      price: 9,
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    },
  ]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-3">
            Cotización
          </p>

          <h1 className="text-5xl font-black">
            Solicitar Cotización
          </h1>

          <p className="text-zinc-400 mt-4">
            Revisa tus productos y completa tus datos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Products */}
          <div className="lg:col-span-2 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex gap-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    Cantidad: {item.qty}
                  </p>

                  <p className="text-yellow-400 font-bold mt-3">
                    USD ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>

                <button className="text-red-400 hover:text-red-300">
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-28 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-black mb-6">
                Información del Cliente
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400"
                />

                <textarea
                  rows={4}
                  placeholder="Detalles adicionales del proyecto..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 resize-none"
                />
              </div>

              <div className="border-t border-zinc-800 my-8" />

              <div className="space-y-4">
                <div className="flex justify-between text-zinc-400">
                  <span>Productos</span>
                  <span>{items.length}</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span className="text-yellow-400">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:bg-yellow-300 transition">
                Enviar Cotización
              </button>

              <p className="text-xs text-zinc-500 mt-4 text-center">
                Nos pondremos en contacto contigo para confirmar precios y
                disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CotizarView;