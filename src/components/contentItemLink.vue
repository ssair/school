<template>

  <div class="content-item-link">

    <a id="content_item" :href="`${publicPath}+{{path}}`"
       download={{down}}>
      <div id="content_item_img">
        <img src="../assets/images/download.png" alt="Скачать">
      </div>
      <div id="content_item_name">
        {{ name }}
      </div>
    </a>

  </div>

</template>

<script>

export default {
  name: 'contentItemLink',
data() {
  return {
    publicPath: process.env.BASE_URL,
  }
},
  props: {
    path: String,
    down: String,
    name: String
  }
}

</script>

<style scoped>

.content-item-link {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
}

#content_item {
  display:                grid;
  grid-template-columns:  3.125rem 1fr;
  grid-template-rows:     auto;
  min-height:             3.125rem;
  opacity:                1;
  transition:             opacity 500ms;
  grid-column-gap:        20px;
}

@media (min-width: 60rem) {
  #content_item {
    grid-template-columns:     3.125rem 1fr;
  }
}

.is-visible {
  opacity: 1;
}

#content_item_img {
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

#content_item_img > img {
  width:                  2.5rem;
  height:                 2.5rem;
  object-fit:             cover;
  place-content:          center;
  place-items:            center;
}

#content_item_name {
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

#content_item_name:hover {
  color:                  #666;
}

@media (min-width: 60rem) {
  #content_item_name {
    font-size:              var(--menu-item-font-size-25);
  }
}


</style>
