<template>
  <div class="navigation-area" v-bind:class="type">
    <div class="container-fluid px-5-percent">
      <div class="navigation-main">

        <!--    Square Logo-->
        <div class="sq-logo">
          <router-link to="/" href="">
            <img src="../assets/images/logo.svg" alt="">
          </router-link>
        </div>

        <!--    Right Navigation-->
        <div class="main-navigation">
          <ul>
            <li>
              <router-link class="a-link" to="/about">about</router-link>
            </li>
            <li>
              <router-link to="/business">business</router-link>
            </li>
            <li>
              <el-dropdown>
                <span>
                   <a href="">responsibility</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link to="/corporate-responsibility" tag="span">
                      Corporate Responsibility
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/environment-responsibility" tag="span">
                      Environment Responsibility
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/welfare" tag="span">Welfare</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/compliance" tag="span">Compliance</router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <el-dropdown>
                <span>
                   <router-link to="/stock-information">investor</router-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link to="/stock-information" tag="span">
                      Stock Information
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/financial-information" tag="span">
                      Financial Information
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/annual-report" tag="span">Annual Report</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/corporate-governance" tag="span">Corporate Governance</router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <router-link to="/career">careers</router-link>
            </li>
            <li>
              <router-link to="/news">news & media</router-link>
            </li>
            <li>
              <router-link to="/contact">contact</router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component({
        name: 'NavigationCard.vue',
        components: {},
    })
    export default class Navigation extends Vue {
        @Prop() public type!: any;

        public handleScroll() {
            let scrollpos;
            const d: any = document;
            const nav = d.querySelector('.navigation-area');
            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY || window.pageYOffset;
                if (scrollpos > 300) {
                    nav.classList.add('navbar-fixed');
                    nav.style.backgroundColor='#ffffff';
                } else {
                    nav.classList.remove('navbar-fixed');
                    nav.style.backgroundColor = 'transparent';
                }
            });
        }

        public mounted() {
            window.addEventListener('scroll', this.handleScroll);
        }

        public created() {
            window.addEventListener('scroll', this.handleScroll);
            // this.mbmenu();
        }

        public destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            // setTimeout(() => {
            //     this.mbmenu();
            // }, 600)
        }
    }
</script>

<style scoped lang="scss">
  .navigation-area {
    transition: all 0.3s ease-in-out;
    background-color: #ffffff;
  }

  .navigation-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }

  .main-navigation {
    display: none;
    ul {
      margin: 0;
      padding: 0;
      display: block;
    }

    li {
      list-style: none;
      float: left;
      text-transform: uppercase;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      a {
        transition: all 0.3s ease-in-out;
        color: #292929;
        font-family: $font-roboto;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;

        &.router-link-exact-active {
          color: $brand-color;
        }

        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }

    @media(min-width: 991px) {
      display: block;
    }

  }

  /*Logo */
  .sq-logo {
    cursor: pointer;

    a {
      img {
        width: auto;
        height: 60px;
      }
    }
  }

  .el-dropdown-menu__item span {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-transform: Capitalize;
    font-family: $font-roboto;
    color: inherit;
  }

  .customstyle {
    background-color: transparent;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2000;

    .main-navigation {
      a {
        color: #ffffff;
      }
    }
  }
.navbar-fixed{
  .main-navigation ul li a{
    color: #000;
  }
}
</style>
