<template>
  <div>
      <p>我是user</p>
      <div class="userList">
          <router-link style="padding:0 15px" :to="{path:'/user/'+item.type+'/'+item.userId,query:{info:'share'}}" :key="item.userName" v-for="item,index in userList">{{item.userName}}</router-link>
      </div>
      <div class="userInfo" v-if="userInfo.userName">
          <p>
              <span>姓名：</span>
              <span>{{userInfo.userName}}</span>
          </p>
           <p>
              <span>性别：</span>
              <span>{{userInfo.sex}}</span>
          </p>
           <p>
              <span>类型：</span>
              <span>{{userInfo.type}}</span>
          </p>
           <p>
              <span>爱好：</span>
              <span>{{userInfo.hobby}}</span>
          </p>
      </div>
      <hr>
      <div  v-if="userInfo.userName"  class="userlistInfo">
          <!-- <router-link exact to="?info=follow">他的关注</router-link>
          <router-link exact to="?info=share">他的分享</router-link> -->
         <router-link exact :to="{path:'',query:{info:'follow'}}">他的关注</router-link>
         <router-link exact :to="{path:'',query:{info:'share'}}">他的分享</router-link>
      </div>
  </div>
</template>
<script>
var data = [
  {
    userId: 1,
    userName: "小白",
    type: "vip",
    sex: "男",
    hobby: "唱歌"
  },
  {
    userId: 2,
    userName: "初级",
    type: "vip",
    sex: "男",
    hobby: "读书"
  },
  {
    userId: 3,
    userName: "中级",
    type: "common",
    sex: "男",
    hobby: "运动"
  },
  {
    userId: 4,
    userName: "高级",
    type: "common",
    sex: "男",
    hobby: "写代码"
  }
];
export default {
  data() {
    return {
      userList: data,
      userInfo: {}
    };
  },
  created() {
    // path 字符串 对应当路由的路径
    // params 对象 包含动态路由参数
    // query 对象 URL查询参数
    // hash 字符串 当前路由的哈希值
    // fullPath 字符串 URL包含查询参数和hash的完整路径
    // matched 数组 包含当前路由的所有嵌套路径片段的路由记录
    // name 字符串 当前路由的名称

    // 渲染这个组件会调用一次生命周期函数 复用这个组件不会再次被调用了
    // 地址一旦发生变化，$route会更新生成一个路由信息
    this.getDate();
    // console.log(this.userInfo);
  },
  watch: {
    $route() {
      //   监控$route
      console.log(this.$route.params.userId);
      //   路径发生变化 $route会重新赋值，监控了这个属性 会执行这个函数
      this.getDate();
    }
  },
  methods: {
    getDate() {
      let id = this.$route.params.userId;
      if (id) {
        this.userInfo = this.userList.filter(item => {
          return item.userId == id;
        })[0];
      } else {
        this.userInfo = {};
      }
    }
  }
};
</script>
<style>

</style>

