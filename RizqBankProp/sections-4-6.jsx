/* Section 4 (Settlement) + Section 5 (Revenue Split) + Section 6 (NPL) */
const { SectionHeader, FlowStep, DocList, InfoBox } = window;

/* ═══ Section 4: Settlement ═══ */
const Section4 = () => (
  <section className="doc-section" id="section-4">
    <SectionHeader num="04" title="Механика взаиморасчётов и обратный поток (клиринг)"
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
  <section className="doc-section" id="section-5">
    <SectionHeader num="05" title="Механика расщепления прибыли (Split 50/50)"
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
  <section className="doc-section" id="section-6">
    <SectionHeader num="06" title="Матрица управления NPL (риски невозврата)"
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

Object.assign(window, { Section4, Section5, Section6 });
