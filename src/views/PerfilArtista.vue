<template>
    <Layout>
        <div v-if="error">{{ error }}</div>
        <div class="row" v-if="artista">
            <div class="col-xl-7 mb-5">
                <BaseBanner 
                    :nombre="artista.nombre_artista"
                    :banner="artista.banner"
                />
                <h2 class="titulo-categoria mt-5"> Álbumes </h2>
                <PerfilArtistaAlbumes
                    :albumes="artista.albumes"
                />
            </div>
            <div class="col-xl-5">
                <PerfilArtistaReproductor
                    :artista="artista.nombre_artista"
                    :album="artista.albumes[0]"
                />
                <ListadoCanciones
                    :album="artista.albumes[0].lista_canciones"
                />
            </div>
        </div>
        <div v-else>
            <TheLoader/>
        </div>
    </Layout>
</template>

<script>
    import { useRoute }     from 'vue-router'
    import {computed}       from 'vue'
    import {useStore}       from 'vuex'

    import Layout                     from '../layouts/default.vue'
    import ListadoCanciones           from '../components/ListadoCanciones.vue'
    import BaseBanner                 from '../components/BaseBanner.vue'
    import PerfilArtistaAlbumes       from '../components/PerfilArtistaAlbumes.vue'
    import PerfilArtistaReproductor   from '../components/PerfilArtistaReproductor.vue'
    import TheLoader                  from '../components/TheLoader.vue'

    export default {
        name: "PerfilArtista",
        props: ["id"],
        components: {
            Layout,
            ListadoCanciones,
            BaseBanner,
            PerfilArtistaAlbumes,
            PerfilArtistaReproductor,
            TheLoader
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