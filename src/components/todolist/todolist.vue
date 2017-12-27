<template>
  <div>

    <div class="todo_list">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="item in todolist">{{item.title}} - {{item.date}}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </mt-loadmore>
    </div>
    <div class="creattodo">
      <router-link to="/creatlist">创建清单</router-link>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  import Vue from 'vue'
  import { Loadmore } from 'mint-ui'

  Vue.component(Loadmore.name, Loadmore)

  const ERR_OK = 0

  export default {
    data () {
      return {
        topStatus: '',
        todolist: [],
        todos: [],
        i: 0
      }
    },
    created () {
//      this.$http.get('/api/todolist').then((response) => {
//        response = response.body;
//        if (response.errno === ERR_OK) {
//          this.todos = Object.assign([], this.todos, response.data);
//        }
//      });
      // getTodolist()
    },
    methods: {
      loadTop () {
        this.getTodolist()
//        var todo = {
//          id: '1eb45dff-f222225de716b3333c',
//          title: '自己加的',
//          date: '2017-12-20',
//          status: '1'
//        }
//        this.todolist.shift(todo)
        // this.topStatus = 'ok'
        this.loadmore.onTopLoaded()
      },
      allLoaded () {
        alert('allLoaded')
      },
      loadBottom () {
        // alert('loadBottom')
        this.getTodolist()
        this.allLoaded = true// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded()
      },
      handleTopChange (status) {
        this.topStatus = status
      },
      getTodolist () {
        this.$http.get('/api/todolist').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            console.log(this.todolist)
            if (this.todolist.length <= 0) {
              this.todolist = (Object.assign([], this.todolist, response.data))
              return;
            }

            this.todolist.unshift({
              'id': '1eb45dff-f1f6-4091-8166-5de716b3333c',
              'title': '烤箱做蛋糕材料清单',
              'date': '2017-12-20',
              'status': '1'
            })
          }
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .creattodo
    color: #e60000
    font-size: 14px
    height: 50px
    position fixed
    left: 0
    bottom: 0
    border-top: 2px solid #e60000
    width: 100%
    line-height: 50px
    cursor: pointer
    user-select: none
    z-index: 99
    background-color: #fff

  .todo_list
    margin-bottom: 52px
    ul
      padding: 0 10px
      li
        width: 100%
        height: 30px
        line-height: 30px
        text-align: left
        label
          input
            margin-right: 10px


</style>
