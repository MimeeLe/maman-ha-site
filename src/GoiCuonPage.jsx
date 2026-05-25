import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { goiCuonEvent } from './data/goiCuonEvent'

export default function GoiCuonPage() {
  const eventStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: goiCuonEvent.title,
    description:
      'Pour la fête des mères, Maman Hà propose une expérience gỏi cuốn à partager à Strasbourg, uniquement sur réservation les vendredi 29 et samedi 30 mai.',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    image: `https://maman-ha.com${goiCuonEvent.image}`,
    location: {
      '@type': 'Restaurant',
      name: 'Maman Hà',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9 rue de Berne',
        postalCode: '67000',
        addressLocality: 'Strasbourg',
        addressCountry: 'FR',
      },
    },
    organizer: {
      '@type': 'Restaurant',
      name: 'Maman Hà',
      url: 'https://maman-ha.com/',
      telephone: '+33388252140',
    },
  }

  return (
    <>
      <Helmet>
        <title>Gỏi Cuốn à Strasbourg pour la fête des mères | Maman Hà</title>
        <meta
          name="description"
          content="Pour la fête des mères, Maman Hà propose une expérience gỏi cuốn à partager à Strasbourg, uniquement sur réservation les vendredi 29 et samedi 30 mai."
        />
        <link rel="canonical" href="https://maman-ha.com/goi-cuon" />
        <meta property="og:title" content="Gỏi Cuốn à Strasbourg pour la fête des mères | Maman Hà" />
        <meta
          property="og:description"
          content="Une expérience gỏi cuốn à composer et rouler soi-même chez Maman Hà, uniquement sur place et sur réservation."
        />
        <meta property="og:url" content="https://maman-ha.com/goi-cuon" />
        <meta property="og:type" content="website" />
        {goiCuonEvent.image && (
          <meta property="og:image" content={`https://maman-ha.com${goiCuonEvent.image}`} />
        )}
        <script type="application/ld+json">{JSON.stringify(eventStructuredData)}</script>
      </Helmet>

      <main className="bg-[#f7ead8] text-[#3b2416]">
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.26em] text-[#9b3d1f]">
                {goiCuonEvent.label}
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] text-[#8d473e] md:text-6xl lg:text-[76px]">
                {goiCuonEvent.title}
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-lg leading-9 text-[#5c4030]">
                Pour la fête des mères, Maman Hà vous invite à découvrir une
                expérience conviviale autour du gỏi cuốn, les rouleaux de
                printemps vietnamiens à composer et rouler soi-même.
              </p>

              <div className="mt-8 flex flex-col gap-3 font-sans text-sm font-semibold text-[#3b2416] sm:flex-row sm:flex-wrap">
                <span className="rounded-full bg-[#efe0ca] px-5 py-3">
                  {goiCuonEvent.dates}
                </span>
                <span className="rounded-full bg-[#efe0ca] px-5 py-3">
                  {goiCuonEvent.availability}
                </span>
                <span className="rounded-full bg-[#efe0ca] px-5 py-3">
                  {goiCuonEvent.reservation}
                </span>
              </div>

              <a
                href={goiCuonEvent.phoneHref}
                className="mt-9 inline-flex rounded-full bg-[#8d473e] px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.13em] text-[#f8efe5] shadow-[0_14px_30px_rgba(76,31,24,0.2)] transition hover:opacity-95"
              >
                Réserver au {goiCuonEvent.phone}
              </a>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#8d473e]/12 bg-[#fff7ed] p-4 shadow-[0_22px_50px_rgba(87,43,24,0.12)]">
              {goiCuonEvent.image ? (
                <img
                  src={goiCuonEvent.image}
                  alt="Plateau de gỏi cuốn à partager"
                  className="h-[360px] w-full rounded-[22px] object-cover md:h-[480px]"
                />
              ) : (
                <div className="flex h-[360px] items-center justify-center rounded-[22px] bg-[#efe0ca] md:h-[480px]">
                  <p className="font-sans text-sm uppercase tracking-[0.24em] text-[#9b3d1f]">
                    Gỏi Cuốn
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#fff7ed] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#9b3d1f]">
                L’expérience
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[#8d473e] md:text-5xl">
                Rouler, partager, savourer
              </h2>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-8 text-[#5c4030]">
              <p>
                Au Vietnam, <strong>cuốn</strong> signifie “rouler”. Mais autour
                d’une table, c’est bien plus que cela : c’est un moment de
                partage, de fraîcheur et de simplicité, où chacun prépare son
                rouleau selon ses envies.
              </p>
              <p>
                Le vendredi 29 mai et le samedi 30 mai, nous proposerons des
                plateaux de gỏi cuốn à partager, disponibles uniquement sur place
                et sur réservation.
              </p>
              <p>
                Pour garantir la fraîcheur des produits, préparer chaque plateau
                avec soin et éviter le gaspillage alimentaire, les réservations
                devront être faites au minimum 24h à l’avance.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#9b3d1f]">
                Les formules
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[#8d473e] md:text-5xl">
                Des plateaux à composer ensemble
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {goiCuonEvent.formulas.map((formula) => (
                <article
                  key={formula.name}
                  className="rounded-[22px] bg-[#fff7ed] p-6 shadow-sm ring-1 ring-[#8d473e]/10"
                >
                  <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#9b3d1f]">
                    {formula.name}
                  </p>
                  <h3 className="mt-4 text-3xl leading-none text-[#3b2416]">
                    {formula.price}
                  </h3>
                  <p className="mt-5 font-sans text-[15px] leading-7 text-[#5c4030]">
                    {formula.ingredients}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#8d473e] px-6 py-16 text-[#f7ead8] lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#f2dfca]/80">
                Infos pratiques
              </p>
              <h2 className="mt-3 text-4xl leading-none md:text-5xl">
                Un moment éphémère, préparé sur réservation
              </h2>
            </div>

            <div className="grid gap-3 font-sans text-[16px] leading-7 md:grid-cols-2">
              <div className="rounded-2xl bg-[#7f3d36] p-5">
                <strong>Dates</strong>
                <p className="mt-2 text-[#f7ead8]/85">{goiCuonEvent.dates}</p>
              </div>
              <div className="rounded-2xl bg-[#7f3d36] p-5">
                <strong>Disponibilité</strong>
                <p className="mt-2 text-[#f7ead8]/85">{goiCuonEvent.availability}</p>
              </div>
              <div className="rounded-2xl bg-[#7f3d36] p-5">
                <strong>Réservation</strong>
                <p className="mt-2 text-[#f7ead8]/85">{goiCuonEvent.reservation}</p>
              </div>
              <div className="rounded-2xl bg-[#7f3d36] p-5">
                <strong>Téléphone</strong>
                <p className="mt-2 text-[#f7ead8]/85">{goiCuonEvent.phone}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 text-center lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#9b3d1f]">
              Réserver votre plateau
            </p>
            <h2 className="mt-3 text-4xl leading-none text-[#8d473e] md:text-5xl">
              Offrez un moment à partager autour de la table
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-[17px] leading-8 text-[#5c4030]">
              Les plateaux sont préparés avec soin, uniquement sur réservation,
              pour préserver la fraîcheur des produits et le plaisir du moment.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={goiCuonEvent.phoneHref}
                className="inline-flex justify-center rounded-full bg-[#8d473e] px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.13em] text-[#f8efe5] transition hover:opacity-95"
              >
                Réserver au {goiCuonEvent.phone}
              </a>
              <Link
                to="/infos"
                className="inline-flex justify-center rounded-full border border-[#8d473e]/25 px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.13em] text-[#8d473e] transition hover:bg-[#f2dfca]"
              >
                Infos pratiques
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
