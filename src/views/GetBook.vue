<template>
  <p>Enter the book id</p>
  <input type="text" v-model="id" name="id">
  <button @click="fetchTask">Send request</button>
  <p>book ID: {{bookID}}</p>
  <p>book name: {{this.bookName}}</p>
  <p>title: {{this.category}}</p>
  <p>author: {{this.author}}</p>

</template>

<script>
export default {
data() {
    return {
        id: '',
        data: '',
        bookID: '',
        bookName: '',
        category: '',
        author: '',
    }
},
methods: {
  async fetchTask() {
    console.log('book id: ', this.id);
    const res = await fetch(`http://localhost:9091/api/book/${this.id}`)
    this.data = await res.json()

    this.bookID = this.data.book.bookID
    this.bookName = this.data.book.bookName
    this.category = this.data.book.category
    this.author = this.data.book.author
},
},
}
</script>

<style>

</style>