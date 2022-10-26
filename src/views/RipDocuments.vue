<template>
  <div class="rip_documents">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <!--
        <div id="header_container">

          <div id="header_wrapper">

            <div id="header">
              <p>Региональная инновационная площадка</p>
              <br>
              <p>Проектирование возможностей</p>
              <p>профессионального самоопределения</p>
              <p>обучающихся в конвергентном</p>
              <p>информационном и медиапространстве</p>
              <br>
            </div>

          </div>

        </div>

        -->

        <header-container name="Региональная инновационная площадка"></header-container>

        <header-container-sub name="Проектирование возможностей профессионального самоопределения
                                      обучающихся в конвергентном информационном и медиапространстве">

        </header-container-sub>

        <div id="content_container">

          <div id="content_wrapper">

            <div id="content">

              <div>
                <a v-on:click="isVisible1 = !isVisible1" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_name">Распоряжение Комитета по образованию</p>
                  </div>
                  <div class="forImg" v-if="isVisible1">
                    <img src="../assets/images/rip/Распоряжение_Комитета_1.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Распоряжение_Комитета_2.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Распоряжение_Комитета_3.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Распоряжение_Комитета_4.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Распоряжение_Комитета_5.jpg" alt="лицей 144">
                  </div>
                </a>
              </div>

              <div>
                <a v-on:click="isVisible2 = !isVisible2" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_name">Заявка</p>
                  </div>
                  <div class="forImg" v-if="isVisible2">
                    <img src="../assets/images/rip/Заявка.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_1.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_2.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_3.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_4.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_5.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_6.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_7.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_8.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_9.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_10.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_11.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_12.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_13.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_14.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_15.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_16.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_17.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_18.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_19.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_20.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Опыт_работы_21.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Динамика_1.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Динамика_2.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_1.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_2.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_3.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_4.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_5.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_6.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_7.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_8.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_9.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_10.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_11.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_12.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_13.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_14.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_15.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_16.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_17.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_18.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_19.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_20.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_21.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_22.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_23.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_24.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Проект_25.jpg" alt="лицей 144">
                    <img src="../assets/images/rip/Информационная_справка.jpg" alt="лицей 144">
                  </div>
                </a>
              </div>

              <a id="content_item"
                 :href="`${publicPath}pdf/documents/rip/Приказ о создании рабочей группе.pdf`"
                 download="Приказ о создании рабочей группе.pdf">
                <div id="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div id="content_item_name">
                  Приказ о создании рабочей группы
                </div>
              </a>

              <!--
              <li>
                <a v-on:click="isVisible3 = !isVisible3" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_number">3</p>
                    <p class="content_item_artical_name">Документ номер 3</p>
                  </div>
                  <div class="forImg" v-if="isVisible3">
                    <img src="../assets/aaa.jpg" alt="лицей 144">
                  </div>
                </a>
              </li>

              <li>
                <a v-on:click="isVisible4 = !isVisible4" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_number">4</p>
                    <p class="content_item_artical_name">Документ номер 4</p>
                  </div>
                  <div class="forImg" v-if="isVisible4">
                    <img src="../assets/aaa.jpg" alt="лицей 144">
                  </div>
                </a>
              </li>

              <li>
                <a v-on:click="isVisible5 = !isVisible5" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_number">5</p>
                    <p class="content_item_artical_name">Документ номер 5</p>
                  </div>
                  <div class="forImg" v-if="isVisible5">
                    <img src="../assets/aaa.jpg" alt="лицей 144">
                  </div>
                </a>
              </li>
              -->

            </div>

          </div>

        </div>

      </div>

    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
//import MenuComp from '../components/MenuComp.vue'

import headerContainer from "../components/headerContainer";
import headerContainerSub from "../components/headerContainerSub";

export default {
  name: 'RipHome',
  components: { headerContainer,  headerContainerSub },
  data() {
    return {
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      publicPath: process.env.BASE_URL
    }},
}
</script>

<style scoped>

.rip_documents {
  display:                grid;
  min-height:             100vh;
  max-width:              100%;
  background-color:       #fefeee;
}

#container {
  width:                  100%;
  max-width:              100%;
  margin-top:             calc(2*var(--header-height-small));
  margin-bottom:          calc(2*var(--header-height-small));
}

@media (min-width: 60rem) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
  }
}
/*
#page_container {
  width:                  100vw;
  max-width:              100vw;
  font-family:            'Exo 2', sans-serif;
  margin-top: 75px;
}

#header_container {
  width:                  100vw;
  max-width:              100vw;
  height:                 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

#header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 auto;
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
  height:                 auto;
  max-height:             auto;
  align-self:             center;
  justify-self:           center;
  border-bottom:          #555555 1px solid;
}

#header > p {
  align-self:             center;
  justify-self:           center;
  color:                  #000;
  font-size:              15px;
}


@media (min-width: 600px) {
  #header > p {
    font-size:              20px;
  }
}

@media (min-width: 960px) {
  #header > p {
    font-size:              30px;
  }
}
*/
#content_container {
  width:                  100vw;
  max-width:              100vw;
  min-height:             100vh;
  margin-top:             calc(var(--header-height-small));
  margin-bottom:          var(--header-height-small);
  color: #666;
}

@media (min-width: 60rem) {
  #content_container {
    margin-top:            calc(var(--header-height));
    margin-bottom:         var(--header-height);
  }
}

#content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             100vh;
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  #content_wrapper {
    max-width: var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 75rem) {
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
  grid-template-rows:     minmax(3rem, auto) auto;
  cursor:                 pointer;
}

@media (min-width: 60rem) {
  .content_item {
    grid-template-rows:     minmax(4rem, auto) auto;
  }
}

.content_item_artical {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     minmax(3rem, auto);
  height:                 100%;
}

@media (min-width: 60rem) {
  .content_item_artical {
    grid-template-rows:     minmax(4rem, auto);
  }
}

.content_item_artical_number {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
  font-size:              15px;
}

.content_item_artical_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-25);
  color:                  #333;
  font-weight:            400;
  border-bottom: 1px #999 solid;
}

@media (min-width: 60rem) {
  .content_item_artical_name {
    font-size:              var(--menu-item-font-size-30);
  }
}

.content_item_artical_name:hover {
  color: #666;
}

@media (min-width: 600px) {
  .content_item_artical_number {
    font-size:              25px;
  }
  .content_item_artical_name {
    font-size:              25px;
  }
}
@media (min-width: 960px) {
  .content_item_artical_number {
    font-size:              30px;
  }
  .content_item_artical_name {
    font-size:              30px;
  }
}

.forImg > img {
  width:                  100%;
  height:                 auto;
  object-fit:             contain;
}

#content_item {
  display:                grid;
  grid-template-columns:  3.125rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
  border-bottom: 1px #999 solid;
}

@media (min-width: 60rem) {
  #content_item {
    grid-template-columns:     3.125rem 1fr;
    min-height:             4.125rem;
  }
}

.is-visible {
  opacity: 1;
}

#content_item_img {
  display:                grid;
  grid-template-columns:  2.5rem;
  grid-template-rows:     2.5rem;
  width:                  2.5rem;
  height:                 2.5rem;
  max-height:             2.5rem;
  background:             none;
  place-content:          center;
  place-items:            center;
  margin:                 auto;
}

#content_item_img > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

#content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-25);
  color:                  #333;
  font-weight:            400;
  transition:             all 200ms;
}

#content_item_name:hover {
  color:                  #666;
}

@media (min-width: 60rem) {
  #content_item_name {
    font-size:              var(--menu-item-font-size-30);
    min-height:             4.125rem;
  }
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>