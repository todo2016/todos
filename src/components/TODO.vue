<template>
  <div>
    <h1>
      {{subject.Title}}
      <span @click="addTODO('add')">+</span>
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

  const ERR_OK = 0;

  export default {
    data() {
      return {
        subject: {},
        todos: [],
        i: 0
      };
    },
    created() {
      this.$http.get('/api/todos').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.todos = Object.assign([], this.todos, response.data);
        }
      });
      this.$http.get('/api/subject').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.subject = Object.assign({}, this.subject, response.data);
        }
      });
    },
    methods: {
      addTODO(msg) {
        var todo = {
          content: msg + '自己加的' + this.i++,
          checked: false
        };

        this.todos.push(todo);

        // alert(msg);
      }
    }

  }
</script>

<style>html, body, h1, ul, li {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
}

ul, li {
  list-style: none;
}

h1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 16px;
}

li {
  width: 100%;
  line-height: 30px;
  text-align: left;
}

ul input {
  margin-right: 10px;
}
</style>
