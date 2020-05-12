<template>
  <div class="featured-job">
    <ul class="align-items-center">
      <li v-for="featured  in featureds">

        <div class="s-featured-job">

          <div class="s-f-job-img">
            <img :src="featured.imageurl" alt="square group">
          </div>

          <div class="s-featured-job-brief">
            <h5>{{ featured.title }} </h5>
            <ul>
              <router-link tag="li" to="/career-details" v-for="sublist in featured.sublists"
                           v-bind:sublist="sublist"> {{ sublist.text }}
              </router-link>
            </ul>
          </div>

        </div>

      </li>
    </ul>
  </div>


</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';


    @Component({
        name: 'FeaturedJobCard',
        components: {}
    })
    export default class FeaturedJobCard extends Vue {
      // @Prop() compData!:
    }
</script>

<style scoped lang="scss">

</style>
