<template>
    <article class="card">
        <router-link class="card__link" :to="slug">
            <div class="card__row">
                <img class="card__img" 
                     :src="miniatura"
                     alt=""
                     load="lazy"
                />
            </div>
            <p class="card__titulo">{{nombre}}</p>
        </router-link>
        <BotonPlay/>
    </article>
</template>

<script>
    import BotonPlay from "./botones/BotonPlay.vue"

    export default {
        name: "Card",
        components: {
            BotonPlay
        },
        props: ["nombre", "miniatura", "slug"]
    }
</script>

<style lang="scss">

    .card {
        position: relative;
        padding-bottom: 1em;
        border-radius: 8px;
        transition: 0.8s cubic-bezier(0.215, 0.610, 0.355, 1);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.39);
        background-color: var(--bg-color-oscuro);
        overflow: hidden;
  
       .card__link {
            text-decoration: none;
            font-weight: 600;
            font-size: 0.93em;
        }

        .card__row {
            overflow: hidden;
            position: relative;
        }

        .card__img {
            object-fit: cover;
            height: 120px;
            width: 100%;
            border-radius: 9px 9px 0px 0px;
            transition: 0.9s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        
        .card__titulo,
        .card__tipo-resultado {
            color: var(--text-color);
            margin: 0;
            padding: 1em;
            padding-bottom: 0;
        }

        .card__tipo-resultado {
            font-weight: normal;
            padding: 1em;
            padding-bottom: 0;
            padding-top: 0.5em;
            font-size: 0.85em;
            opacity: 0.6;
        }

        .btn_play ,
        .btn-play {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 2.5rem;
        }

        &:hover  {
            box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.377);
        }

        &:hover .card__img {
            transform: scale(1.1);
        }
    }
</style>