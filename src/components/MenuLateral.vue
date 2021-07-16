<template>
    <aside class="menu-lateral">
        <ul class="menu-lateral__container">
            <li class="menu-lateral__item">
                    <router-link
                        class="menu-lateral__link active" 
                        to="/"
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        title="Inicio">
                        <fa icon="home" />
                    </router-link>   
            </li>
            <li class="menu-lateral__item">
                    <router-link 
                        class="menu-lateral__link"
                        to="/buscar"  
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        title="Buscar">
                        <fa icon="search" />
                    </router-link>
            </li>
            <li class="menu-lateral__item">
                    <router-link
                        class="menu-lateral__link" 
                        to="/favoritos"
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        title="Favoritas">
                        <fa icon="heart" />
                    </router-link>
            </li>
            <li class="menu-lateral__item">
                    <router-link 
                        class="menu-lateral__link"
                        to="/mis-listas-de-reproduccion" 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        title=" Mis Listas de reproducción">
                        <fa icon="music" />
                    </router-link>          
            </li>
            <li class="menu-lateral__item">
                <hr class="mx-3"/>
                <button 
                    class="menu-lateral__link" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    title="Ajustes">
                    <fa
                        icon="cog"
                        data-bs-target="#ajustes"
                        aria-current="page" 
                        data-bs-toggle="modal" 
                    />
                </button>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: 'MenuLateral',
    }
</script>

<style lang="scss">

    .menu-lateral {
        position: fixed;
        grid-column: 1/2;
        height: 100%;
        width: 70px;
        padding-top: 3.5em;
        box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.274);
        background-color: var(--bg-color-oscuro);

        .menu-lateral__container {
            list-style-type: none;
            padding-left: 0;
            margin-top: 3em;
            text-align: center;

            .menu-lateral__item {
                margin-bottom: 2.1em;
            }

            .menu-lateral__link {
                font-size: 1.2em;
                border: 0;
                padding: 0;
                color: var(--text-color);
                background-color: transparent;
                cursor: pointer;

                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }

    @media(max-width: 991px) {
        
        .menu-lateral {
            display: none;
        }
    }
</style>