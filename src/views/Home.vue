<template>
    <Layout>
        <div v-if="artistas.length">
            <ResultadoCategoria
                titulo="Más Escuchados"
                :artistas="artistas" 
            />
        </div>
        <div v-else>
            <TheLoader/>
        </div>
    </Layout>
</template>

<script>

    import {computed} from 'vue'
    import {useStore} from 'vuex'

    import Layout               from '../layouts/default.vue'
    import ResultadoCategoria   from '../components/ResultadoCategoria.vue'
    import TheLoader            from '../components/TheLoader.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            ResultadoCategoria,
            TheLoader
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
