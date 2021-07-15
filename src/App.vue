<template>
  <router-view/>
</template>

<style lang="scss">
	@import './assets/sass/main.scss';

    .btn_play {
        position: relative;
        display: inline-flex;
        height: 50px;
        width: 50px;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: auto;
        font-size: 2.8rem;
        color: var(--color-secundario);
        border-radius: 100%;
        z-index: 2;

        svg {
            transition:color 0.6s cubic-bezier(0.215, 0.610, 0.355, 1);
            transition: box-shadow 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
            border-radius: 50%;
        }

        &::before {
            content: '';
            position: absolute;
            width: 55%;
            height: 55%;
            border-radius: 50%;
            transform: translate(-50%,-50%);
            left: 50%;
            top: 50%;
            z-index: -1;
            background-color: white;
        }

        &:hover svg {
            color: var(--color-secundario);
            box-shadow: 2px 2px 9px var(--color-secundario);
        }

        &:active {
            transform: scale(0.96);
        }

    }
</style>
