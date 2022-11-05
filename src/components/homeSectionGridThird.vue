<template>

  <div id="home_section_grid_third">

    <div id="home_section_grid_third_wrapper">

      <router-link tag="article" to="/teachers"
                   class="home_section_grid_third_article"
                   id="item_0" aria-label="foto">
        <transition name="l_r_move">
          <picture class="home_section_grid_third_picture" id="item_0_img"
                   v-if="isVisible_3 >= 1">
            <img src="../assets/images/our-teachers.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="l_r_move">
          <div class="home_section_grid_third_content" id="item_0_content"
               v-if="isVisible_3 >= 1">
            <h2>Наши учителя</h2>
          </div>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_third_article"
                   id="item_1" aria-label="foto">
        <transition name="r_l_move">
          <picture class="home_section_grid_third_picture" id="item_1_img"
                 v-if="isVisible_3 >= 1">
            <img src="../assets/images/bird-2.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="r_l_move">
          <div class="home_section_grid_third_content" id="item_1_content"
              v-if="isVisible_3 >= 1">
            <h2>Природа</h2>
          </div>
        </transition>
      </router-link>

    </div>

  </div>

</template>

<script>
export default {
  name: "homeSectionGridThird",
  data() {
    return {
      isVisible_3: 0
    }
  },
  mounted() {

    const sections_3 = document.querySelectorAll('.home_section_grid_third_article');

    let options_3 = {
      rootMargin: "0px",
      threshold: 0.5
    }

    let observer_3 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        //const { target } = entry;
        if (entry.intersectionRatio >= 0.5) {
          //target.classList.add("is-visible");
          this.isVisible_3 = this.isVisible_3 + 1
        } else {
          //target.classList.remove("is-visible");
        }
      })
    }, options_3);

    sections_3.forEach((section) => {
      observer_3.observe(section);
    })

  }

}
</script>

<style scoped>

#home_section_grid_third {
  width:                  1fr;
  max-width:              100%;
  min-height:             100vh;
  background:             rgba(252, 252, 252, .2);
}

#home_section_grid_third_wrapper {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     50vw 50vw;
  padding-top:            2rem;
  padding-bottom:         2rem;
  padding-left:           .5rem;
  padding-right:          .5rem;
  max-width:              var(--width-wrapper-small);
  grid-gap:               1.5rem;
  margin:                 0 auto;
}

/* Tablet */
@media (min-width: 37.5rem) {
  #home_section_grid_third_wrapper {

    grid-template-columns:  1fr;
    grid-template-rows:     50vw 50vw;
  }
}

/* Desktop */
@media (min-width: 60rem) {
  #home_section_grid_third_wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:     50vw;
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}

@media (min-width: 75rem) {
  #home_section_grid_third_wrapper {
    max-width:              var(--width-wrapper-large);
  }
}

.home_section_grid_third_article {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     35vw 15vw;
  filter:                 grayscale(65%);
  background:             rgba(250, 250, 250, .0);
  border-radius:          15px;
  cursor:                 pointer;
  opacity:                1;
  transition:             opacity 50ms;
}
.home_section_grid_third_article:hover {
  filter:                 grayscale(0);
}

@media (hover: none) {
  .home_section_grid_third_article {
    filter:               grayscale(0);
  }
}

.home_section_grid_third_picture > img{
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  object-position:        center;
  border-radius:          15px;
  min-height: 50vw;
}

.home_section_grid_third_content > h2{
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  object-position:        center;
  border-radius:          15px;
  padding:                5px 45px;
  font-size:              var(--menu-item-font-size-40);
  color: #fff;
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

.r_l_move-enter-active {
  transition: all 1s ease-out;
}

.r_l_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.r_l_move-enter-from,
.r_l_move-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

.d_u_move-enter-active {
  transition: all 1s ease-out;
}

.d_u_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.d_u_move-enter-from,
.d_u_move-leave-to {
  transform: translateY(150px);
  opacity: 0;
}

</style>