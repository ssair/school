<template>
  <div class="about_education_program_secondary">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Рабочие программы основного общего и среднего общего образования"></header-container>

        <div class="header_container_sub">

          <div class="header_wrapper_sub">

            <div class="header_sub"><p>2021-2022  учебный год</p></div>

          </div>

        </div>

        <div class="content_container">

          <div class="content_wrapper">

            <div class="content">

              <article class="content_item">

                <div class="item" v-on:click="isVisible_5class = !isVisible_5class">
                  <p class="content_item_name">5 класс</p>
                </div>

                <transition name="slideViewEnter">
                <div class="item_inner" v-if="isVisible_5class">

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Математика»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Русский язык»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Литература». Класс: 5а
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Литература». 5б, в, г
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Биология»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «География»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «ОДНКР»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Английский язык»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «История»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Технология» (мальчики)
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Технология» (девочки)
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Технология. Технологии ведения дома»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Технология. Индустриальные технологии»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Изобразительное искусство»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Музыка»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Учебный предмет: «Физическая культура»
                    </div>
                  </a>

                  <a class="content_item_doc"
                     :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                     download="Положение об общем собрании работников.pdf">
                    <div class="content_item_doc_img">
                      <img src="../assets/images/download.png" alt="Скачать">
                    </div>
                    <div class="content_item_doc_name is_hover">
                      Аннотация
                    </div>
                  </a>

                </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_6class = !isVisible_6class">
                  <p class="content_item_name">6 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_6class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_7class = !isVisible_7class">
                  <p class="content_item_name">7 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_7class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_8class = !isVisible_8class">
                  <p class="content_item_name">8 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_8class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_9class = !isVisible_9class">
                  <p class="content_item_name">9 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_9class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_10class = !isVisible_10class">
                  <p class="content_item_name">10 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_10class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

              </article>

              <article class="content_item">

                <div class="item" v-on:click="isVisible_11class = !isVisible_11class">
                  <p class="content_item_name">11 класс</p>
                </div>

                <transition name="slideViewEnter">
                  <div class="item_inner" v-if="isVisible_11class">

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Математика»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Русский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». Класс: 5а
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Литература». 5б, в, г
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Биология»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «География»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «ОДНКР»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Английский язык»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «История»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (мальчики)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология» (девочки)
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Технологии ведения дома»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Технология. Индустриальные технологии»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Изобразительное искусство»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Музыка»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Учебный предмет: «Физическая культура»
                      </div>
                    </a>

                    <a class="content_item_doc"
                       :href="`${publicPath}pdf/documents/work-program/work-program-secondary/.pdf`"
                       download="Положение об общем собрании работников.pdf">
                      <div class="content_item_doc_img">
                        <img src="../assets/images/download.png" alt="Скачать">
                      </div>
                      <div class="content_item_doc_name is_hover">
                        Аннотация
                      </div>
                    </a>

                  </div>
                </transition>

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

export default {

  name: "SchoolAboutEducationWorkProgramSecondary",

  components: { headerContainer  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      isVisible_5class: false,
      isVisible_6class: false,
      isVisible_7class: false,
      isVisible_8class: false,
      isVisible_9class: false,
      isVisible_10class: false,
      isVisible_11class: false
    }
  },

  /*
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
  } */

}

</script>

<style scoped>

.about_education_program_secondary {
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

.header_container_sub {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-top:             calc(0.5*var(--header-height-small));
}

@media (min-width: 60rem) {
  .header_container_sub {
    margin-top:            calc(0.5*var(--header-height));
    margin-bottom:         calc(0.5*var(--header-height));
  }
}

.header_wrapper_sub {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  .header_wrapper_sub {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}
@media (min-width: 75rem) {
  .header_wrapper_sub {
    max-width:            var(--width-wrapper-large);
  }
}

.header_sub {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              var(--menu-item-font-size-25);
  font-weight:            500;
  color:                  #666;
}

@media (min-width: 60rem) {

  .header_sub {
    display:                grid;
    grid-template-columns:  1fr;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    align-self:             center;
    justify-self:           center;
    font-size:              var(--menu-item-font-size-33);
  }
}

.header_sub > p {
  align-self:             center;
  justify-self:           left;
}

.content_container {
  width:                  100%;
  max-width:              100%;
  min-height:             100vh;
  margin-top:             calc(0.5*var(--header-height-small));
  margin-bottom:          var(--header-height-small);
}

@media (min-width: 60rem) {
  .content_container {
    margin-top:            calc(0.5*var(--header-height));
    margin-bottom:         var(--header-height);
  }
}

.content_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  min-height:             100vh;
  border-radius:          6px;
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  .content_wrapper {
    max-width:            var(--width-wrapper-middle);
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
  grid-template-rows:     auto;
  grid-gap:               calc(0.3*var(--header-height-small));
}

@media (min-width: 60rem) {
  .content {
    grid-template-rows:     auto;
    grid-gap:               calc(0.3*var(--header-height));
  }
}

.content_item {
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     var(--header-height-small) auto;
  /*opacity:                0.1;*/
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
  font-weight:            300;
  color:                  #666;
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
  cursor:                 pointer;
}

@media (min-width: 960px) {
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

.is_hover {
  transition:             all 200ms;
}
.is_hover:hover {
  color:                  #999;
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

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}
</style>