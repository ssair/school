<template>

  <div  class="schoolteachers">

    <div id="container">

      <div id="header_container">

        <div id="header_wrapper">

          <div id="header"><p>Наши учителя</p></div>

        </div>

      </div>

      <div id="content_container">

        <div id="content_wrapper">

          <div id="content">

            <section v-for="item in item_sort()" :key="item">

              <router-link :to="{ name: 'SchoolTeacherID', params: { id: item.userID}}"
                           class="content_item">
                <div class="content_photo">
                  <img :src = item.photo class="content_item_photo" alt="Фото учителя">
                </div>
                <div class="content_item_name">

                  <div style="font-size: 25px; align-self: flex-end;font-weight: 400;">{{ item.user_last_name }}</div>
                  <div style="font-size: 20px">{{ item.user_first_name }}</div>
                  <div style="font-size: 20px;color: #999;">{{ item.subject }}</div>

                </div>

              </router-link>

            </section>

          </div>


        </div>

      </div>

    </div>

  </div>

</template>

<script>
//import json from '../json/school_teachers.json'
export default {
  name: "SchoolTeachers",
  data() {
    return {
      //items: json['data']

      items:
          [
            { userID: 'abrasheva',
              user_last_name: 'Абрашева',
              user_first_name:'Зинаида Михайловна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/abrasheva.jpg")
            },
            { userID: 'alexandrova',
              user_last_name: 'Александрова',
              user_first_name:'Диана Николаевна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/alexandrova.jpg")
            },
            { userID: 'alekseeva',
              user_last_name: 'Алексеева',
              user_first_name:'Анастасия Андреевна',
              subject: 'английский язык',
              photo: require("@/assets/images/lyceum/photo_teachers/alekseeva.jpg")
            },
            { userID: 'borodina',
              user_last_name: 'Бородина',
              user_first_name:'Оксана Сергеевна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/borodina.jpg")
            },
            { userID: 'vikulina',
              user_last_name: 'Викулина',
              user_first_name:'Людмила Сергеевна',
              subject: 'физика',
              photo: require("@/assets/images/lyceum/photo_teachers/vikulina.jpg")
            },
            { userID: 'danilova',
              user_last_name: 'Данилова',
              user_first_name:'Елена Владимировна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/danilova.jpg")
            },
            { userID: 'egorina',
              user_last_name: 'Егорина',
              user_first_name:'Елена Борисовна',
              subject: 'русский язык и литература',
              photo: require("@/assets/images/lyceum/photo_teachers/egorina.jpg")
            },
            { userID: 'zakharova',
              user_last_name: 'Захарова',
              user_first_name:'Анжелика Константиновна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/zakharova.jpg")
            },
            { userID: 'ivanovaN',
              user_last_name: 'Иванова',
              user_first_name:'Наталья Владимировна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/ivanovaN.jpg")
            },
            { userID: 'ivanovaT',
              user_last_name: 'Иванова',
              user_first_name:'Татьяна Валерьевна',
              subject: 'педагог ДО',
              photo: require("@/assets/images/lyceum/photo_teachers/ivanovaT.jpg")
            },
            { userID: 'ivanov',
              user_last_name: 'Иванов',
              user_first_name:'Константин Геннадьевич',
              subject: 'физкультура',
              photo: require("@/assets/images/lyceum/photo_teachers/ivanov.jpg")
            },
            { userID: 'komarnitskaya',
              user_last_name: 'Комарницкая',
              user_first_name:'Елена Брониславовна',
              subject: 'технология',
              photo: require("@/assets/images/lyceum/photo_teachers/komarnitskaya.jpg")
            },
            { userID: 'kondratiev',
              user_last_name: 'Кондратьев',
              user_first_name:'Игорь Андреевич',
              subject: 'физкультура',
              photo: require("@/assets/images/lyceum/photo_teachers/kondratiev.jpg")
            },
            { userID: 'kormanovskaya',
              user_last_name: 'Кормановская',
              user_first_name:'Ирина Сергеевна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/kormanovskaya.jpg")
            },
            { userID: 'kotova',
              user_last_name: 'Котова',
              user_first_name:'Екатерина Сергеевна',
              subject: 'обществознание',
              photo: require("@/assets/images/lyceum/photo_teachers/kotova.jpg")
            },
            { userID: 'litvinrseva',
              user_last_name: 'Ливинцева',
              user_first_name:'Любовь Андреяновна',
              subject: 'русский язык и литература',
              photo: require("@/assets/images/lyceum/photo_teachers/litvinrseva.jpg")
            },
            { userID: 'makarovskaya',
              user_last_name: 'Макаровская',
              user_first_name:'Юлия Владимировна',
              subject: 'физкультура',
              photo: require("@/assets/images/lyceum/photo_teachers/makarovskaya.jpg")
            },
            { userID: 'nikitina',
              user_last_name: 'Никитина',
              user_first_name:'Наталья Владимировна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/nikitina.jpg")
            },
            { userID: 'sarkisian',
              user_last_name: 'Саркисян',
              user_first_name:'Анжела Вемировна',
              subject: 'физика',
              photo: require("@/assets/images/lyceum/photo_teachers/sarkisian.jpg")
            },
            { userID: 'semikopenko',
              user_last_name: 'Семикопенко',
              user_first_name:'Галина Николаевна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/semikopenko.jpg")
            },
            { userID: 'sidoyova',
              user_last_name: 'Сидорова',
              user_first_name:'Ксения Игоревна',
              subject: 'английский язык',
              photo: require("@/assets/images/lyceum/photo_teachers/sidoyova.jpg")
            },
            { userID: 'slavinskaya',
              user_last_name: 'Славинская',
              user_first_name:'Оксана Михайловна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/slavinskaya.jpg")
            },
            { userID: 'telyatnikova',
              user_last_name: 'Телятникова',
              user_first_name:'Татьяна Юрьевна',
              subject: 'начальные классы',
              photo: require("@/assets/images/lyceum/photo_teachers/telyatnikova.jpg")
            },
            { userID: 'timokhina',
              user_last_name: 'Тимохина',
              user_first_name:'Екатерина Николаевна',
              subject: 'история',
              photo: require("@/assets/images/lyceum/photo_teachers/timokhina.jpg")
            },
            { userID: 'fedorovaE',
              user_last_name: 'Федорова',
              user_first_name:'Екатерина Юрьевна',
              subject: 'математика',
              photo: require("@/assets/images/lyceum/photo_teachers/fedorovaE.jpg")
            },
            { userID: 'filonov',
              user_last_name: 'Филонов',
              user_first_name:'Антон Викторович',
              subject: 'ОБЖ',
              photo: require("@/assets/images/lyceum/photo_teachers/filonov.jpg")
            },
            { userID: 'kharina',
              user_last_name: 'Харина',
              user_first_name:'Галина Анатольевна',
              subject: 'русский язык и литература',
              photo: require("@/assets/images/lyceum/photo_teachers/kharina.jpg")
            }
          ]
    }
  },

  mounted() {

    const sections = document.querySelectorAll('section');

    let options = {
      rootMargin: "0px",
      threshold: 0.5
    }

    var observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.5) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      })
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    })

  },
  beforeRouteUpdate:  function(){
    let elemHeader = document.getElementById('page__header');
    elemHeader.style.backgroundColor = 'rgba(254, 254, 254, .7)';
  },
  methods: {
    item_sort: function () {
      return  this.items.sort((prev, next) => {
        if ( prev.user_last_name < next.user_last_name ) return -1;
        if ( prev.user_last_name < next.user_last_name ) return 1;
      });
    }
  }
}

</script>

<style scoped>

.schoolteachers {
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
  background: #fefeee;    /*radial-gradient(circle, #666 1px, transparent 1px) 60px 60px / 60px 60px;
  background-attachment: fixed;*/
}

#container {
  width:                  100%;
  max-width:              100%;
  font-family:            'IBM Plex Sans', sans-serif;
  margin-top:             calc(2*var(--header-height-small));
  margin-bottom:          calc(2*var(--header-height-small));
}

@media (min-width: 960px) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
  }
}

#header_container {
  width:                  100%;
  max-width:              100%;
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
    padding-left:           .5rem;
    padding-right:          .5rem;
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
  border-bottom:          1px #d5dddf solid;
  font-weight:            500;
  color:                  #666;
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
}

#content_container {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-top:             var(--header-height-small);
  margin-bottom:          var(--header-height-small);
  padding-top:            2rem;
  padding-bottom:         2rem;
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
  height:                 auto;
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

section {
  opacity: 0;
  transition: opacity 1500ms;
}

section.is-visible {
  opacity: 1;
}


#content {
  display:                grid;
  grid-template-columns:  300px;
  grid-template-rows:     repeat(27, 450px);
  max-width:              100%;
  grid-column-gap:        30px;
  grid-row-gap:           60px;
  justify-content:        center;
  align-content:          center;
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     360px 90px;
  cursor:                 pointer;
  border-radius:          15px;
  overflow:               hidden;
}

.content_photo {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  background:             none;
  height:                 360px;
  overflow:               hidden;
  border-radius:          15px;
}

.content_item_photo {
  display:                grid;
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  border-radius:          15px;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     40px 20px 30px;
  height:                 90px;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
  font-weight:            300;
  color:                  #666;
}

@media (min-width: 650px) {
  #content {
    grid-template-columns:  repeat(2, 300px);
    grid-template-rows:     repeat(14, 450px);
  }
}

@media (min-width: 960px) {
  #content {
    grid-template-columns:  repeat(3, 300px);
    grid-template-rows:     repeat(9, 450px);
    grid-column-gap:        20px;
  }
}

@media (min-width: 1200px) {
  #content {
    grid-column-gap:        30px;
  }
}

</style>