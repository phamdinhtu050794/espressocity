<template>
  <div class="home">
    <div class="logo">
      <img src="@/assets/logo2.jpeg" >
    </div>
    
        <div class="left-right">
      <button @click="back()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <div v-for="item in comics" :key="item.key" class="slide">
        <img v-if="img == item.src" :src="getImg(item.src)" />
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <button @click="next()" style="font-size: 48px">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
      <div class="all-buttons">
      <div class="select-buttons-container">
        <div v-for="item in comics" :key="item.key">
          <button @click="showImage(item.key)" class="select-buttons">
            <img :src="getImg(item.src)" class="select-buttons" />
          </button>
        </div>
      </div>
    </div>

    

    <div class="contact">

       <div class="icon">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <a href="#"
          >
          <i style="font-size:200px;color:blue" class="fa">&#xf09a;</i></a>
        <a href="#"
          ><i style="font-size:200px;color: blue" class="fa">&#xf099;</i></a>
        <a href="#">
          <i style="font-size:200px; color:blue" class="fa">&#xf0d5;</i>
          </a>
            <router-link class="router-link" :to="{ name: 'About', params: { residentialsId: 123 }}"><h1>About</h1></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import store from './../store/index'

export default {
  name: 'Home',

  data:() => {
    return{
      imgNum: 1,
    }
  },
  components: {
  
  },
   computed: {
    img() {
      console.log("heeeeeeellllllo");
      return "comic" + this.imgNum;
    },
    comics() {
      console.log("getting paintings");
      return store.state.Comics;
    },
  },
  methods: {
    back() {
      this.imgNum -= 1;
      if (this.imgNum < 1) {
        this.imgNum = 12;
      }
      console.log("back ");
    },
    next() {
      this.imgNum += 1;
      if (this.imgNum > 12) {
        this.imgNum = 1;
      }
      console.log("netx");
    },
    showImage(img) {
      this.imgNum = img;
      console.log("showing img " + img);
    },
    getImg(img) {
      // console.log("getting images: " + img);
      var url = require("@/assets/" + img + ".jpeg");
      return url;
    },
    // switchImage(){
    //   if((this.showImage + 1) % 6 == 0){
    //     this.showImage = 0;
    //   }
    //   else{
    //     this.showImage = this.showImage +1 ;
    //   }
    // }
  },
}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
}
  .logo img{
    // border: 2px solid black;
    width: 100vw;
    // height: 100vh;
   
  }
  .left-right {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.left-right button {
  // background-color: black;

  color: white;
  border: none;
}
.left-right i {
  font-size: 48px;
}
.all-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  // width: 70vw;
}
.select-buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.select-buttons {
  display: flex;
  flex-direction: row;
  height: 12vh;

  // margin: 2%;
  // height: 100px;
  // width: auto;
}
.select-buttons img {
  border-radius: 4px;
  padding: 5px;
}

.slide img {

  width: auto;
  height: 50vh;

  // border: 1px solid #ddd;
  // border-radius: 4px;
  // padding: 5px;
  // width: 90vw;
}
// .slide{
//   width: 70vw;
//   border: 2px solid black;
// }
.material-icons{
  color: black;
  width: 50px;
  height: 50px;
}
.icon{ 
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
//  background-color: red; 
 text-align: center;
 align-self: center;
 padding-top: 2%;
}
.router-link {
  color: black;
  font-size: 48px;
  border: 2px solid black;
  border-radius: 50%;
  text-decoration: none;
  // margin-bottom: 2%;
}
</style>  
