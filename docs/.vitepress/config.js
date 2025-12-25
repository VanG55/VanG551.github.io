import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Vang Docs',
  description: 'Документация Vang VPN',
  // Generate clean URLs without trailing .html
  cleanUrls: true,
  head: [
    ['meta', { name: 'description', content: 'Документация VangVPN — инструкции по установке, настройке и использованию сервиса.' }],
    ['meta', { property: 'og:title', content: 'Vang Docs — Документация VangVPN' }],
    ['meta', { property: 'og:description', content: 'Инструкции по подключению VPN, настройке клиентов и управлению подписками через Telegram-бот.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // favicon (served from site root)
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // JSON-LD Organization
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "VangVPN",
      "url": "https://vangst.ru",
      "logo": "https://vangst.ru/logo-main.png",
      "sameAs": ["https://t.me/VangVPN_bot", "https://t.me/VangVPN_community"]
    })]
  ],
  themeConfig: {
    // Top navigation: only Главная
    nav: [
      { text: 'Главная', link: '/' }
    ],
    // Sidebar for all pages (groups mirror the screenshots)
    sidebar: {
      '/': [
        // Top buttons
        {
          text: '',
          items: [
            { text: 'Перейти в VangVPN', link: 'https://t.me/VangVPN_bot' },
            { text: 'Сообщество VangVPN', link: 'https://t.me/VangVPN_community' }
          ]
        },
        {
          text: 'Работа с ботом',
          items: [
            { text: 'Начало работы', link: '/bot/start' },
            { text: 'Тарифы', link: '/bot/tarrifs' },
            { text: 'Приобретение подписки', link: '/bot/purchase' },
            { text: 'Пробная подписка', link: '/bot/trial' }
          ]
        },
        {
          text: 'Сервис',
          items: [
            { text: 'Доступные локации', link: '/service/locations' },
            { text: 'Контакты', link: '/service/contacts' },
            { text: 'Пользовательское соглашение', link: '/service/agreement' },
            { text: 'Политика конфиденциальности', link: '/service/privacy' }
          ]
        },
        {
          text: 'Подключение к VPN на устройстве',
          items: [
            { text: 'Кратко о приложениях', link: '/devices/overview' },
            { text: 'Android', items: [
              { text: 'Happ (рекомендуется)', link: '/devices/android/happ' },
              { text: 'v2RayTun', link: '/devices/android/v2raytun' },
              { text: 'Hiddify', link: '/devices/android/hiddify' },
              { text: 'Nekoray', link: '/devices/android/nekoray' },
              { text: 'v2rayNG', link: '/devices/android/v2rayng' },
              { text: 'V2Box', link: '/devices/android/v2box' }
            ] },
            { text: 'Windows', items: [
              { text: 'Hiddify (рекомендуется)', link: '/devices/windows/hiddify' },
              { text: 'v2RayTun', link: '/devices/windows/v2raytun' },
              { text: 'v2rayN', link: '/devices/windows/v2rayn' },
              { text: 'Nekoray', link: '/devices/windows/nekoray' }
            ] },
            { text: 'Linux', items: [
              { text: 'Nekoray (рекомендуется)', link: '/devices/linux/nekoray' }
            ] },
            { text: 'iOS, iPadOS', items: [
              { text: 'Happ (рекомендуется)', link: '/devices/ios/happ' },
              { text: 'v2RayTun', link: '/devices/ios/v2raytun' },
              { text: 'Hiddify', link: '/devices/ios/hiddify' },
              { text: 'V2Box', link: '/devices/ios/v2box' },
              { text: 'Streisand', link: '/devices/ios/streisand' }
            ] },
            { text: 'macOS', items: [
              { text: 'Happ (рекомендуется)', link: '/devices/macos/happ' },
              { text: 'v2RayTun', link: '/devices/macos/v2raytun' },
              { text: 'Hiddify', link: '/devices/macos/hiddify' },
              { text: 'V2Box (Для Mac с процессором Intel)', link: '/devices/macos/v2box' }
            ] },
            /* Android TV removed */
          ]
        }
      ]
    },
    search: { provider: 'local' }
  }
})


