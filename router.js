export function initRouter() {
    const router = new router(document.querySelector('#app'))

    router.setRoutes([
        {

            path:"/",
            component:"home-page",
            action: () => import("./pages/home-page")
        },

        {path:"/a-barbearia",
        component:"a-barbearia-page",
        action: () => import("./pages/home-page")
        },


    ])

    





    return router 
}