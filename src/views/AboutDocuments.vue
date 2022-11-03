<template>

  <div class="about_documents">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Документы"></header-container>

        <div id="content_container">

          <div id="content_wrapper">

            <div id="content">

              <a class="content_item" :href="`${publicPath}pdf/documents/Устав образовательной организации.pdf`"
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

              <a class="content_item" :href="`${publicPath}pdf/documents/Правила внутреннего распорядка обучающихся.pdf`"
                 download="Правила внутреннего распорядка обучающихся.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила внутреннего распорядка обучающихся
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Правила внутреннего трудового распорядка.pdf`"
                 download="Правила внутреннего трудового распорядка.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила внутреннего трудового распорядка
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/Коллективный договор.pdf`"
                 download="Коллективный договор.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Коллективный договор
                </div>
              </a>

              <div class="content_item_header">
                Локальные акты
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Правила приема в лицей.pdf`"
                 download="Правила приема в лицей.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Правила приема в лицей
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о режиме занятий обучающихся.pdf`"
                 download="Положение о режиме занятий обучающихся.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о режиме занятий обучающихся
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о нормах оценок по предметам в начальной школе.pdf`"
                 download="Положение о нормах оценок по предметам в начальной школе.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о нормах оценок по предметам в начальной школе
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о системе оценивания знаний  5-11 классов.pdf`"
                 download="Положение о системе оценивания знаний  5-11 классов.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о системе оценивания знаний обучающихся и нормах оценок по учебным предметам 5-11 классов
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о внутренней системе оценки качества образования.pdf`"
                 download="Положение о внутренней системе оценки качества образования.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о внутренней системе оценки качества образования по образовательным программам
                  начального общего, основного общего и среднего общего образования
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о текущей и промежуточной аттестации учащихся.pdf`"
                 download="Положение о текущей и промежуточной аттестации учащихся.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о текущей и промежуточной аттестации учащихся и переводе их в следующий класс
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Порядок оформления образовательных отношений.pdf`"
                 download="Порядок оформления образовательных отношений.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Порядок оформления возникновения, приостановления и прекращения образовательных отношений между
                  ГБОУ лицеем №144 и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/Положение о порядке и основаниях перевода.pdf`"
                 download="Положение о порядке и основаниях перевода.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о порядке и основаниях перевода, отчисления и восстановления обучающихся
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/График входа в лицей на 2021-2022 учебный год.pdf`"
                 download="График входа в лицей на 2021-2022 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  График входа в лицей на 2021-2022 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/График выхода классов на перемену на 2021-2022 учебный год.pdf`"
                 download="График выхода классов на перемену на 2021-2022 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  График выхода классов на перемену на 2021-2022 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/local-acts/График контрольных работ на I полугодие 2021-2022 учебного года.pdf`"
                 download="График контрольных работ на I полугодие 2021-2022 учебного года.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  График контрольных работ на I полугодие 2021-2022 учебного года
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px; color: limegreen; cursor: pointer" v-on:click="activeLocalActs">
                Ещё ...
              </div>

              <div v-if="isActiveLocalActs">     <!-- Открывается по клику Ещё .. -->

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Программа развития.pdf`" download="Программа развития.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Программа развития ГБОУ лицея №144 до 2025 года
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о структуре.pdf`" download="Положение о структуре.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о структуре, содержании, порядке разработки и утверждения основных образовательных программ начального общего,
                    основного общего и среднего общего образования по Федеральным государственным образовательным стандартам общего образования
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Кодекс этики и служебного поведения работников.pdf`"
                   download="Кодекс этики и служебного поведения работников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Кодекс этики и служебного поведения работников
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об общем собрании работников.pdf`"
                   download="Положение об общем собрании работников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об общем собрании работников
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о Попечительском Совете.pdf`"
                   download="Положение о Попечительском Совете.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о Попечительском Совете
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о методическом cовете.pdf`" download="Положение о методическом совете.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о методическом совете
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о педагогическом совете.pdf`"
                   download="Положение о педагогическом совете.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о педагогическом совете
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об индивидуальном проекте обучающихся.pdf`"
                   download="Положение об индивидуальном проекте обучающихся.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об индивидуальном проекте обучающихся
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Договор о предоставлении общего образования.pdf`"
                   download="Договор о предоставлении общего образования.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Договор о предоставлении общего образования
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о формах и порядке проведения государственной итоговой аттестации.pdf`"
                   download="Положение о формах и порядке проведения государственной итоговой аттестации.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о формах и порядке проведения государственной итоговой аттестации
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Правила индивидуального отбора при приёме либо переводе.pdf`"
                   download="Правила индивидуального отбора при приёме либо переводе.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Правила индивидуального отбора при приёме либо переводе
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о ШМО.pdf`" download="Положение о ШМО.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о ШМО
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о методическом объединении учителей начальных классов.pdf`"
                   download="Положение о методическом объединении учителей начальных классов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о методическом объединении учителей начальных классов
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о временной творческой группе.pdf`"
                   download="Положение о временной творческой группе.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о временной творческой группе
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о внутришкольном контроле.pdf`"
                   download="Положение о внутришкольном контроле.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о внутришкольном контроле
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о школьной службе медиации.pdf`"
                   download="Положение о школьной службе медиации.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о школьной службе медиации (примирения)
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о службе здоровья.pdf`" download="Положение о службе здоровья.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о службе здоровья
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о Совете профилактики правонарушений.pdf`"
                   download="Положение о Совете профилактики правонарушений.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о Совете профилактики правонарушений
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о библиотеке.pdf`" download="Положение о библиотеке.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о библиотеке
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о профилактике детского дорожно-транспортного травматизма.pdf`"
                   download="Положение о профилактике детского дорожно-транспортного травматизма.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о профилактике детского дорожно-транспортного травматизма
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о наставничестве.pdf`"
                   download="Положение о наставничестве.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о наставничестве
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о  рабочей программе учителя начальных классов.pdf`"
                   download="Положение о  рабочей программе учителя начальных классов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о  рабочей программе учителя начальных классов, работающего по ФГОС НОО
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о рабочей программе учителя.pdf`"
                   download="Положение о рабочей программе учителя.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о рабочей программе учителя, работающего по ФГОС
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о едином орфографическом режиме.pdf`"
                   download="Положение о едином орфографическом режиме.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о едином орфографическом режиме
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о языке образования.pdf`"
                   download="Положение о языке образования.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о языке образования в образовательной организации
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об инженерном классе.pdf`"
                   download="Положение об инженерном классе.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об инженерном классе
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о формах обучения.pdf`"
                   download="Положение о формах обучения.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о формах обучения и формах получения образования
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об организации деятельности по оказанию образовательных платных услуг.pdf`"
                   download="Положение об организации деятельности по оказанию образовательных платных услуг.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об организации деятельности по оказанию образовательных платных услуг
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об организации индивидуального обучения детей на дому.pdf`"
                   download="Положение об организации индивидуального обучения детей на дому.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об организации индивидуального обучения детей на дому
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о портфолио учащихся 1-4 классов.pdf`"
                   download="Положение о портфолио учащихся 1-4 классов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о портфолио учащихся 1-4 классов
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о портфолио учащихся 5-9 классов.pdf`"
                   download="Положение о портфолио учащихся 5-9 классов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о портфолио учащихся 5-9 классов
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о внеурочной деятельности в 1-4 классах.pdf`"
                   download="Положение о внеурочной деятельности в 1-4 классах.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о внеурочной деятельности в 1-4 классах
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о внеурочной деятельности в 5-11 классах.pdf`"
                   download="Положение о внеурочной деятельности в 5-11 классах.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о внеурочной деятельности в 5-11 классах
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о классах углубленного изучения отдельных предметов.pdf`"
                   download="Положение о классах углубленного изучения отдельных предметов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о классах углубленного изучения отдельных предметов
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об олимпиадах и конкурсах лицея.pdf`"
                   download="Положение об олимпиадах и конкурсах лицея.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об олимпиадах и конкурсах лицея
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о школьном этапе Всероссийской олимпиады школьников.pdf`"
                   download="Положение о школьном этапе Всероссийской олимпиады школьников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о школьном этапе Всероссийской олимпиады школьников
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о семейном образовании.pdf`"
                   download="Положение о семейном образовании.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о семейном образовании и самообразовании
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о группе продленного дня.pdf`"
                   download="Положение о группе продленного дня.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о группе продленного дня
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об сновах религиозных культур.pdf`"
                   download="Положение об сновах религиозных культур.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о регламенте организации и преподавания курса «Основы религиозных культур и светской этики»
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о школьной форме.pdf`"
                   download="Положение о школьной форме.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о школьной форме
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Приложение к положению о школьной форме (эмблема).pdf`"
                   download="Приложение к положению о школьной форме (эмблема).pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Приложение к положению о школьной форме (эмблема)
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об ученическом самоуправлении.pdf`"
                   download="Положение об ученическом самоуправлении.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об ученическом самоуправлении
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение по определению критериев эффективности деятельности классных коллективов.pdf`"
                   download="Положение по определению критериев эффективности деятельности классных коллективов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение по определению критериев эффективности деятельности классных коллективов
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о проектной деятельности учащихся.pdf`"
                   download="Положение о проектной деятельности учащихся.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о проектной деятельности учащихся
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о применении поощрений к учащимся.pdf`"
                   download="Положение о применении поощрений к учащимся.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о применении поощрений к учащимся
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о комиссии по применению к учащимся мер дисциплинарного взыскания.pdf`"
                   download="Положение о комиссии по применению к учащимся мер дисциплинарного взыскания.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о комиссии по применению к учащимся мер дисциплинарного взыскания
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о внутришкольном контроле учащихся.pdf`"
                   download="Положение о внутришкольном контроле учащихся.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о внутришкольном контроле учащихся, находящихся в социально опасном положении
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о деятельности классного руководителя.pdf`"
                   download="Положение о деятельности классного руководителя.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о деятельности классного руководителя
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о комиссии организации приёма в 1 класс.pdf`"
                   download="Положение о комиссии организации приёма в 1 класс.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о комиссии организации приёма в 1 класс
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение o проведении аттестации.pdf`"
                   download="Положение o проведении аттестации.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение o проведении аттестации педагогических работников в целях подтверждения соответствия занимаемой ими должности
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о повышении квалификации.pdf`"
                   download="Положение о повышении квалификации.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о повышении квалификации педагогических и руководящих работников
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о ведении электронного журнала.pdf`"
                   download="Положение о ведении электронного журнала.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о ведении электронного журнала
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об использовании сети Интернет.pdf`"
                   download="Положение об использовании сети Интернет.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об использовании сети Интернет
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о школьном сайте.pdf`" download="Положение о школьном сайте.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о школьном сайте
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о порядке хранения в архивах.pdf`"
                   download="Положение о порядке хранения в архивах.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о порядке хранения в архивах на бумажных и(или) электронных
                    носителях информации о результатах освоения обучающимися образовательных программ
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об обработке и защите персональных данных.pdf`"
                   download="Положение об обработке и защите персональных данных.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об обработке и защите персональных данных
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о комиссии по урегулированию споров.pdf`"
                   download="Положение о комиссии по урегулированию споров.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о комиссии по урегулированию споров между участниками образовательных отношений
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об организации деятеьности по оказанию дополнительных образовательных услуг.pdf`"
                   download="Положение об организации деятеьности по оказанию дополнительных образовательных услуг.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об организации деятеьности по оказанию дополнительных образовательных услуг
                  </div>
                </a>

                <a class="content_item"  style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об одод.pdf`"
                   download="Положение об одод.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об отделение дополнительного образования детей
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о порядке предоставления в пользование учебников.pdf`"
                   download="Положение о порядке предоставления в пользование учебников.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о порядке предоставления в пользование учебников и учебных пособий обучающимся, осваивающим
                    основные образовательные программы в пределах федеральных государственных
                    образовательных стандартов ГБОУ лицея №144 Калининского района Санкт-Петербурга
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о расследовании, оформлении и учете несчастных случаев с учащимися.pdf`"
                   download="Положение о расследовании, оформлении и учете несчастных случаев с учащимися.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о расследовании, оформлении и учете несчастных случаев с учащимися
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о социальной поддержки.pdf`"
                   download="Положение о социальной поддержки.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о реализации Закона Санкт-Петербурга «О дополнительных мерах социальной
                    поддержки отдельных категорий граждан в части предоставления питания на льготной основе в образовательных учреждениях Санкт-Петербурга»
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о создании необходимых условий для охраны и укрепления здоровья.pdf`"
                   download="Положение о создании необходимых условий для охраны и укрепления здоровья.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о создании необходимых условий для охраны и укрепления здоровья, организации питания обучающихся и работников
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об организации работы службы психолого-педагогического сопровождения.pdf`"
                   download="Положение об организации работы службы психолого-педагогического сопровождения.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об организации работы службы психолого-педагогического сопровождения
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о порядке заполнения, учете и выдаче аттестатов.pdf`"
                   download="Положение о порядке заполнения, учете и выдаче аттестатов.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о порядке заполнения, учете и выдаче аттестатов
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение об обеспечении условий доступности.pdf`"
                   download="Положение об обеспечении условий доступности.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение об обеспечении условий доступности для инвалидов и маломобильных групп населения и предоставляемых услуг
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о комиссии по противодействию коррупции.pdf`"
                   download="Положение о комиссии по противодействию коррупции.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о комиссии по противодействию коррупции
                  </div>
                </a>

                <a class="content_item" style="opacity: 1"
                   :href="`${publicPath}pdf/documents/local-acts/local-acts-more/Положение о порядке привлечения,
                            расходования и учета добровольных пожертвований.pdf`"
                   download="Положение о порядке привлечения, расходования и учета добровольных пожертвований.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Положение о порядке привлечения, расходования и учета добровольных пожертвований
                  </div>
                </a>

              </div>

              <div class="content_item_header">
                Отчет о результатах самообследования
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/Положение о порядке проведения самообследования.pdf`"
                 download="Положение_о_порядке_проведения_самообследования.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Положение о порядке проведения самообследования
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px">
                Публичные доклады:
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/public2020-2021.pdf`"
                 download="Публичный доклад директора 2020-2021 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2020-2021 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/public2019-2020.pdf`"
                 download="Публичный доклад директора 2019-2020 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2019-2020 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/public2018-2019.pdf`"
                 download="Публичный доклад директора 2018-2019 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2018-2019 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/public2017-2018.pdf`"
                 download="Публичный доклад директора 2017-2018 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Публичный доклад директора 2017-2018 учебный год
                </div>
              </a>

              <div class="content_item_subheader" style="margin-top: 9px">
                Самообследование:
              </div>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/selfexamination2020.pdf`"
                 download="Самообследование 2020 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2020 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/selfexamination2019.pdf`"
                 download="Самообследование 2019 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2019 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/selfexamination2018.pdf`"
                 download="Самообследование 2018 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2018 учебный год
                </div>
              </a>

              <a class="content_item" :href="`${publicPath}pdf/documents/self-examination/selfexamination2017.pdf`"
                 download="Самообследование 2017 учебный год.pdf">
                <div class="content_item_img">
                  <img src="../assets/images/download.png" alt="Скачать">
                </div>
                <div class="content_item_name">
                  Самообследование 2017 учебный год
                </div>
              </a>

              <div class="content_item_header">
                Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчеты об исполнении таких предписаний
              </div>

              <!--
              <div style="border: 1px #999 solid; border-radius: 9px;">

                <a class="content_item" :href="`${publicPath}pdf/documents/prescription/prescription78-02-07-65.pdf`" download="Предписание_№78-02-07-65.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Предписание № 78-02-07-65
                  </div>
                </a>

                <article class="content_item">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Отчет об исполнении
                  </div>
                </article>

              </div>
              -->

              <div style="border: 1px #d5dddf solid; border-radius: 9px;">

                <a class="content_item" :href="`${publicPath}pdf/documents/prescription/prescription78-02-0527-100-2021.pdf`"
                   download="Предписание_№78-02-0527-100-2021.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Предписание № Ю 78-02-05/27-100-2021
                  </div>
                </a>

                <a class="content_item" :href="`${publicPath}pdf/documents/prescription/prescription78-02-0527-100-2021-otvet.pdf`"
                   download="Ответ_на_предписание_№78-02-0527-100-2021.pdf">
                  <div class="content_item_img">
                    <img src="../assets/images/download.png" alt="Скачать">
                  </div>
                  <div class="content_item_name">
                    Отчет об исполнении
                  </div>
                </a>

              </div>

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