<template>

  <div class="menu">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Меню"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <ul id="content">

              <router-link to="/about" tag="li" class="content_item">
                <p class="content_item_name is_hover">Сведения об ОО</p>
              </router-link>

              <router-link to="/schoolschedulejunior" tag="li" class="content_item">
                <p class="content_item_name is_hover">Расписание 1-4</p>
              </router-link>

              <router-link to="/schoolschedulehigh" tag="li" class="content_item">
                <p class="content_item_name is_hover">Расписание 5-11</p>
              </router-link>

              <router-link to="/rip/documents" tag="li" class="content_item">
                <p class="content_item_name is_hover">Региональная инновационная площадка</p>
              </router-link>

              <router-link to="/school-administration" tag="li" class="content_item">
                <p class="content_item_name is_hover">Администрация</p>
              </router-link>

              <router-link to="/school-teachers" tag="li" class="content_item">
                <p class="content_item_name is_hover">Наши учителя</p>
              </router-link>

              <router-link to="/odod" tag="li" class="content_item">
                <p class="content_item_name is_hover">ОДОД</p>
              </router-link>

            </ul>

          </div>

        </div>

      </div>

    </transition>

  </div>

</template>

<script>

import headerContainer from "../../components/headerContainer";

export default {

  name: 'SchoolMenu',

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

.menu {
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
  grid-template-rows:     1fr;
  cursor:                 pointer;
  border-bottom:          1px #d5dddf solid;
  min-height:             var(--header-height-small);
  opacity:                0.1;
  transition:             opacity 500ms;
  font-weight:            300;
  color:                  #666;
}

@media (min-width: 960px) {
  .content_item {
    min-height:           var(--header-height);
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

.content_item_name > p {
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>