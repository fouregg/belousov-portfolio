export type Lang = 'ru' | 'en'

export interface ServiceItem {
  title: string
  description: string
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

export interface Content {
  meta: { title: string; description: string }
  nav: { about: string; services: string; experience: string; reviews: string; contact: string; cta: string }
  hero: {
    kicker: string
    title: string
    highlight: string
    subtitle: string
    ctaDev: string
    ctaTeach: string
    ratingLabel: string
    terminalLines: string[]
  }
  about: { title: string; paragraphs: string[] }
  services: {
    title: string
    subtitle: string
    dev: { title: string; tag: string; items: ServiceItem[] }
    teach: { title: string; tag: string; items: ServiceItem[]; priceNote: string; priceLinkLabel: string }
  }
  skills: { title: string; groups: SkillGroup[] }
  timeline: {
    title: string
    educationLabel: string
    experienceLabel: string
    education: TimelineItem[]
    experience: TimelineItem[]
  }
  achievements: { title: string; items: string[] }
  testimonials: { title: string; subtitle: string; items: Testimonial[]; linkLabel: string }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    telegramLabel: string
    whatsappLabel: string
    profiLabel: string
  }
  footer: { rights: string; builtWith: string }
}

export const content: Record<Lang, Content> = {
  ru: {
    meta: {
      title: 'Алексей Белоусов — backend-разработчик и преподаватель информатики',
      description:
        'Backend-разработка на Python (FastAPI, Django) и подготовка к ЕГЭ/ОГЭ по информатике, обучение программированию. 10 лет опыта, рейтинг 4.93 на Профи.ру.',
    },
    nav: {
      about: 'Обо мне',
      services: 'Услуги',
      experience: 'Опыт',
      reviews: 'Отзывы',
      contact: 'Контакты',
      cta: 'Написать',
    },
    hero: {
      kicker: 'Разработка и обучение',
      title: 'Алексей Белоусов',
      highlight: 'backend-разработчик и преподаватель информатики',
      subtitle:
        '10 лет разрабатываю ПО на Python — FastAPI, Django, AI-агенты. Параллельно готовлю к ЕГЭ и ОГЭ по информатике и учу программированию: от первого «Hello, world» до дипломной работы.',
      ctaDev: 'Обсудить проект',
      ctaTeach: 'Записаться на занятие',
      ratingLabel: 'рейтинг на Профи.ру · 44 отзыва',
      terminalLines: [
        '$ whoami',
        'lead backend developer · преподаватель информатики',
        '$ stack --print',
        'Python · FastAPI · Django · PostgreSQL · Grafana',
      ],
    },
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Ведущий backend-разработчик на Python (FastAPI, Django, AI-агенты) в маркетинговом агентстве. Занимаюсь разработкой ПО уже 10 лет.',
        'Был старшим преподавателем в Московском педагогическом государственном университете (МПГУ) по программе двух дипломов с University of London. Работаю со студентами из Queen Mary University of London, University of Stirling, вузов Германии и Канады.',
        'По информатике мои ученики показывают высокие результаты — от 70 до 95 баллов на ЕГЭ. Стараюсь находить интерес к предмету через хобби и увлечения ученика, объясняю, с какими ИТ-профессиями связаны темы экзамена. Есть опыт работы с детьми со 2 класса.',
      ],
    },
    services: {
      title: 'Услуги',
      subtitle: 'Два направления — разработка ПО и преподавание. Можно совмещать: например, техническую менторскую поддержку для студентов курсовых и дипломных проектов.',
      dev: {
        title: 'Разработка',
        tag: 'для бизнеса и продуктов',
        items: [
          {
            title: 'Backend на FastAPI и Django',
            description: 'Проектирование и разработка API, интеграция AI-агентов, поддержка и рефакторинг существующих сервисов.',
          },
          {
            title: 'Проектирование баз данных',
            description: 'ER-модели, схемы и оптимизация для PostgreSQL, MS SQL Server и MySQL.',
          },
          {
            title: 'Мониторинг и наблюдаемость',
            description: 'Развёртывание и настройка Grafana, Loki, Prometheus — от нуля до рабочих дашбордов и алертов.',
          },
          {
            title: 'Код-ревью и консультации',
            description: 'Разбор архитектуры, поиск узких мест, рекомендации по масштабированию и качеству кода.',
          },
        ],
      },
      teach: {
        title: 'Репетиторство',
        tag: 'для школьников, студентов и взрослых',
        items: [
          {
            title: 'ЕГЭ и ОГЭ по информатике',
            description: 'Разбор реальных заданий, связь тем экзамена с практикой и ИТ-профессиями. Результаты учеников — 70–95 баллов.',
          },
          {
            title: 'Обучение программированию',
            description: 'Python, JavaScript, C# — с нуля или для углубления знаний, с реальными мини-проектами.',
          },
          {
            title: 'Разработка игр на Unity',
            description: 'Основы C# и Unity, этапы разработки игр, алгоритмы — от идеи до первого прототипа.',
          },
          {
            title: 'Курсовые и дипломные работы',
            description: 'Помощь в постановке задач, определении научной новизны и структуры работы по ИТ-направлениям.',
          },
        ],
        priceNote: 'Занятие 60 минут — от 2000 ₽. Индивидуально или в группе, очно и дистанционно.',
        priceLinkLabel: 'Полный прайс (36 услуг) на Профи.ру',
      },
    },
    skills: {
      title: 'Стек и инструменты',
      groups: [
        { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'REST API', 'AI-агенты'] },
        { title: 'Базы данных', items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'ER-моделирование'] },
        { title: 'Инфраструктура', items: ['Docker', 'Grafana', 'Loki', 'Prometheus'] },
        { title: 'Преподавание', items: ['Информатика ЕГЭ/ОГЭ', 'Python', 'JavaScript', 'C# / Unity'] },
      ],
    },
    timeline: {
      title: 'Опыт и образование',
      educationLabel: 'Образование',
      experienceLabel: 'Опыт',
      education: [
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
      ],
      experience: [
        {
          period: 'сейчас',
          title: 'Ведущий backend-разработчик на Python',
          place: 'FastAPI, Django, AI-агенты · маркетинговое агентство',
        },
        {
          period: 'с 2021',
          title: 'Педагог',
          place: 'Московский педагогический государственный университет · программа двух дипломов с University of London',
        },
        {
          period: 'с 2017',
          title: 'Репетитор на Профи.ру',
          place: '44 отзыва, рейтинг 4,93 — 9 лет на сервисе',
        },
        {
          period: 'с 2014',
          title: 'Частная репетиторская практика',
          place: 'Информатика, программирование, подготовка к экзаменам',
        },
        {
          period: 'с 2013',
          title: 'Учебный мастер',
          place: 'Лекции и лабораторные работы · МГУТУ им. К.Г. Разумовского',
        },
      ],
    },
    achievements: {
      title: 'Достижения',
      items: [
        'Дипломы II и III степени Московской научно-практической конференции «Студенческая наука» (2014–2015)',
        'Диплом XIII Всероссийской научной конференции «Нейрокомпьютеры и их применение» (2015)',
        'Диплом III степени научно-технической конференции МИЭМ НИУ ВШЭ (2015)',
        'Финалист конкурса «УМНИК» (2016)',
        'Полуфиналист хакатона МТС True Tech Day (2025)',
        'Участник хакатона IT ONE Cup ML Challenge (2025)',
      ],
    },
    testimonials: {
      title: 'Отзывы',
      subtitle: '4,93 из 5 по 44 отзывам на Профи.ру',
      items: [
        {
          name: 'Илья',
          date: '18 июля 2019',
          service: 'Информатика · ЕГЭ по информатике',
          text: 'До ноября 2018 года я не имел ни малейшего представления о том, как решать задания по информатике из ЕГЭ. Через несколько месяцев занятий уже чувствовал, что могу написать экзамен на достойный балл. Отзанимавшись раз в неделю 7 месяцев, сдал экзамен на 88 баллов. Репетитор умеет заинтересовать предметом и доступно донести материал.',
        },
        {
          name: 'Оксана',
          date: '20 июля 2023',
          service: 'ЕГЭ по информатике',
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
          service: 'Информатика · ЕГЭ по информатике',
          text: 'Темпы преподавания, подача материала, контроль знаний — хороший результат ЕГЭ.',
        },
      ],
      linkLabel: 'Все 44 отзыва на Профи.ру',
    },
    contact: {
      title: 'Связаться',
      subtitle: 'Отвечаю в течение дня. Пишите в удобный мессенджер или на почту.',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      whatsappLabel: 'WhatsApp',
      profiLabel: 'Профиль на Профи.ру',
    },
    footer: {
      rights: 'Все права защищены.',
      builtWith: 'Сайт сделан на React, Vite и Tailwind CSS',
    },
  },
  en: {
    meta: {
      title: 'Alexey Belousov — Backend Developer & Computer Science Tutor',
      description:
        'Python backend development (FastAPI, Django) and computer science tutoring, exam prep and programming lessons. 10 years of experience, 4.93 rating on Profi.ru.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      experience: 'Experience',
      reviews: 'Reviews',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      kicker: 'Development & Teaching',
      title: 'Alexey Belousov',
      highlight: 'Backend Developer & Computer Science Tutor',
      subtitle:
        '10 years building software in Python — FastAPI, Django, AI agents. Alongside that, I prepare students for Russian national exams in computer science and teach programming, from a first "Hello, world" to a full thesis project.',
      ctaDev: 'Discuss a project',
      ctaTeach: 'Book a lesson',
      ratingLabel: 'rating on Profi.ru · 44 reviews',
      terminalLines: [
        '$ whoami',
        'lead backend developer · computer science tutor',
        '$ stack --print',
        'Python · FastAPI · Django · PostgreSQL · Grafana',
      ],
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Lead backend developer in Python (FastAPI, Django, AI agents) at a marketing agency. I have been building software for 10 years.',
        'Former senior lecturer at Moscow Pedagogical State University, on a dual-degree programme with the University of London. I work with students from Queen Mary University of London, the University of Stirling, and universities in Germany and Canada.',
        'My computer science students consistently score high on their exams — 70 to 95 points. I try to connect the subject to each student\'s own interests, and explain how exam topics map to real IT careers. I have experience teaching children from as early as the 2nd grade.',
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Two directions — software development and teaching. They can also be combined, for example as technical mentorship for coursework and thesis projects.',
      dev: {
        title: 'Development',
        tag: 'for businesses and products',
        items: [
          {
            title: 'Backend with FastAPI and Django',
            description: 'API design and development, AI-agent integration, maintenance and refactoring of existing services.',
          },
          {
            title: 'Database design',
            description: 'ER modelling, schema design and optimisation for PostgreSQL, MS SQL Server and MySQL.',
          },
          {
            title: 'Monitoring & observability',
            description: 'Setting up Grafana, Loki and Prometheus — from scratch to working dashboards and alerts.',
          },
          {
            title: 'Code review & consulting',
            description: 'Architecture review, finding bottlenecks, recommendations on scalability and code quality.',
          },
        ],
      },
      teach: {
        title: 'Tutoring',
        tag: 'for students and adults',
        items: [
          {
            title: 'Computer science exam prep',
            description: 'Working through real exam tasks and connecting them to practice and IT careers. Student results: 70–95 points.',
          },
          {
            title: 'Programming lessons',
            description: 'Python, JavaScript, C# — from zero or to deepen existing knowledge, with real mini-projects.',
          },
          {
            title: 'Game development with Unity',
            description: 'C# and Unity fundamentals, the stages of game development, algorithms — from an idea to a first prototype.',
          },
          {
            title: 'Coursework & thesis support',
            description: 'Help framing the problem, defining the research novelty and structuring IT-related academic work.',
          },
        ],
        priceNote: 'A 60-minute lesson starts at 2000 RUB. One-on-one or group, in person or remote.',
        priceLinkLabel: 'Full price list (36 services) on Profi.ru',
      },
    },
    skills: {
      title: 'Stack & tools',
      groups: [
        { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'REST API', 'AI agents'] },
        { title: 'Databases', items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'ER modelling'] },
        { title: 'Infrastructure', items: ['Docker', 'Grafana', 'Loki', 'Prometheus'] },
        { title: 'Teaching', items: ['CS exam prep', 'Python', 'JavaScript', 'C# / Unity'] },
      ],
    },
    timeline: {
      title: 'Experience & education',
      educationLabel: 'Education',
      experienceLabel: 'Experience',
      education: [
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
      ],
      experience: [
        {
          period: 'present',
          title: 'Lead Backend Developer, Python',
          place: 'FastAPI, Django, AI agents · marketing agency',
        },
        {
          period: 'since 2021',
          title: 'Lecturer',
          place: 'Moscow Pedagogical State University · dual-degree programme with the University of London',
        },
        {
          period: 'since 2017',
          title: 'Tutor on Profi.ru',
          place: '44 reviews, 4.93 rating — 9 years on the platform',
        },
        {
          period: 'since 2014',
          title: 'Private tutoring practice',
          place: 'Computer science, programming, exam preparation',
        },
        {
          period: 'since 2013',
          title: 'Teaching assistant',
          place: 'Lectures and labs · K.G. Razumovsky Moscow State University of Technologies and Management',
        },
      ],
    },
    achievements: {
      title: 'Achievements',
      items: [
        '2nd and 3rd degree diplomas, "Student Science" Moscow research conference (2014–2015)',
        'Diploma, 13th All-Russian conference "Neurocomputers and Their Applications" (2015)',
        '3rd degree diploma, HSE MIEM research and technology conference (2015)',
        'Finalist, "UMNIK" innovation contest (2016)',
        'Semi-finalist, MTS True Tech Day hackathon (2025)',
        'Participant, IT ONE Cup ML Challenge hackathon (2025)',
      ],
    },
    testimonials: {
      title: 'Reviews',
      subtitle: '4.93 out of 5 across 44 reviews on Profi.ru',
      items: [
        {
          name: 'Ilya',
          date: 'Jul 18, 2019',
          service: 'Computer science · CS exam prep',
          text: "Before November 2018 I had no idea how to solve computer science exam tasks. After a few months of lessons I already felt ready for a solid score. Studying once a week for 7 months, I passed the exam with 88 points. The tutor knows how to make the subject interesting and explain it clearly.",
        },
        {
          name: 'Oksana',
          date: 'Jul 20, 2023',
          service: 'CS exam prep',
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
          service: 'Computer science · CS exam prep',
          text: 'Good pace of teaching, clear delivery of material, solid progress checks — a strong exam result.',
        },
      ],
      linkLabel: 'All 44 reviews on Profi.ru',
    },
    contact: {
      title: 'Get in touch',
      subtitle: "I usually reply within a day. Reach out on whichever channel is easiest for you.",
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      whatsappLabel: 'WhatsApp',
      profiLabel: 'Profile on Profi.ru',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React, Vite and Tailwind CSS',
    },
  },
}
