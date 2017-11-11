<template>
  <div>
    <h1>
      个人
      <span @click="myAlert('add')">+</span>
    </h1>
    <ul>
      <li v-for="item in todos">
        <label>
          <input type="checkbox" :checked="item.checked">
          {{item.content}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
