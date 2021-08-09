<template>
    <Layout>
        <h1 class="titulo-principal mb-5">Busqueda</h1>
        <ResultadoCategoria  titulo="Busquedas Recientes"/>
        <ListadoCanciones 
            seccion="busqueda" 
            titulo="Canciones"
        />
        <ResultadoCategoria titulo="Artistas"/>
        <ResultadoCategoria  titulo="Listas de reproducción"/>
    </Layout>
</template>

<script>
    import Layout               from "../layouts/default.vue"
    import ListadoCanciones     from "../components/ListadoCanciones.vue"
    import ResultadoCategoria   from "../components/ResultadoCategoria.vue"

    export default {
        name: "Buscar",
        components: {
            Layout,
            ListadoCanciones,
            ResultadoCategoria 
        }
    }
</script>

<style lang="scss" scoped>

    .lista-canciones {
        border-bottom: 1px solid var(--border-color);
    }
</style>