import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'es-ES',
    title: 'TAQINIHOTEL',
    titleTemplate: ':title | Manual de usuario TAQINIHOTEL',
    description: 'Manual de usuario del sistema de gestión hotelera TAQINIHOTEL: reservas, habitaciones, caja, reportes y más.',

    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#3b4cca' }]
    ],

    themeConfig: {
        logo: '/img/logo-taqini.png',
        siteTitle: 'Manual TAQINIHOTEL',

        nav: [
            { text: 'Inicio', link: '/' },
            { text: 'Guía', link: '/introduccion', activeMatch: '^/(introduccion|inicio)' },
            { text: 'Módulos', link: '/modulos/introduccion', activeMatch: '^/modulos' }
        ],

        sidebar: {
            '/': [
                {
                    text: 'Guía inicial',
                    items: [
                        { text: 'Introducción', link: '/introduccion' },
                        { text: 'Ingreso al sistema', link: '/inicio/ingreso-sistema' }
                    ]
                },
                {
                    text: 'Módulos',
                    items: [
                        { text: 'Visión general', link: '/modulos/introduccion' },
                        {
                            text: 'Configuración',
                            link:'/modulos/configuracion/',
                            collapsed: true,
                            items: [
                                { text: 'Datos de empresa', link: '/modulos/configuracion/datos-empresa' },
                                { text: 'Área del hotel', link: '/modulos/configuracion/area-hotel' },
                                { text: 'Sedes', link: '/modulos/configuracion/sedes' },
                                { text: 'Tipos de habitación', link: '/modulos/configuracion/tipos-habitacion' },
                                { text: 'Tarifas', link: '/modulos/configuracion/tarifas' },
                                { text: 'Pisos', link: '/modulos/configuracion/pisos' },
                                { text: 'Servicios', link: '/modulos/configuracion/servicios' },
                                { text: 'Categoría de servicios', link: '/modulos/configuracion/categoria-servicios' },
                                { text: 'Áreas de ventas', link: '/modulos/configuracion/areas-ventas' },
                                { text: 'Numeración de documentos', link: '/modulos/configuracion/numeracion-documentos' },
                                { text: 'Gastos y créditos', link: '/modulos/configuracion/gastos-creditos' },
                                { text: 'Cajas', link: '/modulos/configuracion/cajas' },
                                { text: 'Asignación de cajas', link: '/modulos/configuracion/asignacion-cajas' },
                                { text: 'Tipo de metas', link: '/modulos/configuracion/tipo-metas' },
                                { text: 'Metas', link: '/modulos/configuracion/metas' }
                            ]
                        }
                    ]
                }
            ]
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
                    modal: {
                        displayDetails: 'Mostrar detalles',
                        resetButtonTitle: 'Limpiar búsqueda',
                        noResultsText: 'No se encontraron resultados para',
                        footer: {
                            selectText: 'Seleccionar',
                            navigateText: 'Navegar',
                            closeText: 'Cerrar'
                        }
                    }
                }
            }
        },

        outline: { level: [2, 3], label: 'En esta página' },

        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        lastUpdated: { text: 'Última actualización' },

        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Cambiar a tema claro',
        darkModeSwitchTitle: 'Cambiar a tema oscuro',
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        langMenuLabel: 'Cambiar idioma',
        skipToContentLabel: 'Saltar al contenido',

        socialLinks: [
            { icon: 'safari', link: 'https://www.taqini.pe/', ariaLabel: 'Sitio web de Taqini' }
        ],

        footer: {
            message: 'Soporte: <a href="https://wa.me/51980870302">+51 980 870 302</a>',
            copyright: '© 2026 Taqini. Todos los derechos reservados.'
        }
    }
})