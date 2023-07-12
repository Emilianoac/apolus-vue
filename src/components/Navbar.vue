<template>
  <nav class="menu-principal navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="menu-principal-content">
        <!-- LOGOGOTIPO -->
        <router-link to="/" class="navbar-brand"><BaseLogotipoSitio/></router-link>
        <!-- BOTON MENU MOVIL -->
        <button 
          class="navbar-toggler px-0" 
          type="button" 
          @click="toggleOffCanvas">
            <span> Menú <fa icon="bars"/></span>
        </button>
        <!-- BUSCADOR -->
        <BaseBuscador />
        <!-- LINKS -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3 order-1 order-lg-0 mt-2 mt-lg-0">
              <a 
                class="nav-link" 
                aria-current="page" 
                data-bs-toggle="modal" 
                data-bs-target="#modalLogin"
                href="#!">
                Iniciar sesión
              </a>
            </li>
            <li class="nav-item">
              <a 
                class="btn btn-primary text-white px-3" 
                aria-current="page" 
                data-bs-toggle="modal"
                data-bs-target="#modalRegistro" 
                href="#!">
                Crear una cuenta
              </a>
            </li>
            <!-- SWITCH MODO DE COLOR -->
            <li class="nav-item d-flex align-items-center pe-0 px-lg-3 px-0">
              <label class="switch" for="switchColor" title="Cambiar modo de color" tabindex="0">
                <input class="switch__input" v-model="modoClaro" id="switchColor" type="checkbox"/>
                <span class="switch__slider"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  
  <Teleport to="body">
    <!-- MODAL REGISTRO -->
    <ModalRegistro/>
    <!--MODAL LOGIN -->
    <ModalLogin/>
    <!-- MENU OFFCANVAS MOVIL -->
    <aside class="menu-offcanvas" :class="{'show': offCanvasMenu }">
      <div class="d-flex justify-content-between">
        <!-- CERRAR OFFCANVAS -->
        <button 
          class="btn btn_cerrar d-block" 
          @click="toggleOffCanvas">
            <fa icon="times" />
        </button>
        <!-- SWITCH MODO DE COLOR -->
        <label class="switch" for="switchColor" title="Cambiar modo de color" tabindex="0">
          <input class="switch__input" v-model="modoClaro" id="switchColor" type="checkbox" />
          <span class="switch__slider"></span>
        </label>
      </div>
      <!-- LOGOTIPO -->
      <router-link class="navbar-brand d-block mt-3" to="/">
        <BaseLogotipoSitio />
      </router-link>
      <!-- LINKS -->
      <ul class="navbar-nav ms-auto mt-4">
        <li class="nav-item">
          <a 
            class="btn btn-primary text-white px-3" 
            @click="toggleOffCanvas"
            aria-current="page" 
            data-bs-toggle="modal"
            data-bs-target="#modalRegistro" 
            href="#!">
            Crear una cuenta
          </a>
        </li>
        <li class="nav-item mt-2">
          <a 
            class="nav-link"
            @click="toggleOffCanvas" 
            aria-current="page" 
            data-bs-toggle="modal" 
            data-bs-target="#modalLogin"
            href="#!">
            Iniciar sesión
          </a>
        </li>
      </ul>
    </aside>
    <Overlay 
      v-if="offCanvasMenu"
      @click.prevent="toggleOffCanvas" 
    />
  </Teleport>
</template>

<script setup>
  import { ref, watch, onMounted } from "vue"

  import BaseLogotipoSitio  from "./BaseLogotipoSitio.vue"
  import BaseBuscador       from "./BaseBuscador.vue"
  import ModalRegistro      from "./modals/Registro.vue"
  import ModalLogin         from "./modals/Login.vue"
  import Overlay           from "../components/Overlay.vue"

  const modoClaro = ref(localStorage.modoCLaro)
  const offCanvasMenu = ref(false)

  function establecerModoColor() {
    let $body = document.body
    if (localStorage.modoClaro === undefined) {
      localStorage.setItem('modoClaro', false)
      modoClaro.value = false
    }
    if (localStorage.modoClaro == 'true') {
      modoClaro.value = true
      $body.classList.add('tema-claro')
    } else {
      modoClaro.value = false
      $body.removeAttribute("class")
    }
  }

  watch(modoClaro, () => {
    let $body = document.body
    localStorage.setItem("modoClaro", modoClaro.value)
    if (localStorage.modoClaro == "true") {
      $body.classList.add('tema-claro')
      $body.querySelector('.logotipo-sitio .circulo-marca').classList.toggle('girar')
    } else {
      $body.removeAttribute("class")
      $body.querySelector('.logotipo-sitio .circulo-marca').classList.toggle('girar')
    }
  })

  function toggleOffCanvas() {
    offCanvasMenu.value = !offCanvasMenu.value
  }

  onMounted(() => {
    establecerModoColor()
  })
</script>

<style lang="scss">

  nav.menu-principal {
    display: block;
    position: sticky;
    top: 0;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/4;
    z-index: 8;
    background-color: var(--bg-color-oscuro);

    .menu-principal-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;

      .nav-link {
        font-size: 0.94em;
        color: var(--text-color);
  
        &:hover, &:focus {
          color: var(--text-color);
          opacity: 0.7;
        }
      }
  
      .navbar-brand {
        width: max-content;
  
        svg {
          width: 100px;
        }
      }
  
      .navbar-toggler {
        color: var(--text-color);
        width: max-content;
        justify-self: flex-end;
        border: 0;
  
        span {
          font-weight: 600;
          font-size: 0.95rem;
        }
      }
    }


  }

  .menu-offcanvas {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    max-width: 300px;
    background: var(--bg-color-claro);
    z-index: 9999;
    height: 100vh;
    padding: 1em;
    transform: translateX(110%);
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    .btn_cerrar {
      color: var(--text-color);
    }
  }
  .menu-offcanvas.show {
    transform: translateX(0);
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
      opacity 0.4s ease-in-out, box-shadow 0.6s ease-in-out;

    .switch__input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .switch__input:checked+.switch__slider:before {
      transform: translateY(-30px);
    }

    .switch__input:checked+.switch__slider:after {
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
        content: "";
        background-image: url("/img/moon.svg");
        filter: invert(1);
      }

      &::after {
        content: "";
        background-image: url("/img/sun.svg");
        transform: translateX(-26px);
        z-index: 4;
      }
    }

    &:focus-visible,
    &:active {
      box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    }
  }

  @media(max-width:1400px) {

    .menu-principal {

      .menu-principal-content {
        grid-row-gap: 10px;

        .navbar-toggler {
          grid-column: 3/4;
        }

        .navbar-collapse {
          grid-column: 2/4;
        }
        
        .buscador {
          grid-row: 2;
          grid-column: 1/4;
          max-width: 100%;
        }

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
    }
  }
 
</style>
