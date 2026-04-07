import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroImageTranslate = Math.min(scrollY * 0.18, 90)

  const specialties = [
    {
      title: 'Thịt Kho',
      description:
        'Porc fondant mijoté lentement, sauce caramélisée, généreuse et réconfortante.',
      image: '/Thit-Kho-Close-Up-saved-for-web.png',
    },
    {
      title: 'Canh Chua',
      description:
        'Soupe vietnamienne acidulée, fraîche, parfumée, légère et pleine d’équilibre.',
      image: '/cach-lam-canh-chua-chay-ngon-1.jpg',
    },
    {
      title: 'Nori Tacos',
      description:
        'Une création signature croustillante, gourmande et directe, pensée pour Strasbourg.',
      image: '/36474.jpg.jpg',
    },
  ]

  return (
    <main>
      <section className="relative px-6 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(88,45,21,0.10),rgba(88,45,21,0.03)_28%,rgba(88,45,21,0))]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.30em] text-[#faedd9]/90 md:text-[13px]">
            Cuisine vietnamienne à Strasbourg
          </p>

          <h1
            className="mx-auto max-w-5xl text-5xl leading-[0.94] tracking-tight md:text-7xl lg:text-[92px]"
            style={{ textShadow: '0 2px 18px rgba(79, 42, 22, 0.14)' }}
          >
            La vraie cuisine du Vietnam,
            <br />
            comme Maman Hà
            <br />
            me l’a apprise.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[#fff0df]/95 md:text-xl">
            Recettes transmises, plats signature, service attentif et saveurs
            préservées au cœur de Strasbourg.
          </p>

          <Link
            to="/menu"
            className="mt-10 inline-flex rounded-full bg-[#8d473e] px-10 py-5 font-sans text-lg text-[#f8efe5] shadow-[0_14px_32px_rgba(76,31,24,0.22)] transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Voir la carte
          </Link>

          <div className="mx-auto mt-14 overflow-hidden rounded-[28px] border border-[#f7ead8]/20 shadow-[0_24px_60px_rgba(72,35,17,0.22)] ring-1 ring-[#fff5e7]/10 lg:mt-16">
            <div className="relative h-[340px] overflow-hidden md:h-[460px] lg:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1800&q=80"
                alt="Paysage vietnamien"
                className="h-[120%] w-full max-w-none object-cover will-change-transform"
                style={{
                  transform: `translateY(${heroImageTranslate}px) scale(1.08)`,
                  transition: 'transform 0.08s linear',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8d473e] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.28em] text-[#f3e6d5]/75">
              À la carte
            </p>
            <h2 className="text-5xl leading-[0.96] md:text-6xl lg:text-[74px]">
              Nos spécialités
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {specialties.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[26px] bg-[#a85c4d] shadow-[0_18px_40px_rgba(59,24,18,0.18)] ring-1 ring-[#f2dfca]/8"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover object-center transition duration-500 hover:scale-[1.03] md:h-[360px]"
                  />
                </div>

                <div className="px-6 pb-7 pt-6 text-[#f6ede1]">
                  <p className="mb-3 font-sans text-xs uppercase tracking-[0.22em] text-[#f3e6d5]/70">
                    Signature
                  </p>
                  <h3 className="text-4xl leading-none md:text-[42px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-sans text-[18px] leading-relaxed text-[#f4e8db]/90">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-flex rounded-full bg-[#f1e3cf] px-8 py-4 font-sans text-lg text-[#8d473e] shadow-[0_12px_30px_rgba(59,24,18,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Découvrir la carte
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}