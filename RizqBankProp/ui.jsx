/* Shared UI components for Rizq White Paper */

const StarLogo = ({ size = 28, color = '#2EB553' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block' }}>
    <path d="M50 2 C45 24 24 45 2 50 C24 55 45 76 50 98 C55 76 76 55 98 50 C76 45 55 24 50 2Z" fill={color} />
  </svg>
);

const SectionHeader = ({ id, num, title, subtitle }) => (
  <div className="section-head">
    <div className="section-num">{num}</div>
    <div className="section-title-wrap">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

const ContractCard = ({ direction, label, title, children, legal }) => (
  <div className="contract-card">
    {label && <div className="card-label">{label}</div>}
    {direction && <div className="card-dir">{direction}</div>}
    <div className="card-title">{title}</div>
    <div className="card-desc">{children}</div>
    {legal && <div className="legal-box" dangerouslySetInnerHTML={{ __html: legal }}></div>}
  </div>
);

const CodeBlock = ({ filename, children }) => (
  <div className="code-wrap">
    <div className="code-head">
      <div className="code-dot" style={{ background: '#EF4444' }}></div>
      <div className="code-dot" style={{ background: '#F59E0B' }}></div>
      <div className="code-dot" style={{ background: '#22C55E' }}></div>
      {filename && <span>{filename}</span>}
    </div>
    <div className="code-body">{children}</div>
  </div>
);

const FlowStep = ({ num, title, children, last }) => (
  <div className="flow-step" style={last ? { marginBottom: 0 } : undefined}>
    <div className="flow-marker">{num}</div>
    <div className="flow-body">
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

const DocList = ({ items }) => (
  <ul className="doc-list">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const InfoBox = ({ children }) => (
  <div className="info-box">{children}</div>
);

const ArrowDown = () => (
  <div className="arch-arrow">
    <div className="arch-arrow-line">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
    <div className="arch-arrow-line">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
    <div className="arch-arrow-line">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  </div>
);

Object.assign(window, {
  StarLogo, SectionHeader, ContractCard, CodeBlock,
  FlowStep, DocList, InfoBox, ArrowDown
});
