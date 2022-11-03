<template>

  <div class="about_documents">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Документы"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <div id="content">

              <a class="content_item" :href="`${publicPath}pdf/documents/Устав.pdf`"
                 download="Устав образовательной организации.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Устав образовательной организации
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Свидетельство о государственной аккредитации.pdf`"
                 download="Свидетельство о государственной аккредитации.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Свидетельство о государственной аккредитации
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Лицензия с приложением.pdf`"
                 download="Лицензия с приложением.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Лицензия на осуществление образовательной деятельности (с приложением)
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Свидетельство о государственной регистрации.pdf`"
                 download="Свидетельство о государственной регистрации.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Свидетельство о государственной регистрации
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Свидетельство о регистрации в Министерстве юстиции.pdf`"
                 download="Свидетельство о регистрации в Министерстве юстиции.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Свидетельство о регистрации в Министерстве юстиции
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Пустой.pdf`"
                 download="Правила внутреннего распорядка обучающихся.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила внутреннего распорядка обучающихся - нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Пустой.pdf`"
                 download="Правила внутреннего трудового распорядка.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила внутреннего трудового распорядка - нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Пустой.pdf`"
                 download="Коллективный договор.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Коллективный договор - нет
                </div>
              </a>

              <div class="content_item_header">
                Локальные акты
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Пустой.pdf`"
                 download="Правила приема в лицей.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила приема в лицей - нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Пустой.pdf`"
                 download="Положение о режиме занятий обучающихся.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о режиме занятий обучающихся - нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Пустой.pdf`"
                 download="Положение о нормах оценок по предметам в начальной школе.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о нормах оценок по предметам в начальной школе - нет
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px; color: limegreen; cursor: pointer" v-on:click="activeLocalActs">
                Ещё ...
              </div>

              <div v-if="isActiveLocalActs">     <!-- Открывается по клику Ещё .. -->

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Кодекс этики и служебного поведения работников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Кодекс этики и служебного поведения работников - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Положение об общем собрании работников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об общем собрании работников - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`" download="Положение о библиотеке.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о библиотеке - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Положение о проектной деятельности учащихся.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о проектной деятельности учащихся - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Положение о ведении электронного журнала.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о ведении электронного журнала - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Положение об использовании сети Интернет.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об использовании сети Интернет - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`" download="Положение о школьном сайте.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о школьном сайте - нет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Пустой.pdf`"
                   download="Положение об обработке и защите персональных данных.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об обработке и защите персональных данных - нет
                  </div>
                </a>

              </div>

              <div class="content_item_header">
                Отчет о результатах самообследования
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Пустой.pdf`"
                 download="Положение_о_порядке_проведения_самообследования.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о порядке проведения самообследования - нет
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px">
                Публичные доклады:
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Пустой.pdf`"
                 download="Публичный доклад директора 2020-2021 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2020-2021 учебный год -нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Пустой.pdf`"
                 download="Публичный доклад директора 2019-2020 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2019-2020 учебный год - нет
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px">
                Самообследование:
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Пустой.pdf`"
                 download="Самообследование 2020 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2020 учебный год - нет
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Пустой.pdf`"
                 download="Самообследование 2019 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2019 учебный год - нет
                </div>
              </a>

              <div class="content_item_header">
                Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчеты об исполнении таких предписаний
              </div>

              <div class="content_item">
                <div class="content_item_img">
                </div>
                <div class="content_item_name">
                  Предписаний нет
                </div>
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/prescription/Акт проверки 2021 год.pdf`"
                 download="Акт проверки 2021 год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Акт проверки 2021 год
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>

    </transition>
  </div>
</template>

<script>

import headerContainer from "../components/headerContainer";

export default {
  name: "AboutDocuments",

  components: { headerContainer  },

  data() {
    return {
      //pdfLink: require("@/assets/pdf/01ustav.pdf")
      publicPath: process.env.BASE_URL,
      isActiveLocalActs: false
    }
  },

  methods: {
    activeLocalActs() {
      this.isActiveLocalActs = !this.isActiveLocalActs
    }
  },

  mounted() {

    const sections = document.querySelectorAll('.content_item');

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
  }
}
</script>

<style scoped>

.about_documents {
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
}

@media (min-width: 60rem) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
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
    max-width:              var(--width-wrapper-large);
  }
}

#content {
  display:                grid;
  grid-template-columns:  1fr;
  /*grid-template-rows:     repeat(13, var(--header-height-small));*/
  grid-gap:               9px;
}

@media (min-width: 60rem) {
  #content {
    /*grid-template-rows:     repeat(13, var(--header-height));*/
  }
}

.content_item {
  display:                grid;
  grid-template-columns:  3.125rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                0.1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
}

@media (min-width: 60rem) {
  .content_item {
    grid-template-columns:     3.125rem 1fr;
  }
}

.is-visible {
  opacity: 1;
}

.content_item_img {
  display:                grid;
  grid-template-columns:  2.5rem;
  grid-template-rows:     2.5rem;
  width:                  2.5rem;
  height:                 2.5rem;
  max-height:             2.5rem;
  background:             none;
  place-content:          center;
  place-items:            center;
  margin:                 auto;
}

.content_item_img > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
  transition:             all 200ms;
}

.content_item_name:hover {
  color:                  #666;
}

@media (min-width: 60rem) {
  .content_item_name {
    font-size:              var(--menu-item-font-size-25);
  }
}

.content_item_header {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  width:                  100%;
  align-items:            center;
  justify-items:          flex-start;
  font-size:              var(--menu-item-font-size-25);
  color:                  #666;
  font-weight:            400;
  margin-bottom:          20px;
  margin-top:             40px;
  border-bottom:          1px #d5dddf solid;
}

@media (min-width: 60rem) {
  .content_item_header {
    font-size:              var(--menu-item-font-size-30);
  }
}

.content_item_subheader {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  width:                  100%;
  align-items:            center;
  justify-items:          flex-start;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
  margin-bottom:          15px;
}

@media (min-width: 60rem) {
  .content_item_subheader {
    font-size:              var(--menu-item-font-size-25);
  }
}

.is_hover {
  transition:             all 200ms;
}
.is_hover:hover {
  color:                  #666;
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}

</style>