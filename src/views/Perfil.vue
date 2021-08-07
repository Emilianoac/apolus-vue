<template>
    <Layout>
        <div v-if="error">{{ error }}</div>
        <div class="row" v-if="artista">
            <div class="col-xl-7 mb-5">
                <Banner 
                    :nombre="artista.nombre_artista"
                    :banner="artista.banner"
                />
                <h2 class="titulo-categoria mt-5"> Álbumes </h2>
                <Albumes
                    :albumes="artista.albumes"
                />
            </div>
            <div class="col-xl-5">
                <ReproductorAlbum 
                    :artista="artista.nombre_artista"
                    :album="artista.albumes[0]"
                />
                <ListaCanciones
                    :album="artista.albumes[0].lista_canciones"
                />
            </div>
        </div>
        <div v-else>
            <Loader/>
        </div>
    </Layout>
</template>

<script>
    import { useRoute }     from 'vue-router'
    import {computed}       from 'vue'
    import {useStore}       from 'vuex'

    import Layout           from '../layouts/default.vue'
    import ListaCanciones   from '../components/ListaCanciones.vue'
    import Banner           from '../components/Banner.vue'
    import Albumes          from '../components/Albumes.vue'
    import ReproductorAlbum from '../components/ReproductorAlbum.vue'
    import Loader           from '../components/Loader.vue'

    export default {
        name: "Perfil",
        props: ["id"],
        components: {
            Layout,
            ListaCanciones,
            Banner,
            Albumes,
            ReproductorAlbum,
            Loader
        },
        setup() {
            const store = useStore()
            const route = useRoute()

            store.dispatch('obtenerArtista', route.params.slug)
        
            return {
                artista : computed(() => store.state.artista)
            }
        }
    }
</script>

<style lang="scss"></style>