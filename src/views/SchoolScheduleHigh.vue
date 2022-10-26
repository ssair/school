<template>

  <div  class="school-schedule-high">

      <transition name="slidePageStart" appear>

        <div id="container">

          <header-container name="Расписание уроков для 5 - 11 классов"></header-container>

          <div id="content_container">

            <div id="content_wrapper">

              <transition-group name="list-complete" tag="div" id="content" appear>

                <div class="content_line" key="a">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_5a}"
                        v-on:click="isScheduleVisible_5a = !isScheduleVisible_5a">
                    <p class="content_item_name">5 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_5b}"
                        v-on:click="isScheduleVisible_5b = !isScheduleVisible_5b">
                    <p class="content_item_name">5 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_5c}"
                        v-on:click="isScheduleVisible_5c = !isScheduleVisible_5c">
                    <p class="content_item_name">5 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_5d}"
                        v-on:click="isScheduleVisible_5d = !isScheduleVisible_5d">
                    <p class="content_item_name">5 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="aa">
                  <div class="img_container"  v-if="isScheduleVisible_5a" key="1">
                    <img src="../assets/images/lyceum/schedule/5A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_5b" key="2">
                    <img src="../assets/images/lyceum/schedule/5B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_5c" key="3">
                    <img src="../assets/images/lyceum/schedule/5C.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_5d" key="4">
                    <img src="../assets/images/lyceum/schedule/5D.png">
                  </div>
                </transition-group>

                <div class="content_line" key="b">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_6a}"
                        v-on:click="isScheduleVisible_6a = !isScheduleVisible_6a">
                    <p class="content_item_name">6 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_6b}"
                        v-on:click="isScheduleVisible_6b = !isScheduleVisible_6b">
                    <p class="content_item_name">6 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_6c}"
                        v-on:click="isScheduleVisible_6c = !isScheduleVisible_6c">
                    <p class="content_item_name">6 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_6d}"
                        v-on:click="isScheduleVisible_6d = !isScheduleVisible_6d">
                    <p class="content_item_name">6 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="bb">

                  <div class="img_container"  v-if="isScheduleVisible_6a">
                    <img src="../assets/images/lyceum/schedule/6A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_6b">
                    <img src="../assets/images/lyceum/schedule/6B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_6c">
                    <img src="../assets/images/lyceum/schedule/6C.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_6d">
                    <img src="../assets/images/lyceum/schedule/6D.png">
                  </div>

                </transition-group>

                <div class="content_line" key="c">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_7a}"
                        v-on:click="isScheduleVisible_7a = !isScheduleVisible_7a">
                    <p class="content_item_name">7 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_7b}"
                        v-on:click="isScheduleVisible_7b = !isScheduleVisible_7b">
                    <p class="content_item_name">7 Б</p>
                  </div>

                </div>

                <transition-group name="list-complete-img" tag="div" key="bb">

                  <div class="img_container"  v-if="isScheduleVisible_7a">
                    <img src="../assets/images/lyceum/schedule/7A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_7b">
                    <img src="../assets/images/lyceum/schedule/7B.png">
                  </div>

                </transition-group>

                <div class="content_line" key="d">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_8a}"
                        v-on:click="isScheduleVisible_8a = !isScheduleVisible_8a">
                    <p class="content_item_name">8 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_8b}"
                        v-on:click="isScheduleVisible_8b = !isScheduleVisible_8b">
                    <p class="content_item_name">8 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_8c}"
                        v-on:click="isScheduleVisible_8c = !isScheduleVisible_8c">
                    <p class="content_item_name">8 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_8d}"
                        v-on:click="isScheduleVisible_8d = !isScheduleVisible_8d">
                    <p class="content_item_name">8 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="dd">

                  <div class="img_container"  v-if="isScheduleVisible_8a">
                    <img src="../assets/images/lyceum/schedule/8A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_8b">
                    <img src="../assets/images/lyceum/schedule/8B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_8c">
                    <img src="../assets/images/lyceum/schedule/8C.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_8d">
                    <img src="../assets/images/lyceum/schedule/8D.png">
                  </div>

                </transition-group>

                <div class="content_line" key="e">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_9a}"
                        v-on:click="isScheduleVisible_9a = !isScheduleVisible_9a">
                    <p class="content_item_name">9 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_9b}"
                        v-on:click="isScheduleVisible_9b = !isScheduleVisible_9b">
                    <p class="content_item_name">9 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_9c}"
                        v-on:click="isScheduleVisible_9c = !isScheduleVisible_9c">
                    <p class="content_item_name">9 В</p>
                  </div>

                </div>

                <transition-group name="list-complete-img" tag="div" key="ee">

                  <div class="img_container"  v-if="isScheduleVisible_9a">
                    <img src="../assets/images/lyceum/schedule/9A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_9b">
                    <img src="../assets/images/lyceum/schedule/9B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_9c">
                    <img src="../assets/images/lyceum/schedule/9C.png">
                  </div>

                </transition-group>

                <div class="content_line" key="f">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_10a}"
                        v-on:click="isScheduleVisible_10a = !isScheduleVisible_10a">
                    <p class="content_item_name">10 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_10b}"
                        v-on:click="isScheduleVisible_10b = !isScheduleVisible_10b">
                    <p class="content_item_name">10 Б</p>
                  </div>

                </div>

                <transition-group name="list-complete-img" tag="div" key="ff">

                  <div class="img_container"  v-if="isScheduleVisible_10a">
                    <img src="../assets/images/lyceum/schedule/10A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_10b">
                    <img src="../assets/images/lyceum/schedule/10B.png">
                  </div>

                </transition-group>

                <div class="content_line" key="g">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_11a}"
                        v-on:click="isScheduleVisible_11a = !isScheduleVisible_11a">
                    <p class="content_item_name">11 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_11b}"
                        v-on:click="isScheduleVisible_11b = !isScheduleVisible_11b">
                    <p class="content_item_name">11 Б</p>
                  </div>

                </div>

                <transition-group name="list-complete-img" tag="div" key="gg">

                  <div class="img_container"  v-if="isScheduleVisible_11a">
                    <img src="../assets/images/lyceum/schedule/11A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_11b">
                    <img src="../assets/images/lyceum/schedule/11B.png">
                  </div>

                </transition-group>

              </transition-group>

            </div>

          </div>

        </div>

      </transition>

  </div>

</template>

<script>

import headerContainer from "../components/headerContainer";

export default {
  data: function () {
    return {
      isScheduleVisible_5a: false,
      isScheduleVisible_5b: false,
      isScheduleVisible_5c: false,
      isScheduleVisible_5d: false,
      isScheduleVisible_6a: false,
      isScheduleVisible_6b: false,
      isScheduleVisible_6c: false,
      isScheduleVisible_6d: false,
      isScheduleVisible_7a: false,
      isScheduleVisible_7b: false,
      isScheduleVisible_8a: false,
      isScheduleVisible_8b: false,
      isScheduleVisible_8c: false,
      isScheduleVisible_8d: false,
      isScheduleVisible_9a: false,
      isScheduleVisible_9b: false,
      isScheduleVisible_9c: false,
      isScheduleVisible_10a: false,
      isScheduleVisible_10b: false,
      isScheduleVisible_11a: false,
      isScheduleVisible_11b: false,
    }
  },

  name: "SchoolSchedule",

  components: { headerContainer  },

}
</script>

<style scoped>

.school-schedule-high {
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
  /*z-index: 9999;
  background: #fff;*/
  font-size:              var(--menu-item-font-size-20);
}

@media (min-width: 60rem) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
    font-size:              var(--menu-item-font-size-30);
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
    max-width:            var(--width-wrapper-large);
  }
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  grid-gap:               5px;
  justify-content:        center;
}

.content_line {
  display:                grid;
  grid-template-columns:  repeat(4, 1fr);
  grid-template-rows:     60px;
  grid-gap:               15px;
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     minmax(3rem, 60px) auto;
  cursor:                 pointer;
  background:             rgba(200, 200, 200, .9);
  border-radius:          9px;
  color:                  #666;
  place-content:          center;
  transition:             .2s;
}

.content_item:hover {
  color:                  #999;
  transition:             .2s;
}

.content_item_active {
  background:             rgba(200, 200, 200, .9);
  color:                  #fff;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  max-height:                 100%;
  width:                  100%;
  place-content: center;
  place-items: center;
  place-self: center;
}

.schedule_page_article {
  display:                grid;
  grid-template-columns:  minmax(3rem, 60px) 1fr;
  grid-template-rows:     minmax(3rem, 60px);
  border-bottom:          1px #919293 solid;
  height:                 100%;
}

.schedule_page_article_number {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
}

.schedule_page_article_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
}

.img_container {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 50vh;
  max-height:             50vh;
  width:                  100%;
  place-items: center;
  place-content: center;
  padding-top: var(--header-height);
  padding-bottom: var(--header-height);
  transition: all 1.8s ease;
}

.img_container > img {
  width:                  100%;
  height:                 100%;
  object-fit:             contain;
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .2s ease;
}
.slideLineMenu-enter-from, .slideLineMenu-leave-to {
  opacity: 0;
}

.list-complete-img-enter-from,
.list-complete-img-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}

.list-complete-img-enter-active,
.list-complete-img-leave-active {

}

.list-complete-img-move {

}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(20vh);
}

.list-complete-enter-active,
.list-complete-leave-active {
  transition: all .5s ease;
}

.list-complete-move {
  transition: transform 0.8s;
}

</style>