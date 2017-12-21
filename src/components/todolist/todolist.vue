<template>
  <div>
    <div  class="creattodo">
      <router-link to="/creatlist">创建清单</router-link >
    </div>
    <div class="todo_list">
      <ul>
        <li>
          <label>
            <input type="checkbox" :checked="checked"><span>寒假作业清单</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" :checked="checked"><span>旅游计划清单</span>
          </label>
        </li>
      </ul>

    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .creattodo
    color: #e60000
    font-size: 14px
    height:50px
    position fixed
    left:0
    bottom:0
    border-top:2px solid #e60000
    width: 100%
    line-height :50px
    cursor :pointer
    user-select: none
  .todo_list
    ul
      padding: 0 10px
      li
        width: 100%
        height:30px
        line-height:30px
        text-align :left
        label
          input
            margin-right:10px


</style>
