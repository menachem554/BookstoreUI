<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'NewBook' }">New book</router-link>
    <router-link :to="{ name: 'GetBook' }">Get book</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>

  </div>
   <router-view/>
  <div class="test">
  <button @click="home">Home</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(-1)
    },
    home() {
      this.$router.push({name: 'Home'})
    },
      async addTask(task) {
      const res = await fetch('http://localhost:9091/api/book', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),

      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
  }
}
</script>

<style>
body {
  background: rgb(216, 218, 221);;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
.test button {
  color: #000;
  background: rgb(233, 236, 240);
  margin: 100px 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
