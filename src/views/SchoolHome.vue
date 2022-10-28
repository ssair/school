<template>

  <transition name="slideViewEnter" appear>

    <div class="schoolhome">

      <div id="page_container">

        <section id="section_1"></section>

        <section id="section_2" v-on:scroll.passive="showHeader">

          <div id="section_2_wrapper">

            <transition name="l_r_move">
              <router-link tag="article" to="/school-teachers"
                           class="section_2_article is-visible"
                           id="item_0" aria-label="foto"
                           v-if="isVisible >= 1">
                <picture class="section_2_picture" id="item_0_img">
                  <img src="../assets/images/our-teachers.jpg" alt="foto">
                </picture>
                <div class="section_2_content" id="item_0_content">
                  <h2>Наши учителя</h2>
                </div>
              </router-link>
            </transition>

            <router-link tag="article" to="/"
                         class="section_2_article"
                         id="item_1" aria-label="foto">
              <picture class="section_2_picture" id="item_1_img">
                <img src="../assets/images/mathematics-989121_1920.png" alt="foto">
              </picture>
              <div class="section_2_content" id="item_1_content">
                <h2>Физико-математическое направление</h2>
              </div>
            </router-link>

            <transition name="r_l_move">
              <router-link tag="article" to="/"
                           class="section_2_article is-visible"
                           id="item_2" aria-label="foto"
                           v-if="isVisible >= 1">
                <picture class="section_2_picture" id="item_2_img">
                  <img src="../assets/images/bird-2.jpg" alt="foto">
                </picture>
              </router-link>
            </transition>

            <transition name="l_r_move">
              <router-link tag="article" to="/"
                           class="section_2_article is-visible"
                           id="item_3" aria-label="foto"
                           v-if="isVisible >= 3">
                <picture class="section_2_picture" id="item_3_img">
                  <img src="../assets/images/engineer-lyceum.jpg" alt="foto">
                </picture>
                <div class="section_2_content" id="item_3_content">
                  <h2>Проекты</h2>
                </div>
              </router-link>
            </transition>

            <router-link tag="article" to="/"
                         class="section_2_article"
                         id="item_4" aria-label="foto">
              <picture class="section_2_picture" id="item_4_img">
                <img src="../assets/images/friends.jpg" alt="foto">
              </picture>
            </router-link>

            <router-link tag="article" to="/"
                         class="section_2_article"
                         id="item_5" aria-label="foto">
              <picture class="section_2_picture" id="item_5_img">
                <img src="../assets/images/history-2.jpg" alt="foto">
              </picture>
            </router-link>

            <router-link tag="article" to="/"
                         class="section_2_article"
                         id="item_6" aria-label="foto">
              <picture class="section_2_picture" id="item_6_img">
                <img src="../assets/images/stikhi-2.jpg" alt="foto">
              </picture>
            </router-link>

            <router-link tag="article" to="/"
                         class="section_2_article"
                         id="item_7" aria-label="foto">
              <picture class="section_2_picture" id="item_7_img">
                <img src="../assets/images/vpole-2.jpg" alt="foto">
              </picture>
            </router-link>

            <transition name="r_l_move">
              <router-link tag="article" to="/"
                           class="section_2_article is-visible"
                           id="item_8" aria-label="foto"
                           v-if="isVisible >= 5">
                <picture class="section_2_picture" id="item_8_img">
                  <img src="../assets/images/venice.jpg" alt="foto">
                </picture>
                <div class="section_2_content" id="item_8_content">
                  <h2>Путешествия</h2>
                </div>
              </router-link>
            </transition>

          </div>

        </section>

        <section id="section_3">
          <transition name="slide-fade-left">
            <div id="section_3_wrapper">

              <div id="section_3_header">
                Кружок по Frontend-разработке
              </div>
              <div id="section_3_container">
                <div id="section_3_content">

                  <div id="section_3_content_menu"></div>
                  <div id="section_3_content_item">
                    <div id="section_3_content_item_left"></div>
                    <div id="section_3_content_item_right"></div>
                  </div>

                </div>
              </div>
              <div id="section_3_footer">
                <div style="min-width: 100%; min-height: 100%; text-align: end">
                  Когда начало?
                </div>
                <div style="min-width: 100%; min-height: 100%; text-align: start">
                  Что такое Frontend?
                </div>
              </div>

            </div>
          </transition>
        </section>

        <section id="section_4"></section>

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

      </div>

    </div>
  </transition>

</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isVisible: 0,
      isVisible_5: false
    }},
  methods: {

    showHeader: function () {
      let elem = document.getElementById('section_2');
      let elemHeader = document.getElementById('page__header');
      let position = elem.getBoundingClientRect();
      let y = position.top;
      if (y < 95){
        elemHeader.style.backgroundColor = 'rgba(254, 254, 254, 0)';// Изменить на 0
        elemHeader.style.backdropFilter = "blur(20px)";
        elemHeader.style.webkitBackdropFilter = "blur(20px)";
        elemHeader.style.transition = ".5s"
        elemHeader.style.borderBottom = "none"
      }
      if ( y >= 95) {
        elemHeader.style.backgroundColor = 'rgba(254, 254, 254, .9)';
        elemHeader.style.backdropFilter = "blur(0px)";
        elemHeader.style.webkitBackdropFilter = "blur(0px)";
        elemHeader.style.borderBottom = "none"
      }
    },

  },

  mounted() {

    window.addEventListener("scroll", this.showHeader);
    this.showHeader()

    // Для section_2

    const sections = document.querySelectorAll('.section_2_article');

    let options = {
      rootMargin: "0px",
      threshold: 0.5
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.5) {
          target.classList.add("is-visible");
          this.isVisible = this.isVisible + 1
        } else {
          //target.classList.remove("is-visible");
        }
      })
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    })

    // Для section_5

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

  },

  beforeRouteLeave: function(){

    window.removeEventListener("scroll", this.showHeader);

  },

  routeEnter:  function(){
    let elemHeader = document.getElementById('page__header');
    elemHeader.style.backgroundColor = 'rgba(104, 254, 254, .7)';
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

/* Секция fixed_1 */
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

/*
@media (min-width: 960px) {
  #section_1 {
    background: url("../assets/images/144_spb.png") no-repeat center / contain,
    url("../assets/images/spb-bg-large.jpg") no-repeat center / cover;
  }
}
*/

/* Секция section_2 */

#section_2 {
  width:                  1fr;
  max-width:              100%;
  min-height:             100vh;
  //background:             rgba(252, 252, 252, .75);
}

#section_2_wrapper {
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
  #section_2_wrapper {

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
  #section_2_wrapper {
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
  #section_2_wrapper {
    max-width:              var(--width-wrapper-large);
  }
}

.section_2_article {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     100%;
  filter:                 grayscale(65%);
  background:             rgba(250, 250, 250, .0);
  border-radius:          15px;
  cursor:                 pointer;
  opacity:                0;
  transition:             opacity 500ms;
}
.section_2_article:hover {
  filter:                 grayscale(0);
}

@media (hover: none) {
  .section_2_article {
    filter:               grayscale(0);
  }
}

.section_2_picture > img{
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
  background:             linear-gradient( #bbb, transparent 1px),
                          linear-gradient( 90deg, #bbb, transparent 1px);
  background-size:        29px 29px;
  background-color:       #fff;
  display:                grid;
}
#item_1_img > img {
  object-position:        left;
}

#item_1_content {
  display:                flex;
  flex-direction:         column;
  justify-content:        flex-end;
}

#item_1_content > h2 {
  margin:                 9px 20px;
  background:             rgba(255, 255, 255, .6);
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

/* Секция section_3 */
#section_3 {
  width:                  1fr;
  height:                 60vh;
  max-width:              100%;
  min-height:             60vh;
  background:             rgba(255, 255, 255, 1);
}

@media (min-width: 60rem) {
  #section_3 {
    height:                 75vh;
    min-height:             75vh;
  }
}

@media (min-width: 75rem) {
  #section_3 {
    height:                 100vh;
    min-height:             100vh;
  }
}

#section_3_wrapper {
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
  #section_3_wrapper {
    grid-template-rows:     1fr 50vh 1fr;
    max-width: var(--width-wrapper-middle);
  }
}
@media (min-width: 75rem) {
  #section_3_wrapper {
    grid-template-rows:     1fr 60vh 1fr;
    max-width: var(--width-wrapper-large);
  }
}

#section_3_header {
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
  #section_3_header {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            var(--header-font-size-large);
  }
}

#section_3_header > p {
  align-self:             center;
  justify-self:           left;
}

#section_3_container {
  display: grid;
  background:             #999;
  min-width: 100%;
  min-height: 100%;
  border-radius: 20px;
  padding: 50px;
}

#section_3_content {
  display: grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr 5fr;
  min-width: 100%;
  min-height: 100%;
  border-radius: 20px;
  grid-gap: 20px;
}

#section_3_content_menu {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius: 9px;
}

#section_3_content_item {
  display: grid;
  grid-template-columns:  5fr 1fr;
  grid-template-rows:     1fr;
  min-width: 100%;
  min-height: 100%;
  grid-gap: 20px;
}

#section_3_content_item_left {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius: 9px;
}

#section_3_content_item_right {
  min-width: 100%;
  min-height: 100%;
  background:             #fff;
  border-radius: 9px;
}

#section_3_footer {
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

/* Секция section_5 */
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

/* Секция video */
#page_start_section_video {
  min-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background-attachment: fixed;
}

#page_start_section_video video {
  height: auto;
  min-width: 100vw;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  object-fit: contain;
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

.slide-fade-left-enter-active {
  transition: all .8s ease-out;
}

.slide-fade-left-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-left-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.slideSection_5_6-enter-active,
.slideSection_5_6-leave-active {
  transition: all 2s ease;
}

.slideSection_5_6-enter-from,
.slideSection_5_6-leave-to {
  opacity: 0;
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

</style>