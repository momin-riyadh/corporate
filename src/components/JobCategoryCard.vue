<template>
  <div ref="jsjobarea" class="job-category-area overflow-auto">



    <div class="job-category mb-3 mb-sm-4">
      <ul>
        <li v-for="{title, vacancy, index} in category">
          <router-link to="/career-list">
            {{ title }}
            <span> ({{vacancy}})</span>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: 'JobCategoryCard.vue',
        components: {}
    })

    export default class JobCategoryCard extends Vue {

        public category: any = [
            {
                title: 'Accounting/Finance',
                vacancy: '22',
            },
            {
                title: 'Medical/Pharmacy',
                vacancy: '102',
            },
            {
                title: 'Law/Legal',
                vacancy: '12',
            },
            {
                title: 'Marketing/Sales',
                vacancy: '24',
            },
            {
                title: 'Research/Consultancy',
                vacancy: '78',
            },
            {
                title: 'Driving/Motor Technician',
                vacancy: '09',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
            {
                title: 'Software/Telecommunication',
                vacancy: '05',
            },
            {
                title: 'Accounting/Finance',
                vacancy: '22',
            },
            {
                title: 'Medical/Pharmacy',
                vacancy: '102',
            },
            {
                title: 'Law/Legal',
                vacancy: '12',
            },
            {
                title: 'Marketing/Sales',
                vacancy: '24',
            },
            {
                title: 'Research/Consultancy',
                vacancy: '78',
            },
            {
                title: 'Driving/Motor Technician',
                vacancy: '09',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
            {
                title: 'Software/Telecommunication',
                vacancy: '05',
            },
            {
                title: 'Education/Training',
                vacancy: '200',
            },
            {
                title: 'Garments/Textile',
                vacancy: '34',
            },
        ];

    }
</script>

<style scoped lang="scss">
  .job-category {
    ul {
      list-style: none;
      column-count: 1;
      column-gap: 6rem;
      margin: 0;
      padding: 0;
      display: block;
      @media(min-width: 961px) {
        column-count: 2;
      }
      @media(min-width: 1265px) {
        column-count: 3;
      }
      @media(min-width: 1905px) {
        column-count: 4;
      }

      li {
        margin: 0;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        a {
          transition: all 0.3s ease-in-out;
          display: block;
          width: 100%;
          padding: 1.5em 0;
          text-decoration: none;
          font-family: $font-roboto;
          color: #222222;
          font-size: calc(17px + (17 - 15) * ((100vw - 300px) / (1600 - 300)));
          z-index: 1;
          position: relative;
          border-bottom: 1px solid #D8D8D8;

          &::before {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 0;
            background-color: #efefef;
            transform-origin: center top;
            transform: scaleY(0);
            transition: transform 0.25s ease-in-out;
          }

          &:hover::before {
            transform-origin: center bottom;
            transform: scaleY(1);
          }
        }
      }
    }
  }
</style>