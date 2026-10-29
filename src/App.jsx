const base = import.meta.env.BASE_URL;

function AssetImage({ src, ...props }) {
  return <img src={`${base}assets/${src}`} {...props} />;
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M19.11 17.31c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.03 1-1.03 2.45 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.61.71.22 1.35.19 1.86.12.57-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34zM16.05 3.2C9.03 3.2 3.33 8.9 3.33 15.92c0 2.24.59 4.43 1.7 6.36L3.2 28.98l6.85-1.8a12.69 12.69 0 0 0 6 1.53h.01c7.01 0 12.72-5.7 12.72-12.72 0-3.4-1.33-6.59-3.73-8.99a12.64 12.64 0 0 0-9-3.8zm0 23.36h-.01c-1.9 0-3.77-.51-5.39-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.41a10.56 10.56 0 1 1 9.02 5.02z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Xupaki - início">
        <AssetImage src="Logo.webp" alt="Xupaki" className="brand-logo" />
      </a>

      <nav className="nav" aria-label="Navegação principal">
        <a href="#produto">O Xupaki</a>
        <a href="#eventos">Eventos</a>
        <a href="#ingredientes">Ingredientes</a>
        <a href="#contato">Contato</a>
      </nav>

      <a
        className="btn btn-small btn-primary header-cta"
        href="https://wa.me/5579991177003?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20os%20geladinhos%20Xupaki."
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={17} />
        WhatsApp
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content wrap">
        <div className="hero-copy">
          <AssetImage src="Logo.webp" alt="Xupaki" className="hero-logo" />
          <span className="eyebrow">Geladinhos alcoólicos • +18</span>
          <h1>O sabor que entra no clima da sua festa.</h1>
          <p>
            Geladinhos alcoólicos feitos com ingredientes selecionados e frescos
            para festivais, eventos e festas particulares.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/5579991177003?text=Ol%C3%A1%21%20Quero%20fazer%20uma%20encomenda%20de%20Xupaki."
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={19} />
              Quero encomendar
            </a>

            <a
              className="btn btn-ghost"
              href="https://www.instagram.com/xupaki_original/"
              target="_blank"
              rel="noreferrer"
            >
              Ver no Instagram
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="mascot-stage">
            <span className="paint paint-a" />
            <span className="paint paint-b" />
            <span className="paint paint-c" />
            <AssetImage
              src="xupakinho.webp"
              alt="Xupakinho, mascote da Xupaki"
              className="hero-mascot"
            />
            <div className="mascot-copy">
              <strong>Oi, eu sou o Xupakinho</strong>
              <span>O seu amiguinho. Vamos chupar?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  const features = [
    ["Prático", "Fácil de armazenar e servir."],
    ["Marcante", "Visual pensado para chamar atenção."],
    ["Versátil", "Vai de grandes eventos a festas particulares."],
  ];

  return (
    <section className="section product-section" id="produto">
      <div className="wrap grid-2">
        <div className="product-visual">
          <AssetImage
            src="xupakinho.webp"
            alt="Xupakinho"
            className="product-mascot"
          />
        </div>

        <div className="section-copy">
          <span className="eyebrow dark">Prazer gelado, clima de festa</span>
          <h2>Um produto simples de servir e difícil de esquecer.</h2>
          <p>
            O Xupaki foi pensado para consumo em eventos: prático, gelado,
            divertido e com identidade visual forte. Perfeito para quem quer
            oferecer algo diferente em festas, festivais, aniversários,
            confraternizações e encontros entre amigos.
          </p>

          <div className="feature-list">
            {features.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    ["🎵", "Festivais", "Produto de alto apelo visual e consumo rápido para ambientes de música, arte e entretenimento."],
    ["🎂", "Festas particulares", "Encomendas para aniversários, casamentos, confraternizações e celebrações com convidados adultos."],
    ["✨", "Eventos especiais", "Uma opção diferente para ativações, festas temáticas e experiências de marca."],
  ];

  return (
    <section className="section events-section" id="eventos">
      <div className="wrap">
        <div className="section-heading centered">
          <span className="eyebrow">Onde o Xupaki combina</span>
          <h2>Do festival à sua festa.</h2>
          <p>
            Leve uma experiência refrescante e descontraída para diferentes
            tipos de evento.
          </p>
        </div>

        <div className="cards three">
          {events.map(([icon, title, text]) => (
            <article className="event-card" key={title}>
              <span className="event-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="cta-center">
          <a
            className="btn btn-primary"
            href="https://wa.me/5579991177003?text=Ol%C3%A1%21%20Quero%20Xupaki%20no%20meu%20evento."
            target="_blank"
            rel="noreferrer"
          >
            Levar Xupaki para meu evento
          </a>
        </div>
      </div>
    </section>
  );
}

function IngredientsSection() {
  const ingredients = [
    { name: "Hibisco", image: "hibisco.webp" },
    { name: "Limão", image: "limao.webp" },
    { name: "Cachaça", image: "cachaca.webp" },
  ];

  return (
    <section className="section ingredients-section" id="ingredientes">
      <div className="wrap grid-2 ingredients-grid">
        <div className="section-copy light-copy">
          <span className="eyebrow">Sabor em destaque</span>
          <h2>Cachaça, hibisco e limão no mesmo geladinho.</h2>
          <p>
            Uma combinação refrescante, aromática e cítrica, feita com
            ingredientes selecionados e frescos para entregar sabor marcante em
            cada unidade.
          </p>

          <div className="ingredient-tags">
            <span>Cachaça</span>
            <span>Hibisco</span>
            <span>Limão</span>
          </div>
        </div>

        <div className="ingredient-art">
          {ingredients.map((ingredient) => (
            <figure className="ingredient-card" key={ingredient.name}>
              <div className="ingredient-circle">
                <AssetImage
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="ingredient-photo"
                />
              </div>
              <figcaption>{ingredient.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section order-section" id="contato">
      <div className="wrap order-box">
        <div>
          <span className="eyebrow dark">Encomendas e eventos</span>
          <h2>Quer Xupaki na sua próxima festa?</h2>
          <p>
            Fale direto pelo WhatsApp para consultar disponibilidade,
            quantidades e condições para eventos.
          </p>
        </div>

        <div className="order-actions">
          <a
            className="btn btn-primary"
            href="https://wa.me/5579991177003?text=Ol%C3%A1%21%20Quero%20consultar%20uma%20encomenda%20de%20Xupaki."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={19} />
            Chamar no WhatsApp
          </a>

          <a
            className="btn btn-instagram"
            href="https://www.instagram.com/xupaki_original/"
            target="_blank"
            rel="noreferrer"
          >
            @xupaki_original
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/5579991177003?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Xupaki."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Xupaki pelo WhatsApp"
      title="WhatsApp"
    >
      <WhatsAppIcon size={31} />
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <AssetImage src="Logo.webp" alt="Xupaki" className="footer-logo" />
        <p>
          Venda e consumo destinados exclusivamente a maiores de 18 anos.
          Beba com responsabilidade.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <EventsSection />
        <IngredientsSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
