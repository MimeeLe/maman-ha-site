export default function InfosPage() {
  return (
    <main className="bg-[#efe7db] text-[#2f2a26]">
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.28em] text-[#8d473e]">
            Infos pratiques
          </p>

          <h1 className="text-5xl text-[#a6524b] md:text-6xl">Nous trouver</h1>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-[#5a5148] md:text-xl">
            Une adresse pensée pour accueillir, faire découvrir et partager une
            cuisine vietnamienne sincère au cœur de Strasbourg.
          </p>
        </div>
      </section>

      <section className="bg-[#a6524b] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <img
            src="/devanture-restaurant.jpg"
            alt="Devanture du restaurant Maman Hà"
            className="mx-auto h-[320px] w-full max-w-[920px] object-cover shadow-[0_20px_45px_rgba(59,24,18,0.22)] md:h-[420px] lg:h-[520px]"
          />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.22em] text-[#8d473e]">
              Adresse
            </p>
            <h2 className="text-5xl leading-none md:text-6xl">
              9 rue de Berne
              <br />
              Strasbourg
            </h2>

            <div className="mt-8 space-y-5 font-sans text-[17px] leading-relaxed text-[#4a433d] md:text-[18px]">
              <p>
                Maman Hà vous accueille à Strasbourg dans un lieu pensé pour une
                cuisine vietnamienne familiale, généreuse et soignée.
              </p>

              <p>
                Sur place ou à emporter, l’adresse a été imaginée comme un lieu
                simple, vivant et chaleureux, fidèle à l’esprit de la maison.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <section className="rounded-[24px] bg-[#f4ecdf] p-8 shadow-[0_16px_35px_rgba(59,24,18,0.08)]">
              <p className="mb-3 font-sans text-sm uppercase tracking-[0.22em] text-[#8d473e]">
                Horaires
              </p>
              <div className="space-y-3 font-sans text-lg leading-relaxed text-[#3f3732]">
                <p>Mardi au samedi</p>
                <p>
                  Service du midi
                  <br />
                  11h30 à 14h30
                </p>
                <p>
                  Service du soir
                  <br />
                  18h30 à 21h
                </p>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#f4ecdf] p-8 shadow-[0_16px_35px_rgba(59,24,18,0.08)]">
              <p className="mb-3 font-sans text-sm uppercase tracking-[0.22em] text-[#8d473e]">
                Contact
              </p>
              <div className="space-y-3 font-sans text-lg leading-relaxed text-[#3f3732]">
                <a
                  href="mailto:contact@maman-ha.com"
                  className="block underline underline-offset-4"
                >
                  contact@maman-ha.com
                </a>
                <a
                  href="tel:+33388252140"
                  className="block underline underline-offset-4"
                >
                  03 88 25 21 40
                </a>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#f4ecdf] p-8 shadow-[0_16px_35px_rgba(59,24,18,0.08)]">
              <p className="mb-3 font-sans text-sm uppercase tracking-[0.22em] text-[#8d473e]">
                Sur place & à emporter
              </p>
              <div className="space-y-3 font-sans text-lg leading-relaxed text-[#3f3732]">
                <p>
                  Commande sur place et à emporter, selon les disponibilités du
                  service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#a6524b] px-6 py-16 text-[#f6ecdf] lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 font-sans text-sm uppercase tracking-[0.22em] text-[#f0d8c9]/70">
                Le lieu
              </p>
              <h2 className="text-5xl leading-none md:text-6xl">
                Une adresse pensée
                <br />
                pour accueillir
              </h2>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-relaxed text-[#f6e9da] md:text-[18px]">
              <p>
                Maman Hà n’est pas seulement une carte : c’est aussi une
                atmosphère, un rythme, une manière de recevoir.
              </p>

              <p>
                L’idée est de proposer un lieu simple, vivant et soigné, fidèle à
                l’esprit de la cuisine servie.
              </p>

              <p>
                La devanture, l’accueil et l’ambiance participent autant que les
                plats à l’expérience du lieu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}