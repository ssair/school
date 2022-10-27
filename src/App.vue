<template>

  <div id="page">

    <header id="page__header">

      <div id="page__header__wrapper">


        <router-link to="/" id="page__header__left" tag="div">

          <div id="page__header__logo">

            <div></div>
            <img src="./assets/images/tsgymnasium_logo.png" alt="царскосельская гимназия">
            <div></div>

          </div>

          <!--
          <div id="page__header__name">

            <div></div>
            <div id="page__header__name__1">144 лицей</div>
            <div id="page__header__name__2">Санкт-Петербург</div>
            <div></div>

          </div>
          -->

        </router-link>


        <div id="page__header__center">

        </div>


        <div id="page__header__right">

          <router-link to="/about" id="page__header__right__about">
            Сведения об ОО
          </router-link>
          <router-link to="/menu" id="page__header__right__menu">
            Меню
          </router-link>

        </div>


      </div>

    </header>

    <main id="page__main">
      <router-view></router-view>
    </main>

    <footer id="page__footer">
      Царскосельская гимназия - Учебный проект
    </footer>

  </div>

</template>

<script>

export default {

  data() {
    return {
      isVisibleSchoolMenu: true,
      isVisibleHeader: true,
      isLogoBlack: true
    }},
  methods: {
  },
  mounted() {
  }
}
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Exo+2:200|Jost|Noto+Sans&display=swap");
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');


@import './css/reset.module.css';

:root {
  box-sizing:             border-box;
  font-size:              16px;
  font-family:            'IBM Plex Sans', sans-serif;

  --header-height:          4.6875rem;
  --header-height-small:    3.25rem;
  /*
  --media-min-width-middle: 980px;
  --media-min-width-large:  1200px;
  */
  --width-wrapper-small:    95vw;
  --width-wrapper-middle:   90vw;
  --width-wrapper-large:    75rem; /*1024px;*/

  --heght-page:             calc(100vh - 75px);

  --header-font-size:       1.875rem;
  --header-font-size-large: 2.5rem;

  --menu-item-font-size-20:     1.25rem;
  --menu-item-font-size-25:     1.5625rem;
  --menu-item-font-size-30:     1.875rem;
  --menu-item-font-size-33:     2.0625rem;
  --menu-item-font-size-40:     2.5rem;
}

body {
  position:               relative;
  min-height:             100vh;
}

html {
  scroll-behavior:        smooth;
}

#page {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  max-width:              100vw;
}

#page__header  {
  width:                  100vw;
  max-width:              100%;
  height:                 var(--header-height-small);
  position:               fixed;
  top:                    0;
  place-content:          center;
  place-items:            center;
  background-color:       rgba(254, 254, 254, .2);
  backdrop-filter:        blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom:          1px solid #d5dddf;
  z-index:                1000;
  transition:             .5s;
}
@media (min-width: 60rem) {
  #page__header {
    height:               var(--header-height);
  }
}

#page__header__wrapper {
  display:                grid;
  grid-template-columns:  10.625rem 1fr 5.625rem;
  max-width:              var(--width-wrapper-small);
  height:                 100%;
  margin:                 auto;
  place-content:          center;
  place-items:            center;
  padding-left:           .5rem;
  padding-right:          .5rem;
}

@media (min-width: 60rem) {
  #page__header__wrapper {
    grid-template-columns:  11.875rem 1fr 15.625rem;
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 75rem) {
  #page__header__wrapper {
    max-width:              var(--width-wrapper-large);
  }
}

#page__header__left {
  display:                grid;
  grid-template-columns:  9.375rem;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  min-width:              9.375rem;
  justify-self: flex-start;
}

@media (min-width: 960px) {
  #page__header__left {
    grid-template-columns:  11.25rem;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    min-width:              11.25rem;
  }
}

.empty {
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  background: #fff;
}

#page__header__logo {
  display:                grid;
  grid-template-columns:  9.375rem;
  grid-template-rows:     0.3125rem 2.625rem 0.3125rem;
  width:                  9.375rem;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  background:             none;
  place-content:          center;
  place-items:            center;
  justify-self:           flex-start;
}

#page__header__logo > img {
  width:                  9.375rem;
  height:                 2.625rem;
  min-width:             100%;
  border-radius:          1.3125rem;
}

@media (min-width: 960px) {
  #page__header__logo {
    grid-template-rows:     0.75rem 3.1875rem 0.75rem;
    height:                 var(--header-height);
    max-height:             var(--header-height);
  }
  #page__header__logo > img {
    width:                  3.1875rem;
    height:                 3.1875rem;
    object-fit:             contain;
    border-radius:          33px;
  }
}

#page__header__name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     0.3125rem 25px 17px 0.3125rem;
  color:                  #333;
  width:                  100%;
  min-width:              100%;
  height:                 100%;
  min-height:             100%;
  text-align:             center;
}

#page__header__name__1 {
  font-weight:            300;
  font-size:              1.25rem;
}

#page__header__name__2 {
  font-size:              0.75rem;
  font-weight:            100;
}

@media (min-width: 960px) {

  #page__header__name {
    display:                grid;
    grid-template-columns:  1fr;
    grid-template-rows:     0.75rem 1.875rem 1.3125rem 0.75rem;
    width:                  100%;
    min-width:              100%;
    height:                 100%;
    min-height:             100%;
    text-align:             center;
  }

  #page__header__name__1 {
    font-size:              1.5625rem;
  }

  #page__header__name__2 {
    font-size:              0.9375rem;
  }
}

#page__header__center{
  min-width:                100%;
  min-height:               100%;
}

#page__header__right {
  display:                grid;
  grid-template-columns:  90px;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  min-height:             var(--header-height-small);
  place-content:          center;
  place-items:            center;
}

#page__header__right__about {
  display:                none;
  place-content:          center;
  place-items:            center;
  place-self:             center;
  min-height:             100%;
  min-width:              100%;
  font-weight:            300;
  transition:             .3s;
  font-size:              1.25rem;
  color:                  #333;
}

#page__header__right__menu {
  display:                grid;
  place-content:          center;
  place-items:            center;
  place-self:             center;
  min-height:             100%;
  min-width:              100%;
  font-weight:            300;
  transition:             .3s;
  font-size:              1.25rem;
  color:                  #333;
  justify-content:        center;
}

#page__header__right__about:hover {
  color:                  #666;
}
#page__header__right__menu:hover {
  color:                  #666;
}

@media (hover: none) {
  #page__header__right__about:hover {
    color:                  #333;
  }
  #page__header__right__menu:hover {
    color:                  #333;
  }
}

@media (min-width: 960px) {
  #page__header__right {
    grid-template-columns:  10rem 5.3125rem;
    grid-gap:               5px;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    min-height:             var(--header-height);
  }
  #page__header__right__about {
    display:                grid;
    justify-content:        flex-end;
  }
  #page__header__right__menu {
    display:                grid;
    justify-content:        flex-end;
  }
}
#page__main {
  display: 			          grid;
  max-width:              100%;
}

#page__footer {
  display: 			          grid;
  background-color:       rgba( 0, 0, 0,.8);
  align-items:            center;
  justify-items:          center;
  align-content:          center;
  color:                  #919293;
  width:                  100%;
  max-width:              100%;
  min-height:             var(--header-height-small);
  max-height:             var(--header-height-small);
  border-top:             1px #919293 solid;
  font-size:              1.25rem;
}

@media (min-width: 60rem) {
  #page__footer {
    display: 			          grid;
    background-color:       rgba( 0, 0, 0,.8);
    align-items:            center;
    justify-items:          center;
    align-content:          center;
    color:                  #919293;
    width:                  100%;
    max-width:              100%;
    min-height:             var(--header-height);
    max-height:             var(--header-height);
    border-top:             1px #919293 solid;
    font-size:              1.875rem;
  }
}

.logo-enter-active {
  animation: logo-in 3s;
}

@keyframes logo-in {
  from {
    transform:  rotate3d(0, 1, 0, -360deg);
    animation-timing-function: linear;
  }

  50% {
    transform:  rotate3d(0, 1, 0, -360deg);
    animation-timing-function: linear;
  }

  74% {
    transform:  rotate3d(0, 1, 0, -180deg);
    animation-timing-function: linear;
  }

  to {
    transform:  rotate3d(0, 1, 0, 0deg);
    animation-timing-function: linear;
  }
}

.slideViewEnter-enter-active,
.slidePageStart-leave-active {
  transition: opacity .8s ease;
}

.slideViewEnter-enter-from,
.slidePageStart-leave-to {
  opacity: 0;
}

</style>
