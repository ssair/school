<template>

  <div class="about_structure">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Структура и органы управления"></header-container>

        <header-container-sub name="Структура"></header-container-sub>

        <header-container-sub name="Органы управления"></header-container-sub>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Директор</p>
                </div>
                <div class="item_inner">
                  <router-link to="/school-administration/director" tag="p"
                               class="content_item_subname is_hover"
                               style="padding-bottom: 9px">Пучкова Ксения Владимировна
                  </router-link>
                  <p class="content_item_subname" style="color: #666">Время приема:</p>
                  <p class="content_item_subname">вторник, четверг - с 15:00 до 18:00</p>
                  <p class="content_item_subname" style="color: #666">Сайт:</p>
                  <p class="content_item_subname">tsgymnasium.ru</p>
                  <p class="content_item_subname" style="color: #666">E-mail:</p>
                  <p class="content_item_subname">tsgymnasium@gmail.com</p>

                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Педагогический совет</p>
                </div>
                <!--
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">Председатель:</p>
                  <router-link to="/school-administration/director" tag="p"
                               class="content_item_subname is_hover"
                               style="padding-bottom: 9px">Федорова Лолита Анатольевна
                  </router-link>
                  <p class="content_item_subname" style="color: #666">Время приема:</p>
                  <p class="content_item_subname">вторник, четверг - с 15:00 до 18:00</p>
                  <p class="content_item_subname" style="color: #666">Сайт:</p>
                  <p class="content_item_subname">lyceum144.ru </p>
                  <p class="content_item_subname" style="color: #666">E-mail:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">lyceum144spb@obr.gov.spb.ru </p>
                  <a class="content_item_doc is_hover" :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о педагогическом совете.pdf`"
                     download="Положение о педагогическом совете.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Положение о педагогическом совете
                    </div>
                  </a>
                </div>
                      -->
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Общее собрание работников</p>
                </div>
                <!--
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">Председатель:</p>
                  <router-link to="/" tag="p"
                               class="content_item_subname is_hover"
                               style="padding-bottom: 9px">Завуч
                  </router-link>
                  <p class="content_item_subname" style="color: #666">Время приема:</p>
                  <p class="content_item_subname">вторник, четверг - с 15:00 до 18:00</p>
                  <p class="content_item_subname" style="color: #666">Сайт:</p>
                  <p class="content_item_subname">lyceum144.ru </p>
                  <p class="content_item_subname" style="color: #666">E-mail:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">lyceum144spb@obr.gov.spb.ru </p>
                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об общем собрании работников.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Положение об общем собрании работников
                    </div>
                  </a>
                </div>
                -->

              </article>

            </div>

          </div>

        </div>

        <header-container-sub name="Структурное подразделение"></header-container-sub>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">



              <article class="content_item">
                <div class="item">
                  <router-link to="/odod" tag="p"
                               class="content_item_name is_hover">Отделение дополнительного образования детей
                    </router-link>
                </div>

                <!--
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">Руководитель структурного подразделения:</p>
                  <router-link to="/school-administration/petchenko" tag="p"
                               class="content_item_subname is_hover"
                               style="padding-bottom: 9px">Петченко Ирина Евгеньевна
                  </router-link>
                  <p class="content_item_subname" style="color: #666">Время приема:</p>
                  <p class="content_item_subname">пятница - с 16.00 до 18.00</p>
                  <p class="content_item_subname" style="color: #666">Сайт:</p>
                  <p class="content_item_subname">lyceum144.ru </p>
                  <p class="content_item_subname" style="color: #666">E-mail:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">lyceum144spb@obr.gov.spb.ru </p>
                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об одод.pdf`"
                     download="Положение об одод.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Положение об ОДОД
                    </div>
                  </a>
                </div>

                -->

              </article>

            </div>

          </div>

        </div>

      </div>

    </transition>

  </div>

</template>

<script>

import headerContainer from "../components/headerContainer";
import headerContainerSub from "../components/headerContainerSub";

export default {

  name: "AboutStructure",

  components: { headerContainer,  headerContainerSub },

  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },

  mounted() {

    const sections = document.querySelectorAll('.content_item');

    let options = {
      rootMargin: "0px",
      threshold: 0.5
    }

    var observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.5) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      })
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    })
  }
}
</script>

<style scoped>
.about_structure {
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

.header_container_sub {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-top:             calc(0.5*var(--header-height-small));
}

@media (min-width: 60rem) {
  .header_container_sub {
    margin-top:            calc(0.5*var(--header-height));
    margin-bottom:         calc(0.5*var(--header-height));
  }
}

.header_wrapper_sub {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  .header_wrapper_sub {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}
@media (min-width: 75rem) {
  .header_wrapper_sub {
    max-width:            var(--width-wrapper-large);
  }
}

.header_sub {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              var(--menu-item-font-size-25);
  font-weight:            500;
  color:                  #666;
}

@media (min-width: 60rem) {

  .header_sub {
    display:                grid;
    grid-template-columns:  1fr;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    align-self:             center;
    justify-self:           center;
    font-size:              var(--menu-item-font-size-33);
  }
}

.header_sub > p {
  align-self:             center;
  justify-self:           left;
}

.content_container {
  width:                  100%;
  max-width:              100%;
  min-height:             100vh;
  margin-top:             calc(0.5*var(--header-height-small));
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 60rem) {
  .content_container {
    margin-top:            calc(0.5*var(--header-height));
    margin-bottom:         var(--header-height);
  }
}

.content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             100vh;
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  .content_wrapper {
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 75rem) {
  .content_wrapper {
    max-width:            var(--width-wrapper-large);
  }
}

.content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  grid-gap:               calc(0.3*var(--header-height-small));
}

@media (min-width: 60rem) {
  .content {
    grid-template-rows:     auto;
    grid-gap:               calc(0.3*var(--header-height));
  }
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     var(--header-height-small) auto;
  opacity:                0.1;
  transition:             opacity 500ms;
  margin-bottom:          1rem;
}

@media (min-width: 60rem) {
  .content_item {
    grid-template-rows:     var(--header-height)  auto;
  }
}

.is-visible {
  opacity:                1;
}

.item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  border-bottom:          1px #d5dddf solid;
  min-height:             100%;
  max-width:              100%;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
}

@media (min-width: 60rem) {
  .content_item_name {
    font-size:              var(--menu-item-font-size-30);
  }
}

.item_inner {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  height:                 auto;
  width:                  100%;
  max-width:              100vw;
  align-items:            center;
  justify-items:          left;
  padding:                1rem;
}

.content_item_subname {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  max-width:              100vw;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
}

@media (min-width: 60rem) {
  .content_item_subname {
    font-size:              var(--menu-item-font-size-25);
  }
}

.content_item_doc {
  display:                grid;
  grid-template-columns:  2.5rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
}

@media (min-width: 60rem) {
  .content_item_doc {
    grid-template-columns:     2.5rem 1fr;
  }
}

.content_item_doc_img {
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

.content_item_doc_img > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

.content_item_doc_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
}

@media (min-width: 960px) {
  .content_item_doc_name {
    font-size:              var(--menu-item-font-size-25);
  }
}

.is_hover {
  transition:             all 200ms;
}
.is_hover:hover {
  color:                  #666;
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>