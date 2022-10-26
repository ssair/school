<template>

  <div class="schoolteachersID">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <!--

        <div id="header_container">

          <div id="header_wrapper">

            <div id="header"><p>Наши учителя</p></div>

          </div>

        </div>

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

    </transition>

  </div>

</template>

<script>
export default {
  name: "SchoolTeacherID",
  data() {
    return {
      items: [
        { userID: 'abrasheva',
          user_last_name: 'Абрашева',
          user_first_name:'Зинаида Михайловна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/abrasheva.jpg")
        },
        { userID: 'alexandrova',
          user_last_name: 'Александрова',
          user_first_name:'Диана Николаевна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/alexandrova.jpg")
        },
        { userID: 'alekseeva',
          user_last_name: 'Алексеева',
          user_first_name:'Анастасия Андреевна',
          subject: 'Учитель английского языка',
          photo: require("@/assets/images/lyceum/photo_teachers/alekseeva.jpg")
        },
        { userID: 'borodina',
          user_last_name: 'Бородина',
          user_first_name:'Оксана Сергеевна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/borodina.jpg")
        },
        { userID: 'vikulina',
          user_last_name: 'Викулина',
          user_first_name:'Людмила Сергеевна',
          subject: 'Учитель физики',
          photo: require("@/assets/images/lyceum/photo_teachers/vikulina.jpg")
        },
        { userID: 'danilova',
          user_last_name: 'Данилова',
          user_first_name:'Елена Владимировна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/danilova.jpg")
        },
        { userID: 'egorina',
          user_last_name: 'Егорина',
          user_first_name:'Елена Борисовна',
          subject: 'Учитель русского языка и литературы',
          photo: require("@/assets/images/lyceum/photo_teachers/egorina.jpg")
        },
        { userID: 'zakharova',
          user_last_name: 'Захарова',
          user_first_name:'Анжелика Константиновна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/zakharova.jpg")
        },
        { userID: 'ivanovaN',
          user_last_name: 'Иванова',
          user_first_name:'Наталья Владимировна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/ivanovaN.jpg")
        },
        { userID: 'ivanovaT',
          user_last_name: 'Иванова',
          user_first_name:'Татьяна Валерьевна',
          subject: 'Педагог дополнительного образования',
          photo: require("@/assets/images/lyceum/photo_teachers/ivanovaT.jpg")
        },
        { userID: 'ivanov',
          user_last_name: 'Иванов',
          user_first_name:'Константин Геннадьевич',
          subject: 'Учитель физкультуры',
          photo: require("@/assets/images/lyceum/photo_teachers/ivanov.jpg")
        },
        { userID: 'komarnitskaya',
          user_last_name: 'Комарницкая',
          user_first_name:'Елена Брониславовна',
          subject: 'Учитель технологии',
          photo: require("@/assets/images/lyceum/photo_teachers/komarnitskaya.jpg")
        },
        { userID: 'kondratiev',
          user_last_name: 'Кондратьев',
          user_first_name:'Игорь Андреевич',
          subject: 'Учитель физкультуры',
          photo: require("@/assets/images/lyceum/photo_teachers/kondratiev.jpg")
        },
        { userID: 'kormanovskaya',
          user_last_name: 'Кормановская',
          user_first_name:'Ирина Сергеевна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/kormanovskaya.jpg")
        },
        { userID: 'kotova',
          user_last_name: 'Котова',
          user_first_name:'Екатерина Сергеевна',
          subject: 'Учитель обществознания',
          photo: require("@/assets/images/lyceum/photo_teachers/kotova.jpg")
        },
        { userID: 'litvinrseva',
          user_last_name: 'Ливинцева',
          user_first_name:'Любовь Андреяновна',
          subject: 'Учитель русского языка и литературы',
          photo: require("@/assets/images/lyceum/photo_teachers/litvinrseva.jpg")
        },
        { userID: 'makarovskaya',
          user_last_name: 'Макаровская',
          user_first_name:'Юлия Владимировна',
          subject: 'Учитель физкультуры',
          photo: require("@/assets/images/lyceum/photo_teachers/makarovskaya.jpg")
        },
        { userID: 'nikitina',
          user_last_name: 'Никитина',
          user_first_name:'Наталья Владимировна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/nikitina.jpg")
        },
        { userID: 'sarkisian',
          user_last_name: 'Саркисян',
          user_first_name:'Анжела Вемировна',
          subject: 'Учитель физики',
          photo: require("@/assets/images/lyceum/photo_teachers/sarkisian.jpg")
        },
        { userID: 'semikopenko',
          user_last_name: 'Семикопенко',
          user_first_name:'Галина Николаевна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/semikopenko.jpg")
        },
        { userID: 'sidoyova',
          user_last_name: 'Сидорова',
          user_first_name:'Ксения Игоревна',
          subject: 'Учитель английского языка',
          photo: require("@/assets/images/lyceum/photo_teachers/sidoyova.jpg")
        },
        { userID: 'slavinskaya',
          user_last_name: 'Славинская',
          user_first_name:'Оксана Михайловна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/slavinskaya.jpg")
        },
        { userID: 'telyatnikova',
          user_last_name: 'Телятникова',
          user_first_name:'Татьяна Юрьевна',
          subject: 'Учитель начальных классов',
          photo: require("@/assets/images/lyceum/photo_teachers/telyatnikova.jpg")
        },
        { userID: 'timokhina',
          user_last_name: 'Тимохина',
          user_first_name:'Екатерина Николаевна',
          subject: 'Учитель истории',
          photo: require("@/assets/images/lyceum/photo_teachers/timokhina.jpg")
        },
        { userID: 'fedorovaE',
          user_last_name: 'Федорова',
          user_first_name:'Екатерина Юрьевна',
          subject: 'Учитель математики',
          photo: require("@/assets/images/lyceum/photo_teachers/fedorovaE.jpg")
        },
        { userID: 'filonov',
          user_last_name: 'Филонов',
          user_first_name:'Антон Викторович',
          subject: 'Учитель ОБЖ',
          photo: require("@/assets/images/lyceum/photo_teachers/filonov.jpg")
        },
        { userID: 'kharina',
          user_last_name: 'Харина',
          user_first_name:'Галина Анатольевна',
          subject: 'Учитель русского языка и литературы',
          photo: require("@/assets/images/lyceum/photo_teachers/kharina.jpg")
        }
      ]
    }
  },
  computed: {
    productId : function ()  {
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
  }
}
</script>

<style scoped>

.schoolteachersID {
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
  color:                  #000;
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
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
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
  /*place-content:          center;*/
  place-items:            center;
  overflow:               hidden;
  border-radius:          9px;
}

#content_photo > img {
  width:                  100%;
  height:                 100%;
  object-fit:             contain;
  /*background: #fff;*/
  overflow:               hidden;
  border-radius:          9px;
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