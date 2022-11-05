<template>

  <div class="page_not_found">

    <transition name="slideViewEnter" appear>

      <div id="container">

        <header-container name="Страница не существует"></header-container>

      </div>

    </transition>

  </div>

</template>

<script>

import headerContainer from "../components/headerContainer";

export default {
  name: "PageNotFound",

  components: { headerContainer }

}

</script>

<style scoped>

.page_not_found {
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

.slideLineMenu-enter-active, .slideLineMenu-leave-active {
  transition: opacity .5s;
}
.slideLineMenu-enter, .slideLineMenu-leave-to {
  opacity: 0;
}

</style>