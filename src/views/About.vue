<template>

  <div class="about">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Сведения об образовательной организации"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <ul id="content">

              <router-link to="/about/basic-data" tag="li" class="content_item">
                <p class="content_item_name is_hover">Основные сведения</p>
              </router-link>

              <router-link to="/about/structure" tag="li" class="content_item">
                <p class="content_item_name is_hover">Структура и органы управления</p>
              </router-link>

              <router-link to="/about/documents" tag="li" class="content_item">
                <p class="content_item_name is_hover">Документы</p>
              </router-link>

              <router-link to="/about/education" tag="li" class="content_item">
                <p class="content_item_name is_hover">Образование</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Образовательные стандарты</p>
              </router-link>

              <router-link to="/administration" tag="li" class="content_item">
                <p class="content_item_name is_hover">Руководство</p>
              </router-link>

              <router-link to="/teachers" tag="li" class="content_item">
                <p class="content_item_name is_hover">Педагогический состав</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Материально-техническое обеспечение</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Стипендии</p>
              </router-link>

              <router-link to="/about/education/paid_services" tag="li" class="content_item">
                <p class="content_item_name">Платные образовательные услуги</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Финансово-хозяйственная деятельность</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Вакантные места</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Доступная среда</p>
              </router-link>

              <router-link to="/" tag="li" class="content_item">
                <p class="content_item_name">Международное сотрудничество</p>
              </router-link>

            </ul>

          </div>

        </div>

      </div>

    </transition>
  </div>

</template>

<script>

import headerContainer from '../components/headerContainer.vue'

export default {

  name: "About",

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

.about {
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
    max-width:              var(--width-wrapper-large);
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
  cursor:                 pointer;
  border-bottom:          1px #d5dddf solid;
  min-height:             var(--header-height-small);
  opacity:                0.1;
  transition:             opacity 500ms;
}

@media (min-width: 60rem) {
  .content_item {
    min-height:             var(--header-height);
  }
}

.is-visible {
  opacity: 1;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  font-weight:            300;
  color:                  #333;
}

@media (min-width: 60rem) {
  .content_item_name {
    font-size:              var(--menu-item-font-size-30);
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