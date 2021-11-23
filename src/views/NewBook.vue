<template>
  <form @submit.prevent="handleSubmit" v-if="!showBook">
      <label>bookID</label>
      <input type="text" required v-model="bookID">

      <label>bookName</label>
      <input type="text" required v-model="bookName">

      <label>category</label>
      <select v-model="category">
          <option value="Action and Adventure">Action and Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical Fiction">Historical Fiction</option>
      </select>

      <label>author:</label>
      <input type="text" v-model="author">
     
      <div class="submit">
          <button>Save the new book</button>
      </div>
  </form>
  <div class="newBook" v-if="showBook">
      <div id='msg' class='hide'>
          <p>New book successfully registered!</p>
      </div>
  <p>your new book is:</p>
  <p>book ID: {{this.bookID}}</p>
  <p>book name: {{this.bookName}}</p>
  <p>category: {{this.category}}</p>
  <p>author: {{this.author}}</p>
  <button @click="closeNewBook">X</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        bookID: '',
        bookName: '',
        category: '',
        author: '',
        books: [],
        showBook: false,
            
    }
},
methods: {
     async handleSubmit() {
        this.showBook = true

         const newBook = {
            bookID: this.bookID,
            bookName: this.bookName,
            category: this.category,
            author: this.author,
        }
       
            const res = await fetch('http://localhost:9091/api/book', {
                  method: 'POST',
                  body: JSON.stringify(newBook),
            
            })

             const data = await res.json()

             this.bookID = data.book.bookID
             this.bookName = data.book.bookName
             this.category = data.book.category
             this.author = data.book.author

             const modal = document.querySelector('#msg');
             modal.classList.remove('hide');
             setTimeout(function(){

             modal.classList.add('hide');

             },2500);        
     },
     closeNewBook() {
        this.showBook = false
        this.bookID = '',
        this.bookName = '',
        this.category = ''
        this.author = ''
     }
}
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;  
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
     cursor: pointer;
}
.submit {
    text-align: center;
    font-size: 12px;  
}
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
.hide {
  display:none;
}
#msg, .newBook {
    background: #f4f4f4;
    padding: 30px;
    border-radius: 10px;
    margin: 7% 25%;
    max-width: 600px;
    color: #444;
}
.newBook button {
    color: white;
    background: crimson;


}
</style>