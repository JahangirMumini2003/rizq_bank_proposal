/* Rizq White Paper — Combined Bundle */
const { useState, useEffect, useCallback, useRef } = React;

// ═══ UI Components ═══
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

// ═══ Sections 1–3 ═══
const HeroSection = () => (
  <section className="hero">
    <div className="hero-badge">
      <StarLogo size={14} color="#249744" />
      White Paper • 2024
    </div>
    <h1>Независимая BaaS-модель платформы Rizq</h1>
    <p className="hero-sub">
      Юридическая, техническая и операционная финтех-структура взаимодействия
      с коммерческим банком-партнером по модели Banking-as-a-Service
      с распределением валового комиссионного дохода 50/50.
    </p>
    <div className="hero-meta">
      <div className="hero-meta-item">
        <span className="label">Модель</span>
        <span className="value">BaaS</span>
      </div>
      <div className="hero-meta-item">
        <span className="label">Revenue Share</span>
        <span className="value">50 / 50</span>
      </div>
      <div className="hero-meta-item">
        <span className="label">Юрисдикция</span>
        <span className="value">Республика Узбекистан</span>
      </div>
      <div className="hero-meta-item">
        <span className="label">Оператор</span>
        <span className="value">ООО «Rizq Tech»</span>
      </div>
    </div>
  </section>
);

/* ═══ Section 1: Legal ═══ */
const Section1 = () => (
  <section className="doc-section" id="section-5">
    <SectionHeader num="05" title="Юридический манифест и правовой базис (РУз)"
      subtitle="Договорная конструкция, исключающая признание деятельности ООО «Rizq Tech» банковской или лицензируемой микрофинансовой" />

    <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 32 }}>
      Платформа выступает организатором инфраструктуры и интерфейсом доступа к ликвидности Банка.
      Вся договорная конструкция исключает признание деятельности ООО «Rizq Tech» банковской
      или лицензируемой микрофинансовой.
    </p>

    <ContractCard
      direction="Rizq Tech → Банк-Партнер"
      label="Вертикаль №1"
      title="Генеральный договор о предоставлении BaaS-услуг, технологическом партнерстве и Revenue Share"
      legal={'<strong>Глава 51 ГК РУз (Агентский договор):</strong> Банк поручает Rizq Tech от своего имени, но под брендом Rizq осуществлять поиск, скоринг, онбординг B2B-клиентов и обслуживание физлиц.<br/><br/><strong>Статья 19 Закона РУз № ЗРУ-578 «О платежах и платёжных системах»:</strong> Платформа Rizq Tech приобретает статус Платёжного агента банка. Деятельность платёжного агента не подлежит самостоятельному лицензированию — агент действует в рамках лицензии принципала (Банка).'}
    >
      Банк поручает Rizq Tech осуществлять поиск, скоринг и онбординг B2B-клиентов (работодателей)
      и обслуживание физлиц.
    </ContractCard>

    <ContractCard
      direction="Rizq Tech → Компания-Работодатель"
      label="Вертикаль №2"
      title="Договор об информационно-технологическом взаимодействии и предоставлении доступа к SaaS-платформе Rizq"
    >
      Rizq предоставляет работодателю софт для автоматизации HR-процессов и оптимизации оборотного капитала.
      Изменения условий текущего зарплатного проекта работодателя в стороннем банке <strong>не требуется</strong>.
      Работодатель берет на себя обязательство признавать электронные реестры Rizq и осуществлять расчёты
      по ним в конце месяца.
    </ContractCard>

    <ContractCard
      direction="Сотрудник → Банк & Rizq"
      label="Вертикаль №3"
      title="Трёхсторонняя публичная электронная оферта в мобильном приложении"
    >
      Сотрудник акцептует условия предоставления досрочного доступа к заработанным средствам.
      Юридическим источником денег признаётся Банк, а Rizq Tech — законным технологическим
      провайдером и получателем уведомлений.
    </ContractCard>

    <ContractCard
      direction="Сотрудник → Работодатель"
      label="Вертикаль №4"
      title="Письменное заявление (дополнительное соглашение к Трудовому договору) на добровольное удержание средств"
      legal={'<strong>Статья 161 Трудового кодекса РУз:</strong> Работник вправе распоряжаться начисленной за трудовую смену выплатой и давать поручение бухгалтерии на её перечисление в пользу третьих лиц (в данном случае — на транзитный счёт для погашения обязательств).'}
    >
      Добровольное удержание средств из заработной платы для перечисления
      на транзитный счёт погашения обязательств.
    </ContractCard>
  </section>
);

/* ═══ Section 2: Financial ═══ */
const Section2 = () => (
  <section className="doc-section" id="section-6">
    <SectionHeader num="06" title="Финансово-правовая природа ликвидности банка"
      subtitle="Как именно банк выделяет деньги, чтобы это не нарушало нормативы ЦБ РУз и требования Шариата" />

    <div className="block">
      <h3><span className="h3-num">1</span> Наименование и форма целевого пула</h3>
      <p>Целевой пул ликвидности, предоставляемый Банком под проект Rizq, на уровне баланса АБС банка оформляется как:</p>
      <div className="doc-quote">
        «Сводный возобновляемый лимит краткосрочного целевого финансирования физических лиц
        в рамках BaaS-платформы Rizq»
      </div>
      <p>
        По финансовой форме для классического банкинга — это <strong>Агрегированная возобновляемая
        кредитная линия (ВКЛ) экспресс-микроовердрафтов</strong>, открытая на пуловый балансовый счёт,
        привязанный к ИТ-системе Rizq.
      </p>
      <InfoBox>
        Если у банка развёрнуто сертифицированное Исламское окно, данный пул классифицируется как{' '}
        <strong>Фонд беспроцентного займа (Кард аль-Хасан)</strong> или <strong>Мурабаха / Таваррук лимит</strong>.
      </InfoBox>
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> Как пул работает под капотом</h3>
      <DocList items={[
        'Банк не открывает отдельный кредитный комитет на каждого сотрудника. Кредитный комитет банка единократно утверждает общий генеральный лимит на платформу Rizq (например, 10 000 000 000 сумов).',
        'Внутри этого пула Rizq выступает «динамическим распределителем». Скоринговый алгоритм на основе данных ЕНСТ и ИНПС сам нарезает пул на микро-лимиты для каждого конкретного сотрудника (в пределах 30–50% от их реального дневного заработка).',
        'Деньги внутри пула имеют сверхвысокую оборачиваемость. Срок жизни одной микро-транзакции — от 1 до 25 дней (до ближайшей зарплаты). Как только работодатель возвращает долг за сотрудников, пул мгновенно восстанавливается и готов к повторной выдаче.'
      ]} />
    </div>
  </section>
);

/* ═══ Section 3: Technical ═══ */
const Section3 = () => (
  <section className="doc-section" id="section-7">
    <SectionHeader num="07" title="Техническая архитектура и механика бэкенда"
      subtitle="Вся система работает в режиме реального времени (Real-Time Processing)" />

    <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 28 }}>
      Логика бэкенда разделена на три автономных слоя.
    </p>

    {/* Architecture Diagram */}
    <div className="arch-diagram">
      <div className="arch-layer rizq">
        <div className="arch-layer-title">Бэкенд платформы Rizq</div>
        <div className="arch-boxes">
          <div className="arch-box">Слой Интеграций<small>API ЕНСТ / ИНПС</small></div>
          <div className="arch-box">Скоринг-Движок<small>Расчёт Лимитов</small></div>
          <div className="arch-box">Транзакционный Модуль<small>Ledger</small></div>
        </div>
      </div>
      <ArrowDown />
      <div className="arch-layer bank">
        <div className="arch-layer-title">Бэкенд Банка-Партнера</div>
        <div className="arch-boxes">
          <div className="arch-box" style={{ flex: 2 }}>Спец. транзитный счёт<small>22618 / 22624 — Средства платёжных агентов</small></div>
          <div className="arch-box">Банковский Процессинг<small>Humo / Uzcard</small></div>
        </div>
      </div>
    </div>

    {/* API Integration */}
    <div className="block">
      <h3><span className="h3-num">1</span> Архитектура интеграции (API & Webhooks)</h3>
      <DocList items={[
        <span key="a"><strong>Rizq → Работодатель:</strong> Бэкенд Rizq по REST API или через защищённый sFTP-канал синхронизируется с 1С:Предприятие / HR-системой работодателя. Каждые 24 часа выгружается актуальный список сотрудников.</span>,
        <span key="b"><strong>Rizq → Госбазы:</strong> Интеграция с Единой национальной системой труда (ЕНСТ) для валидации трудового договора и ИНПС (Народный банк) для парсинга истории отчислений — формирует «жёсткий» базовый лимит.</span>,
        <span key="c"><strong>Rizq → Банк-Партнер:</strong> Взаимодействие через изолированный BaaS REST API Gateway Банка с использованием взаимной TLS-авторизации (mTLS) и шифрования сквозных пакетов данных.</span>
      ]} />
    </div>

    {/* Transaction Cycle */}
    <div className="block">
      <h3><span className="h3-num">2</span> Сквозной транзакционный цикл</h3>

      <FlowStep num={1} title="Фиксация смены (Data Ingestion)">
        <p>
          Сотрудник делает чек-ин через приложение Rizq. Бэкенд фиксирует геопозицию или считывает хэш QR-кода.
          Запускается внутренний триггер <code style={{ fontFamily: 'JetBrains Mono', fontSize: 13, background: 'var(--bg-subtle)', padding: '2px 6px', borderRadius: 4 }}>CalculateEarnedBalance</code>.
          На баланс юзера начисляются виртуальные доступные средства. В АБС банка транзакции пока нет.
        </p>
      </FlowStep>

      <FlowStep num={2} title="Инициация вывода (Payout Request & Idempotency)">
        <p>Пользователь запрашивает вывод на свою карту (любой банк Узбекистана). Бэкенд Rizq формирует JSON-пакет:</p>
        <CodeBlock filename="payout_request.json">
{`{`}
{'\n'}  <span className="ck">"transaction_id"</span>: <span className="cs">"rizq_uuid_99881122"</span>,
{'\n'}  <span className="ck">"idempotency_key"</span>: <span className="cs">"idem_hash_554433"</span>,
{'\n'}  <span className="ck">"user_id"</span>: <span className="cs">"usr_7766"</span>,
{'\n'}  <span className="ck">"amount"</span>: <span className="cn">300000</span>,
{'\n'}  <span className="ck">"currency"</span>: <span className="cs">"UZS"</span>,
{'\n'}  <span className="ck">"card_token"</span>: <span className="cs">"ctkn_humo_0011..."</span>,
{'\n'}  <span className="ck">"fee_ujrah"</span>: <span className="cn">15000</span>
{'\n'}{`}`}
        </CodeBlock>
        <InfoBox>
          Использование <strong>Idempotency Key</strong> критически важно: если на сети произойдёт сбой,
          повторный запрос с тем же ключом не приведёт к дублированию списания денег из пула банка.
          Пакет улетает на эндпоинт Банка <code style={{ fontFamily: 'JetBrains Mono', fontSize: 12, background: 'rgba(0,0,0,0.06)', padding: '2px 6px', borderRadius: 4 }}>/api/v1/baas/payout</code>.
        </InfoBox>
      </FlowStep>

      <FlowStep num={3} title="Исполнение платежа (Core Banking Settlement)" last>
        <DocList items={[
          'Сервер Банка принимает пакет, проверяет токен авторизации Rizq.',
          'Внутри АБС Банка со «Сводного возобновляемого лимита Rizq» списывается 300 000 сумов.',
          'Банковский процессинг инициирует моментальный клиринговый перевод (A2C — Account-to-Card) через платёжный шлюз (Humo/Uzcard) на карту сотрудника.',
          'Одновременно Банк регистрирует условное требование к данному физлицу на сумму 315 000 сумов (тело + ujrah).',
          'Банк возвращает бэкенду Rizq статус HTTP 200 Success. Юзер видит деньги на карте.'
        ]} />
      </FlowStep>
    </div>
  </section>
);

// ═══ Sections 4–6 ═══
/* ═══ Section 4: Settlement ═══ */
const Section4 = () => (
  <section className="doc-section" id="section-8">
    <SectionHeader num="08" title="Механика взаиморасчётов и обратный поток (клиринг)"
      subtitle="Работодатель коммуницирует исключительно с Rizq, но финансовые потоки идут в регулируемый контур" />

    <div className="block">
      <h3><span className="h3-num">1</span> Формирование закрывающего реестра</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        За 3 рабочих дня до даты официальной выплаты заработной платы бэкенд Rizq автоматически
        закрывает расчётный период для данной компании.
      </p>
      <DocList items={[
        'Скрипт собирает все успешные транзакции сотрудников конкретного завода / офиса за месяц.',
        'Формируется Финальный реестр удержаний (Registry_Settlement_Employer_ID.csv).',
        'Реестр автоматически импортируется в 1С бухгалтера компании.'
      ]} />
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> Действия работодателя и маршрут возврата денег</h3>
      <DocList items={[
        'Бухгалтер компании открывает 1С, импортирует реестр. Система автоматически вычитает суммы досрочных выплат и комиссий из итоговой зарплаты сотрудников.',
        'Работодатель берёт общую сумму удержаний за месяц (например, 500 000 000 сумов) и формирует одно единое платёжное поручение.'
      ]} />
      <InfoBox>
        <strong>Куда уходят деньги:</strong> со счёта работодателя (из любого его банка) на{' '}
        <strong>Специальный транзитный счёт Rizq</strong> (балансовый счёт второго порядка 22618 / 22624 —
        «Средства платёжных агентов»), открытый в Банке-партнёре.
      </InfoBox>
    </div>
  </section>
);

/* ═══ Section 5: Revenue Split ═══ */
const Section5 = () => (
  <section className="doc-section" id="section-9">
    <SectionHeader num="09" title="Механика расщепления прибыли (Split 50/50)"
      subtitle="Автоматическое расщепление доходов при поступлении платежа от работодателя" />

    <div className="block">
      <h3><span className="h3-num">1</span> Регенерация ликвидности (Восстановление пула)</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        АБС банка автоматически вычисляет чистую сумму тела всех выданных авансов за отчётный период
        и переводит её обратно в «Сводный возобновляемый лимит».
        Пул ликвидности банка полностью восстановлен до исходного значения.
      </p>
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> Расчёт маржи и Сплит</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        На спецсчёте остаются аккумулированные за месяц комиссии <em>Ujrah</em>.
        Встроенный смарт-скрипт банка в тот же операционный день делит эту сумму строго пополам:
      </p>

      {/* Split Diagram */}
      <div className="split-diagram">
        <div className="split-total">Всего комиссий на спецсчёте: 50 000 000 UZS</div>
        <div className="split-bar">
          <div className="split-half bank-c">50% — Банк</div>
          <div className="split-half rizq-c">50% — Rizq</div>
        </div>
        <div className="split-labels">
          <div className="split-label">
            <div className="split-dot" style={{ background: '#6366F1' }}></div>
            <div className="split-text">
              <span className="amt">25 000 000</span>
              <span className="desc">Внутренний счёт доходов Банка</span>
            </div>
          </div>
          <div className="split-label">
            <div className="split-dot" style={{ background: '#2EB553' }}></div>
            <div className="split-text">
              <span className="amt">25 000 000</span>
              <span className="desc">Расчётный счёт Rizq Tech (ООО)</span>
            </div>
          </div>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Банк генерирует автоматическое платёжное поручение и выводит долю Rizq на расчётный счёт
        ИТ-компании с назначением платежа: <em>«Оплата за информационно-технологические услуги
        согласно BaaS-договору партнёрства №...»</em>.
      </p>
    </div>
  </section>
);

/* ═══ Section 6: NPL Risk ═══ */
const Section6 = () => (
  <section className="doc-section" id="section-10">
    <SectionHeader num="10" title="Матрица управления NPL (риски невозврата)"
      subtitle="В независимой B2B-модели риск NPL минимален — возврат гарантирован удержанием через бухгалтерию" />

    <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 28 }}>
      Бэкенд Rizq технически минимизирует форс-мажоры (увольнение сотрудника в середине месяца,
      блокировка карты):
    </p>

    <div className="block">
      <h3><span className="h3-num">1</span> Динамический триггер увольнения</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Если в ЕНСТ падает статус о расторжении трудового договора сотрудника, бэкенд Rizq
        за <strong>10 миллисекунд</strong> отправляет в Банк команду{' '}
        <code style={{
          fontFamily: 'JetBrains Mono', fontSize: 13,
          background: 'var(--bg-subtle)', padding: '2px 6px', borderRadius: 4
        }}>Block_BaaS_User_Limit</code>.
        Досрочный вывод для данного сотрудника мгновенно блокируется.
      </p>
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> Гарантийный депозит (Резервный фонд)</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Банк может потребовать от Rizq Tech поддержания микро-резерва
        (<strong>2–3% от объёма общего лимита</strong>) на отдельном счёте
        для покрытия экстраординарных дефолтов.
      </p>
      <InfoBox>
        Этот риск легко перекрывается 50% маржой Rizq от комиссионных доходов.
      </InfoBox>
    </div>
  </section>
);

/* ═══ Section 7: Product Overview ═══ */
const Section7 = () => (
  <section className="doc-section" id="section-1">
    <SectionHeader num="01" title="Продуктовая архитектура и механика (Product Overview)"
      subtitle="Rizq — независимая B2B2C SaaS/BaaS платформа, ломающая жёсткий двухэтапный цикл выплаты заработной платы" />

    <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 28 }}>
      Продукт предоставляет сотрудникам гибкий ежедневный доступ к уже заработанным ими деньгам
      (Earned Wage Access — EWA), полностью автоматизируя этот процесс для работодателя.
    </p>

    <div className="block">
      <h3><span className="h3-num">1</span> Архитектура взаимодействия внутри продукта</h3>
      <div className="product-arch">
        <div className="product-arch-col">
          <div className="pa-title">B2C: Мобильное приложение Rizq</div>
          <div className="pa-sub">Вывод за 2 клика</div>
        </div>
        <div className="product-arch-arrow">◄►</div>
        <div className="product-arch-col core">
          <div className="pa-title">Ядро Платформы</div>
          <div className="pa-sub">Скоринг & Расчёт</div>
        </div>
        <div className="product-arch-arrow">◄►</div>
        <div className="product-arch-col">
          <div className="pa-title">B2B: Панель Работодателя</div>
          <div className="pa-sub">1С / Синхронизация</div>
        </div>
      </div>
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> B2C-контур (Мобильное приложение сотрудника)</h3>
      <DocList items={[
        <span key="a"><strong>Динамический баланс:</strong> Юзер в реальном времени видит, сколько сум он заработал прямо к этой минуте (баланс увеличивается каждый рабочий день).</span>,
        <span key="b"><strong>Мгновенный вывод:</strong> За 2 клика сотрудник может перевести доступную сумму на любую привязанную карту Uzcard/Humo.</span>,
        <span key="c"><strong>Шариатская чистота (Halal Compliance):</strong> Сервис полностью исключает проценты, пени или скрытые платежи. За вывод средств взимается прозрачная фиксированная ИТ-комиссия (<em>Ujrah</em>) за обслуживание платформы.</span>
      ]} />
    </div>

    <div className="block">
      <h3><span className="h3-num">3</span> B2B-контур (SaaS-панель для HR и Бухгалтерии)</h3>
      <DocList items={[
        'Личный кабинет компании, который бесшовно агрегирует данные систем учёта рабочего времени (СКУД, T&A) и ERP (1С, Bitrix24).',
        'Полное отсутствие кассовых разрывов для компании (деньги до зарплаты фактически выплачивает ликвидный пул Банка-партнёра).',
        'Автоматическая генерация и выгрузка закрывающих реестров удержаний в конце месяца.'
      ]} />
    </div>

    {/* ── How it works ── */}
    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 40, marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
      Как работает Rizq: полный цикл за 7 шагов
    </h3>

    {/* Step 1 */}
    <div className="hw-block">
      <div className="hw-mock">
        <div className="mock-card">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>ПОДКЛЮЧЕНИЕ</div>
            <span>RIZQ.UZ/ONBOARDING</span>
          </div>
          <div className="mock-body">
            <div style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Регистрация компании</div>
            <div className="mock-form-row"><span className="mock-form-label">Название</span><span className="mock-form-value">ООО «Машина»</span></div>
            <div className="mock-form-row"><span className="mock-form-label">ИНН</span><span className="mock-form-value">300 123 456</span></div>
            <div className="mock-form-row"><span className="mock-form-label">Сотрудников</span><span className="mock-form-value">1 200</span></div>
            <div className="mock-btn-green">✓ Соглашение подписано</div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>01</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Подключаем компанию</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          Компания регистрируется в ЛК. KYB-верификация, документы, страховой депозит 17.5% ФОТ, электронный договор.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">KYB</span>
          <span className="hw-tag">Депозит 17.5% ФОТ</span>
          <span className="hw-tag">1–3 дня</span>
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <div className="hw-block reverse">
      <div className="hw-mock">
        <div className="mock-card">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>ИНТЕГРАЦИИ</div>
            <span>0/4</span>
          </div>
          <div className="mock-body">
            <div className="mock-integration-row">
              <div className="mock-int-icon" style={{ background: '#2563EB' }}>1С</div>
              <span className="mock-int-name">1С: ЗУП</span>
              <span className="mock-int-status" style={{ color: 'var(--green)' }}>Подключаем…</span>
            </div>
            <div className="mock-integration-row">
              <div className="mock-int-icon" style={{ background: '#7C3AED' }}>B24</div>
              <span className="mock-int-name">Bitrix24</span>
              <span className="mock-int-status"><span className="dot-empty"></span> Ожидание</span>
            </div>
            <div className="mock-integration-row">
              <div className="mock-int-icon" style={{ background: '#059669' }}>T</div>
              <span className="mock-int-name">Tabel.uz</span>
              <span className="mock-int-status"><span className="dot-empty"></span> Ожидание</span>
            </div>
            <div className="mock-integration-row">
              <div className="mock-int-icon" style={{ background: '#DC2626' }}>C</div>
              <span className="mock-int-name">CSV</span>
              <span className="mock-int-status"><span className="dot-empty"></span> Ожидание</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>02</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Загружаем сотрудников · Синхронизация 1С</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          CSV/XLSX, ручной ввод или авто-синхронизация с 1С. Приходы, уходы, отпускные, больничные — всё обновляется ежедневно.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">1С</span>
          <span className="hw-tag">CSV/XLSX</span>
          <span className="hw-tag">Авто-синхронизация</span>
        </div>
      </div>
    </div>

    {/* Step 3 */}
    <div className="hw-block">
      <div className="hw-mock">
        <div className="mock-card dark">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>БАНК · ОТКРЫТИЕ СЧЕТОВ</div>
            <span>API</span>
          </div>
          <div className="mock-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>
              <span>НОВЫЕ КЛИЕНТЫ</span><span style={{ color: 'var(--green)' }}>+3 СЕГОДНЯ</span>
            </div>
            <div className="mock-dark-row"><span>Алиев А.</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span className="mock-dark-badge">AA-1481</span><span className="mock-check">✓</span></span></div>
            <div className="mock-dark-row"><span>Каримова Г.</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span className="mock-dark-badge">KG-2237</span><span className="mock-check">✓</span></span></div>
            <div className="mock-dark-row"><span>Юсупов Р.</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span className="mock-dark-badge">YR-3014</span><span className="mock-check" style={{ background: '#6366F1' }}>→</span></span></div>
            <div className="mock-dark-footer"><span>ВСЕГО ЗА 30 ДНЕЙ</span><span className="val">+ 248</span></div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>03</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Данные сотрудников → банку</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          При подключении компании паспортные данные передаются банку-партнёру. Банк открывает счёт и выпускает карту. Каждый сотрудник = новый клиент.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag" style={{ background: 'var(--green)', borderColor: 'var(--green)', color: '#fff' }}>100К сотрудников = 100К клиентов</span>
          <span className="hw-tag" style={{ background: 'var(--green)', borderColor: 'var(--green)', color: '#fff' }}>CAC для банка = $0</span>
        </div>
      </div>
    </div>

    {/* Step 4 */}
    <div className="hw-block reverse">
      <div className="hw-mock">
        <div className="mock-card">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>РАСЧЁТ ЗАРАБОТАННОГО</div>
            <span>HIKVISION · TABEL</span>
          </div>
          <div className="mock-body">
            <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginBottom: 4 }}>МАРТ · ТАБЕЛЬ</div>
            <div className="mock-cal-grid">
              {[...'GGGGRGGGGGGGGGRGGBGGGYGGGGGRPP'].map((c,i) => {
                const colors = { G: '#22C55E', R: '#EF4444', B: '#F59E0B', Y: '#D4D4D8', P: 'rgba(239,68,68,0.2)' };
                return <div key={i} className="mock-cal-day" style={{ background: colors[c] || '#E5E7EB' }}></div>;
              })}
            </div>
            <div className="mock-cal-legend">
              <span><span className="leg-dot" style={{ background: '#22C55E' }}></span>рабочий</span>
              <span><span className="leg-dot" style={{ background: '#D4D4D8' }}></span>отгул</span>
              <span><span className="leg-dot" style={{ background: '#EF4444' }}></span>больн.</span>
              <span><span className="leg-dot" style={{ background: '#F59E0B' }}></span>отпуск</span>
            </div>
            <div className="mock-calc-box">
              17 дн. × 8 ч. × ставка
              <span className="result">= 1 813 339 сум</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>04</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Считаем заработанное</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          Формула: оклад × присутственные дни ÷ рабочие дни × лимит 70%. Баланс обновляется ежедневно. Сотрудник видит точную сумму в приложении.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">Лимит 70%</span>
          <span className="hw-tag">Real-time</span>
        </div>
      </div>
    </div>

    {/* Step 5 */}
    <div className="hw-block">
      <div className="hw-mock">
        <div className="mock-card">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>ЗАПРОС ВЫПЛАТЫ</div>
            <span>ШАГ 2 ИЗ 3</span>
          </div>
          <div className="mock-body">
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 6, fontFamily: 'DM Sans' }}>Сколько хотите получить?</div>
            <div className="mock-amount-input">
              <span className="amt">300 000</span><span className="cur">сум</span>
            </div>
            <div className="mock-slider-track"><div className="mock-slider-fill"></div><div className="mock-slider-thumb"></div></div>
            <div className="mock-amount-btns">
              <span>100К</span><span className="active">300К</span><span>500К</span><span>1М</span>
            </div>
            <div className="mock-card-footer-row">
              <span>На карту Humo · •••• 4821</span>
              <span>из 2 480 000 сум</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>05</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Сотрудник выводит — на карту банка</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          Telegram Mini App или мобильная веб-версия. Три шага: сумма → подтверждение → деньги на карте за 5 минут. Вывод только на карту банка-партнёра.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">~5 мин</span>
          <span className="hw-tag">ujra 2.5%</span>
        </div>
      </div>
    </div>

    {/* Step 6 */}
    <div className="hw-block reverse">
      <div className="hw-mock">
        <div className="mock-card">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>ВЫПЛАТА · БАНК-ПАРТНЁР</div>
            <span>✓ УСПЕШНО</span>
          </div>
          <div className="mock-body">
            <div className="mock-success-box">
              <div className="mock-success-icon">✓</div>
              <div className="mock-success-text">
                <div className="big">500 000 сум зачислено</div>
                <div className="small">14 марта, 14:32 · 20 сек</div>
              </div>
            </div>
            <div className="mock-flow-line">
              <span className="fl-dot" style={{ background: 'var(--green)' }}></span><span className="fl-line"></span>
              <span>ЗАПРОС</span><span className="fl-line"></span>
              <span>UJRA</span><span className="fl-line"></span>
              <span className="fl-dot" style={{ background: 'var(--green)' }}></span><span className="fl-line"></span>
              <span>БАНК</span><span className="fl-line"></span>
              <span>КАРТА</span>
            </div>
            <div className="mock-detail-row">
              <div className="mock-detail-box">
                <div className="label">КАРТА</div>
                <div className="val">Humo ****4821</div>
              </div>
              <div className="mock-detail-box">
                <div className="label">КОМИССИЯ 2,5%</div>
                <div className="val">12 500 сум</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>06</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Банк финансирует перевод</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          Банк выдаёт средства на карту сотрудника из собственного баланса. Это не кредит — операция, обеспеченная депозитом компании и payroll-гарантией.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">NPL = 0</span>
          <span className="hw-tag">Payroll-backed</span>
        </div>
      </div>
    </div>

    {/* Step 7 */}
    <div className="hw-block">
      <div className="hw-mock">
        <div className="mock-card dark">
          <div className="mock-header">
            <div className="mock-header-left"><div className="mock-dot"></div>ERP · РЕЕСТР ЗАРПЛАТ · АВТО</div>
            <span>✓ 1С / SAP</span>
          </div>
          <div className="mock-body">
            <div className="mock-erp-header">
              <span className="left">Реестр · 31 марта</span>
              <span className="sync"><span className="mock-dot" style={{ marginRight: 4 }}></span>синхронизация</span>
            </div>
            <div className="mock-erp-th"><span>СОТРУДНИК</span><span>К ВЫПЛАТЕ  К ВОЗМЕЩЕНИЕ</span></div>
            <div className="mock-erp-row"><span className="name">Алиев А.</span><span className="pay">2 700 000</span><span className="ret">500 000</span></div>
            <div className="mock-erp-row"><span className="name">Каримова Г.</span><span className="pay">2 000 000</span><span className="ret">800 000</span></div>
            <div className="mock-erp-row"><span className="name">Юсупов Р.</span><span className="pay">3 600 000</span><span className="ret">—</span></div>
            <div className="mock-erp-row"><span className="name">Хасанов Б.</span><span className="pay">2 050 000</span><span className="ret">350 000</span></div>
          </div>
        </div>
      </div>
      <div className="hw-text-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="flow-marker" style={{ width: 36, height: 36, fontSize: 14 }}>07</div>
          <h4 style={{ fontSize: 17, fontWeight: 700 }}>Работодатель возвращает</h4>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          В день зарплаты компания удерживает сумму выводов и возвращает банку. Остаток зарплаты — сотруднику. Цикл замкнут.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <span className="hw-tag">Через ERP</span>
          <span className="hw-tag">Авто</span>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ Section 8: Target Audience ═══ */
const Section8 = () => (
  <section className="doc-section" id="section-2">
    <SectionHeader num="02" title="Целевая аудитория (Target Audience)"
      subtitle="Классическая двухфакторная ЦА: B2B-клиент как точка входа, B2C-пользователь как генератор транзакционного дохода" />

    <div className="block">
      <h3><span className="h3-num">1</span> B2B-сегмент (Покупатели софта)</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Основной фокус — компании с высокой долей линейного персонала, где удержание сотрудников
        (Retention Rate) и скорость найма напрямую влияют на маржинальность бизнеса.
      </p>
      <DocList items={[
        <span key="a"><strong>Крупный ритейл и E-commerce:</strong> Сети супермаркетов, распределительные центры, операторы маркетплейсов, курьерские службы.</span>,
        <span key="b"><strong>Общепит и HoReCa:</strong> Сетевые рестораны, франшизы фастфуда, крупные кофейни.</span>,
        <span key="c"><strong>Производство и лёгкая промышленность:</strong> Текстильные фабрики, заводы, сборочные предприятия.</span>,
        <span key="d"><strong>Логистика и строительство:</strong> Складские комплексы, транспортные компании, девелоперы.</span>
      ]} />
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> B2C-сегмент (Конечные пользователи приложения)</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Линейные сотрудники (синие воротнички / blue-collar) и специалисты среднего звена.
      </p>
      <DocList items={[
        <span key="a"><strong>Демография:</strong> Возраст 19–45 лет. Активные пользователи смартфонов.</span>,
        <span key="b"><strong>Доход:</strong> От 3 500 000 до 12 000 000 сумов в месяц.</span>,
        <span key="c"><strong>Психографика и боли:</strong> Регулярно сталкиваются с ситуациями, когда мелкие непредвиденные расходы (медицина, ремонт авто, срочные коммунальные платежи) выпадают на середину кассового разрыва между авансом и зарплатой. Не хотят брать «деньги до зарплаты» в МФО под грабительские проценты из-за религиозных убеждений или страха перед скрытыми комиссиями.</span>
      ]} />
    </div>
  </section>
);

/* ═══ Section 9: Market Analysis ═══ */
const Section9 = () => (
  <section className="doc-section" id="section-3">
    <SectionHeader num="03" title="Анализ рынка Узбекистана (TAM, SAM, SOM)"
      subtitle="Расчёты актуализированы на 2026 год на основе данных Агентства статистики при Президенте РУз, Всемирного банка и KPMG" />

    <div className="block">
      <h3><span className="h3-num">1</span> Базовые рыночные метрики (2026)</h3>
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-val">~37.7 млн</div>
          <div className="metric-label">Население РУз</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">~15 млн</div>
          <div className="metric-label">Занятое население</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">~6.5 млн</div>
          <div className="metric-label">Ср. зарплата (сумов)</div>
        </div>
      </div>
    </div>

    <div className="block">
      <h3><span className="h3-num">2</span> Объёмы рынка</h3>

      <div className="tam-diagram">
        <div className="tam-ring tam">
          <div className="tam-ring-head">
            <span className="tam-label">TAM — Total Addressable Market</span>
            <span className="tam-val">$91.8 млрд</span>
          </div>
          <div className="tam-ring-desc">Весь фонд зарплат занятого населения (1 170 трлн сумов)</div>
          <div className="tam-ring sam">
            <div className="tam-ring-head">
              <span className="tam-label">SAM — Serviceable Addressable Market</span>
              <span className="tam-val">$33.6 млрд</span>
            </div>
            <div className="tam-ring-desc">Фонд «белых» зарплат в целевых B2B-индустриях (~5.5 млн чел.)</div>
            <div className="tam-ring som">
              <div className="tam-ring-head">
                <span className="tam-label">SOM — Serviceable Obtainable Market</span>
                <span className="tam-val">$1.84 млрд</span>
              </div>
              <div className="tam-ring-desc">Достижимый оборот Rizq за 3 года (300 000 активных пользователей)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="doc-table-wrap">
        <table className="doc-table">
          <thead>
            <tr><th>Уровень</th><th>Методология</th><th>Объём</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>TAM</td>
              <td>Годовой ФОТ всех занятых (15 млн × 6.5 млн сумов × 12 мес.)</td>
              <td><strong>1 170 трлн сумов</strong> (~$91.8 млрд)</td>
            </tr>
            <tr>
              <td>SAM</td>
              <td>ФОТ корпоративного сектора — «белая» зарплата на карты Humo/Uzcard в целевых индустриях (~5.5 млн чел.)</td>
              <td><strong>429 трлн сумов</strong> (~$33.6 млрд)</td>
            </tr>
            <tr>
              <td>SOM</td>
              <td>Доля рынка Rizq за 3 года: подключение компаний с суммарным штатом 300 000 активных пользователей</td>
              <td><strong>23.4 трлн сумов</strong> (~$1.84 млрд ФОТ/год)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="block">
      <h3><span className="h3-num">3</span> Потенциал валовой выручки (SOM Revenue)</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        Если 300 000 пользователей ежемесячно выводят в среднем <strong>30% своей зарплаты</strong> через Rizq
        (~1 950 000 сумов на человека), годовой объём транзакций через платформу составит <strong>$552 млн</strong>.
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
        При средней фиксированной комиссии <em>Ujrah</em>, эквивалентной <strong>1.5%</strong> от суммы вывода,
        валовая выручка до сплита с банком составит <strong>~$8.28 млн в год</strong>.
      </p>
    </div>

    <div className="block">
      <h3><span className="h3-num">4</span> CAGR (Темпы роста рынка)</h3>
      <InfoBox>
        Рынок финтех-решений и альтернативного скоринга в Узбекистане демонстрирует совокупный среднегодовой
        темп роста (<strong>CAGR</strong>) на уровне <strong>24–26%</strong> (до 2030 года). Сектор подстегивается
        ежегодным приростом трудоспособного населения на ~300 000 человек, масштабной легализацией рабочих мест
        и цифровизацией налогового контура.
      </InfoBox>
    </div>
  </section>
);

/* ═══ Section 10: Market Trends ═══ */
const Section10 = () => (
  <section className="doc-section" id="section-4">
    <SectionHeader num="04" title="Ключевые рыночные тенденции (Market Trends)"
      subtitle="Макроэкономические и регуляторные драйверы роста финтех-рынка Узбекистана" />

    <div className="trend-card">
      <div className="trend-num">1</div>
      <div className="trend-body">
        <h4>Институционализация Финтеха и Открытый Банкинг</h4>
        <p>
          Создание специализированного Финтех-офиса при ЦБ РУз и утверждение пятилетней стратегии развития
          финтеха ускоряют внедрение стандартов Open Banking (Открытых API). Это позволяет ИТ-платформам
          бесшовно агрегировать данные и подключаться к банковской ликвидности без бюрократических барьеров.
        </p>
      </div>
    </div>

    <div className="trend-card">
      <div className="trend-num">2</div>
      <div className="trend-body">
        <h4>Бум иностранных инвестиций в цифровые финансы</h4>
        <p>
          Инвестиционный интерес к финтех-рынку Узбекистана экспоненциально растёт: за последний год
          отечественные финтех-компании привлекли более $260 млн прямых иностранных инвестиций,
          увеличив показатель предыдущего года в 4 раза. Количество игроков выросло до 103 компаний.
        </p>
      </div>
    </div>

    <div className="trend-card">
      <div className="trend-num">3</div>
      <div className="trend-body">
        <h4>Трансформация HR-бенефитов (Борьба за удержание)</h4>
        <p>
          В условиях жёсткой конкуренции за линейный персонал классическая выплата зарплаты дважды
          в месяц перестаёт быть конкурентным преимуществом. Работодатели переходят на модель
          Flexible Benefits, где EWA снижает текучесть кадров в среднем на 18–25%.
        </p>
      </div>
    </div>

    <div className="trend-card">
      <div className="trend-num">4</div>
      <div className="trend-body">
        <h4>Спрос на этичные и Халяль-продукты</h4>
        <p>
          Более 90% населения Узбекистана позиционируют себя как мусульмане. Традиционные микрозаймы
          от МФО под 1% в день вызывают жёсткое отторжение и социальный негатив. Модель Ujrah
          делает Rizq безальтернативным решением для этичного закрытия кассовых разрывов.
        </p>
      </div>
    </div>

    <div className="trend-card">
      <div className="trend-num">5</div>
      <div className="trend-body">
        <h4>AI-driven комплаенс и автоматизация</h4>
        <p>
          Рыночным стандартом становится использование ИИ-алгоритмов для обработки Big Data.
          Интеграция предиктивного ИИ-скоринга позволяет на лету анализировать финансовую устойчивость
          работодателя и транзакционный профиль сотрудника, сводя риски невозврата (NPL) к техническому минимуму.
        </p>
      </div>
    </div>
  </section>
);

// ═══ App Shell ═══
const NAV_ITEMS = [
  { id: 'section-1', num: '01', label: 'Продуктовая архитектура' },
  { id: 'section-2', num: '02', label: 'Целевая аудитория' },
  { id: 'section-3', num: '03', label: 'Анализ рынка' },
  { id: 'section-4', num: '04', label: 'Рыночные тенденции' },
  { id: 'section-5', num: '05', label: 'Юридический манифест' },
  { id: 'section-6', num: '06', label: 'Ликвидность банка' },
  { id: 'section-7', num: '07', label: 'Техническая архитектура' },
  { id: 'section-8', num: '08', label: 'Взаиморасчёты' },
  { id: 'section-9', num: '09', label: 'Расщепление прибыли' },
  { id: 'section-10', num: '10', label: 'Управление NPL' },
  { id: 'section-team', num: '★', label: 'Команда' },
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
      <a href="https://t.me/jahangirmumini" target="_blank" rel="noopener">Запланировать встречу →</a>
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


/* ═══ Team Section ═══ */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const TEAM = [
  {
    photo: 'img/jahangir.jpg',
    name: 'Джахангир Муминов',
    role: 'CEO & Co-founder',
    desc: 'Серийный предприниматель. Сооснователь Pinside (Screenix AI). Стратегическое лидерство, масштабирование продуктов и построение бизнес-моделей в B2B/B2C.',
    linkedin: 'https://www.linkedin.com/in/jahangir-jony-mumini-16743732a/'
  },
  {
    photo: 'img/habibulloev.jpg',
    name: 'Мухаммад Хабибуллоев',
    role: 'CPO & Co-founder',
    desc: 'Сооснователь Pinside (Screenix AI). Опыт в Humo и Ipotekabank. Экспертиза в платёжных системах, банковских продуктах и UX финтех-платформ.',
    linkedin: 'https://www.linkedin.com/in/jonloev/'
  },
  {
    photo: 'img/mahmudov.jpg',
    name: 'Мухаммад Махмудов',
    role: 'CTO',
    desc: 'Сооснователь Pinside (Screenix AI). Опыт в Sber и Wildberries. Архитектура высоконагруженных систем, микросервисы и инфраструктура финтех-платформ.',
    linkedin: 'https://www.linkedin.com/in/muhammad-mahmudov/'
  },
  {
    photo: 'img/amir.jpg',
    name: 'Амирджон Кодиров',
    role: 'CAIO',
    desc: 'Сооснователь Pinside (Screenix AI). Опыт в Ozon, Yandex и Tinkoff. ML-скоринг, предиктивная аналитика и автоматизация финансовых процессов на основе ИИ.',
    linkedin: 'https://www.linkedin.com/in/amirjon-qodirov/'
  }
];

const TeamSection = () => (
  <section className="doc-section" id="section-team">
    <SectionHeader num="★" title="Команда" subtitle="Ключевые люди, стоящие за платформой Rizq" />
    <div className="team-grid">
      {TEAM.map((m, i) => (
        <div className="team-card" key={i}>
          <div className="team-photo"><img src={m.photo} alt={m.name} /></div>
          <div className="team-card-body">
            <div className="team-info">
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
            <div className="team-desc">{m.desc}</div>
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin"
              onClick={(e) => { if (!window.open(m.linkedin, '_blank')) { navigator.clipboard.writeText(m.linkedin); alert('Ссылка скопирована: ' + m.linkedin); } }}>
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="cta-section" id="cta">
    <div className="content-wrap">
      <h2>Готовы к интеграции?</h2>
      <p>
        Этот документ — готовая верхнеуровневая архитектура (Blueprint) для запуска интеграции
        с ИТ-департаментом и Департаментом рисков банка-партнёра.
      </p>
      <a href="https://t.me/jahangirmumini" target="_blank" rel="noopener" className="cta-btn">
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
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <TeamSection />
        </div>
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
