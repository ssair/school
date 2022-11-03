<template>

  <div class="about_education_paid_services">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Платные образовательные услуги"></header-container>

        <header-container-sub name="Для родителей"></header-container-sub>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">

              <a class="content_item_link"
                 :href="`${publicPath}pdf/documents/paid-educational-services/Договор на оказание дополнительных образовательных услуг.pdf`"
                 download="Договор на оказание дополнительных образовательных услуг.pdf">
                <div class="content_item_img_link">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name_link">
                  Договор на оказание дополнительных образовательных услуг
                </div>
              </a>

              <a class="content_item_link"
                 :href="`${publicPath}pdf/documents/paid-educational-services/Заявление на перерасчет оплаты.doc`"
                 download="Заявление на перерасчет оплаты.doc">
                <div class="content_item_img_link">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name_link">
                  Заявление на перерасчет оплаты
                </div>
              </a>

              <a class="content_item_link"
                 :href="`${publicPath}pdf/documents/paid-educational-services/Заявление на исключение из договора отдельной услуги.doc`"
                 download="Заявление на исключение из договора отдельной услуги.doc">
                <div class="content_item_img_link">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name_link">
                  Заявление на исключение из договора отдельной услуги
                </div>
              </a>

              <a class="content_item_link"
                 :href="`${publicPath}pdf/documents/paid-educational-services/Заявление о расторжении договора.doc`"
                 download="Заявление о расторжении договора.doc">
                <div class="content_item_img_link">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name_link">
                  Заявление о расторжении договора
                </div>
              </a>

              <a class="content_item_link" :href="`${publicPath}pdf/documents/paid-educational-services/Образец квитанции (не для оплаты).pdf`"
                 download="Образец квитанции (не для оплаты).pdf">
                <div class="content_item_img_link">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name_link">
                  Образец квитанции (не для оплаты)
                </div>
              </a>

              <article class="content_item" style="padding-top: 25px">
                <div class="item">
                  <p class="content_item_name">Контакты</p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">Основная и средняя школа:</p>
                  <p class="content_item_subname" style="color: #333">Сычева Ирина Валерьевна</p>
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">591-33-40</p>
                  <p class="content_item_subname">Начальная школа:</p>
                  <p class="content_item_subname" style="color: #333">Коршунова Вера Викторовна</p>
                  <p class="content_item_subname" style="color: #333; padding-bottom: 9px">591-42-77</p>
                  <p class="content_item_subname">Спортивные секции:</p>
                  <p class="content_item_subname" style="color: #333">Петченко Ирина Евгеньевна</p>
                  <p class="content_item_subname" style="color: #333">591-33-40</p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Электронная почта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="mailto:lyceum144spb@obr.gov.spb.ru">lyceum144spb@obr.gov.spb.ru</a>
                  </p>
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="mailto:lyceum144spb@obr.gov.spb.ru">gimn144spb@yandex.ru</a>
                  </p>
                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Адрес официального сайта </p>
                </div>
                <div class="item_inner">
                  <p class="content_item_subname">
                    <a style="color: royalblue" href="http://www.lyceum144.ru">http://www.lyceum144.ru/paid-educational-services</a>
                  </p>
                </div>
              </article>

            </div>

          </div>

        </div>

        <header-container-sub name="Документы"></header-container-sub>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Нормативные документы</p>
                </div>
                <div class="item_inner">

                  <a class="content_item_link" :href="`${publicPath}pdf/documents/paid-educational-services/Постановление Правительства.pdf`"
                     download="Постановление Правительства.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Постановление Правительства РФ от 15 сентября 2020 г. N 1441 "Об утверждении Правил оказания платных образовательных услуг"
                    </div>
                  </a>

                  <a class="content_item_link" :href="`${publicPath}pdf/documents/paid-educational-services/Методические рекомендации.pdf`"
                     download="Методические рекомендации.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Методические рекомендации «О порядке привлечения и использования средств
                      физических и (или) юридических лиц и мерах по предупреждению незаконного сбора
                      средств с родителей (законных представителей)
                      обучающихся, воспитанников государственных образовательных организаций Санкт-Петербурга»
                    </div>
                  </a>

                  <a class="content_item_link" :href="`${publicPath}pdf/documents/paid-educational-services/Распоряжение Комитета по образованию.pdf`"
                     download="Распоряжение Комитета по образованию.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Распоряжение Комитета по образованию Правительства Санкт-Петербурга об утверждении методических рекомендаций
                    </div>
                  </a>

                </div>
              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Локальные акты</p>
                </div>
                <div class="item_inner">

                  <a class="content_item_link" :href="`${publicPath}pdf/documents/Лицензия с приложением.pdf`"
                     download="Лицензия с приложением.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Лицензия на осуществление образовательной деятельности (с приложением)
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Положение об
                     оказании дополнительных образовательных услуг на платной основе.pdf`"
                     download="Положение об оказании дополнительных образовательных услуг на платной основе.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Положение об оказании дополнительных образовательных услуг на платной основе
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Положение об аттестации
                     обучающихся в системе дополнительных образовательных платных услуг.pdf`"
                     download="Положение об аттестации обучающихся в системе дополнительных образовательных платных услуг.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Положение об аттестации обучающихся в системе дополнительных образовательных платных услуг
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Положение о расходовании внебюджетных
                     средств от оказания платных услуг.pdf`"
                     download="Положение о расходовании внебюджетных средств от оказания платных услуг.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Положение о расходовании внебюджетных средств от оказания платных услуг
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Приказ о порядке привлечения и использования средств.pdf`"
                     download="Положение об оказании дополнительных образовательных услуг на платной основе.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Приказ «О порядке привлечения и использования средств физических и (или) юридических лиц и
                      мерах по предупреждению незаконного сбора средств
                      с родителей (законных представителей) обучающихся»
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/График проведения
                     дополнительных образовательных услуг в начальной школе.pdf`"
                     download="График проведения дополнительных образовательных услуг в начальной школег.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      График проведения дополнительных образовательных услуг в начальной школе
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Положение о порядке привлечения, расходования и учета
                     добровольных пожертвований.pdf`"
                     download="Положение о порядке привлечения, расходования и учета добровольных пожертвований.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Положение о порядке привлечения, расходования и учета добровольных пожертвований
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Предшкольная подготовка</p>
                </div>
                <div class="item_inner">

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Расписние развивающих занятий.jpg`"
                     download="Расписние развивающих занятий.jpg">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Расписние развивающих занятий для детей 5-7 лет
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Предшкольная подготовка.pdf`"
                     download="Предшкольная подготовка.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Предшкольная подготовка
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Учебный план предшкольной подготовки.pdf`"
                     download="Учебный план предшкольной подготовки.pdf">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      Учебный план предшкольной подготовки
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Отчеты о расходовании средств от предпринимательской
                    деятельности (оказание платных образовательных услуг)</p>
                </div>
                <div class="item_inner">

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2020.doc`"
                     download="Отчет о расходовании средств 2020.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2020
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2019.doc`"
                     download="Отчет о расходовании средств 2019.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2019
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2018.doc`"
                     download="Отчет о расходовании средств 2018.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2018
                    </div>
                  </a>

                </div>

              </article>

              <article class="content_item">
                <div class="item">
                  <p class="content_item_name">Образовательные программы</p>
                </div>
                <div class="item_inner">

                  <!--

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2020.doc`"
                     download="Отчет о расходовании средств 2020.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2020
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2019.doc`"
                     download="Отчет о расходовании средств 2019.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2019
                    </div>
                  </a>

                  <a class="content_item_link"
                     :href="`${publicPath}pdf/documents/paid-educational-services/Отчеты о расходовании средств 2018.doc`"
                     download="Отчет о расходовании средств 2018.doc">
                    <div class="content_item_img_link">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_name_link">
                      2018
                    </div>
                  </a>

                  -->

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

import headerContainer from "../components/headerContainer";
import headerContainerSub from "../components/headerContainerSub";
//import contentItemLink from "../components/contentItemLink";


export default {
  name: "AboutEducationPaidServices",

  components: { headerContainer,  headerContainerSub, //contentItemLink
     },

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

.about_education_paid_services {
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

@media (min-width: 960px) {
  #container {
    margin-top:            calc(2*var(--header-height));
    margin-bottom:         calc(2*var(--header-height));
  }
}

.content_container {
  width:                  100%;
  max-width:              100%;
  margin-top:             calc(.5*var(--header-height-small));
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 60rem) {
  .content_container {
    margin-top:            calc(.5*var(--header-height));
    margin-bottom:         var(--header-height);
  }
}

.content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  .content_wrapper {
    max-width:              var(--width-wrapper-middle);
    padding-left:           .5rem;
    padding-right:          .5rem;
  }
}

@media (min-width: 75rem) {
  .content_wrapper {
    max-width:            var(--width-wrapper-large);
  }
}

.content {
  display:                grid;
  grid-template-columns:  1fr;
}

@media (min-width: 60rem) {
  .content {
  }
}

.content_item_link {
  display:                grid;
  grid-template-columns:  3.125rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
}

@media (min-width: 60rem) {
  .content_item_link {
    grid-template-columns:     3.125rem 1fr;
  }
}

.is-visible {
  opacity: 1;
}

.content_item_img_link {
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

.content_item_img_link > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

.content_item_name_link {
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

.content_item_name_link:hover {
  color:                  #666;
}

@media (min-width: 60rem) {
  .content_item_name_link {
    font-size:              var(--menu-item-font-size-25);
  }
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     var(--header-height-small) auto;
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
  height:                 auto;
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
  color:                  #666;
  font-weight:            300;
}

@media (min-width: 960px) {
  .content_item_subname {
    font-size:              var(--menu-item-font-size-25);
  }
}

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}

</style>