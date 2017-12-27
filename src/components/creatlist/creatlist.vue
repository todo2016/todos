<template>
  <div>
    <div class="creat_list">
      <p>
        <label>清单:</label>
        <input type="text" name="user" value="" v-model="subject.title"/>
        <span @click="addTODO()">+</span>
      </p>
      <div v-for="item in todos">
        <p class="creat_chir">
          <label>子清单</label>
          <input type="text" v-focus="true" v-model="item.content"/>
        </p>
      </div>


    </div>

    <input type="submit" value="生成清单" class="creat_sub" @click="submitTodo()"/>
    <view-router></view-router>
  </div>

</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        subject: {
          title: ''
        },
        todos: []
      }
    },
    methods: {
      addTODO () {
        var todo = {
          content: '',
          checked: false
        }
        this.todos.push(todo)
      },
      submitTodo () {
        console.log(this.subject);
        console.log(this.todos);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  border-radius(val)
    -webkit-border-radius: val
    -moz-border-radius: val
    border-radius: val

  .creat_list
    padding: 10px
    p
      width: 100%
      line-height: 30px
      height: 30px
      font-size 14px
      margin-bottom 10px
      label, input[type="radio"]
        width: 15%
        float: left
      input[type="text"]
        border-radius (5px);
        border: 1px solid #e60000
        box-sizing: border-box
        height: 30px
        line-height: 30px
        float: left
        margin-right: 10px
      span
        float: left
        width 30px
        height: 30px
        text-align center
        color: #fff
        background-color: #e60000
        font-size: 20px
    .creat_chir
      input[type="text"]
        border-color: #ccc

  .creat_sub
    border-radius(5px);
    background-color: #e60000
    width: 90%
    height: 50px
    color: #fff
    position: fixed
    left: 5%
    bottom: 0

</style>
