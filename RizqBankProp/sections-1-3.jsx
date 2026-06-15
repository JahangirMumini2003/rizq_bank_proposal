/* Hero + Section 1 (Legal) + Section 2 (Financial) + Section 3 (Technical) */
const { StarLogo, SectionHeader, ContractCard, CodeBlock, FlowStep, DocList, InfoBox, ArrowDown } = window;

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
  <section className="doc-section" id="section-1">
    <SectionHeader num="01" title="Юридический манифест и правовой базис (РУз)"
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
  <section className="doc-section" id="section-2">
    <SectionHeader num="02" title="Финансово-правовая природа ликвидности банка"
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
  <section className="doc-section" id="section-3">
    <SectionHeader num="03" title="Техническая архитектура и механика бэкенда"
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

Object.assign(window, { HeroSection, Section1, Section2, Section3 });
