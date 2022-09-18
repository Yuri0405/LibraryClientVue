<template>
        <div class="vue-modal-background">
            <div class="vue-modal-body">
                <button @click="closeButton" style="float:right;margin-right:0px">X</button><br>
                <div style="width:775px;height:370px">
                    <div style="margin-left:15px;width:200px;height:300px;float:left;">
                        <img v-bind:src="book.coverUrl" alt="some img" width="150" height="200" style="margin-left:15px;">
                        <span style="margin-right:10px">Rating: {{book.averageRating}}</span>
                        <span>Reviews: </span>
                    </div>
                    <div style="width:250px;height:300px;margin-left:10px;float:left;">
                        <span style="font-size: 23px;">{{book.title}}</span><br>
                        <span style="font-size: 18px;">{{book.author}}</span>
                        <div style="overflow:scroll;width:550px;height:300px">
                            <span>{{book.content}}</span>
                        </div>
                    </div>
                </div>
                    <div style="width:770px;height:240px;overflow:scroll">
                        <div class="review-section" v-for="review in book.reviews" v-bind:key="review">
                        <span>Reviewer: {{review.reviewer}}</span><br>
                        <span>{{review.message}}</span>
                    </div>
                </div>
            </div>
        </div>
  
</template>

<script>
export default {
 created()
 {
    this.getBookDetails()
 },
 data()
 {
    return{
        book:{},
    }
 },
 emits:['close'],
 props:['bookId'],
 methods:
 {
    closeButton()
    {
        this.$emit('close')
    },
    getBookDetails()
    {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open("GET","https://localhost:5001/api/books/" + this.bookId)
        httpRequest.onload = () =>
        {
            this.book = JSON.parse(httpRequest.responseText)
        }
        httpRequest.send()
      console.log("Props bookId is: " + this.bookId)
    }
 }

}
</script>

<style>
.vue-modal-body
{
    background-color: azure;
    width: 800px;
    height: 650px;
    
}
.vue-modal-background
{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-span{
    font-size: 18;
}
.review-section
{
    background-color: bisque;
    height:100px;
    width:500px;
    margin-top: 10px;
    margin-left:10px
    
}
</style>