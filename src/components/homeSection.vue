<template>

  <section id="section_project_activities">

    <div id="section_project_activities_wrapper">

      <router-link tag="article" to="/school-teachers"
                   class="section_project_activities"
                   id="section_project_activities_header" style="color: #000"
      >
        <transition name="l_r_move">

          <p v-if="isVisible1">
            Учимся делать сайты
          </p>
        </transition>

      </router-link>

      <div id="section_project_activities_center">

      </div>
      <div id="section_project_activities_footer">
        <div style="min-width: 100%; min-height: 100%; text-align: end; color: #000">
          Когда начало?
        </div>
        <div style="min-width: 100%; min-height: 100%; text-align: start; color: #000">
          Что такое сайт?
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  name: "homeSection",
  data() {
    return {
      isVisible1: false
    }},
  mounted() {

    const sections_1 = document.querySelectorAll('.section_project_activities');

    let options_section_1 = {
      rootMargin: "0px",
      threshold: 0.5
    }

    let observer_section_1 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
          this.isVisible1 = true
        } else {
          this.isVisible1 = false
        }
      })
    }, options_section_1);

    sections_1.forEach((section) => {
      observer_section_1.observe(section);
    })

  }
}
</script>

<style scoped>

#section_project_activities {
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
  #section_project_activities {
    height:                 75vh;
    min-height:             75vh;
  }
}

@media (min-width: 75rem) {
  #section_project_activities {
    height:                 100vh;
    min-height:             100vh;
  }
}

#section_project_activities_wrapper {
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
  #section_project_activities_wrapper {
    grid-template-rows:     1fr 50vh 1fr;
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 75rem) {
  #section_project_activities_wrapper {
    grid-template-rows:     1fr 60vh 1fr;
    max-width: var(--width-wrapper-large);
  }
}

#section_project_activities_header {
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
  #section_project_activities_header {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            var(--header-font-size-large);
  }
}

#section_project_activities_header > p {
  align-self:             center;
  justify-self:           left;
}

#section_project_activities_container {
  display: grid;
  background:             #999;
  min-width: 100%;
  min-height: 100%;
  border-radius:          15px;
  padding: 50px;
}

#section_project_activities_content {
  display: grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr 5fr;
  min-width: 100%;
  min-height: 100%;
  border-radius:          15px;
  grid-gap: .5rem;
}

#section_3_content_menu {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius:          4px;
}

#section_3_content_item {
  display: grid;
  grid-template-columns:  5fr 1fr;
  grid-template-rows:     1fr;
  min-width: 100%;
  min-height: 100%;
  grid-gap: .5rem;
}

#section_3_content_item_left {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius:          4px;
}

#section_3_content_item_right {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius:          4px;
}

#section_project_activities_footer {
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