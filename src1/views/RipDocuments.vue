<template>
  <div class="ripdocuments">

    <transition name="slideViewEnter" appear>

      <div id="page_container">

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

        <div id="content_container">

          <div id="content_wrapper">

            <ul id="content">

              <li>
                <a v-on:click="isVisible1 = !isVisible1" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_number">1.</p>
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
              </li>

              <li>
                <a v-on:click="isVisible2 = !isVisible2" class="content_item">
                  <div class="content_item_artical">
                    <p class="content_item_artical_number">2.</p>
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
              </li>

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
  name: 'RipDocuments',
  data() {
    return {
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false
    }},
}
</script>

<style scoped>

#page_container {
  width:                  100vw;
  max-width:              100vw;
  font-family:            'Exo 2', sans-serif;
  /*font-size:              clamp(16px, 1.4rem, 30px);*/
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
  font-size:              15px;
}

.content_item_artical_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              15px;
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

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>