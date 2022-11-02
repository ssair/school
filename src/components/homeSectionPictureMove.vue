<template>

  <section id="section_5" class="section_5">
    <transition name="slide-fade">
      <div id="section_5_wrapper" v-if="isVisible_5">
        <img src="../assets/images/mathematics-989121_1920.png" alt="pi">
        <div id="section_5_wrapper_text">
          <p class="section_5_wrapper_p">Инженерное направление</p>
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
      isVisible_5: false
    }},
  mounted() {

    const section_5 = document.querySelectorAll('.section_5');

    let options_section_5 = {
      rootMargin: "0px",
      threshold: 0.3
    }

    let observer_section_5 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.3) {
          this.isVisible_5 = true
        }
      })
    }, options_section_5);

    section_5.forEach((section) => {
      observer_section_5.observe(section);
    })

  }
}
</script>

<style scoped>

#section_5 {
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

#section_5_wrapper {
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
  #section_5_wrapper {
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 1200px) {
  #section_5_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#section_5_wrapper > img {
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  padding:                .3rem;
}

#section_5_wrapper_text {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  /*align-items:            center;
  justify-items:          center;*/
  place-items:            center;
  color:                  #333;
}

.section_5_wrapper_text_p {
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