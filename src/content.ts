import artaiHall from './assets/projects/artai-hall.jpg'
import artaiInstallation from './assets/projects/artai-installation.jpg'
import artaiCanvas from './assets/projects/artai-canvas.jpg'

export type Lang = 'ru' | 'en'

export interface ServiceItem {
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface TimelineItem {
  period: string
  title: string
  place: string
}

export interface Testimonial {
  name: string
  date: string
  service: string
  text: string
}

export interface Audience {
  title: string
  description: string
  points: string[]
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  details: string[]
  images?: string[]
  link?: string
  linkLabel?: string
}

export interface Meta {
  title: string
  description: string
}

export interface TimelineContent {
  title: string
  experienceLabel: string
  educationLabel: string
  experience: TimelineItem[]
  education: TimelineItem[]
}

export interface DevContent {
  meta: Meta
  nav: { about: string; services: string; projects: string; experience: string; contact: string; cta: string }
  switchLabel: string
  hero: {
    kicker: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    terminalLines: string[]
  }
  stats: Stat[]
  about: { title: string; paragraphs: string[] }
  services: { title: string; subtitle: string; items: ServiceItem[] }
  process: { title: string; subtitle: string; steps: ServiceItem[] }
  projects: { title: string; subtitle: string; items: Project[]; linkLabel: string; backLabel: string; detailsTitle: string }
  skills: { title: string; groups: SkillGroup[] }
  timeline: TimelineContent
  achievements: { title: string; items: string[] }
  contact: { title: string; subtitle: string }
}

export interface TeachContent {
  meta: Meta
  nav: { about: string; subjects: string; approach: string; reviews: string; contact: string; cta: string }
  switchLabel: string
  hero: {
    kicker: string
    title: string
    highlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    ratingLabel: string
  }
  stats: Stat[]
  audiences: { title: string; subtitle: string; items: Audience[] }
  subjects: { title: string; subtitle: string; items: ServiceItem[] }
  approach: { title: string; subtitle: string; items: ServiceItem[] }
  about: { title: string; paragraphs: string[] }
  process: { title: string; steps: ServiceItem[]; formatNote: string }
  testimonials: { title: string; subtitle: string; items: Testimonial[]; linkLabel: string }
  timeline: TimelineContent
  contact: { title: string; subtitle: string }
}

export interface Content {
  meta: Meta
  common: {
    home: string
    emailLabel: string
    telegramLabel: string
    profiLabel: string
    rights: string
  }
  landing: {
    name: string
    hint: string
    dev: { label: string; tagline: string; cta: string }
    teach: { label: string; tagline: string; cta: string }
  }
  dev: DevContent
  teach: TeachContent
}

const testimonialsRu: Testimonial[] = [
  {
    name: 'Илья',
    date: '18 июля 2019',
    service: 'Информатика',
    text: 'До ноября 2018 года я не имел ни малейшего представления о том, как решать задания по информатике из ЕГЭ. Через несколько месяцев занятий уже чувствовал, что могу написать экзамен на достойный балл. Отзанимавшись раз в неделю 7 месяцев, сдал экзамен на 88 баллов. Репетитор умеет заинтересовать предметом и доступно донести материал.',
  },
  {
    name: 'Оксана',
    date: '20 июля 2023',
    service: 'Информатика',
    text: 'Очень благодарны Алексею Юрьевичу — в успешной сдаче экзамена вложен труд и знания преподавателя! Сыну было понятно, как объясняются темы и решения задач. Если время занятия подходило к концу, Алексей Юрьевич никогда не оставлял задачу нерешённой.',
  },
  {
    name: 'Екатерина',
    date: '24 августа 2023',
    service: 'Обучение тестированию ПО',
    text: 'Специалист отличный, всё понятно и быстро объясняет, стоимость хорошая. Видно, что имеет очень глубокие знания в программировании в различных его областях.',
  },
  {
    name: 'Роман',
    date: '9 августа 2020',
    service: 'Информатика',
    text: 'Темпы преподавания, подача материала, контроль знаний — хороший результат.',
  },
]

const testimonialsEn: Testimonial[] = [
  {
    name: 'Ilya',
    date: 'Jul 18, 2019',
    service: 'Computer science',
    text: 'Before November 2018 I had no idea how to solve computer science exam tasks. After a few months of lessons I already felt ready for a solid score. Studying once a week for 7 months, I passed the exam with 88 points. The tutor knows how to make the subject interesting and explain it clearly.',
  },
  {
    name: 'Oksana',
    date: 'Jul 20, 2023',
    service: 'Computer science',
    text: "We're very grateful to Alexey — his effort and knowledge as a teacher were key to passing the exam. My son found the explanations of topics and problem solving clear. Whenever a lesson was running long, he never left a problem unsolved.",
  },
  {
    name: 'Ekaterina',
    date: 'Aug 24, 2023',
    service: 'Software testing lessons',
    text: 'An excellent specialist — explains everything clearly and quickly, fair pricing. It shows he has very deep knowledge across different areas of programming.',
  },
  {
    name: 'Roman',
    date: 'Aug 9, 2020',
    service: 'Computer science',
    text: 'Good pace of teaching, clear delivery of material, solid progress checks — a strong result.',
  },
]

const educationRu: TimelineItem[] = [
  {
    period: '2016',
    title: 'Бакалавр, «Информационные системы»',
    place: 'МГУТУ им. К.Г. Разумовского, Институт системной автоматизации инноваций и предпринимательства',
  },
  {
    period: '2016–2018',
    title: 'Магистратура',
    place: 'МГУТУ им. К.Г. Разумовского',
  },
]

const educationEn: TimelineItem[] = [
  {
    period: '2016',
    title: "Bachelor's, Information Systems",
    place: 'K.G. Razumovsky Moscow State University of Technologies and Management',
  },
  {
    period: '2016–2018',
    title: "Master's degree",
    place: 'K.G. Razumovsky Moscow State University of Technologies and Management',
  },
]

export const content: Record<Lang, Content> = {
  ru: {
    meta: {
      title: 'Алексей Белоусов — разработчик и преподаватель',
      description:
        'Backend-разработка на Python (FastAPI, Django) и занятия по информатике и программированию. 10 лет в разработке, рейтинг 4,93 на Профи.ру.',
    },
    common: {
      home: 'На главную',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      profiLabel: 'Профиль на Профи.ру',
      rights: 'Все права защищены.',
    },
    landing: {
      name: 'Алексей Белоусов',
      hint: 'Выберите направление',
      dev: {
        label: 'Разработчик',
        tagline: 'Python backend · FastAPI · AI-интеграции',
        cta: 'Смотреть',
      },
      teach: {
        label: 'Преподаватель',
        tagline: 'Информатика · программирование · ЕГЭ',
        cta: 'Смотреть',
      },
    },

    dev: {
      meta: {
        title: 'Алексей Белоусов — Python backend-разработчик (FastAPI, Django)',
        description:
          'Ведущий backend-разработчик: API и микросервисы на FastAPI и Django, интеграции с AI/LLM, базы данных и мониторинг. 10 лет в разработке ПО.',
      },
      nav: {
        about: 'Обо мне',
        services: 'Услуги',
        projects: 'Кейсы',
        experience: 'Опыт',
        contact: 'Контакты',
        cta: 'Обсудить проект',
      },
      switchLabel: 'Я преподаю',
      hero: {
        kicker: 'Python backend · 10 лет в разработке',
        title: 'Backend на Python, который выдерживает рост продукта',
        subtitle:
          'Я Алексей Белоусов, ведущий backend-разработчик. Проектирую и запускаю API, микросервисы и интеграции с AI/LLM на FastAPI и Django — от архитектуры и базы данных до продакшена и мониторинга.',
        ctaPrimary: 'Обсудить проект',
        ctaSecondary: 'Смотреть кейсы',
        terminalLines: [
          '$ whoami',
          'lead backend developer',
          '$ stack --print',
          'Python · FastAPI · Django · PostgreSQL',
          '$ infra --print',
          'Docker · RabbitMQ · Grafana · Prometheus',
        ],
      },
      stats: [
        { value: '10 лет', label: 'в разработке ПО' },
        { value: 'Lead', label: 'ведущий разработчик сейчас' },
        { value: 'AI/LLM', label: 'интеграции в продакшене' },
        { value: '2025', label: 'полуфинал хакатона МТС True Tech Day' },
      ],
      about: {
        title: 'Обо мне',
        paragraphs: [
          'Сейчас — ведущий Python-разработчик в Meadow: строю микросервисную AI-платформу для маркетплейса блогеров на FastAPI и RabbitMQ, с интеграциями AI/LLM для анализа контента.',
          'До этого в Rabbit & Carrot декомпозировал монолит на микросервисы (Celery, Redis), а в ZeroLab разрабатывал краудсорсинговую площадку на Django REST Framework и Telegram-ботов. Отдельно сделал ARTAI — AI-генератор изображений, который работал на международной выставке «Таврида·АРТ».',
          'Беру ответственность за результат целиком: от схемы базы и контрактов API до деплоя, логов и алертов. Объясняю технические решения простым языком — это помогает и бизнесу, и команде.',
        ],
      },
      services: {
        title: 'Чем могу помочь',
        subtitle: 'Подключаюсь к новому продукту с нуля или усиливаю существующую команду.',
        items: [
          {
            title: 'Backend на FastAPI и Django',
            description: 'Проектирую и разрабатываю REST API и микросервисы, поддерживаю и рефакторю существующий код.',
          },
          {
            title: 'Интеграции с AI/LLM',
            description: 'Подключаю языковые модели и AI-агентов к продукту: обработка и анализ контента, генерация, автоматизация.',
          },
          {
            title: 'Проектирование баз данных',
            description: 'ER-модели, схемы и оптимизация запросов для PostgreSQL, MS SQL Server и MySQL.',
          },
          {
            title: 'Микросервисы и очереди',
            description: 'Разделение монолита, асинхронное взаимодействие через RabbitMQ, Celery и Redis.',
          },
          {
            title: 'Мониторинг и инфраструктура',
            description: 'Docker, nginx, Grafana, Loki, Prometheus — от нуля до рабочих дашбордов и алертов.',
          },
          {
            title: 'Код-ревью и консультации',
            description: 'Разбор архитектуры, поиск узких мест, рекомендации по масштабированию и качеству кода.',
          },
        ],
      },
      process: {
        title: 'Как строится работа',
        subtitle: 'Прозрачно на каждом этапе — вы всегда знаете, что сделано и что дальше.',
        steps: [
          {
            title: 'Разбор задачи',
            description: 'Созваниваемся, обсуждаем цели продукта, ограничения и текущее состояние кода.',
          },
          {
            title: 'План и оценка',
            description: 'Предлагаю архитектуру, разбиваю работу на этапы и называю сроки.',
          },
          {
            title: 'Разработка итерациями',
            description: 'Регулярно показываю результат, код проходит ревью и покрыт тестами.',
          },
          {
            title: 'Запуск и поддержка',
            description: 'Деплой, мониторинг и алерты — чтобы сервис стабильно работал после релиза.',
          },
        ],
      },
      projects: {
        title: 'Кейсы',
        subtitle: 'Проекты, которые я делал сам — от продакшен-сервисов до выставочной инсталляции.',
        linkLabel: 'Подробнее',
        backLabel: 'Все кейсы',
        detailsTitle: 'Что было сделано',
        items: [
          {
            slug: 'ai-platform-meadow',
            title: 'AI-платформа для маркетплейса блогеров',
            description: 'Микросервисный backend на FastAPI: автоматическое отслеживание рекламных интеграций и упоминаний брендов в контенте блогеров с помощью AI/LLM.',
            tags: ['FastAPI', 'RabbitMQ', 'AI/LLM', 'PostgreSQL'],
            details: [
              'Спроектировал и реализовал микросервисную архитектуру на FastAPI для масштабируемости и отказоустойчивости платформы',
              'Использовал pydantic для валидации, сериализации и структурирования данных в API',
              'Реализовал асинхронные интеграции с внешними API, в том числе через aiohttp',
              'Разрабатывал backend-интеграции с AI/LLM-сервисами для обработки и анализа контента',
              'Работал с SQLAlchemy для проектирования моделей и оптимизации SQL-запросов',
              'Организовал взаимодействие сервисов через RabbitMQ',
              'Развернул стек мониторинга (Grafana + логирование контейнеров)',
            ],
          },
          {
            slug: 'artai',
            title: 'ARTAI — генератор изображений',
            description: 'AI-генератор изображений по текстовому описанию на 7 языках с «цифровым холстом» — сгенерированные работы выводятся на большой экран в реальном времени. Показывали на международной выставке молодых художников в рамках фестиваля «Таврида·АРТ».',
            tags: ['FastAPI', 'WebSocket', 'PostgreSQL', 'Docker'],
            details: [
              'Генерация изображений по текстовому промпту на 7 языках — автоматический перевод перед отправкой в модель',
              '«Цифровой холст»: вывод сгенерированных изображений на большой экран в реальном времени через WebSocket, сокет держится часами',
              'Развернул продакшен-инфраструктуру: Docker Compose, nginx, PostgreSQL, автоматический выпуск и продление TLS-сертификата',
              'Инсталляция на выставке — сенсорные киоски для посетителей и экран во всю стену',
            ],
            images: [artaiHall, artaiInstallation, artaiCanvas],
            link: 'https://ai.tavrida.art/',
            linkLabel: 'Открыть проект',
          },
          {
            slug: 'telegram-bot-zerolab',
            title: 'Telegram-бот для мониторинга вакансий и товаров',
            description: 'Парсинг и агрегация данных с внешних площадок, аналитические веб-страницы с графиками и таблицами.',
            tags: ['Python', 'Telegram API', 'BeautifulSoup', 'Chart.js'],
            details: [
              'Реализовал функциональность бота на Python Telegram API, тестировал локально через ngrok',
              'Интегрировал внешние API для получения актуальной информации по товарам и вакансиям',
              'Парсинг HTML-страниц с помощью BeautifulSoup, структурирование и фильтрация данных по ключевым признакам',
              'Разработал и свёрстал аналитические веб-страницы с графиками на Chart.js и Bootstrap',
            ],
          },
        ],
      },
      skills: {
        title: 'Стек и инструменты',
        groups: [
          { title: 'Backend', items: ['Python', 'FastAPI', 'Django / DRF', 'pydantic', 'SQLAlchemy'] },
          { title: 'Интеграции', items: ['RabbitMQ', 'Celery', 'Redis', 'WebSocket', 'AI/LLM API'] },
          { title: 'Базы данных', items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'ER-моделирование'] },
          { title: 'Инфраструктура', items: ['Docker', 'nginx', 'Grafana', 'Loki', 'Prometheus'] },
        ],
      },
      timeline: {
        title: 'Опыт',
        experienceLabel: 'Работа',
        educationLabel: 'Образование',
        experience: [
          {
            period: 'с 2024',
            title: 'Ведущий разработчик',
            place: 'Meadow · микросервисная AI-платформа, FastAPI, RabbitMQ',
          },
          {
            period: '2023–2024',
            title: 'Старший разработчик',
            place: 'Rabbit & Carrot · декомпозиция монолита на микросервисы, Celery, Redis',
          },
          {
            period: '2020–2022',
            title: 'Бэкенд-разработчик',
            place: 'ZeroLab · площадка для краудсорсинга, Django REST Framework, Telegram-боты',
          },
        ],
        education: educationRu,
      },
      achievements: {
        title: 'Достижения',
        items: [
          'Полуфиналист хакатона МТС True Tech Day (2025)',
          'Участник хакатона IT ONE Cup ML Challenge (2025)',
          'Финалист конкурса «УМНИК» (2016)',
          'Диплом XIII Всероссийской научной конференции «Нейрокомпьютеры и их применение» (2015)',
          'Диплом III степени научно-технической конференции МИЭМ НИУ ВШЭ (2015)',
          'Дипломы II и III степени Московской научно-практической конференции «Студенческая наука» (2014–2015)',
        ],
      },
      contact: {
        title: 'Расскажите о задаче',
        subtitle: 'Опишите проект в паре предложений — отвечу в течение дня с уточняющими вопросами и первыми идеями.',
      },
    },

    teach: {
      meta: {
        title: 'Алексей Белоусов — репетитор по информатике и программированию',
        description:
          'Занятия по информатике, Python, JavaScript и C# для школьников, студентов и взрослых. Подготовка к ЕГЭ, помощь с курсовыми и дипломами. Рейтинг 4,93 на Профи.ру, 44 отзыва.',
      },
      nav: {
        about: 'Обо мне',
        subjects: 'Предметы',
        approach: 'Подход',
        reviews: 'Отзывы',
        contact: 'Контакты',
        cta: 'Записаться',
      },
      switchLabel: 'Я разрабатываю',
      hero: {
        kicker: 'Репетитор с 2014 года',
        title: 'Информатика и программирование —',
        highlight: 'понятно и с интересом',
        subtitle:
          'Готовлю школьников к ЕГЭ, помогаю студентам с программированием, курсовыми и дипломом, учу взрослых с нуля. Бывший старший преподаватель МПГУ и действующий ведущий разработчик — показываю, как знания работают в настоящей профессии.',
        ctaPrimary: 'Записаться на занятие',
        ctaSecondary: 'Отзывы учеников',
        ratingLabel: 'на Профи.ру · 44 отзыва',
      },
      stats: [
        { value: '4,93', label: 'рейтинг на Профи.ру' },
        { value: '44', label: 'отзыва учеников' },
        { value: '12 лет', label: 'частной практики' },
        { value: '88', label: 'баллов ЕГЭ у ученика после 7 месяцев' },
      ],
      audiences: {
        title: 'Кому помогаю',
        subtitle: 'Подстраиваю программу под возраст, уровень и цель — экзамен, учёба или новая профессия.',
        items: [
          {
            title: 'Школьникам',
            description: 'От первого знакомства с программированием до уверенной сдачи экзамена.',
            points: ['Подготовка к ЕГЭ по информатике', 'Школьная программа без пробелов', 'Опыт с детьми со 2 класса'],
          },
          {
            title: 'Студентам',
            description: 'Разбираемся с программированием в вузе и доводим работы до защиты.',
            points: ['Курсовые и дипломные проекты', 'Алгоритмы, базы данных, веб', 'Студенты из вузов Великобритании, Германии и Канады'],
          },
          {
            title: 'Взрослым',
            description: 'Осваиваем программирование с нуля или готовимся к смене профессии.',
            points: ['Python, JavaScript, C#', 'Тестирование ПО', 'Практика на реальных мини-проектах'],
          },
        ],
      },
      subjects: {
        title: 'Что преподаю',
        subtitle: 'Индивидуально или в группе, очно и дистанционно.',
        items: [
          {
            title: 'Информатика и ЕГЭ',
            description: 'Разбор всех ключевых тем и типов заданий, стратегия на экзамене, связь теории с практикой.',
          },
          {
            title: 'Программирование',
            description: 'Python, JavaScript, C# — с нуля или для углубления знаний, с реальными мини-проектами.',
          },
          {
            title: 'Разработка игр на Unity',
            description: 'Основы C# и Unity, этапы разработки игр, алгоритмы — от идеи до первого прототипа.',
          },
          {
            title: 'Курсовые и дипломы',
            description: 'Техническое сопровождение: выбор стека, архитектура, код и подготовка к защите.',
          },
        ],
      },
      approach: {
        title: 'Как я преподаю',
        subtitle: 'Цель — не заучить, а понять и научиться решать самостоятельно.',
        items: [
          {
            title: 'Через интересы ученика',
            description: 'Нахожу интерес к предмету через хобби и увлечения — так материал запоминается легче.',
          },
          {
            title: 'Связь с профессией',
            description: 'Я сам работаю разработчиком и показываю, где изучаемые темы применяются в реальной работе.',
          },
          {
            title: 'Задача не остаётся нерешённой',
            description: 'Доводим разбор до конца, даже если время занятия подходит к концу.',
          },
          {
            title: 'Практика и контроль',
            description: 'Мини-проекты и регулярная проверка знаний — прогресс видно ученику и родителям.',
          },
        ],
      },
      about: {
        title: 'Обо мне',
        paragraphs: [
          'Преподаю с 2013 года: начинал учебным мастером в МГУТУ им. К.Г. Разумовского, затем был старшим преподавателем в МПГУ по программе двух дипломов с University of London — вёл дискретную математику, машинное обучение и веб-разработку.',
          'С 2014 года занимаюсь частной практикой, с 2017-го — на Профи.ру: 44 отзыва и рейтинг 4,93. Работаю со студентами Queen Mary University of London, University of Stirling, вузов Германии и Канады.',
          'Параллельно работаю ведущим backend-разработчиком — поэтому учу не по учебнику, а так, как программируют в индустрии.',
        ],
      },
      process: {
        title: 'Как начать',
        formatNote: 'Занятия индивидуально или в группе, очно и дистанционно.',
        steps: [
          {
            title: 'Напишите в Telegram',
            description: 'Расскажите, кто будет заниматься, какой класс или курс и какая цель.',
          },
          {
            title: 'Первое занятие',
            description: 'Знакомимся, определяем текущий уровень и составляем план под вашу цель.',
          },
          {
            title: 'Регулярные занятия',
            description: 'Занимаемся по плану, отслеживаем прогресс и корректируем темп.',
          },
          {
            title: 'Результат',
            description: 'Сданный экзамен, защищённый диплом или уверенный навык программирования.',
          },
        ],
      },
      testimonials: {
        title: 'Отзывы учеников',
        subtitle: '4,93 из 5 по 44 отзывам на Профи.ру',
        items: testimonialsRu,
        linkLabel: 'Все 44 отзыва на Профи.ру',
      },
      timeline: {
        title: 'Опыт преподавания',
        experienceLabel: 'Преподавание',
        educationLabel: 'Образование',
        experience: [
          {
            period: 'с 2017',
            title: 'Репетитор на Профи.ру',
            place: '44 отзыва, рейтинг 4,93 — 9 лет на сервисе',
          },
          {
            period: '2018–2020',
            title: 'Старший преподаватель',
            place: 'МПГУ · программа двух дипломов с University of London: дискретная математика, машинное обучение, веб-разработка на Django и Flask',
          },
          {
            period: 'с 2014',
            title: 'Частная репетиторская практика',
            place: 'Информатика, программирование',
          },
          {
            period: 'с 2013',
            title: 'Учебный мастер',
            place: 'Лекции и лабораторные работы · МГУТУ им. К.Г. Разумовского',
          },
        ],
        education: educationRu,
      },
      contact: {
        title: 'Записаться на занятие',
        subtitle: 'Напишите, кто будет заниматься, какой класс или курс и какая цель — предложу план и удобное время. Отвечаю в течение дня.',
      },
    },
  },

  en: {
    meta: {
      title: 'Alexey Belousov — Developer & Tutor',
      description:
        'Python backend development (FastAPI, Django) and computer science and programming lessons. 10 years in software, 4.93 rating on Profi.ru.',
    },
    common: {
      home: 'Home',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      profiLabel: 'Profile on Profi.ru',
      rights: 'All rights reserved.',
    },
    landing: {
      name: 'Alexey Belousov',
      hint: 'Choose a direction',
      dev: {
        label: 'Developer',
        tagline: 'Python backend · FastAPI · AI integrations',
        cta: 'View',
      },
      teach: {
        label: 'Tutor',
        tagline: 'Computer science · programming · exams',
        cta: 'View',
      },
    },

    dev: {
      meta: {
        title: 'Alexey Belousov — Python Backend Developer (FastAPI, Django)',
        description:
          'Lead backend developer: APIs and microservices with FastAPI and Django, AI/LLM integrations, databases and monitoring. 10 years in software development.',
      },
      nav: {
        about: 'About',
        services: 'Services',
        projects: 'Case studies',
        experience: 'Experience',
        contact: 'Contact',
        cta: 'Discuss a project',
      },
      switchLabel: 'I also teach',
      hero: {
        kicker: 'Python backend · 10 years in software',
        title: 'A Python backend that keeps up as your product grows',
        subtitle:
          "I'm Alexey Belousov, a lead backend developer. I design and ship APIs, microservices and AI/LLM integrations with FastAPI and Django — from architecture and the database all the way to production and monitoring.",
        ctaPrimary: 'Discuss a project',
        ctaSecondary: 'See case studies',
        terminalLines: [
          '$ whoami',
          'lead backend developer',
          '$ stack --print',
          'Python · FastAPI · Django · PostgreSQL',
          '$ infra --print',
          'Docker · RabbitMQ · Grafana · Prometheus',
        ],
      },
      stats: [
        { value: '10 yrs', label: 'in software development' },
        { value: 'Lead', label: 'current role' },
        { value: 'AI/LLM', label: 'integrations in production' },
        { value: '2025', label: 'MTS True Tech Day hackathon semi-final' },
      ],
      about: {
        title: 'About me',
        paragraphs: [
          "Currently a lead Python developer at Meadow, building a microservice AI platform for a blogger marketplace on FastAPI and RabbitMQ, with AI/LLM integrations for content analysis.",
          'Before that, at Rabbit & Carrot I broke a monolith down into microservices (Celery, Redis), and at ZeroLab I built a crowdsourcing platform on Django REST Framework plus Telegram bots. Separately, I built ARTAI — an AI image generator that ran at the international "Tavrida·ART" exhibition.',
          'I own the result end to end: from the database schema and API contracts to deployment, logs and alerts. And I explain technical decisions in plain language — which helps both the business and the team.',
        ],
      },
      services: {
        title: 'How I can help',
        subtitle: 'I can join a new product from scratch or strengthen an existing team.',
        items: [
          {
            title: 'Backend with FastAPI and Django',
            description: 'Designing and building REST APIs and microservices, maintaining and refactoring existing code.',
          },
          {
            title: 'AI/LLM integrations',
            description: 'Connecting language models and AI agents to your product: content processing and analysis, generation, automation.',
          },
          {
            title: 'Database design',
            description: 'ER modelling, schema design and query optimisation for PostgreSQL, MS SQL Server and MySQL.',
          },
          {
            title: 'Microservices & queues',
            description: 'Splitting up monoliths, asynchronous communication with RabbitMQ, Celery and Redis.',
          },
          {
            title: 'Monitoring & infrastructure',
            description: 'Docker, nginx, Grafana, Loki, Prometheus — from scratch to working dashboards and alerts.',
          },
          {
            title: 'Code review & consulting',
            description: 'Architecture review, finding bottlenecks, recommendations on scalability and code quality.',
          },
        ],
      },
      process: {
        title: 'How we work together',
        subtitle: 'Transparent at every stage — you always know what is done and what comes next.',
        steps: [
          {
            title: 'Understand the task',
            description: 'We get on a call to discuss product goals, constraints and the current state of the code.',
          },
          {
            title: 'Plan & estimate',
            description: 'I propose an architecture, split the work into stages and give a timeline.',
          },
          {
            title: 'Build in iterations',
            description: 'I show progress regularly; code goes through review and is covered by tests.',
          },
          {
            title: 'Launch & support',
            description: 'Deployment, monitoring and alerts — so the service keeps running reliably after release.',
          },
        ],
      },
      projects: {
        title: 'Case studies',
        subtitle: "Projects I built myself — from production services to an exhibition installation.",
        linkLabel: 'Learn more',
        backLabel: 'All case studies',
        detailsTitle: 'What I did',
        items: [
          {
            slug: 'ai-platform-meadow',
            title: 'AI platform for a blogger marketplace',
            description: "Microservice backend on FastAPI: automatic tracking of ad integrations and brand mentions in bloggers' content using AI/LLM.",
            tags: ['FastAPI', 'RabbitMQ', 'AI/LLM', 'PostgreSQL'],
            details: [
              'Designed and built a microservice architecture on FastAPI for platform scalability and resilience',
              'Used pydantic for validation, serialization, and structuring data across the API',
              'Implemented asynchronous integrations with external APIs, including with aiohttp',
              'Built backend integrations with AI/LLM services for content processing and analysis',
              'Worked with SQLAlchemy for data modelling and SQL query optimisation',
              'Set up inter-service communication over RabbitMQ',
              'Deployed a monitoring stack (Grafana + container logging)',
            ],
          },
          {
            slug: 'artai',
            title: 'ARTAI — image generator',
            description: 'An AI image generator from text prompts in 7 languages, with a "digital canvas" that streams generated artwork to a big screen in real time. Shown at an international exhibition of young artists as part of the "Tavrida·ART" festival.',
            tags: ['FastAPI', 'WebSocket', 'PostgreSQL', 'Docker'],
            details: [
              'Image generation from a text prompt in 7 languages — automatic translation before it reaches the model',
              'A "digital canvas": generated images stream to a large screen in real time over WebSocket, with sockets held open for hours',
              'Set up the production infrastructure: Docker Compose, nginx, PostgreSQL, automatic TLS certificate issuance and renewal',
              'Installed as an exhibit — touchscreen kiosks for visitors and a wall-sized display',
            ],
            images: [artaiHall, artaiInstallation, artaiCanvas],
            link: 'https://ai.tavrida.art/',
            linkLabel: 'Open project',
          },
          {
            slug: 'telegram-bot-zerolab',
            title: 'Telegram bot for job and product monitoring',
            description: 'Parsing and aggregating data from external platforms, with analytics web pages featuring charts and tables.',
            tags: ['Python', 'Telegram API', 'BeautifulSoup', 'Chart.js'],
            details: [
              'Built the bot on the Python Telegram API, tested locally via ngrok',
              'Integrated external APIs for up-to-date product and job listing data',
              'Parsed HTML pages with BeautifulSoup, structured and filtered data by key attributes',
              'Built analytics web pages with charts using Chart.js and Bootstrap',
            ],
          },
        ],
      },
      skills: {
        title: 'Stack & tools',
        groups: [
          { title: 'Backend', items: ['Python', 'FastAPI', 'Django / DRF', 'pydantic', 'SQLAlchemy'] },
          { title: 'Integrations', items: ['RabbitMQ', 'Celery', 'Redis', 'WebSocket', 'AI/LLM APIs'] },
          { title: 'Databases', items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'ER modelling'] },
          { title: 'Infrastructure', items: ['Docker', 'nginx', 'Grafana', 'Loki', 'Prometheus'] },
        ],
      },
      timeline: {
        title: 'Experience',
        experienceLabel: 'Work',
        educationLabel: 'Education',
        experience: [
          {
            period: 'since 2024',
            title: 'Lead Developer',
            place: 'Meadow · microservice AI platform, FastAPI, RabbitMQ',
          },
          {
            period: '2023–2024',
            title: 'Senior Developer',
            place: 'Rabbit & Carrot · decomposed a monolith into microservices, Celery, Redis',
          },
          {
            period: '2020–2022',
            title: 'Backend Developer',
            place: 'ZeroLab · crowdsourcing platform, Django REST Framework, Telegram bots',
          },
        ],
        education: educationEn,
      },
      achievements: {
        title: 'Achievements',
        items: [
          'Semi-finalist, MTS True Tech Day hackathon (2025)',
          'Participant, IT ONE Cup ML Challenge hackathon (2025)',
          'Finalist, "UMNIK" innovation contest (2016)',
          'Diploma, 13th All-Russian conference "Neurocomputers and Their Applications" (2015)',
          '3rd degree diploma, HSE MIEM research and technology conference (2015)',
          '2nd and 3rd degree diplomas, "Student Science" Moscow research conference (2014–2015)',
        ],
      },
      contact: {
        title: 'Tell me about your project',
        subtitle: "Describe it in a couple of sentences — I'll reply within a day with follow-up questions and first ideas.",
      },
    },

    teach: {
      meta: {
        title: 'Alexey Belousov — Computer Science & Programming Tutor',
        description:
          'Computer science, Python, JavaScript and C# lessons for school students, university students and adults. Exam prep, help with coursework and theses. 4.93 rating on Profi.ru, 44 reviews.',
      },
      nav: {
        about: 'About',
        subjects: 'Subjects',
        approach: 'Approach',
        reviews: 'Reviews',
        contact: 'Contact',
        cta: 'Book a lesson',
      },
      switchLabel: 'I also develop',
      hero: {
        kicker: 'Tutoring since 2014',
        title: 'Computer science and programming —',
        highlight: 'clear and engaging',
        subtitle:
          "I prepare school students for exams, help university students with programming, coursework and theses, and teach adults from scratch. Former senior lecturer at Moscow Pedagogical State University and a working lead developer — I show how the knowledge is used in a real job.",
        ctaPrimary: 'Book a lesson',
        ctaSecondary: 'Student reviews',
        ratingLabel: 'on Profi.ru · 44 reviews',
      },
      stats: [
        { value: '4.93', label: 'rating on Profi.ru' },
        { value: '44', label: 'student reviews' },
        { value: '12 yrs', label: 'of private tutoring' },
        { value: '88', label: 'exam points for a student after 7 months' },
      ],
      audiences: {
        title: 'Who I help',
        subtitle: 'I adapt the programme to age, level and goal — an exam, university studies or a new career.',
        items: [
          {
            title: 'School students',
            description: 'From a first encounter with programming to passing the exam with confidence.',
            points: ['Computer science exam prep', 'School curriculum with no gaps', 'Experience teaching from 2nd grade'],
          },
          {
            title: 'University students',
            description: 'Getting to grips with programming at university and taking projects all the way to the defence.',
            points: ['Coursework and thesis projects', 'Algorithms, databases, web', 'Students from universities in the UK, Germany and Canada'],
          },
          {
            title: 'Adults',
            description: 'Learning programming from scratch or preparing for a career change.',
            points: ['Python, JavaScript, C#', 'Software testing', 'Practice on real mini-projects'],
          },
        ],
      },
      subjects: {
        title: 'What I teach',
        subtitle: 'One-on-one or in a group, in person or remote.',
        items: [
          {
            title: 'Computer science & exams',
            description: 'Every key topic and task type, exam strategy, and how theory connects to practice.',
          },
          {
            title: 'Programming',
            description: 'Python, JavaScript, C# — from zero or to deepen existing knowledge, with real mini-projects.',
          },
          {
            title: 'Game development with Unity',
            description: 'C# and Unity fundamentals, the stages of game development, algorithms — from an idea to a first prototype.',
          },
          {
            title: 'Coursework & theses',
            description: 'Technical guidance: choosing the stack, architecture, code, and preparing for the defence.',
          },
        ],
      },
      approach: {
        title: 'How I teach',
        subtitle: 'The goal is not to memorise, but to understand and learn to solve problems independently.',
        items: [
          {
            title: "Through the student's interests",
            description: 'I connect the subject to hobbies and interests — that makes the material stick.',
          },
          {
            title: 'Linked to a real career',
            description: 'I work as a developer myself and show where each topic is used in real work.',
          },
          {
            title: 'No problem left unsolved',
            description: 'We finish working through a problem, even when the lesson is running out of time.',
          },
          {
            title: 'Practice and progress checks',
            description: 'Mini-projects and regular checks — progress is visible to students and parents.',
          },
        ],
      },
      about: {
        title: 'About me',
        paragraphs: [
          'I have been teaching since 2013: I started as a teaching assistant at K.G. Razumovsky University, then became a senior lecturer at Moscow Pedagogical State University on a dual-degree programme with the University of London — teaching discrete mathematics, machine learning and web development.',
          'I have tutored privately since 2014 and on Profi.ru since 2017, with 44 reviews and a 4.93 rating. I work with students from Queen Mary University of London, the University of Stirling, and universities in Germany and Canada.',
          'Alongside teaching I work as a lead backend developer — so I teach not by the textbook, but the way people actually program in industry.',
        ],
      },
      process: {
        title: 'How to start',
        formatNote: 'One-on-one or group lessons, in person or remote.',
        steps: [
          {
            title: 'Message me on Telegram',
            description: 'Tell me who will be studying, their grade or course, and the goal.',
          },
          {
            title: 'First lesson',
            description: 'We get to know each other, assess the current level and build a plan for your goal.',
          },
          {
            title: 'Regular lessons',
            description: 'We follow the plan, track progress and adjust the pace.',
          },
          {
            title: 'Result',
            description: 'A passed exam, a defended thesis, or confident programming skills.',
          },
        ],
      },
      testimonials: {
        title: 'Student reviews',
        subtitle: '4.93 out of 5 across 44 reviews on Profi.ru',
        items: testimonialsEn,
        linkLabel: 'All 44 reviews on Profi.ru',
      },
      timeline: {
        title: 'Teaching experience',
        experienceLabel: 'Teaching',
        educationLabel: 'Education',
        experience: [
          {
            period: 'since 2017',
            title: 'Tutor on Profi.ru',
            place: '44 reviews, 4.93 rating — 9 years on the platform',
          },
          {
            period: '2018–2020',
            title: 'Senior Lecturer',
            place: 'Moscow Pedagogical State University · dual-degree programme with the University of London: discrete mathematics, machine learning, web development with Django and Flask',
          },
          {
            period: 'since 2014',
            title: 'Private tutoring practice',
            place: 'Computer science, programming',
          },
          {
            period: 'since 2013',
            title: 'Teaching assistant',
            place: 'Lectures and labs · K.G. Razumovsky Moscow State University of Technologies and Management',
          },
        ],
        education: educationEn,
      },
      contact: {
        title: 'Book a lesson',
        subtitle: "Tell me who will be studying, their grade or course, and the goal — I'll suggest a plan and a convenient time. I usually reply within a day.",
      },
    },
  },
}
