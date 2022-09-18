<template>
  <div class="addbookbox">
    <h2>Add Book</h2>
    <form class="addbookform" name="addbookform">
        <div class="addbooksection">
            <div class="addbookformelement">
                <label for="title">BookId</label>
                <input type="number" name="title" v-model="book.id">
            </div>
            <div class="addbookformelement">
                <label for="title">Title</label>
                <input type="text" name="title" v-model="book.title">
            </div>
            <div class="addbookformelement">
                <label for="title">Cover URL</label>
                <input type="text" name="title" v-model="book.coverurl">
            </div>
            <div class="addbookformelement">
                <label for="title">Genre</label>
                <input type="text" name="title" v-model="book.genre">
            </div>
            <div class="addbookformelement">
                <label for="title">Author</label>
                <input type="text" name="title" v-model="book.author">
            </div>
        </div>
        <div class="addbooksection">
            <div class="addbookformelement">
                <label class="child" for="title">Content</label>
                <textarea class="child" name="" id="" cols="30" rows="10" v-model="book.content"></textarea>
            </div>
        </div>   
    </form>
    <div>
            <button id="addbutton" @click="addBook">Add</button>
            <button id="clearbutton" @click="clearFields">Clear</button>
    </div>
  <button @click="buttonMassage">Some magic button :)</button>
  </div>
  <div>
    <button @click="getAllBooks">All</button>
    <button>Recomended</button>
    <button @click="showBookDetail">Show modal window</button>
  </div>
  <div class="allbookssection">
        <div class="booklistelement" v-for="book in booksFromApi" v-bind:key = "book">
            <div>
                <img v-bind:src="book.coverURL" alt="some img" width="90" height="100">
                <div style="display: inline-block;height: 100px;background-color: beige;vertical-align: top;">
                <span style="font-size:20px;">{{book.title}}</span><br>
                <span>Review: {{book.reviewsNumber}}</span>
                <span>Rating: {{book.raiting}}</span>
                <span>Id: {{book.id}}</span>
            </div>
            <div style="display: inline-block;vertical-align: top;">
                <button @click="showBookDetail(book.id)">View</button>
                <button @click="scrollToForm">Edit</button>
            </div>
            </div>  
        </div>
  </div>
  <BookDetails v-if="bookDetailVisible" @close="showModal" :bookId = bookPassId />
</template>

<script>
import BookDetails from '../components/BookDetails.vue'
export default {
    //name:"app",
    components:
    {
        BookDetails
    },
    data()
    {
        return{
            bookPassId:0,
            bookDetailVisible:false,
            book:
            {
                id:0,
                title:null,
                coverurl:null,
                author:null,
                genre:null,
                content:""
            },
            books:
            [
                {id:1,title:"1984",genre:"dystopia",author:"G.Orwell",reviews:20,rating:5},
                {id:2,title:"ASOIAF:Game of thrones",genre:"fantasy",author:"G.R.R. Martin",reviews:20,rating:5},
                {id:3,title:"LOTR:Two Towers",genre:"fantasy",author:"J.R.R Tolkien",reviews:20,rating:5},
                {id:4,title:"LOTR:The Fellowship of the Ring",genre:"fantasy",author:"J.R.R Tolkien",reviews:20,rating:5},
                {id:5,title:"LOTR:The Return of the King",genre:"fantasy",author:"J.R.R Tolkien",reviews:20,rating:5},
                {id:6,title:"ASOIAF:Clash of Kings",genre:"fantasy",author:"G.R.R. Martin",reviews:20,rating:5},
                {id:7,title:"ASOIAF:Dance with Dragons",genre:"fantasy",author:"G.R.R. Martin",reviews:20,rating:5},
            ],
            booksFromApi:[]
        }
    },
    methods:
    {
        buttonMassage()
        {
            alert("Button clicked!")
        },
        addBook()
        {
            let result = JSON.stringify(this.book)
            let httpRequest = new XMLHttpRequest();
            httpRequest.open("POST","https://localhost:5001/api/books/save")
            httpRequest.setRequestHeader("Content-Type", "application/json")
            httpRequest.onload = () =>
            {
                if (httpRequest.status == 200) { 
                console.log(httpRequest.responseText);
                } else 
                {
                    console.log("Server response: ", httpRequest.statusText);
                }
            }
            httpRequest.send(result)
            alert(this.book.title+"\n"+this.book.coverurl+"\n"+this.book.genre+"\n"+this.book.author+"\n"+this.book.content)
        },
        clearFields()
        {
            let bookform = document.forms["addbookform"]
            bookform.reset()
        },
        getAllBooks()
        {
            let httpRequest = new XMLHttpRequest();
            httpRequest.open("GET","https://localhost:5001/api/books?order=title")
            httpRequest.onload = () =>
            {
                this.booksFromApi = JSON.parse(httpRequest.responseText)
            }
            httpRequest.send()
        },
        showBookDetail(id)
        {
            this.bookPassId = id
            console.log("bookPassID: " + this.bookPassId)
            this.showModal()
        },
        showModal()
        {
            this.bookDetailVisible = !this.bookDetailVisible
        },
        scrollToForm()
        {
            window.scroll({top: 100,left: 100,behavior: 'smooth'})
            let button = document.getElementById('addbutton')
            button.innerText = "Edit"  
        }
    }
}
</script>

<style>
    h2
    {
        margin: 10px;
    }
    button
    {
        margin-right: 10px;
    }
    .addbookbox
    {
        background-color: antiquewhite;
        width: 700px;
        height: 500px;
        border-radius: 15px;
        margin: 10px;
    }
    .allbookssection
    {
        background-color: antiquewhite;
        width: 700px;
        height: 500px;
        border-radius: 15px;
        overflow: scroll;
    }
    .addbookform
    {
        display: table;
        margin: 10px;
    }
    .addbooksection
    {
        display: inline-block;
        margin: 10px;
    }
    .addbookformelement
    {
        display: table-row;
    }
    .child
    {
        vertical-align: top;
    }
    label, input 
    {
        display: table-cell;
        margin-bottom: 10px;
    }
    label
    {
        padding-right: 10px;
    }
    #addbutton
    {
        border-radius: 15px;
        background-color: aqua;
        border-color: aqua;
        min-width: 100px;
    }
    #clearbutton
    {
        border-radius: 15px;
        background-color: rgb(209, 209, 125);
        border-color: rgb(209, 209, 125);
        min-width: 100px;
    }
    .booklistelement
    {
        width: 500px;
        height: 125px;
        background-color: rgba(181, 173, 173, 0.953);
        border-radius: 10px;
        margin: 15px;
    }
    .booklistelement span
    {
        margin: 10px;
    }
    
</style>