<template>
  <div class="copyright text-center">
    <small>&copy; Squaregroup 1986 - 2019. All Rights Reserved.</small>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'CopyrightCard.vue',
        components: {},
    })
    export default class Copyright extends Vue {

    }
</script>

<style scoped lang="scss">
  .copyright {
    background: $copyright-bg;

    small {
      color: $white-color;
      font-family: $font-roboto;
      font-size: .9rem;
      margin: 0;
      padding: 25px 15px;
      line-height: 1;
      display: inline-block;

    }
  }
</style>