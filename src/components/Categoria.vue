<template>
    <section class="categoria mt-4">
        <h2 class="titulo-categoria mb-0 mb-lg-4">{{this.titulo}}</h2>
        <div class="row">
            <div  v-for="card in 4" :key="card" class="col-lg-3 col-6 mt-4 mt-lg-0">
                <Card/>
            </div>
        </div>
    </section>
</template>

<script>
    import Card from './Card.vue'
    export default {
        props: ['titulo'],
        components: {
            Card
        }
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
