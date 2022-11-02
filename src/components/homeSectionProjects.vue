<template>

  <div class="home_section_projects">

    <router-link tag="article"
                 to="/school-teachers"
                 id="home_section_projects_wrapper">

      <div id="home_section_projects_header">

        <transition name="l_r_move">

          <p style="color: #000" v-if="isVisible">
            Проекты гимназии
          </p>

        </transition>

      </div>

      <div id="home_section_projects_center"></div>

      <div id="home_section_projects_footer">
        <div style="min-width: 100%; min-height: 100%; text-align: end; color: #000">
          Когда начало?
        </div>
        <div style="min-width: 100%; min-height: 100%; text-align: start; color: #000">
          Что такое сайт?
        </div>
      </div>

    </router-link>

  </div>

</template>

<script>
export default {
  name: "homeSectionProjects",
  data() {
    return {
      isVisible: false
    }},
  mounted() {

    const section = document.querySelectorAll('.home_section_projects');

    let options_section = {
      rootMargin: "0px",
      threshold: 0.5
    }

    let observer_section = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
          this.isVisible = true
        } else {
          this.isVisible = false
        }
      })
    }, options_section);

    section.forEach((section) => {
      observer_section.observe(section);
    })

  }
}
</script>

<style scoped>

.home_section_projects {
  width:                  1fr;
  height:                 60vh;
  max-width:              100%;
  min-height:             60vh;
  background-image:       url(../assets/images/engineer-lyceum.jpg);
  transition:             all 1s ease-out;
  background-position:    center center;
  background-size:        cover;
  background-color:       #fff;
  background-repeat:      no-repeat;
}

@media (min-width: 60rem) {
  .home_section_projects {
    height:                 75vh;
    min-height:             75vh;
  }
}

@media (min-width: 75rem) {
  .home_section_projects {
    height:                 100vh;
    min-height:             100vh;
  }
}

#home_section_projects_wrapper {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr 40vh 1fr;
  max-width:              var(--width-wrapper-small);
  margin:                 0 auto;
  height:                 100%;
  padding-top:            2rem;
  padding-bottom:         2rem;
  padding-left:           .5rem;
  padding-right:          .5rem;
}

@media (min-width: 60rem) {
  #home_section_projects_wrapper {
    grid-template-rows:     1fr 50vh 1fr;
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 75rem) {
  #home_section_projects_wrapper {
    grid-template-rows:     1fr 60vh 1fr;
    max-width: var(--width-wrapper-large);
  }
}

#home_section_projects_header {
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

@media (min-width: 60rem) {
  #home_section_projects_header {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            var(--header-font-size-large);
  }
}

#home_section_projects_header > p {
  align-self:             center;
  justify-self:           left;
}

#home_section_projects_footer {
  display:                grid;
  grid-template-columns:  repeat(2, 1fr);
  grid-template-rows:     1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              var(--menu-item-font-size-25);
  font-weight:            400;
  color:                  #666;
  grid-gap: 90px;
}

.l_r_move-enter-active {
  transition: all 1s ease-out;
}

.l_r_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.l_r_move-enter-from,
.l_r_move-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

</style>