<template>
    <Layout>
        <div class="row">
            <div class="col-xl-7 mb-5">
                <Banner/>
                <h2 class="titulo-categoria mt-5"> Albumes </h2>
                <Albumes/>
            </div>
            <div class="col-xl-5">
                <ReproductorAlbum/>
                <ListaCanciones/>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout           from '../layouts/default.vue'
    import ListaCanciones   from '../components/ListaCanciones.vue'
    import Banner           from '../components/Banner.vue'
    import Albumes          from '../components/Albumes.vue'
    import ReproductorAlbum from '../components/ReproductorAlbum.vue'

    export default {
        name: "Perfil",
        components: {
            Layout,
            ListaCanciones,
            Banner,
            Albumes,
            ReproductorAlbum
        }
    }
</script>

<style lang="scss">

</style>