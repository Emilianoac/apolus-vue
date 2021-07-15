<template>
    <section class="albumes">
        <figure class="album mb-4 mb-lg-0" v-for="album in 4" :key="album">
            <div class="img-container">
                <img class="album__miniatura" 
                     src="../../public/img/album-cover/at-swim.webp" 
                />
            </div>
            <figcaption class="album__nombre"> 
                At-swim <time class="album__fecha" datetime="2019-06-28">(2019)</time>
            </figcaption>
        </figure>
    </section> 
</template>

<script>
    export default {
        name: "Albumes"
    }
</script>

<style lang="scss">

    .albumes {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 15px;
        padding: 1em;
        margin-top: 0.9em;
        border-radius: 8px;
        background-color: var(--bg-color-oscuro);

        .album {
            margin-bottom: 0;
            font-size: 0.90em;
            font-weight: bold;
            text-align: center;
            overflow: hidden;
            color: var(--text-color);

            .img-container {
                overflow: hidden;
                border-radius: 8px;

                img {
                    height: 90px;
                    width: 100%;
                    object-fit:cover;
                    border-radius: 8px;
                    transition: 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
                }
            }

            figcaption {
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
                margin-top: 0.5em;
                transition: opacity 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

                time {
                    display: block;
                    font-size: 0.88em;
                    font-weight: normal;
                }
            }

            &:hover img {
                transform: scale(1.1);
                overflow: hidden;
                border-radius: 8px;
            }

            &:hover .album__nombre {
                opacity: 0.6;
            }
        }
    }
</style>