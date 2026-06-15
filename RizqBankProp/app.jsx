/* Main App: Sidebar navigation, scroll spy, CTA, footer */
const { useState, useEffect, useCallback } = React;
const { StarLogo, HeroSection, Section1, Section2, Section3, Section4, Section5, Section6 } = window;

const NAV_ITEMS = [
  { id: 'section-1', num: '01', label: 'Юридический манифест' },
  { id: 'section-2', num: '02', label: 'Ликвидность банка' },
  { id: 'section-3', num: '03', label: 'Техническая архитектура' },
  { id: 'section-4', num: '04', label: 'Взаиморасчёты' },
  { id: 'section-5', num: '05', label: 'Расщепление прибыли' },
  { id: 'section-6', num: '06', label: 'Управление NPL' },
];

const Sidebar = ({ active }) => (
  <nav className="sidebar">
    <a href="#top" className="sidebar-logo">
      <StarLogo size={26} />
      <span>RIZQ</span>
    </a>
    <ul className="nav-list">
      {NAV_ITEMS.map(item => (
        <li key={item.id} className={`nav-item${active === item.id ? ' active' : ''}`}>
          <a href={`#${item.id}`}>
            <span className="nav-num">{item.num}</span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    <div className="sidebar-cta">
      <a href="#cta">Запланировать встречу →</a>
    </div>
  </nav>
);

const MobileNav = ({ active, menuOpen, setMenuOpen }) => (
  <>
    <div className="mobile-bar">
      <div className="mobile-bar-logo">
        <StarLogo size={22} />
        <span>RIZQ</span>
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
          }
        </svg>
      </button>
    </div>
    <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
      <ul className="nav-list">
        {NAV_ITEMS.map(item => (
          <li key={item.id} className={`nav-item${active === item.id ? ' active' : ''}`}>
            <a href={`#${item.id}`}>
              <span className="nav-num">{item.num}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const CTASection = () => (
  <section className="cta-section" id="cta">
    <div className="content-wrap">
      <h2>Готовы к интеграции?</h2>
      <p>
        Этот документ — готовая верхнеуровневая архитектура (Blueprint) для запуска интеграции
        с ИТ-департаментом и Департаментом рисков банка-партнёра.
      </p>
      <a href="mailto:hello@rizq.uz" className="cta-btn">
        <StarLogo size={18} color="#fff" />
        Запланировать встречу
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="content-wrap">
      © 2024 ООО «<span>Rizq</span> Tech» • Все права защищены • Конфиденциально
    </div>
  </footer>
);

const App = () => {
  const [active, setActive] = useState('section-1');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
      }
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar active={active} />
      <MobileNav active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="main-content" id="top">
        <div className="content-wrap">
          <HeroSection />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
