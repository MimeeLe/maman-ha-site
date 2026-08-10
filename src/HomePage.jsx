import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from './data/blogPosts'

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

  const googleReviews = [
    {
      author: 'Z. E. G.',
      text: 'Incroyable expérience toute en authenticité 🥰 La cuisine est absolument délicieuse, gros coup de cœur sur le Gà kho gùng! Le décor est magnifique et nous fait vraiment voyager au Vietnam. Merci à la gérante et au personnel qui sont adorables, avec une histoire extrêmement touchante 💗 Je reviendrai!',
    },
    {
      author: 'L. L.',
      text: 'L’ambiance vietnamienne jusque dans l’assiette ! Tout y est, le goût, le charme et une super équipe merci pour ce moment. Hâte de TOUT goûter !',
    },
    {
      author: 'L. R.',
      text: 'Excellente découverte ! Un restaurant vietnamien pas comme les autres, une cuisine familiale, pleine de partage, très goûteuse et qui nous a ramené directement au Vietnam dés les premières bouchées. C’est une cuisine faite avec amour et passion et ça se ressent ! Nous reviendrons avec grand plaisir 🌞',
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
            <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.26em] text-[#9b3d1f]">
                Avis Google
              </p>
              <h2 className="text-5xl leading-[0.96] md:text-6xl lg:text-[74px]">
                Ils parlent de nous
              </h2>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-[17px] leading-relaxed text-[#5c4030] md:text-[18px]">
                Des mots qui nous touchent et qui racontent ce que nous aimons
                partager chaque jour : une cuisine familiale, généreuse et
                sincère.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
              {googleReviews.map((review) => (
                <article
                  key={review.author}
                  className="flex h-full flex-col rounded-2xl bg-[#fff7ed] p-6 shadow-sm shadow-[#8d473e]/10 ring-1 ring-[#8d473e]/10 md:p-7"
                >
                  <div
                    className="mb-5 font-sans text-[18px] leading-none tracking-[0.08em] text-[#d2a34a]"
                    aria-label="5 étoiles sur 5"
                  >
                    ★★★★★
                  </div>

                  <p className="flex-1 font-sans text-[16px] leading-relaxed text-[#4b3324]">
                    “{review.text}”
                  </p>

                  <p className="mt-6 border-t border-[#8d473e]/12 pt-4 font-sans text-sm font-semibold text-[#8d473e]">
                    {review.author}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-7">
              <p className="font-sans text-[18px] font-semibold text-[#8d473e] md:text-[20px]">
                4,9/5 sur Google
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Restaurant%20Maman%20H%C3%A0%209%20rue%20de%20Berne%20Strasbourg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#9b3d1f]/20 bg-white/60 px-7 py-3.5 font-sans text-sm font-semibold text-[#9b3d1f] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Voir tous nos avis Google
              </a>
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
