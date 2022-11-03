<template>

  <div class="odod">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Кружки"></header-container>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">

              <!--
              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Место нахождения </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">Санкт-Петербург, Суздальский пр., д. 93, корп. 2</p>
                  <p class="content_item_subname" style="color: #333">Санкт-Петербург, ул.Тимуровская, д. 15, корп. 2</p>
                  <iframe style="margin-top: 40px; border-radius: 15px; border: 1px #ddd solid"
                          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a427c9f326801fe6480b4fa2ae33a03a83de65563294cf49a84b19697a218d2&amp;source=constructor"
                          width="500" height="400" frameborder="0">

                  </iframe>

                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Телефон </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">531-57-42</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Электронная почта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="mailto:lyceum144spb@obr.gov.spb.ru">lyceum144spb@obr.gov.spb.ru</a>
                  </p>
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="mailto:lyceum144spb@obr.gov.spb.ru">gimn144spb@yandex.ru</a>
                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Адрес официального сайта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="http://www.lyceum144.ru">http://www.lyceum144.ru/odod</a>
                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Руководитель структурного подразделения</p>
                </div>
                <div class="item_inner">
                  <router-link to="/school-administration/petchenko" tag="p"
                               class="content_item_subname is_hover"
                               style="padding-bottom: 9px">Петченко Ирина Евгеньевна
                  </router-link>
                  <p class="content_item_subname" style="color: #666">Время приема:</p>
                  <p class="content_item_subname">пятница - с 16.00 до 18.00</p>

                </div>

              </article>
              -->
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

  name: "ODOD",

  components: {
    headerContainer
  },

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

.odod {
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