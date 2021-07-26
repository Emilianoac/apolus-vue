<template>
    <section class="categoria mt-4">
        <h2 class="titulo-categoria mb-0 mb-lg-4">{{this.titulo}}</h2>
        <div class="row">
            <div class="col-lg-3 col-6 mt-4 mt-lg-0" v-for="artista in artistas" :key="artista.id">
                <Card
                    :nombre="artista.nombre_artista"
                    :miniatura="artista.banner"
                    :slug="artista.slug"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import Card from './Card.vue'

    export default {
        props: ["titulo", "artistas"],
        components: { Card }
    }
</script>

<style lang="scss">

    .categoria {
        padding-bottom: 2em;
        border-bottom: 1px solid var(--border-color);

        &:last-of-type {
            border-bottom: 0;
        }
    }
</style>
