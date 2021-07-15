<template>
    <article class="card card_resultados">
        <router-link to="/perfil">
            <a class="card__link-wrapper">
                <div class="card__container-img">
                    <img 
                        class="card__img" 
                        src="../../public/img/album-cover/at-swim.webp"
                        alt=""
                        load="lazy"
                    />
                </div>
                <p class="card__titulo">Hola</p>
            </a>
        </router-link>
        <button class="btn btn_play" data-play="">
            <fa icon="play-circle" />
        </button>
    </article>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .titulo-categoria {
        font-size: 1.3em;
        font-weight: 700;
        padding-left: 10px;
        border-left: 4px solid #ff7033;
        line-height: 0.85;
    }

    .card_resultados, .categoria-musica-card {
        position: relative;
        padding-bottom: 1em;
        border-radius: 8px;
        transition: 0.8s cubic-bezier(0.215, 0.610, 0.355, 1);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.39);
        background-color: var(--bg-color-oscuro);
        
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: -10px;
            left: -10px;
            border-radius: 8px;
            background-color: (--bg-color-oscuro);
            z-index: -1;
        }

        &:hover  {
            box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.377);
        }

        &:hover img {
            transform: scale(1.1);
            overflow: hidden;
        }
        
        .card__titulo,.titulo-resultado,.tipo-resultado {
            margin: 0;
        }

        .card__titulo,.titulo-resultado {
            color: var(--text-color);
            padding: 1em;
            padding-bottom: 0;
        }

        .tipo-resultado {
            color: var(--text-color);
            font-weight: normal;
            padding: 1em;
            padding-top: 0.5em;
            padding-bottom: 0;
            font-size: 0.85rem;
        }

        .card__container-img,.img-container {
            overflow: hidden;
            position: relative;
        }

        .card__link-wrapper, a {
            text-decoration: none;
            font-weight: 600;
            font-size: 0.93rem;
        }

        .card__img, img {
            object-fit: cover;
            height: 120px;
            width: 100%;
            border-radius: 9px 9px 0px 0px;
            transition: 0.9s cubic-bezier(0.215, 0.610, 0.355, 1);
        }

        .btn_play ,.btn-play {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 2.5rem;
        }
    }
</style>