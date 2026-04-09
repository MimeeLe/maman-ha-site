import { Helmet } from 'react-helmet-async'

export default function HistoirePage() {
  return (
    <>
      <Helmet>
        <title>Histoire | Maman Hà</title>
        <meta
          name="description"
          content="Découvrez l’histoire de Maman Hà, entre transmission familiale, cuisine vietnamienne et héritage venu de Sa Dec."
        />
        <link rel="canonical" href="https://maman-ha.com/histoire" />
        <meta property="og:title" content="Histoire | Maman Hà" />
        <meta
          property="og:description"
          content="Une histoire de transmission familiale, de cuisine vietnamienne et de mémoire culinaire."
        />
        <meta property="og:url" content="https://maman-ha.com/histoire" />
      </Helmet>

      <main className="bg-[#efe7db] text-[#2f2a26]">
        <section className="px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl text-[#a6524b] md:text-6xl">Notre Histoire</h1>
            <p className="mx-auto mt-6 max-w-2xl text-3xl leading-tight md:text-4xl">
              Cuisine vietnamienne, transmission
              <br />
              familiale
            </p>
          </div>
        </section>

        <section className="bg-[#a6524b] px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <img
              src="/histoire-grand-mere.jpg"
              alt="Grand-mère en cuisine"
              className="mx-auto w-full max-w-[570px] object-cover"
            />
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-none md:text-6xl">
                Sa Dec, Vietnam
                <br />
                Le commencement
              </h2>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-relaxed text-[#4a433d] md:text-[18px]">
              <p className="underline underline-offset-4">
                Ma grand-mère, Trần Thị Bé, est à l’origine de cette histoire.
              </p>

              <p>Dans ma famille, la cuisine n’a jamais été accessoire.</p>
              <p>Ma grand-mère l’avait apprise très tôt, de sa propre mère.</p>
              <p>
                Elle y mettait une exigence particulière : chaque geste comptait,
                chaque détail devait être juste.
              </p>
              <p>Rien n’était laissé au hasard.</p>
              <p>On répétait, on corrigeait, on recommençait.</p>
              <p>C’est cette base qui a structuré tout le reste.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#a6524b] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-5xl">
    <div className="overflow-hidden rounded-2xl bg-[#9b4f48] px-4 py-6 shadow-sm md:px-6 md:py-8">
      <img
        src="/Maman-histoire.jpg"
        alt="Préparation en cuisine"
        className="mx-auto max-h-[560px] w-full object-contain"
      />
    </div>
  </div>
</section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-5xl">Strasbourg, France</p>
              <h2 className="mt-4 text-5xl leading-none md:text-6xl">
                Le partage
              </h2>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-relaxed text-[#4a433d] md:text-[18px]">
              <p>Ma mère, Tran Thi Thanh Hà, a repris cette cuisine avec une approche différente.</p>
              <p>Elle avait le sens du contact, de l’échange.</p>
              <p>Elle savait créer du lien autour de ce qu’elle préparait.</p>
              <p>
                Ses plats n’étaient pas seulement techniques, ils étaient faits pour
                être partagés, pour rassembler.
              </p>
              <p>C’est comme ça qu’elle a construit son activité de traiteur.</p>
            </div>
          </div>
        </section>

      <section className="bg-[#efe7db] px-6 py-10 lg:px-8">
  <div className="mx-auto max-w-6xl">
    <div className="overflow-hidden rounded-2xl bg-[#e6dccd] px-4 py-6 shadow-sm md:px-6 md:py-8">
      <img
        src="/Lam-histoire.jpg"
        alt="Lam en cuisine"
        className="mx-auto max-h-[520px] w-full object-contain"
      />
    </div>
  </div>
</section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="font-sans text-sm text-[#5a5148]">9 rue de Berne</p>
              <h2 className="mt-4 text-5xl leading-none md:text-6xl">
                Un nouveau défi
              </h2>
              <p className="mt-6 font-sans text-sm text-[#5a5148]">2026</p>
            </div>

            <div className="space-y-5 font-sans text-[17px] leading-relaxed text-[#4a433d] md:text-[18px]">
              <p>
                J’ai repris ces recettes en cherchant à comprendre ce qui les rendait
                justes.
              </p>
              <p>Les équilibres, les temps, les choix de produits.</p>
              <p>Ce qui ne se voit pas forcément, mais qui change tout.</p>
              <p>Aujourd’hui, Maman Hà s’inscrit dans cette continuité.</p>
              <p>
                Une cuisine fidèle à ce qui m’a été transmis, pensée pour être
                proposée telle quelle, sans simplification inutile.
              </p>
              <p>La famille est originaire de Sa Đéc, dans le delta du Mékong.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#a6524b] px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <img
              src="/Sa-Dec.jpg"
              alt="Sa Dec"
              className="mx-auto w-full max-w-[620px] object-cover"
            />
          </div>
        </section>
      </main>
    </>
  )
}