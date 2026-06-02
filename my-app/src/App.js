import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeView from './features/Home/HomeView';
import CotizarView from './features/Cotizar/CotizarView';
import CategoriasView from './features/Categoria/CategoriaView';
import ContactoView from './features/Contacto/ContactoView';
import ProductView from './features/Product/ProductView';

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
    {
      title: 'Electricidad',
      description:
        'Cables, bobillos, interruptores, tomacorrientes y todo para instalaciones electricas seguras,',
      image:
        'https://www.diceltro.com/wp-content/uploads/bfi_thumb/electricidad-nhdelg2l6ezb69jq961lmmwjwhshsor0oah2pz8lg4.png',
    }
  ]

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-black text-yellow-400">
            FERRONOVA
          </h1>

          <nav className="hidden md:flex gap-8 text-zinc-300">
            <Link to="/" className="hover:text-yellow-400">
              Inicio
            </Link>
            <Link to="/categorias" className="hover:text-yellow-400">
              Categorías
            </Link>
            <Link to="/contacto" className="hover:text-yellow-400">
              Contacto
            </Link>
          </nav>

          <Link to="/cotizar" className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold">
            Cotizar
          </Link>
        </div>
      </header>

       <div className="flex-1 flex items-center justify-center pt-28">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cotizar" element={<CotizarView />} />
          <Route path="/categorias" element={<CategoriasView />} />
          <Route path="/contacto" element={<ContactoView />} />          
          <Route path="/product" element={<ProductView />} />          
        </Routes>
      </div>

      {/* Footer */}
      <footer
        id="contacto"
        className="border-t border-zinc-800 py-10 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black text-yellow-400">
              FERRONOVA
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