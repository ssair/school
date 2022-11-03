<template>
  <div class="about_education">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Образование"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <div id="content">

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Уровни образования</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">Начальное общее</p>
                  <p class="content_item_subname">Основное общее</p>
                  <p class="content_item_subname">Среднее общее</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Форма обучения</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="padding-bottom: 9px">Очная</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Нормативный срок обучения</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">Начальное общее:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">4 года</p>
                  <p class="content_item_subname" style="color: #666">Основное общее:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">5 лет</p>
                  <p class="content_item_subname" style="color: #666">Среднее общее:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">2 года</p>
                </div>

              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Срок действия аккредитации</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">До 17 февраля 2026 года</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Язык обучения</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">Русский</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Образовательные программы с аннотациями</p>
                </div>
                <div class="item_inner">
                  <router-link to="/about/education/education-program-primary" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                                Основная образовательная программа начального общего образования
                  </router-link>
                  <router-link to="/about/education/education-program-secondary" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                                Основная образовательная программа основного общего и среднего общего образования
                  </router-link>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Рабочие программы программы с аннотациями</p>
                </div>
                <div class="item_inner">
                  <router-link to="/about/education/work-program-primary" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                    Рабочие программы начального общего образования с аннотациями
                  </router-link>
                  <router-link to="/about/education/work-program-secondary" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                    Рабочие программы основного общего и среднего общего образования  с аннотациями
                  </router-link>
                </div>
              </article>

              <article class="content_item">

                <div class="item">

                  <p class="content_item_name">Учебные планы с аннотацией</p>
                </div>
                <div class="item_inner">
                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/academic-plan/Учебный план начального общего образования.pdf`"
                     download="Учебный план начального общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный план начального общего образования
                    </div>
                  </a>

                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/academic-plan/Учебный план основного общего образования.pdf`"
                     download="Учебный план основного общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный план основного общего образования
                    </div>
                  </a>

                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/academic-plan/Учебный план среднего общего образования.pdf`"
                     download="Учебный план среднего общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный план среднего общего образования
                    </div>
                  </a>

                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/academic-plan/Аннотация к учебному плану.pdf`"
                     download="Аннотация к учебному плану.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация к учебному плану
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Календарный учебный график</p>
                </div>
                <div class="item_inner">
                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/training-calendar/Календарный учебный график начального общего образования.pdf`"
                     download="Календарный учебный график начального общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Календарный учебный график начального общего образования
                    </div>
                  </a>

                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/training-calendar/Календарный учебный график основного общего образования.pdf`"
                     download="Календарный учебный график основного общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Календарный учебный график основного общего образования
                    </div>
                  </a>

                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/training-calendar/Календарный учебный график среднего общего образования.pdf`"
                     download="Календарный учебный график среднего общего образования.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Календарный учебный график среднего общего образования
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Численность обучающихся по образовательным программам</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">1-4 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">487 обучающихся в 16 классах</p>
                  <p class="content_item_subname" style="color: #666">5-9 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">450 обучающихся в 16 классах</p>
                  <p class="content_item_subname" style="color: #666">10-11 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">116 обучающихся в 4 классах</p>
                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Численность обучающихся за счет бюджетных ассигнований бюджетов субъектов РФ</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="color: #666">1-4 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">487 обучающихся</p>
                  <p class="content_item_subname" style="color: #666">5-9 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">450 обучающихся</p>
                  <p class="content_item_subname" style="color: #666">10-11 класс:</p>
                  <p class="content_item_subname" style="padding-bottom: 9px">116 обучающихся</p>
                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Обучающиеся - иностранные граждане</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="padding-bottom: 9px">Отсутствуют</p>
                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Лицензия на осуществление образовательной деятельности</p>
                </div>
                <div class="item_inner">
                  <a class="content_item_doc" :href="`${publicPath}pdf/documents/Лицензия с приложением.pdf`"
                     download="Лицензия с приложением.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Скачать
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Дополнительное образование</p>
                </div>
                <div class="item_inner">
                  <router-link to="/odod" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                    Структурное подразделение ОДОД
                  </router-link>
                  <router-link to="/about/education/paid_services" tag="p"
                               class="content_item_subname is_hover" style="padding-bottom: 9px">
                    Система дополнительных образовательных услуг
                  </router-link>
                </div>

              </article>

              <article class="content_item">

                <div class="item">
                  <p class="content_item_name">Профессиональное образование</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname" style="padding-bottom: 9px">
                    Не осуществляется
                  </p>
                </div>

              </article>

            </div>

          </div>

        </div>

      </div>

    </transition>

  </div>
</template>

<script>

import headerContainer from '../components/headerContainer.vue'

export default {

  name: "AboutEducation",

  components: { headerContainer  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
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

.about_education {
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
    max-width:            var(--width-wrapper-middle);
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
  grid-gap:               calc(0.3*var(--header-height-small));
}

@media (min-width: 60rem) {
  #content {
    grid-template-rows:     auto;
    grid-gap:               calc(0.3*var(--header-height));
  }
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     minmax(var(--header-height-small), auto), auto;
  opacity:                0.1;
  transition:             opacity 500ms;
  margin-bottom:          1rem;
}

@media (min-width: 60rem) {
  .content_item {
    grid-template-rows:     var(--header-height)  auto;
  }
}

.is-visible {
  opacity:                1;
}

.item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  border-bottom:          1px #d5dddf solid;
  min-height:             100%;
  max-width:              100%;
}

.content_item_name {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
}

@media (min-width: 60rem) {
  .content_item_name {
    font-size:              var(--menu-item-font-size-30);
  }
}

.item_inner {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto;
  height:                 auto;
  width:                  100%;
  max-width:              100vw;
  align-items:            center;
  justify-items:          left;
  padding:                1rem;
}

.content_item_subname {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 100%;
  width:                  100%;
  max-width:              100vw;
  align-items:            center;
  justify-items:          left;
  font-size:              var(--menu-item-font-size-20);
  color:                  #333;
  font-weight:            300;
}

@media (min-width: 60rem) {
  .content_item_subname {
    font-size:              var(--menu-item-font-size-25);
  }
}

.content_item_doc {
  display:                grid;
  grid-template-columns:  2.5rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
}

@media (min-width: 60rem) {
  .content_item_doc {
    grid-template-columns:     2.5rem 1fr;
  }
}

.content_item_doc_img {
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

.content_item_doc_img > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

.content_item_doc_name {
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
}

@media (min-width: 960px) {
  .content_item_doc_name {
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