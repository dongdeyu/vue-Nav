<template>
  <div id="app">
     
    <ul class="clearfix">
      <li>
        <router-link :to='index' exact event="mouseover">home</router-link>
      </li>
       <li>
         <router-link :to="{path:'/about#abc'}">about</router-link>
      </li>
       <li>
         <router-link to="/my" active-class="pinked">my</router-link>
      </li>
       <li>
         <router-link to="/user">user</router-link>
      </li>
    </ul>
   
    <transition name="left">
        <!-- <router-view name="slider"></router-view> -->
        <router-view class="center"></router-view>
    </transition>
    <input style="z-index:6666;position:relative;" type="button" value="后退" @click="goback">
    <input style="z-index:6666;position:relative;" type="button" value="前进" @click="goforward">
    <input style="z-index:6666;position:relative;" type="button" value="控制步数" @click="go">
    <input style="z-index:6666;position:relative;" type="button" value="跳转到my" @click="push">
    <input style="z-index:6666;position:relative;" type="button" value="replace到my" @click="replace">
   
   
  

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      index: "/",
      names: "left"
    };
  },

  watch: {
    $route(to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = "right";
      } else {
        this.names = "left";
      }
    }
  },

  // route下的b实例 方法
  // back后退一步
  // forward前进一步
  // go指定前进后退步数
  // push导航到不同url，向history栈添加一个新的记录
  // replace 导航到不同的url，替换history栈中当前记录
  methods: {
    goback() {
      this.$router.back();
    },
    goforward() {
      this.$router.forward();
    },
    go() {
      this.$router.go(1000);
    },
    push() {
      // this.$router.push('./my');
      this.$router.push({ path: "./my" });
    },
    replace() {
      this.$router.replace({ path: "./my" });
    }
  }


  
};
</script>

<style>
ul li {
  float: left;
  width: 25%;
  text-align: center;
}
.actived {
  background-color: #f60;
  columns: #fff;
}
.pinked {
  background-color: pink;
  columns: #fff;
}
.center {
  text-align: center;
  position: absolute;
  top: 20px;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
