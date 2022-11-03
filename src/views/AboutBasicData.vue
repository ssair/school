<template>

  <div class="about_basic_data">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Основные сведения"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <div id="content">

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Наименование</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">Полное:</p>
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">Автономная некоммерческая общеобразовательная организация «Царскосельская гимназия»</p>
                  <p class="content_item_subname">Сокращенное:</p>
                  <p class="content_item_subname" style="color: #333">АНОО «Царскосельская гимназия»</p>

                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Дата создания </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">15.08.2014</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Учредители</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">
                    Пасынков Максим Викторович,<br>
                    Цветкова Любовь Александровна,<br>
                    Миклушонок Дмитрий Владимирович
                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Место нахождения </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">196601, Санкт-Петербург, г. Пушкин, ул. Конюшенная, д. 36, литера, А</p>

                    <iframe style="margin-top: 40px; border-radius: 15px; border: 1px #ddd solid"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba6fdb5fd54c18c03dde2a9f051e3501a272f8d3b7ff6de442a10db7ba0ab982&amp;source=constructor" width="500" height="400" frameborder="0">

                    </iframe>

                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Представительства и филиалы </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333;">Филиалов и представительств нет</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Режим и график работы </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">Понедельник-пятница, 8.30-20.00, выходные: суббота, воскресенье, праздничные дни</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Контактные телефоны </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">+7(931)361-42-01</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Электронная почта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">

                    <a style="color: royalblue" href="mailto:tsgymnasium@gmail.com">tsgymnasium@gmail.com</a>

                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Адрес официального сайта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="https://www.tsgymnasium.ru">https://www.tsgymnasium.ru</a>
                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Места осуществления образовательной деятельности</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">Санкт-Петербург, г. Пушкин, ул. Конюшенная, д. 36, литера, А</p>
                </div>
              </article>

            </div>

          </div>

        </div>

      </div>

    </transition>

  </div>

</template>

<script>

import headerContainer from '../components/headerContainer.vue'

export default {

  name: "AboutBasicData",

  components: { headerContainer  },

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

.about_basic_data {
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

@media (min-width: 960px) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
  }
}

#header_container {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
}

#header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  #header_wrapper {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}
@media (min-width: 75rem) {
  #header_wrapper {
    max-width:            var(--width-wrapper-large);
  }
}

#header {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              var(--header-font-size);
  font-weight:            500;
  color:                  #666;
}

@media (min-width: 960px) {

  #header {
    display:                grid;
    grid-template-columns:  1fr;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    align-self:             center;
    justify-self:           center;
    font-size:              var(--header-font-size-large);
  }
}

#header > p {
  align-self:             center;
  justify-self:           left;
}

#content_container {
  width:                  100%;
  max-width:              100%;
  min-height:             100vh;
  margin-top:             var(--header-height-small);
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 60rem) {
  #content_container {
    margin-top:            var(--header-height);
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
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}

@media (min-width: 75rem) {
  #content_wrapper {
    max-width:            var(--width-wrapper-large);
  }
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  grid-gap:               calc(0.3*var(--header-height-small));
}

@media (min-width: 60rem) {
  #content {
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
  color:                  #666;
  font-weight:            300;
}

@media (min-width: 960px) {
  .content_item_subname {
    font-size:              var(--menu-item-font-size-25);
  }
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}

</style>