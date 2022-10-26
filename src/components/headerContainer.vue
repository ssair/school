<template>

  <div class="header_container">

    <div id="header_wrapper">

      <h1 id="header"><p>{{ name }}</p></h1>

    </div>

  </div>

</template>

<script>

export default {
  name: 'headerContainer',
  props: {
    name: String
  }
}

</script>

<style scoped>

.header_container {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
}

#header_wrapper {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 minmax(var(--header-height-small), auto);
  min-height:             var(--header-height-small);
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  #header_wrapper {
    max-width:            var(--width-wrapper-middle);
    height:               minmax(var(--header-height), auto);
    min-height:           var(--header-height);
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}
@media (min-width: 75rem) {
  #header_wrapper {
    max-width:            var(--width-wrapper-large);
  }
}

#header {
  display:                grid;
  grid-template-columns:  1fr;
  height:                 minmax(var(--header-height-small), auto);
  min-height:             var(--header-height-small);
  align-self:             center;
  justify-self:           center;
  font-size:              var(--header-font-size);
  font-weight:            500;
  color:                  #666;
}

@media (min-width: 60rem) {

  #header {
    display:                grid;
    grid-template-columns:  1fr;
    height:                 minmax(var(--header-height), auto);
    min-height:             var(--header-height);
    align-self:             center;
    justify-self:           center;
    font-size:              var(--header-font-size-large);
  }
}

#header > p {
  align-self:             center;
  justify-self:           left;
}

#header_large > p {
  align-self:             center;
  justify-self:           left;
}

</style>
