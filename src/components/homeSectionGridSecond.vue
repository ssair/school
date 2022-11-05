<template>

  <div id="home_section_grid_second">

    <div id="home_section_grid_second_wrapper">

      <router-link tag="article" to="/teachers"
                   class="home_section_grid_second_article"
                   id="item_0" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_0_img"
                   v-if="isVisible_2 >= 1">
            <img src="../assets/images/our-teachers.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="d_u_move">
          <div class="home_section_grid_second_content" id="item_0_content"
               v-if="isVisible_2 >= 1">
            <h2>Наши учителя</h2>
          </div>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_1" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_1_img"
                 v-if="isVisible_2 >= 1">
            <img src="../assets/images/bird-2.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="d_u_move">
          <div class="home_section_grid_first_content" id="item_1_content"
              v-if="isVisible_2 >= 1">
            <h2>Физико-математическое направление</h2>
          </div>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_2" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_2_img"
                   v-if="isVisible_2 >= 1">
            <img src="../assets/images/bird-2.jpg" alt="foto">
          </picture>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                     class="home_section_grid_second_article"
                     id="item_3" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_3_img"
                   v-if="isVisible_2 >= 4">
            <img src="../assets/images/engineer-lyceum.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="d_u_move">
          <div class="home_section_grid_first_content" id="item_3_content"
               v-if="isVisible_2 >= 4">
            <h2>Проекты</h2>
          </div>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_4" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_4_img"
                   v-if="isVisible_2 >= 4">
            <img src="../assets/images/friends.jpg" alt="foto">
          </picture>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_5" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_5_img"
                   v-if="isVisible_2 >= 4">
            <img src="../assets/images/history-2.jpg" alt="foto">
          </picture>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_6" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_6_img"
                   v-if="isVisible_2 >= 7">
            <img src="../assets/images/stikhi-2.jpg" alt="foto">
          </picture>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_7" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_7_img"
                   v-if="isVisible_2 >= 7">
            <img src="../assets/images/vpole-2.jpg" alt="foto">
          </picture>
        </transition>
      </router-link>

      <router-link tag="article" to="/"
                   class="home_section_grid_second_article"
                   id="item_8" aria-label="foto">
        <transition name="d_u_move">
          <picture class="home_section_grid_second_picture" id="item_8_img"
                 v-if="isVisible_2 >= 7">
            <img src="../assets/images/venice.jpg" alt="foto">
          </picture>
        </transition>
        <transition name="d_u_move">
          <div class="home_section_grid_first_content" id="item_8_content"
               v-if="isVisible_2 >= 7">
            <h2>Путешествия</h2>
          </div>
        </transition>
        </router-link>


    </div>

  </div>

</template>

<script>
export default {
  name: "homeSectionGridSecond",
  data() {
    return {
      isVisible_2: 0
    }
  },
  mounted() {

    const sections_2 = document.querySelectorAll('.home_section_grid_second_article');

    let options_2 = {
      rootMargin: "0px",
      threshold: 0.5
    }

    let observer_2 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        //const { target } = entry;
        if (entry.intersectionRatio >= 0.5) {
          //target.classList.add("is-visible");
          this.isVisible_2 = this.isVisible_2 + 1
        } else {
          //target.classList.remove("is-visible");
        }
      })
    }, options_2);

    sections_2.forEach((section) => {
      observer_2.observe(section);
    })

  }

}
</script>

<style scoped>

#home_section_grid_second {
  width:                  1fr;
  max-width:              100%;
  min-height:             100vh;
  background:             rgba(252, 252, 252, .2);
}

#home_section_grid_second_wrapper {
  display:                grid;
  grid-template-columns:  1fr;
  padding-top:            2rem;
  padding-bottom:         2rem;
  padding-left:           .5rem;
  padding-right:          .5rem;
  max-width:              var(--width-wrapper-small);
  grid-gap:               1.5rem;
  margin:                 0 auto;
  /* Mobile */
  grid-template-areas:      'Item1'
                            'Item0'
                            'Item2'
                            'Item3'
                            'Item4'
                            'Item5'
                            'Item6'
                            'Item7'
                            'Item8';
}

/* Tablet */
@media (min-width: 37.5rem) {
  #home_section_grid_second_wrapper {

    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:        'Item1 Item1 Item1 Item1'
                                'Item1 Item1 Item1 Item1'
                                'Item0 Item0 Item2 Item2'
                                'Item0 Item0 Item2 Item2'
                                'Item3 Item3 Item3 Item3'
                                'Item3 Item3 Item3 Item3'
                                'Item4 Item4 Item5 Item5'
                                'Item4 Item4 Item5 Item5'
                                'Item6 Item6 Item7 Item7'
                                'Item6 Item6 Item7 Item7'
                                'Item8 Item8 Item8 Item8'
                                'Item8 Item8 Item8 Item8';
  }
}

/* Desktop */
@media (min-width: 60rem) {
  #home_section_grid_second_wrapper {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:  'Item0 Item0 Item1 Item1 Item1 Item1 Item2 Item2'
                          'Item0 Item0 Item1 Item1 Item1 Item1 Item2 Item2'
                          'Item3 Item3 Item3 Item3 Item4 Item4 Item5 Item5'
                          'Item3 Item3 Item3 Item3 Item4 Item4 Item5 Item5'
                          'Item6 Item6 Item7 Item7 Item8 Item8 Item8 Item8'
                          'Item6 Item6 Item7 Item7 Item8 Item8 Item8 Item8';
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}

@media (min-width: 75rem) {
  #home_section_grid_second_wrapper {
    max-width:              var(--width-wrapper-large);
  }
}

.home_section_grid_second_article {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     100%;
  filter:                 grayscale(65%);
  background:             rgba(250, 250, 250, .0);
  border-radius:          15px;
  cursor:                 pointer;
  opacity:                1;
  transition:             opacity 50ms;
}
.home_section_grid_second_article:hover {
  filter:                 grayscale(0);
}

@media (hover: none) {
  .home_section_grid_second_article {
    filter:               grayscale(0);
  }
}

.home_section_grid_second_picture > img{
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  object-position:        center;
  border-radius:          15px;
}

.is-visible {
  opacity:                1;
}

#item_0 {
  grid-area:              Item0;
  min-height:             40vh;
  max-height:             40vh;
  display:                grid;
}

#item_0_content {
  display:                flex;
  flex-direction:         column;
  justify-content:        flex-end;
  color:                  #fff;
}

#item_0_content > h2 {
  margin:                 9px 20px;
  padding:                5px 20px;
  font-size:              var(--menu-item-font-size-30);
}

#item_0_img,
#item_0_content {
  grid-area: 1/2;
}

#item_1 {
  grid-area:              Item1;
  min-height:             40vh;
  max-height:             40vh;
  background-size:        cover;
  display:                grid;
}
#item_1_img > img {
  object-position:        left;
  background:             linear-gradient( #bbb, transparent 1px),
  linear-gradient( 90deg, #bbb, transparent 1px);
  background-size:        29px 29px;
  background-color:       #fff;
}

#item_1_content {
  display:                flex;
  flex-direction:         column;
  justify-content:        flex-end;
}

#item_1_content > h2 {
  margin:                 9px 20px;
  padding:                5px 20px;
  font-size:              var(--menu-item-font-size-30);
  color:                  #000;
}

#item_1_img,
#item_1_content {
  grid-area: 1/2;
}

#item_2 {
  grid-area:              Item2;
  min-height:             40vh;
  max-height:             40vh;
}

#item_3 {
  grid-area:              Item3;
  min-height:             40vh;
  max-height:             40vh;
  display:                grid;
}

#item_3_content {
  display:                flex;
  flex-direction:         column;
  justify-content:        flex-end;
}

#item_3_content > h2 {
  margin:                 9px 20px;
  background:             rgba(255, 255, 255, .6);
  padding:                5px 20px;
  font-size:              var(--menu-item-font-size-30);
  color:                  #666;
}

#item_3_img,
#item_3_content {
  grid-area:              1/2;
}

#item_4 {
  grid-area:              Item4;
  min-height:             40vh;
  max-height:             40vh;
}

#item_5 {
  grid-area:              Item5;
  min-height:             40vh;
  max-height:             40vh;
}

#item_6 {
  grid-area:              Item6;
  min-height:             40vh;
  max-height:             40vh;
}
#item_7 {
  grid-area:              Item7;
  min-height:             40vh;
  max-height:             40vh;
}
#item_8 {
  grid-area:              Item8;
  min-height:             40vh;
  max-height:             40vh;
}

#item_8_content {
  display:                flex;
  flex-direction:         column;
  justify-content:        flex-start;
}

#item_8_content > h2 {
  margin:                 9px 20px;
  background:             rgba(255, 255, 255, .0);
  padding:                5px 20px;
  font-size:              var(--menu-item-font-size-30);
  color:                  #999;
  justify-self:           center;
}

#item_8_img,
#item_8_content {
  grid-area:              1/2;
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