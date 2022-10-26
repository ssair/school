<template>
  <div class="ripmenu">

    <transition name="slideViewEnter" appear>

      <div id="page_container">

        <div id="header_container">

          <div id="header_wrapper">

            <div id="header"><p>Меню</p></div>

          </div>

        </div>

        <div id="content_container">

          <div id="content_wrapper">

            <ul id="content">

              <router-link to="/" tag="li" class="content_item">
                <div class="content_item_artical">
                  <p class="content_item_artical_number">1</p>
                  <p class="content_item_artical_name">Сведения об образовательной организации</p>
                </div>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <div class="content_item_artical">
                  <p class="content_item_artical_number">2</p>
                  <p class="content_item_artical_name">ОДОД</p>
                </div>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <div class="content_item_artical">
                  <p class="content_item_artical_number">3</p>
                  <p class="content_item_artical_name">Расписание</p>
                </div>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <div class="content_item_artical">
                  <p class="content_item_artical_number">4</p>
                  <p class="content_item_artical_name">Газета</p>
                </div>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <div class="content_item_artical">
                  <p class="content_item_artical_number">5</p>
                  <p class="content_item_artical_name">Центр информатизации образования</p>
                </div>
              </router-link>

            </ul>

          </div>

        </div>

      </div>

    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
//import MenuComp from '../components/MenuComp.vue'

export default {
  name: 'Menu'
}
</script>

<style scoped>
#page_container {
  width:                  100vw;
  max-width:              100vw;
  font-family:            'Exo 2', sans-serif;
  font-size:              clamp(16px, 1.4rem, 30px);
  margin-top: 75px;
}

#header_container {
  width:                  100vw;
  max-width:              100vw;
  height:                 4rem;
  max-height:             var(--header-height);
}

#header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 4rem;
  max-height:             var(--header-height);
}

@media (min-width: 960px) {
  #header_wrapper {
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 1200px) {
  #header_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#header {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 4rem;
  max-height:             var(--header-height);
  align-self:             center;
  justify-self:           center;
  border-bottom:          #555555 1px solid;
  font-size:              clamp(20px, 1.6rem, 40px);
}

#header > p {
  align-self:             center;
  justify-self:           center;
  color:                  #919293;
}

#content_container {
  width:                  100vw;
  max-width:              100vw;
  min-height:             100vh;
  padding-top:            1rem;
  padding-bottom:         1rem;
}

#content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             100vh;
  background:             rgba(240, 240, 240, .5);
  border-radius:          6px;
}

@media (min-width: 960px) {
  #content_wrapper {
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 1200px) {
  #content_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  padding:                1rem;
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     minmax(3rem, 60px) auto;
  cursor:                 pointer;
}

.content_item_artical {
  display:                grid;
  grid-template-columns:  minmax(3rem, 60px) 1fr;
  grid-template-rows:     minmax(3rem, 60px);
  border-bottom:          1px #919293 solid;
  height:                 100%;
}

.content_item_artical_number {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
}

.content_item_artical_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>