export default function MenuPage() {
  return (
    <main className="bg-[#efe7db] text-[#2f2a26]">
      <section className="relative min-h-[440px] overflow-hidden">
        <img
          src="/Hero-Menu.jpg"
          alt="Sélection de plats Maman Hà"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(46,28,18,0.42)]" />

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-end px-6 pb-16 pt-20 lg:px-8">
          <div>
            <p className="mb-4 text-5xl text-[#e0b24f]">*</p>
            <h1 className="text-5xl text-[#f3d892] underline underline-offset-8 md:text-6xl">
              Menu
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.26em] text-[#8d473e]">
            La carte
          </p>

          <h2 className="text-4xl text-[#8d473e] md:text-5xl">
            Découvrez notre menu
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-[#5a5148]">
            Retrouvez les spécialités de la maison, les plats signature et les
            créations pensées pour une cuisine vietnamienne généreuse, vivante et
            sincère.
          </p>

          <img
            src="/menu-maman-ha-cover.jpg"
            alt="Couverture du menu Maman Hà"
            className="mx-auto mt-12 w-full max-w-[320px] shadow-[0_18px_40px_rgba(59,24,18,0.15)] md:max-w-[360px]"
          />

          <a
            href="/menu-maman-ha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-md bg-[#a6524b] px-10 py-4 font-sans text-base text-[#f7efe6] transition hover:opacity-90"
          >
            Voir la carte
          </a>
        </div>
      </section>
    </main>
  )
}