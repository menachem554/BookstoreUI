<template>
<h1>Book store</h1>
  <div class="home">
    <h2>Add new book</h2>
    <h2>Get book</h2>
    <h2>Update book</h2>
    <h2>Delete book</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
<style>
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
  .home h2{
    background: rgb(223, 227, 231);;
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .home:hover {
    direction: initial;
  }
  .home a{
    text-decoration: none;
  }
</style>