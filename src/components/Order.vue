<template>
  <div class="hello">
{{this.$store.state.cks}}
    <button  @click="numTurn">数据页</button>

    <!-- 输入框 -->
    <input v-model="change" required oninvalid="setCustomValidity('请输入11位数字')"  placeholder="项目名称"/>
    <div>总共可以输入10个，目前已经输入{{num}}</div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      change:"",
      num:0,
    }
  },

    watch:{
        change:{
           handler(newVal,oldVal) {
              if(newVal.length>10){
                this.change = oldVal;
                return;
             }
             this.num = newVal.length;
        },
        }
    },




  methods: {
    numTurn(){
      this.$store.state.cks = "false";
     this.$store.commit("numTurn_copy",this.$store.state.cks);
          this.$router.push({//你需要接受路由的参数再跳转
                path:"/"
            });

    }
  },
  
mounted (){
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
