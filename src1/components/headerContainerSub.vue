<template>

  <div class="header_container_sub">

    <div id="header_wrapper_sub">

      <h2 id="header_sub"><p>{{ name }}</p></h2>

    </div>

  </div>

</template>

<script>

export default {
  name: 'headerContainerSub',
  props: {
    name: String
  }
}

</script>

<style scoped>

.header_container_sub {
  width:                  100%;
  max-width:              100%;
  height:                 auto;
  margin-top:             calc(0.5*var(--header-height-small));
}

@media (min-width: 60rem) {
  .header_container_sub {
    margin-top:            calc(0.5*var(--header-height));
  }
}

#header_wrapper_sub {
  max-width:              var(--width-wrapper-small);
  margin:                 auto;
  height:                 var(--header-height-small);
  max-height:             var(--header-height-small);
  padding-left:           1rem;
  padding-right:          1rem;
}

@media (min-width: 60rem) {
  #header_wrapper_sub {
    max-width:            var(--width-wrapper-middle);
    height:               var(--header-height);
    max-height:           var(--header-height);
    padding-left:         .5rem;
    padding-right:        .5rem;
  }
}
@media (min-width: 75rem) {
  #header_wrapper_sub {
    max-width:            var(--width-wrapper-large);
  }
}

#header_sub {
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

  #header_sub {
    display:                grid;
    grid-template-columns:  1fr;
    height:                 var(--header-height);
    max-height:             var(--header-height);
    align-self:             center;
    justify-self:           center;
    font-size:              var(--menu-item-font-size-33);
  }
}

#header_sub > p {
  align-self:             center;
  justify-self:           left;
}

</style>
