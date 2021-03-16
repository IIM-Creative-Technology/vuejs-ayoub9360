import {createStore} from 'vuex'

export default createStore({
    state: {
        posts: [
            {
                name: "Article",
                metaTitle: "Article",
                metaDesc: "Article du site vue cms",
                image: "test",
                descArticle: "Article du site vue cms",
            },
            {
                name: "Article 2",
                metaTitle: "Article 2",
                metaDesc: "Article 2 du site vue cms",
                image: "",
                descArticle: "Article 2 du site vue cms",
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})
