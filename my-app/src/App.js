import './App.css';

function App() {
  const categories = [
    {
      title: 'Herramientas Eléctricas',
      description:
        'Taladros, sierras, pulidoras y equipos profesionales de alto rendimiento.',
      image:
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Materiales de Construcción',
      description:
        'Cemento, blocks, acero y materiales resistentes para cada proyecto.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-black text-yellow-400">
            FERREMAX
          </h1>

          <nav className="hidden md:flex gap-8 text-zinc-300">
            <a href="#inicio" className="hover:text-yellow-400">
              Inicio
            </a>
            <a href="#categorias" className="hover:text-yellow-400">
              Categorías
            </a>
            <a href="#contacto" className="hover:text-yellow-400">
              Contacto
            </a>
          </nav>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold">
            Cotizar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="ferreteria"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Calidad • Resistencia • Innovación
          </p>

          <h2 className="text-6xl font-black max-w-4xl leading-tight mb-6">
            La Ferretería
            <span className="text-yellow-400"> Profesional </span>
            Para Grandes Proyectos
          </h2>

          <p className="text-zinc-300 max-w-2xl mx-auto text-lg mb-10">
            Herramientas industriales y materiales premium para construcción.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold">
              Explorar Productos
            </button>

            <button className="border border-zinc-500 px-8 py-4 rounded-2xl">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categorias"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-3">
            Nuestras Categorías
          </p>

          <h2 className="text-5xl font-black mb-4">
            Todo Para Construir
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative rounded-3xl overflow-hidden border border-zinc-800"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[450px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {category.title}
                </h3>

                <p className="text-zinc-300 mb-5">
                  {category.description}
                </p>

                <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold">
                  Ver Más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        className="border-t border-zinc-800 py-10 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black text-yellow-400">
              FERREMAX
            </h3>

            <p className="text-zinc-500">
              Soluciones profesionales para construcción.
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App