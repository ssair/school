<template>

  <div  class="schooladministration">

    <div id="container">

      <div class="header_container">

        <div class="header_wrapper">

          <div class="header"><p>Органы управления</p></div>

        </div>

      </div>

      <div class="header_container">

        <div class="header_wrapper">

          <div class="header_sub"><p>Директор</p></div>

        </div>

      </div>

      <div id="content_container_director">

        <div id="content_wrapper_director">

          <div id="content_director">

            <section v-for="item in director" :key="item">

              <router-link :to="{ name: 'SchoolAdministrationID', params: { id: item.userID}}"
                           id="content_item_director">
                <div id="content_photo_director">
                  <img :src = item.photo id="content_item_photo_director" alt="Фото учителя">
                </div>
                <div id="content_item_name_director">

                  <div style="font-size: 30px; align-self: flex-end;font-weight: 400;">{{ item.user_last_name }}</div>
                  <div style="font-size: 25px">{{ item.user_first_name }}</div>
                  <!--<div style="font-size: 20px;color: #999;">{{ item.subject }}</div>-->

                </div>

              </router-link>

            </section>

          </div>


        </div>

      </div>

      <div class="header_container">

        <div class="header_wrapper">

          <div class="header_sub"><p>Заместители директора</p></div>

        </div>

      </div>


      <div class="content_container">

        <div class="content_wrapper">

          <div class="content">

            <section v-for="item in items" :key="item">

              <router-link :to="{ name: 'SchoolAdministrationID', params: { id: item.userID}}"
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

      <div class="header_container">

        <div class="header_wrapper">

          <div class="header_sub"><p>Сотрудники лицея</p></div>

        </div>

      </div>

      <div class="content_container">

        <div class="content_wrapper">

          <div class="content" id="content_staff">

            <section v-for="item in staff" :key="item">

              <router-link :to="{ name: 'SchoolAdministrationID', params: { id: item.userID}}"
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

export default {
  name: "SchoolAdministration",
  data() {
    return {
      director: [
        { userID: 'director',
          user_last_name: 'Федорова',
          user_first_name:'Лолита Анатольевна',
          subject: 'директор',
          photo: require("@/assets/images/lyceum/photo_teachers/Fedorova_LA_small.jpg")
        }
      ],
      items: [
        { userID: 'korshunova',
          user_last_name: 'Коршунова',
          user_first_name:'Вера Викторовна',
          subject: 'УВР (1-4 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/Korshunova_small.jpg")
        },
        { userID: 'kasatkina',
          user_last_name: 'Касаткина',
          user_first_name:'Наталья Сергеевна',
          subject: 'УВР (5-7 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/kasatkina_small.jpg")
        },
        { userID: 'sycheva',
          user_last_name: 'Сычева',
          user_first_name:'Ирина Валерьевна',
          subject: 'УВР (8-11 классы)',
          photo: require("@/assets/images/lyceum/photo_teachers/sycheva_small.jpg")
        },
        { userID: 'yakovchenko',
          user_last_name: 'Яковченко',
          user_first_name:'Екатерина Николаевна',
          subject: 'ВР',
          photo: require("@/assets/images/lyceum/photo_teachers/yakovchenko_small.jpg")
        },
        { userID: 'vitse',
          user_last_name: 'Вайц',
          user_first_name:'Карина Сергеевна',
          subject: 'инновационная работа',
          photo: require("@/assets/images/lyceum/photo_teachers/vitse_small.jpg")
        },
        { userID: 'ivanova',
          user_last_name: 'Иванова',
          user_first_name:'Ирина Борисовна',
          subject: 'ИКТ',
          photo: require("@/assets/images/lyceum/photo_teachers/ivanova_small.jpg")
        },
        { userID: 'kolupaeva',
          user_last_name: 'Колупаева',
          user_first_name:'Анна Александровна',
          subject: 'АХЧ',
          photo: require("@/assets/images/lyceum/photo_teachers/kolupaeva_small.jpg")
        },
        { userID: 'petchenko',
          user_last_name: 'Петченко',
          user_first_name:'Ирина Евгеньевна',
          subject: 'ОДОД ',
          photo: require("@/assets/images/lyceum/photo_teachers/petchenko_small.jpg")
        },
        { userID: 'sobolev',
          user_last_name: 'Соболев',
          user_first_name:'Сергей Николаевич',
          subject: 'информатизация',
          photo: "https://drive.google.com/uc?export=view&id=10mku7qJ1UuS4_huQB9OoYnxGhEKMobwB"
        }
      ],
      staff: [
        { userID: 'kapustyan',
          user_last_name: 'Капустян',
          user_first_name:'Светлана Викторовна',
          subject: 'секретарь',
          photo: require("@/assets/images/lyceum/photo_teachers/kapustyan_small.jpg")
        },
        { userID: 'shostka',
          user_last_name: 'Шостка',
          user_first_name:'Людмила Сергеевна',
          subject: 'специалист по кадрам',
          photo: require("@/assets/images/lyceum/photo_teachers/shostka_small.jpg")
        },
        { userID: 'tsvetkova',
          user_last_name: 'Цветкова',
          user_first_name:'Ксения Вячеславовна',
          subject: 'социальный педагог',
          photo: require("@/assets/images/lyceum/photo_teachers/tsvetkova_small.jpg")
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

    let observer = new IntersectionObserver(entries => {
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
  beforeRouteEnter:  function(){
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

.schooladministration {
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
  background: #fefeee;     /*radial-gradient(circle, #666 1px, transparent 1px) 60px 60px / 60px 60px;
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

.header_container {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
}

.header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
}

@media (min-width: 960px) {
  .header_wrapper {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
  }
}
@media (min-width: 1200px) {
  .header_wrapper {
    max-width: var(--width-wrapper-large);
  }
}

.header {
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
  .header {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            40px;
  }
}

.header > p {
  align-self:             center;
  justify-self:           center;
}

.header_sub {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              25px;
  font-weight:            500;
  margin-top:             var(--header-height-small);
  color:                  #666;
}

@media (min-width: 960px) {
  .header_sub {
    height:               var(--header-height);
    max-height:           var(--header-height);
    font-size:            35px;
    margin-top:            var(--header-height);
  }
}

.header_sub > p {
  align-self:             center;
  justify-self:           center;
}

#content_container_director {
  width:                  100%;
  max-width:              100%;
  min-height:             50vh;
  margin-bottom:          var(--header-height-small);
  padding-top:            1rem;
  padding-bottom:         1rem;
}

@media (min-width: 960px) {
  #content_container_director {
    margin-bottom:         var(--header-height);
  }
}

#content_wrapper_director {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             50vh;
  border-radius:          6px;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 960px) {
  #content_wrapper_director {
    max-width: var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 1200px) {
  #content_wrapper_director {
    max-width: var(--width-wrapper-large);
  }
}

#content_director {
  display:                grid;
  grid-template-columns:  330px;
  grid-template-rows:     500px;
  width:                  100%;
  min-height:             50vh;
  justify-content:        center;
  align-content:          center;
}

#content_item_director {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     400px 100px;
  cursor:                 pointer;
  border-radius:          9px;
  overflow:               hidden;
}

#content_photo_director {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  background:             none;
  height:                 400px;
  overflow:               hidden;
  border-radius:          9px;

}

#content_item_photo_director {
  display:                grid;
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  border-radius:          9px;
}

#content_item_name_director {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     50px 25px;
  height:                 100px;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
  font-weight:            300;
  color:                  #666;
}

.content_container {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-bottom:          var(--header-height-small);
  padding-top:            2rem;
  padding-bottom:         2rem;
}

@media (min-width: 960px) {
  .content_container {
    margin-bottom:         var(--header-height);
  }
}

.content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 auto;
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 960px) {
  .content_wrapper {
    max-width: var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}
@media (min-width: 1200px) {
  .content_wrapper {
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


.content {
  display:                grid;
  grid-template-columns:  300px;
  grid-template-rows:     repeat(9, 450px);
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
  border-radius:          9px;
  overflow:               hidden;
}

.content_photo {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  background:             none;
  height:                 360px;
  overflow:               hidden;
  border-radius:          9px;
}

.content_item_photo {
  display:                grid;
  width:                  100%;
  height:                 100%;
  object-fit:             cover;
  border-radius:          9px;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     40px 20px 30px;
  height:                 90px;
  width:                  100%;
  align-items:            center;
  justify-items:          center;
}

@media (min-width: 650px) {
  .content {
    grid-template-columns:  repeat(2, 300px);
    grid-template-rows:     repeat(5, 450px);
  }
}

@media (min-width: 960px) {
  .content {
    grid-template-columns:  repeat(3, 300px);
    grid-template-rows:     repeat(3, 450px);
    grid-column-gap:        20px;
  }
}

@media (min-width: 1200px) {
  .content {
    grid-column-gap:        30px;
  }
}


.content_item_name {
  font-weight:            300;
  color:                  #666;
}

#content_staff {
  grid-template-rows:     repeat(3, 450px);
}

@media (min-width: 650px) {
  #content_staff {
    grid-template-columns:  repeat(2, 300px);
    grid-template-rows:     repeat(2, 450px);
  }
}

@media (min-width: 960px) {
  #content_staff {
    grid-template-columns:  repeat(3, 300px);
    grid-template-rows:     repeat(1, 450px);
    grid-column-gap:        20px;
  }
}

@media (min-width: 1200px) {
  #content_staff {
    grid-column-gap:        30px;
  }
}

</style>