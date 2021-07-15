<template>
    <nav class="menu-principal navbar navbar-expand-lg shadow">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <LogotipoSitio/>
            </router-link>     
            <button class="navbar-toggler" 
                    @click="mostrarOffCanvas" 
                    type="button" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-controls="navbarSupportedContent" 
                    aria-label="Toggle navigation">
                    <span> Menú <fa icon="bars"/></span> 
            </button>
            <div class="menu_principal__overlay"
                 @click="ocultarOffCanvas"
                 ref="overlay">
            </div>
            <div class="menu-principal__container navbar-collapse ml-xl-4 ms-0" ref="menu">               
                <button class="btn btn_cerrar d-block d-lg-none"
                        @click="ocultarOffCanvas">
                        <fa icon="times"/>
                </button>
                <Buscador/>
                <router-link to="/" class="navbar-brand text-center d-block d-lg-none mx-auto mt-3">
                    <LogotipoSitio/>
                </router-link> 
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item me-3 order-1 order-lg-0 mt-2 mt-lg-0">
                        <a  class="nav-link active" 
                            aria-current="page" 
                            data-bs-toggle="modal" 
                            data-bs-target="#iniciarsesion" 
                            href="#!">
                            Iniciar sesión
                        </a>      
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link btn btn-primary text-white px-3" 
                            aria-current="page" 
                            data-bs-toggle="modal" 
                            data-bs-target="#registrarse" 
                            href="#!">
                            Crear una cuenta
                        </a> 
                    </li>
                    <li class="nav-item d-flex align-items-center pe-0 px-lg-3 px-0">
                        <label class="switch" 
                               for="switchColor" 
                               title="Cambiar modo de color"
                               tabindex="0">
                                <input class="switch__input"
                                       ref="color" 
                                       v-model="modoClaro"
                                       id="switchColor" 
                                       type="checkbox"
                                />
                               <span class="switch__slider"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container-fluid d-block d-lg-none py-2">
            <Buscador />
        </div>
    </nav>
</template>

<script>
    import LogotipoSitio from './LogotipoSitio.vue'
    import Buscador from './Buscador.vue'
    export default {
        name: "NavegacionSuperior",
        components: {
            LogotipoSitio,
            Buscador
        },
        data() {
            return {
                modoClaro: localStorage.modoCLaro
            }
        },
        methods: {
            mostrarOffCanvas() {
                this.$refs.menu.classList.toggle('desplegar')
                this.$refs.overlay.classList.add('mostrar')
            },
            ocultarOffCanvas() {
                this.$refs.menu.classList.remove('desplegar')
                this.$refs.overlay.classList.remove('mostrar')
            },
            establecerModoColor() {
                let $body = document.body
                if ( localStorage.modoClaro === undefined ) {
                    localStorage.setItem('modoClaro', false) 
                    this.$refs.color.checked = false
                } 
                if (localStorage.modoClaro == 'true') {
                    this.$refs.color.checked = true
                    $body.classList.add('tema-claro')
                }  else {
                    this.$refs.color.checked = false
                    $body.removeAttribute("class")
                }
            }
        },
        watch: {
            modoClaro() {
                let $body = document.body
                localStorage.setItem("modoClaro", this.modoClaro)
                if (localStorage.modoClaro == "true") $body.classList.add('tema-claro')
                else $body.removeAttribute("class")             
            }
        },
        mounted() {
            this.establecerModoColor()
        },
    }
</script>

<style lang="scss">

    .menu-principal {
        display: block;
        position: fixed;
        width: 100%;
        grid-row: 1/2;
        grid-column: 1/4;
        z-index: 8;
        background-color: var(--bg-color-oscuro);
        
        .nav-link {
            font-size: 0.94em;
            color: var(--text-color);

            &:hover  {
               opacity: 0.7;
            }
        }

        .navbar-brand {

            svg {
                width: 100px;
            }

            .st0{
                fill: var(--text-color);
            }

            .st1{
                fill:none;
                stroke: var(--color-primario);
                stroke-width:17.2795;
                stroke-miterlimit:10;
            }

            .circulo-marca {
                transition: 0.7s ease-in-out;
                transform-origin: center;
            }
            
            .circulo-marca.girar {
                transform: rotate(360deg);
            }

        }

        .navbar-toggler {
            color: var(--text-color);
            
            span {
                font-weight: 600;
                font-size: 0.95rem;
            }
        }
        .switch {
            position: relative;
            display: inline-block;
            width: 35px;
            height: 35px;
            margin-bottom: 0;
            border-radius: 50px;
            border: 1px solid var(--text-color);
            overflow: hidden;
            transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), 
            opacity 0.4s ease-in-out, box-shadow 0.6s ease-in-out ;
    
            .switch__input {
                opacity: 0;
                width: 0;
                height: 0;
            }
        
            .switch__input:checked + .switch__slider:before {
                transform: translateY(-30px);
            }
                
            .switch__input:checked + .switch__slider:after {
                transform: translateX(0);
            }

            .switch__slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--bg-color);
                -webkit-transition: 0.4s;
                transition: 0.4 cubic-bezier(0.215, 0.61, 0.355, 1);

                &::before,
                &::after {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-size: 15px 15px;
                    background-repeat: no-repeat;
                    background-position: center;
                    position: absolute;
                    transition: 0.5s ease-in-out;
                    border-radius: 50%;
                    z-index: 7;
                }
    
                &::before {
                    content: "D";
                    background-image: url("/emilianot/img/iconos/moon.svg");
                }

                &::after {
                    content: "L";
                    background-image: url("/emilianot/img/iconos/sun.svg");
                    transform: translateX(-26px);
                    z-index: 4;
                }        
            }

            &:focus-visible, 
            &:active {
                box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
            }
        }
    }

    @media(max-width:989px) {

        .menu-principal {
            
            .navbar-brand {
                
                svg {
                    width: 95px;
                }
            }
        
            .nav-link {
                font-size: 0.84rem;
                padding: 0.4rem;
            }
        }

        .menu-principal__container {
            position: absolute;
            width: 100%;
            max-width: 300px;
            height: 100vh;
            top: 0;
            right: 0;
            padding: 1em;
            transform: translateX(100vh);
            background-color: var(--bg-color-oscuro);
            transition: transform 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
            z-index: 99;

            .navbar-nav {
                padding-top: 1em;
                display: grid;

                .nav-item:last-of-type {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
            }
        
        }

        .menu-principal__container.desplegar {
            transform: translateX(0%);
        }
        
        .menu_principal__overlay {
            display: none;
        }

        .menu_principal__overlay.mostrar {
            display: block;
            position: absolute;
            height: 100vh;
            width: 100%;
            right: 0;
            left: 0;
            top: 0;
            background: var(--bg-color-oscuro);
            opacity: 0.8;
            z-index: 98;
        }
    }
</style>
