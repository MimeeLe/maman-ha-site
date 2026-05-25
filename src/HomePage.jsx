import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from './data/blogPosts'
import { goiCuonEvent } from './data/goiCuonEvent'

export default function HomePage() {
  const latestBlogPosts = blogPosts.slice(0, 3)

  const specialties = [
    {
      title: 'Thịt Kho',
      tag: 'Plat emblématique',
      description:
        'Porc longuement mijoté, sauce caramélisée profonde et texture fondante, dans l’esprit des recettes familiales vietnamiennes.',
      image: '/Thit-Kho-Close-Up-saved-for-web.png',
    },
    {
      title: 'Canh Chua',
      tag: 'Équilibre & fraîcheur',
      description:
        'Une soupe vietnamienne acidulée, légère et parfumée, pensée autour de l’équilibre entre fraîcheur, douceur et vivacité.',
      image: '/cach-lam-canh-chua-chay-ngon-1.jpg',
    },
    {
      title: 'Gà Kho Gừng',
      tag: 'Signature maison',
      description:
        'Un poulet tendre et parfumé, délicatement relevé par le gingembre frais, les aromates et une sauce riche en goût. Un plat réconfortant et généreux, fidèle à l’âme de la cuisine familiale vietnamienne.',
      image: '/ga-kho-gung.jpg',
    },
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Maman Hà',
    url: 'https://maman-ha.com/',
    image: 'https://maman-ha.com/logo-maman-ha.png',
    logo: 'https://maman-ha.com/logo-maman-ha.png',
    telephone: '+33388252140',
    email: 'contact@maman-ha.com',
    servesCuisine: ['Vietnamese'],
    menu: 'https://maman-ha.com/menu',
    sameAs: ['https://www.instagram.com/restaurant.maman.ha'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 rue de Berne',
      postalCode: '67000',
      addressLocality: 'Strasbourg',
      addressCountry: 'FR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '18:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '18:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '18:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '18:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '18:30',
        closes: '21:00',
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>Maman Hà | Restaurant vietnamien à Strasbourg</title>
        <meta
          name="description"
          content="Maman Hà, restaurant vietnamien à Strasbourg. Cuisine familiale, recettes transmises, plats signature, sur place et à emporter."
        />
        <link rel="canonical" href="https://maman-ha.com/" />
        <meta property="og:title" content="Maman Hà | Restaurant vietnamien à Strasbourg" />
        <meta
          property="og:description"
          content="Cuisine vietnamienne familiale à Strasbourg. Recettes transmises, plats signature, sur place et à emporter."
        />
        <meta property="og:url" content="https://maman-ha.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main>
        <section className="bg-[#7f3d36] px-5 py-3 text-[#f7ead8] lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 font-sans text-sm sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/goi-cuon"
              className="group flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="w-fit rounded-full bg-[#f2dfca] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8d473e]">
                {goiCuonEvent.label}
              </span>
              <span className="font-semibold leading-snug">
                Gỏi Cuốn à partager · {goiCuonEvent.dates} · réservation 24h à l’avance
              </span>
              <span className="hidden font-semibold text-[#f2dfca] transition group-hover:translate-x-0.5 sm:inline">
                Découvrir →
              </span>
            </Link>

            <a
              href={goiCuonEvent.phoneHref}
              className="w-fit rounded-full border border-[#f2dfca]/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-[#f2dfca] hover:text-[#8d473e]"
            >
              Réserver au {goiCuonEvent.phone}
            </a>
          </div>
        </section>

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
              La cuisine du Vietnam,
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

            <div className="mx-auto mt-14 overflow-hidden rounded-[28px] border border-[#f7ead8]/20 bg-[#d8c3a0] shadow-[0_24px_60px_rgba(72,35,17,0.22)] ring-1 ring-[#fff5e7]/10 lg:mt-16">
              <div className="flex min-h-[340px] items-center justify-center md:min-h-[460px] lg:min-h-[560px]">
                <img
                  src="/Hero-home.jpg"
                  alt="Hero Maman Hà"
                  className="max-h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7ead8] px-6 py-16 text-[#3b2416] lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[28px] border border-[#8d473e]/12 bg-[#fff7ed] p-5 shadow-[0_22px_50px_rgba(87,43,24,0.12)] md:grid-cols-[0.92fr_1.08fr] md:p-7 lg:p-9">
            <div className="min-h-[280px] overflow-hidden rounded-[22px] bg-[#efe0ca]">
              {goiCuonEvent.image ? (
                <img
                  src={goiCuonEvent.image}
                  alt="Gỏi cuốn vietnamiens à partager chez Maman Hà"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[280px] items-center justify-center px-8 text-center">
                  <p className="font-sans text-sm uppercase tracking-[0.24em] text-[#9b3d1f]">
                    Maman Hà
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center py-2 md:py-4">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#9b3d1f]">
                {goiCuonEvent.label}
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl leading-none text-[#8d473e] md:text-5xl lg:text-[58px]">
                {goiCuonEvent.shortTitle}
              </h2>

              <p className="mt-5 max-w-2xl font-sans text-[17px] leading-8 text-[#5c4030]">
                Pour la fête des mères, composez et roulez vos gỏi cuốn autour
                d’un plateau à partager : un moment frais, familial et convivial,
                disponible uniquement deux jours chez Maman Hà.
              </p>

              <div className="mt-7 grid gap-3 font-sans text-sm font-semibold text-[#3b2416] sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f2dfca] px-4 py-3">
                  {goiCuonEvent.dates}
                </div>
                <div className="rounded-2xl bg-[#f2dfca] px-4 py-3">
                  Sur place uniquement · réservation 24h à l’avance
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={goiCuonEvent.phoneHref}
                  className="inline-flex justify-center rounded-full bg-[#8d473e] px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#f8efe5] shadow-[0_12px_28px_rgba(76,31,24,0.18)] transition hover:opacity-95"
                >
                  Réserver au {goiCuonEvent.phone}
                </a>

                <Link
                  to="/goi-cuon"
                  className="inline-flex justify-center rounded-full border border-[#8d473e]/25 px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#8d473e] transition hover:bg-[#f2dfca]"
                >
                  Découvrir l’événement
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#8d473e] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.28em] text-[#f3e6d5]/75">
                À découvrir
              </p>
              <h2 className="text-5xl leading-[0.96] md:text-6xl lg:text-[74px]">
                Nos spécialités
              </h2>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-[17px] leading-relaxed text-[#f3e6d5]/88 md:text-[18px]">
                Quelques plats qui racontent l’esprit de la maison : des recettes
                transmises, des équilibres travaillés et une cuisine pensée pour être
                partagée.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {specialties.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] bg-[#a85c4d] shadow-[0_18px_40px_rgba(59,24,18,0.18)] ring-1 ring-[#f2dfca]/8 transition duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[320px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.04] md:h-[360px]"
                    />
                  </div>

                  <div className="px-6 pb-7 pt-6 text-[#f6ede1]">
                    <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.22em] text-[#f3e6d5]/72">
                      {item.tag}
                    </p>

                    <h3 className="text-4xl leading-none md:text-[42px]">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-px w-12 bg-[#f3e6d5]/35" />

                    <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#f4e8db]/92">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/menu"
                className="inline-flex rounded-full border border-[#f1e3cf]/30 bg-[#f1e3cf] px-8 py-4 font-sans text-lg text-[#8d473e] shadow-[0_12px_30px_rgba(59,24,18,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Voir le menu complet
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f2dfca] px-6 py-20 text-[#3b2416] lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 font-sans text-sm uppercase tracking-[0.26em] text-[#9b3d1f]">
                  Blog
                </p>
                <h2 className="text-4xl leading-none md:text-5xl lg:text-[58px]">
                  Histoires, plats et saveurs vietnamiennes
                </h2>
              </div>

              <Link
                to="/blog"
                className="inline-flex w-fit rounded-full border border-[#9b3d1f]/20 bg-white/55 px-6 py-3 font-sans text-sm font-semibold text-[#9b3d1f] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Tous les articles
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {latestBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl bg-[#fff7ed] shadow-sm shadow-[#8d473e]/10 ring-1 ring-[#8d473e]/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8d473e]/12"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-40 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="p-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#9b3d1f]">
                      {post.category}
                    </p>

                    <h3 className="mt-3 text-2xl leading-tight">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 font-sans text-sm leading-relaxed text-[#5c4030]">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4 font-sans text-sm text-[#8b5a3c]">
                      <span>{post.readingTime}</span>
                      <span className="font-semibold text-[#9b3d1f] transition group-hover:translate-x-1">
                        Lire →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
