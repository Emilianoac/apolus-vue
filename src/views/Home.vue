<template>
    <Layout>
        <Categoria v-for="categoria in categorias" :key="categoria" :titulo="categoria" />
    </Layout>
</template>

<script>
import Layout from '../layouts/default.vue'
import Categoria from '../components/Categoria.vue'

export default {
    name: 'Home',
    components: {
        Layout,
        Categoria
    },
    data() {
        return {
            categorias: ['Escuchados recientemente','Mis listas de reprodución', 'Artistas Recomendados']
        }
    }
}
</script>
