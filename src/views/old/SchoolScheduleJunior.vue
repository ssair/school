<template>

  <div  class="school-schedule-junior">

      <transition name="slidePageStart" appear>

        <div id="container">

          <header-container name="Расписание уроков для 1 - 4 классов"></header-container>


          <div id="content_container">

            <div id="content_wrapper">

              <transition-group name="list-complete" tag="div" id="content" appear>

                <div class="content_line" key="a">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_1a}"
                        v-on:click="isScheduleVisible_1a = !isScheduleVisible_1a">
                    <p class="content_item_name">1 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_1b}"
                        v-on:click="isScheduleVisible_1b = !isScheduleVisible_1b">
                    <p class="content_item_name">1 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_1c}"
                        v-on:click="isScheduleVisible_1c = !isScheduleVisible_1c">
                    <p class="content_item_name">1 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_1d}"
                        v-on:click="isScheduleVisible_1d = !isScheduleVisible_1d">
                    <p class="content_item_name">1 Г</p>
                  </div>

                </div>

                <transition-group name="list-complete-img" tag="div" key="aa">
                  <div class="img_container"  v-if="isScheduleVisible_1a" key="1">
                    <img src="../../assets/images/lyceum/schedule/schedule_01A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_1b" key="2">
                    <img src="../../assets/images/lyceum/schedule/schedule_01B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_1c" key="3">
                    <img src="../../assets/images/lyceum/schedule/schedule_01C.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_1d" key="4">
                    <img src="../../assets/images/lyceum/schedule/schedule_01D.png">
                  </div>
                </transition-group>

                <div class="content_line" key="b">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_2a}"
                        v-on:click="isScheduleVisible_2a = !isScheduleVisible_2a">
                    <p class="content_item_name">2 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_2b}"
                        v-on:click="isScheduleVisible_2b = !isScheduleVisible_2b">
                    <p class="content_item_name">2 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_2c}"
                        v-on:click="isScheduleVisible_2c = !isScheduleVisible_2c">
                    <p class="content_item_name">2 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_2d}"
                        v-on:click="isScheduleVisible_2d = !isScheduleVisible_2d">
                    <p class="content_item_name">2 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="bb">

                  <div class="img_container"  v-if="isScheduleVisible_2a">
                    <img src="../../assets/images/lyceum/schedule/schedule_02A.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_2b">
                    <img src="../../assets/images/lyceum/schedule/schedule_02B.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_2c">
                    <img src="../../assets/images/lyceum/schedule/schedule_02C.png">
                  </div>
                  <div class="img_container"  v-if="isScheduleVisible_2d">
                    <img src="../../assets/images/lyceum/schedule/schedule_02D.png">
                  </div>

                </transition-group>

                <div class="content_line" key="c">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_3a}"
                        v-on:click="isScheduleVisible_3a = !isScheduleVisible_3a">
                    <p class="content_item_name">3 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_3a}"
                        v-on:click="isScheduleVisible_3a = !isScheduleVisible_3a">
                    <p class="content_item_name">3 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_3a}"
                        v-on:click="isScheduleVisible_3a = !isScheduleVisible_3a">
                    <p class="content_item_name">3 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_3a}"
                        v-on:click="isScheduleVisible_3a = !isScheduleVisible_3a">
                    <p class="content_item_name">3 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="cc">

                  <div class="img_container_temp"  v-if="isScheduleVisible_3a">
                    <img src="../../assets/images/lyceum/schedule/schrdule_3.jpg">
                  </div>

                </transition-group>

                <div class="content_line" key="d">

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_4a}"
                        v-on:click="isScheduleVisible_4a = !isScheduleVisible_4a">
                    <p class="content_item_name">4 А</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_4a}"
                        v-on:click="isScheduleVisible_4a = !isScheduleVisible_4a">
                    <p class="content_item_name">4 Б</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_4a}"
                        v-on:click="isScheduleVisible_4a = !isScheduleVisible_4a">
                    <p class="content_item_name">4 В</p>
                  </div>

                  <div  class="content_item"
                        :class="{'content_item_active': isScheduleVisible_4a}"
                        v-on:click="isScheduleVisible_4a = !isScheduleVisible_4a">
                    <p class="content_item_name">4 Г</p>
                  </div>
                </div>

                <transition-group name="list-complete-img" tag="div" key="cc">

                  <div class="img_container_temp"  v-if="isScheduleVisible_4a">
                    <img src="../../assets/images/lyceum/schedule/schrdule_4.jpg">
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
import headerContainer from "../../components/headerContainer";

export default {
  data: function () {
    return {
      isScheduleVisible_1a: false,
      isScheduleVisible_1b: false,
      isScheduleVisible_1c: false,
      isScheduleVisible_1d: false,
      isScheduleVisible_2a: false,
      isScheduleVisible_2b: false,
      isScheduleVisible_2c: false,
      isScheduleVisible_2d: false,
      isScheduleVisible_3a: false,
      isScheduleVisible_3b: false,
      isScheduleVisible_3c: false,
      isScheduleVisible_3d: false,
      isScheduleVisible_4a: false,
      isScheduleVisible_4b: false,
      isScheduleVisible_4c: false,
      isScheduleVisible_4d: false,
    }
  },

  name: "SchoolSchedule",

  components: { headerContainer  },

}
</script>

<style scoped>

.school-schedule-junior {
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

.img_container {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 50vh;
  width:                  100%;
  place-items: flex-start;
  place-content: center;
  padding-top: var(--header-height);
  padding-bottom: var(--header-height);
  transition: all 1.8s ease;
}

.img_container_temp {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 150vh;
  width:                  100%;
  place-items: flex-start;
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

.img_container_temp > img {
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
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