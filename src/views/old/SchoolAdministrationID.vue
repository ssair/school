<template>

  <div class="schooladministrationID">

    <div id="container">

      <!--
      <transition name="slideViewEnter" appear>

      <div id="header_container">

        <div id="header_wrapper">

          <div id="header"><p>Администрация лицея</p></div>

        </div>

      </div>

      </transition>
      -->


      <div id="content_container">

        <div id="content_wrapper">

          <div id="content">

            <!-- <div class="empty-for-large"></div> -->

            <transition name="content_photo_move" appear>
              <div id="content_photo">

                <img :src = photo class="content_item_photo" alt="Фото учителя">

              </div>
            </transition>

            <div class="empty-for-large"></div>

            <transition name="content_name_move" appear>
              <div  id="content_name">

                <div id="content_last_name">
                  {{ last_name }}
                </div>

                <div id="content_fitst_name">
                  {{ first_name }}
                </div>

                <div></div>

                <div id="content_subject">
                  {{ subject }}
                </div>

              </div>
            </transition>

            <div></div>

          </div>


        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SchoolAdministrationID",
  data() {
    return {
      items: [
        { userID: 'director',
          user_last_name: 'Иванова',
          user_first_name:'Анна Евгеньевна',
          subject: 'директор',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-01.png")
        },
        { userID: 'petrova',
          user_last_name: 'Петрова',
          user_first_name:'Марина Александровна',
          subject: 'УВР (1-4 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-02.png")
        },
        { userID: 'sidorova',
          user_last_name: 'Сидорова',
          user_first_name:'Нина Алексеевна',
          subject: 'заместитель директора по учебно-воспитательной работе (5-7 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-03.png")
        },
        { userID: 'kartoshkina',
          user_last_name: 'Картошкина',
          user_first_name:'Анна Петровна',
          subject: 'заместитель директора по учебно-воспитательной работе (8-11 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-04.png")
        },
        { userID: 'petrova1',
          user_last_name: 'Петрова',
          user_first_name:'Марина Александровна',
          subject: 'секретарь',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-02.png")
        },
        { userID: 'sidorova1',
          user_last_name: 'Сидорова',
          user_first_name:'Нина Алексеевна',
          subject: 'специалист по кадрам',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-03.png")
        },
        { userID: 'kartoshkina1',
          user_last_name: 'Картошкина',
          user_first_name:'Анна Петровна',
          subject: 'социальный педагог',
          photo: require("@/assets/images/lyceum/photo_teachers/girl-04.png")
        }
      ]
    }
  },
  computed: {
    productId: function () {
      return this.$route.params.id;
    },
    last_name : function () {
      return this.items.find(item => item.userID === this.productId).user_last_name
    },
    first_name : function () {
      return this.items.find(item => item.userID === this.productId).user_first_name
    },
    subject : function () {
      return this.items.find(item => item.userID === this.productId).subject
    },
    photo : function () {
      return this.items.find(item => item.userID === this.productId).photo
    }
  },
  beforeRouteEnter:  function(){
    let elemHeader = document.getElementById('page__header');
    elemHeader.style.backgroundColor = 'rgba(254, 254, 254, .7)';
  },
}

</script>

<style scoped>

.schooladministrationID {
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
  background: #fefeee;    /*radial-gradient(circle, #666 1px, transparent 1px) 60px 60px / 60px 60px;*/
}

#container {
  width:                  100%;
  max-width:              100%;
  font-family:            'IBM Plex Sans', sans-serif;
  margin-top:             var(--header-height-small);
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 960px) {
  #container {
    margin-top:            var(--header-height);
    margin-bottom:         var(--header-height);
  }
}

#header_container {
  width:                  100vw;
  max-width:              100vw;
  height:                 auto;
}

#header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
}

@media (min-width: 960px) {
  #header_wrapper {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
  }
}
@media (min-width: 1200px) {
  #header_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#header {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              30px;
  border-bottom: 1px #666 solid;
}

@media (min-width: 960px) {
  #header {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            40px;
  }
}

#header > p {
  align-self:             center;
  justify-self:           center;
  color:                  #fff;
}

#content_container {
  width:                  100vw;
  max-width:              100vw;
  min-height:             100vh;
  margin-top:             var(--header-height-small);
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 960px) {
  #content_container {
    margin-top:            var(--header-height);
    margin-bottom:         var(--header-height);
  }
}

#content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             100vh;
  border-radius:          15px;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 960px) {
  #content_wrapper {
    max-width: var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 1200px) {
  #content_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     495px minmax(150px, auto);
  place-content:          center;
  place-items:            center;
}

.empty-for-large {
  display: none;
}

@media (min-width: 960px) {
  #content {
    grid-template-columns:  330px .5fr 450px 1fr;
    grid-template-rows:     495px;
    justify-content:        center;
    align-content:          center;
  }

  .empty-for-large {
    display: block;
    min-width: 100%;
  }
}

#content_photo {
  display:                grid;
  grid-template-columns:  330px;
  grid-template-rows:     495px;
  width:                  330px;
  height:                 495px;
  max-height:             495px;
  background:             none;
  place-content:          center;
  place-items:            center;
  overflow:               hidden;
  border-radius:          15px;
}

#content_photo > img {
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  /*background: #fff;*/
  overflow:               hidden;
  border-radius:          15px;
}

#content_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     50px 40px 30px auto;
  padding-top:            2rem;
  place-items:            center;
  align-self:             flex-end;
}

#content_last_name {
  font-size: 40px;
  align-self: center;
  font-weight:            400;
  color:                  #666;
}

#content_fitst_name {
  font-size: 30px;
  align-self: center;
  font-weight:            300;
  color:                  #666;
}

#content_subject {
  font-size: 30px;
  align-self: center;
  text-align: center;
  font-weight:            300;
  color:                  #999;
}

@media (min-width: 960px) {
  #content_name {
    grid-template-rows:     50px 50px 50px auto;
    padding-top: 2rem;
    place-items:            flex-start;
  }

  #content_last_name {
    font-size: 50px;
  }

  #content_fitst_name {
    font-size: 30px;
  }

  #content_subject {
    font-size: 30px;
    text-align: left;
  }
}

.content_photo_move-enter-active {
  transition: all 1s ease-out;
}

.content_photo_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.content_photo_move-enter-from,
.content_photo_move-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.content_name_move-enter-active {
  transition: all 1s ease-out;
}

.content_name_move-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.content_name_move-enter-from,
.content_name_move-leave-to {
  transform: translateX(200px);
  opacity: 0;
}



</style>