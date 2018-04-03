<template>
    <div class="clearfix">
        <div>
            <router-link to="/my" exact tag="li">work</router-link>
            <router-link :to="{name:'Study'}"  tag="li">study</router-link>
            <router-link :to="{name:'Hobby'}"  tag="li">hobby</router-link>
            {{data}}
        </div>
        <router-view></router-view>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      data: "我的值是啥"
    };
  },
  // 路由中的钩子函数
  beforeRouteEnter(to, from, next) {
    console.log(1231231);
    next(vm => {
      vm.data = "改变了";
      console.log(vm);
    });
  },
  //   组件中的
  beforeCreate() {
    console.log("组件中的钩子函数");
  },
  beforeRouteUpdate(ro, form, next) {
    console.log("导航切换了");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li {
  list-style: none;
  float: left;
  width: 33.33%;
}
</style>
