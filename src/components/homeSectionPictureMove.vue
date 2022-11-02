<template>

  <section class="home_section_picture_move">
    <transition name="slide-fade">
      <div id="home_section_picture_move_wrapper" v-if="isVisible">
        <img src="../assets/images/mathematics-989121_1920.png" alt="pi">
        <div id="home_section_picture_move_text">
          <p id="home_section_picture_move_p">Инженерное направление</p>
        </div>
      </div>
    </transition>
  </section>

</template>

<script>
export default {
  name: "homeSectionPictureMove",
  data() {
    return {
      isVisible: false
    }},
  mounted() {

    const section = document.querySelectorAll('.home_section_picture_move');

    let sections = {
      rootMargin: "0px",
      threshold: 0.3
    }

    let observer_section = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.3) {
          this.isVisible = true
        }
      })
    }, sections);

    section.forEach((section) => {
      observer_section.observe(section);
    })

  }
}
</script>

<style scoped>

.home_section_picture_move {
  width:                  1fr;
  max-width:              100vw;
  height:                 100vh;
  padding:                2rem .5rem;
  font-family:            'Exo 2', sans-serif;
  transition:             3s;
  font-size:              var(--menu-item-font-size-30);
  background-size:        cover;
  background:             linear-gradient( #bbb, transparent 1px),
  linear-gradient( 90deg, #bbb, transparent 1px);
  background-size:        29px 29px;
  background-color:       rgba(200, 200, 200, .5);
}

#home_section_picture_move_wrapper {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     80% 1fr;
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 100%;
  background:             none;
  border-radius:          9px;
  padding-left:           .5rem;
  padding-right:          .5rem;
}

@media (min-width: 960px) {
  #home_section_picture_move_wrapper {
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 1200px) {
  #home_section_picture_move_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#home_section_picture_move_wrapper > img {
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  padding:                .3rem;
}

#home_section_picture_move_text {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  /*align-items:            center;
  justify-items:          center;*/
  place-items:            center;
  color:                  #333;
}

#home_section_picture_move_text_p {
  display:                grid;
  grid-template-columns:  1fr;
  /*align-content:          center;*/
  place-content:          center;
  /*align-items:            center;
  justify-items:          center;*/
  place-items:            center;
  font-size:              2.5rem;
  font-style: italic;
}

.slide-fade-enter-active {
  transition: all .8s ease-out;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

</style>