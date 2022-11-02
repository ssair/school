<template>

  <transition name="slideViewEnter" appear>

    <div class="home">

      <div id="page_container">

        <section id="section_1"></section>

        <home-section-grid-first></home-section-grid-first>

        <home-section-projects></home-section-projects>

        <section id="section_4"></section>

        <home-section-picture-move></home-section-picture-move>

      </div>

    </div>
  </transition>

</template>

<script>

import homeSectionProjects from '@/components/homeSectionProjects.vue'
import homeSectionGridFirst from "@/components/homeSectionGridFirst"
import homeSectionPictureMove from "@/components/homeSectionPictureMove"

export default {
  name: 'Home',

  components: { homeSectionProjects,
                homeSectionGridFirst,
                homeSectionPictureMove
  },

  data() {
    return {
    }},
  methods: {

  },

  mounted() {

  }

}

</script>

<style scoped>

#page_container {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  width:                  100%;
  max-width:              100%;
}

/* Секция section_1 */
#section_1 {
  width:                  100%;
  height:                 100vh;
  transition:             all 1s ease-out;
  background-image:       url(../assets/images/tsgymnasium.png);
  background-position:    center center;
  background-size:        cover;
  background-color:       #fff;
  background-repeat:      no-repeat;
}

@media (min-width: 48rem) {
  #section_1 {
    background-image:       url(../assets/images/tsgymnasium.png);
  }
}

@media (min-width: 48rem) {
  #section_1 {
    background-image:       url(../assets/images/tsgymnasium.png);
  }
}

@media (min-width: 75rem) {
  #section_1 {
    background-image:       url(../assets/images/tsgymnasium.png);
    background-attachment:  fixed;
  }
}

/* Секция section_4 */
#section_4 {
  background-size:        cover;
  background-image:       url("../assets/images/spb-petr.jpg");
  position:               fixed;
  width:                  100%;
  height:                 100%;
  top:                    0;
  left:                   0;
  z-index:                -1;
}

</style>