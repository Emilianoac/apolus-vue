<template>
    <div class="main-container">
        <NavegacionSuperior/>
        <main class="main">
            <slot> </slot>
        </main>
        <MenuLateral/>
        <Reproductor/>
    </div>
</template>

<script>
    import NavegacionSuperior from '../components/NavegacionSuperior.vue'
    import MenuLateral from '../components/MenuLateral.vue'
    import Reproductor from '../components/Reproductor.vue'
    export default {
        name: 'Default',
        components: {
            NavegacionSuperior,
            MenuLateral,
            Reproductor
        }
    }
</script>


<style lang="scss">

    .main-container {
        display: grid;
        grid-template-columns: 70px 1fr;
        grid-template-rows: min-content;
        height: 100%;
        position: relative;
    }

    .main {
        width: 100%;
        max-width: 1820px;
        grid-column: 2/4;
        position: relative;
        padding: 2em 3.4em;
        padding-top: 6em;
        margin: 0 auto;
        padding-bottom: 8em;
        z-index: 1;
        overflow-x: hidden;
        overflow-y: auto;
    }

    @media(max-width:991px) {
    
        body {
            height: auto;
        }

        .main-container {
            grid-template-columns: 1fr;
            height: auto;
        }

        .main {
            padding: 2rem;
            padding-top: 9rem;
            padding-bottom: 6rem;
            grid-column: 1/2;
        }
    }

    @media(max-width:650px) {

        .main {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>
