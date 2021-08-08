<template>
    <Layout>
        <div v-if="artistas.length">
            <Categoria
                titulo="Más Escuchados"
                :artistas="artistas" 
            />
        </div>
        <div v-else>
            <Loader/>
        </div>
    </Layout>
</template>

<script>

    import {computed} from 'vue'
    import {useStore} from 'vuex'

    import Layout           from '../layouts/default.vue'
    import Categoria        from '../components/Categoria.vue'
    import Loader           from '../components/Loader.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            Categoria,
            Loader
        },
        setup() {
            const store = useStore()

            store.dispatch('obtenerArtistas')
            const artistas = computed(() => store.state.artistas)

            return {
                artistas
            }
        }
    }
</script>
