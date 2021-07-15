<template>
    <div class="banner">
        <img class="banner__img img-fluid" 
             src="../../public/img/album-cover/at-swim.webp" 
             alt=""
        />
        <h1 class="banner__titulo"> Lisa Hannigan </h1>
        <button class="banner__btn btn bg-light"><span>Seguir</span><fa icon="plus"/></button>
    </div> 
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style lang="scss">

    .banner {
        position: relative;

        .banner__img {
            height: 160px;
            width: 100%;
            object-fit: cover;
            border-radius: 9px;
            overflow: hidden;
        }
    
        .banner__titulo, 
        .banner__btn  {
            position: absolute;
            z-index: 2;
        }

        .banner__titulo {
            top: 10px;
            left: 20px;
            font-size: 2.4em;
            font-weight: 700;
            letter-spacing: 2px;
            line-height: 1.2;
            margin-bottom: 0;
            color: white;
            border-bottom: 5px solid var(--color-primario);
        }


        .banner__btn  {
            right: 10px;
            top: 20px;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--color-secundario);

            &:hover {
                color: var(--color-secundario);
            }

            svg {
                color: var(--color-primario);
            }
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border-radius: 9px;
            background: linear-gradient(to bottom, #240b36d8, #c3143200);
        }
    }

    @media(min-width:1600px) {

        .banner {

            .banner__img {
                height: 220px;
            }
        }
        
    }

    @media(max-width:650px) {

        .banner {

            .banner__img {
                height: 130px;
            }

            .banner__titulo {
                font-size: 1.5em;
            }

            .banner__btn {
                font-size: 0.85rem;
                top: unset;
                bottom: 10px;
            }
        }
    }
</style>