<template>
  <div class="banner">
    <img class="banner__img img-fluid" :src="banner"/>
    <div class="banner__info">
      <h1 class="banner__titulo"> {{ nombre }} </h1>
      <p class="banner__oyentes mt-2">19.359 Oyentes mensuales</p>
    </div>
    <div class="banner__acciones">
      <button 
        class="banner__seguir btn bg-light ms-2"
        aria-current="page" 
        data-bs-toggle="modal"
        data-bs-target="#modalLogin">
          <span class="me-1">Seguir</span>
          <fa icon="plus" />
      </button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    nombre: String,
    banner: String,
  })
</script>

<style lang="scss">

  .banner {
    position: relative;

    .banner__img {
      height: 190px;
      width: 100%;
      object-fit: cover;
      border-radius: 9px;
      overflow: hidden;
    }

    .banner__info,
    .banner__acciones {
      position: absolute;
      z-index: 2;
    }

    .banner__info {
      top: 10px;
      left: 20px;

      .banner__oyentes {
        font-size: 1.1em;
        color: white;
      }
    }
    
    .banner__titulo {
      font-size: 2.4em;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1.2;
      margin-bottom: 0;
      color: white;
      border-bottom: 5px solid var(--color-primario);
    }

    .banner__acciones {
      bottom: 10px;
      right: 10px;
      display: flex;
    }

    .banner__seguir {
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

      &:hover {
        opacity: 0.9;
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
      background: linear-gradient(to right, #240b36d8, #c3143200);
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

      .banner__seguir {
        font-size: 0.85rem;
        top: unset;
        bottom: 10px;
      }
    }
  }
</style>