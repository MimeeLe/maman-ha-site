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
            <a
              href="https://www.instagram.com/restaurant.maman.ha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:opacity-80"
            >
              Instagram
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="bg-[#efe0ca] text-[#332a24]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-10 border-b border-[#8d473e]/15 pb-8 md:grid-cols-[auto_1fr] md:items-center">
            <img
              src="/logo-maman-ha.png"
              alt="Logo Maman Hà"
              className="h-14 w-auto rounded-full shadow-[0_8px_18px_rgba(59,24,18,0.08)]"
            />

            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#8d473e]">
                Restaurant Maman Hà
              </p>
              <p className="mt-2 max-w-2xl text-2xl leading-tight md:text-[30px]">
                Cuisine vietnamienne familiale à Strasbourg.
              </p>
            </div>
          </div>

          <div className="grid gap-8 py-8 md:grid-cols-3">
            <div>
              <h4 className="text-[26px] md:text-[28px]">Adresse</h4>
              <div className="mt-3 space-y-1 font-sans text-[16px] leading-relaxed text-[#4a433d]">
                <p>9 rue de Berne</p>
                <p>67000 Strasbourg</p>
              </div>
            </div>

            <div>
              <h4 className="text-[26px] md:text-[28px]">Horaires</h4>
              <div className="mt-3 font-sans text-[16px] leading-relaxed text-[#4a433d]">
                <p className="text-[#8d473e]">Mardi au samedi</p>
                <div className="mt-3 space-y-2">
                  <p>
                    <span className="mr-2 text-[#8d473e]">Midi</span>
                    11h30 à 14h30
                  </p>
                  <p>
                    <span className="mr-2 text-[#8d473e]">Soir</span>
                    18h30 à 21h
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[26px] md:text-[28px]">Contact</h4>
              <div className="mt-3 space-y-2 font-sans text-[16px] leading-relaxed text-[#4a433d]">
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
                  href="https://www.instagram.com/restaurant.maman.ha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[#8d473e] px-5 py-2.5 text-[#f7efe6] no-underline transition hover:opacity-90"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-[#8d473e]/15 pt-5 font-sans text-[13px] text-[#6a6057] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Restaurant Maman Hà</p>
            <p>maman-ha.com</p>
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