<template>
    <Layout>
        <div v-if="artistas.length">
            <Categoria
                titulo="Escuchados Recientementes"
                :artistas="artistas" 
            />
        </div>
        <div v-else>
            <Loader/>
        </div>
    </Layout>
</template>

<script>
    import obtenerArtistas  from '../composables/obtenerArtistas' 

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
            const {load, artistas} = obtenerArtistas()

            load()  

            return {artistas}
        }
    }
</script>
