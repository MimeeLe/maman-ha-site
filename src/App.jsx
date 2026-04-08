import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './HomePage'
import MenuPage from './MenuPage'
import HistoirePage from './HistoirePage'
import InfosPage from './InfosPage'

function SiteLayout({ children }) {
  const navLinkClass = ({ isActive }) =>
    `transition hover:opacity-80 ${isActive ? 'underline underline-offset-4' : ''}`

  return (
    <div
      className="min-h-screen flex flex-col text-[#f7ead8]"
      style={{
        fontFamily: 'Georgia, Times New Roman, serif',
        background:
          'radial-gradient(circle at top, #e2be72 0%, #d2a34a 38%, #bf8736 68%, #a96b2f 100%)',
      }}
    >
      <header className="sticky top-0 z-50 border-b border-[#f3dfc5]/10 bg-[#8d473e]/94 text-[#f6ecdf] backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8 py-4 lg:px-12">
          <nav className="flex items-center gap-8 font-sans text-[15px]">
            <NavLink to="/" className={navLinkClass}>
              Accueil
            </NavLink>
            <NavLink to="/menu" className={navLinkClass}>
              Menu
            </NavLink>
            <NavLink to="/histoire" className={navLinkClass}>
              Histoire
            </NavLink>
            <NavLink to="/infos" className={navLinkClass}>
              Infos
            </NavLink>
          </nav>

          <div className="px-6 text-center text-[22px] leading-none tracking-[0.12em] whitespace-nowrap md:text-[30px] lg:text-[38px]">
            RESTAURANT MAMAN HÀ
          </div>

          <div className="flex justify-end font-sans text-[15px]">
            <a href="#" aria-label="Instagram" className="transition hover:opacity-80">
              Instagram
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="bg-[#efe0ca] text-[#332a24]">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-8 lg:pb-10 lg:pt-16">
          <div className="border-b border-[#8d473e]/15 pb-10">
            <img
              src="/logo-maman-ha.png"
              alt="Logo Maman Hà"
              className="mb-6 h-20 w-auto rounded-full shadow-[0_10px_25px_rgba(59,24,18,0.10)]"
            />

            <p className="font-sans text-sm uppercase tracking-[0.24em] text-[#8d473e]">
              Restaurant Maman Hà
            </p>

            <p className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
              Une cuisine vietnamienne transmise,
              <br />
              pensée pour être partagée.
            </p>
          </div>

          <div className="grid gap-12 py-10 md:grid-cols-3">
            <div>
              <h4 className="text-3xl md:text-[36px]">Adresse</h4>
              <div className="mt-5 space-y-2 font-sans text-[17px] leading-relaxed text-[#4a433d]">
                <p>9 rue de Berne</p>
                <p>67000 Strasbourg</p>
              </div>
            </div>

            <div>
              <h4 className="text-3xl md:text-[36px]">Horaires</h4>
              <div className="mt-5 space-y-3 font-sans text-[17px] leading-relaxed text-[#4a433d]">
                <p>
                  Mardi au samedi
                  <br />
                  11h30 à 14h30
                  <br />
                  18h30 à 21h
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-3xl md:text-[36px]">Contact</h4>
              <div className="mt-5 space-y-3 font-sans text-[17px] leading-relaxed text-[#4a433d]">
                <a
                  href="mailto:contact@maman-ha.com"
                  className="block underline underline-offset-4 transition hover:opacity-80"
                >
                  contact@maman-ha.com
                </a>
                <a
                  href="tel:+33388252140"
                  className="block underline underline-offset-4 transition hover:opacity-80"
                >
                  03 88 25 21 40
                </a>
                <a
                  href="#"
                  className="mt-4 inline-flex rounded-full bg-[#8d473e] px-5 py-2.5 text-[#f7efe6] no-underline transition hover:opacity-90"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#8d473e]/15 pt-6 font-sans text-sm text-[#6a6057] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Restaurant Maman Hà</p>
            <p>Strasbourg · Cuisine vietnamienne</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SiteLayout>
            <HomePage />
          </SiteLayout>
        }
      />
      <Route
        path="/menu"
        element={
          <SiteLayout>
            <MenuPage />
          </SiteLayout>
        }
      />
      <Route
        path="/histoire"
        element={
          <SiteLayout>
            <HistoirePage />
          </SiteLayout>
        }
      />
      <Route
        path="/infos"
        element={
          <SiteLayout>
            <InfosPage />
          </SiteLayout>
        }
      />
    </Routes>
  )
}