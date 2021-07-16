<template>
    <Layout>
        <h1 class="titulo-principal mb-5">Busqueda</h1>
        <Categoria titulo="Busquedas Recientes"/>
        <ListaCanciones 
            seccion="busqueda" 
            titulo="Canciones"
        />
        <Categoria titulo="Artistas"/>
        <Categoria titulo="Listas de reproducción"/>
    </Layout>
</template>

<script>
    import Layout           from "../layouts/default.vue"
    import ListaCanciones   from "../components/ListaCanciones.vue"
    import Categoria        from "../components/Categoria.vue"

    export default {
        name: "Buscar",
        components: {
            Layout,
            ListaCanciones,
            Categoria
        }
    }
</script>

<style lang="scss" scoped>

    .lista-canciones {
        border-bottom: 1px solid var(--border-color);
    }
</style>