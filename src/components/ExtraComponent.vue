<template>
  <div>
    <button class="hero__arrow-btn" aria-label="Next section" style="opacity: 1;">
      <div class="hero__arrow-btn__pulse"
           style="transform: matrix(40, 0, 0, 40, -1.5, -1.5); opacity: 0;"></div>
      <svg class="hero__arrow-btn__icon">
        <use href="#arrow/down"></use>
      </svg>
    </button>

    <symbol id="arrow/down" viewBox="0 0 22 22">
      <g fill="none" fill-rule="evenodd">
        <g stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M1 15l10 6 10-6" opacity=".2"></path>
          <path d="M3 8l8 4.8L19 8" opacity=".5"></path>
          <path d="M6 1l5 3 5-3"></path>
        </g>
      </g>
    </symbol>
  </div>
</template>

<script>
    export default {
        name: "ExtraComponent"
    }
</script>

<style scoped>

</style>