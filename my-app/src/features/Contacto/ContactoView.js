import React from 'react';

function ContactoView() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Contacto"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Estamos para ayudarte
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Contacto
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300">
            Nuestro equipo está listo para ayudarte con cotizaciones,
            pedidos, materiales de construcción y herramientas
            profesionales.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
              <span className="text-black text-2xl">📞</span>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Teléfono
            </h3>

            <p className="text-zinc-400 mb-2">
              Atención directa
            </p>

            <p className="text-lg font-semibold">
              +1 (809) 555-1234
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
              <span className="text-black text-2xl">✉️</span>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Correo
            </h3>

            <p className="text-zinc-400 mb-2">
              Escríbenos
            </p>

            <p className="text-lg font-semibold">
              ventas@ferronova.com
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
              <span className="text-black text-2xl">📍</span>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Dirección
            </h3>

            <p className="text-zinc-400 mb-2">
              Visita nuestra tienda
            </p>

            <p className="text-lg font-semibold">
              Santo Domingo, República Dominicana
            </p>
          </div>
        </div>

        {/* Form + Hours */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">
            <p className="uppercase tracking-[0.3em] text-yellow-400 mb-3">
              Envíanos un mensaje
            </p>

            <h2 className="text-4xl font-black mb-8">
              Solicita Información
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
                />
              </div>

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Asunto"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
              />

              <textarea
                rows={6}
                placeholder="Escribe tu mensaje..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 resize-none outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Business Hours */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-fit">
            <h3 className="text-3xl font-black mb-8">
              Horario
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Lunes</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Martes</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Miércoles</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Jueves</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Viernes</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Sábado</span>
                <span>8:00 AM - 2:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>

            <div className="mt-10 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-5">
              <p className="text-yellow-400 font-bold mb-2">
                Atención Comercial
              </p>

              <p className="text-zinc-300 text-sm">
                Para proyectos grandes y cotizaciones corporativas,
                nuestro equipo especializado responderá en menos de
                24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <iframe
              title="Ubicación Ferronova"
              src="https://maps.google.com/maps?q=Santo%20Domingo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactoView;