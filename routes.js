const routes = [
    {
        path: '/',
        method: 'get',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        path: '/about',
        method: 'get',
        handler: (request, h) => {
            return 'About'
        }
    },
    {
        path: '/hello/{name?}',
        method: 'get',
        handler: (request, h) => {
            const { name = 'Barbar' } = request.params
            return `Hello, ${name}!`
        }
    },
    {
        path: '/{any*}',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan 404'
        }
    }
]

module.exports = routes
