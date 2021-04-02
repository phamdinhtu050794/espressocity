<template>
  <div class="home-container">
   <div class="img"></div>
   <div class="body">
     <div class="body-content">
        <div class="ui">
        <router-link
          class="router-link"
          :to="{ name: 'Home', params: { residentialsId: 123 } }"
          ><h2>Home</h2></router-link
        >
        <router-link
          class="router-link"
          :to="{ name: 'Comic', params: { residentialsId: 123 } }"
          ><h2>Comics</h2></router-link
        >
        <router-link
          class="router-link"
          :to="{ name: 'About', params: { residentialsId: 123 } }"
          ><h2>About</h2></router-link
        >
        <router-link
          class="router-link"
          :to="{ name: 'Contact', params: { residentialsId: 123 } }"
          ><h2>Contact</h2></router-link
        >
      </div>
      
         <div class="left-right">
     <div> <button @click="back()">
        <i class="material-icons">&#xe045;</i>
      </button></div>
      <div v-for="item in comics" :key="item.key" class="slide">
        <img v-if="img == item.src" :src="getImg(item.src)" />
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
     <div> <button @click="next()">
        <i class="material-icons">&#xe044;</i>
      </button></div>
    </div>
      
     </div>
   </div>
   <div class="store-img">

       <div v-for="item in comics" :key="item.key">
          <button @click="showImage(item.key)" class="select-buttons">
            <img :src="getImg(item.src)" class="select-buttons" />
          </button>
        </div>
   </div>
   <div class="footer">
     
   </div>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "Home",

  data: () => {
    return {
      imgNum: 0,
    };
  },
  components: {},
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
      if (this.imgNum < 0) {
        this.imgNum = 11;
      }
      console.log("back ");
    },
    next() {
      this.imgNum += 1;
      if (this.imgNum > 11) {
        this.imgNum = 0;
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: scroll;
  align-items: center;
  background-color:black;
}
.img{
  height: 100vh;
  width: 100vw;
  background-image: url('~@/assets/logo2.jpeg');
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-position: center top;
  background-size: 100% 100%;
  
}
.body{
  background: rgb(195,34,34);
background: linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(253,186,45,1) 100%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body-content{
  padding-top: 5%;
  
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  width: 70vw;



  //  width: 160px;
    // height: 100px;
    background-color:orange;
  
  background-image: url(data:image/png;base64,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);
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
    transform: skew(-20deg);
  // padding-top: 20%;
}
.ui{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10%;


   -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);

}
.router-link{
  padding-right: 2%;
  text-decoration: none;
}
.left-right{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
}
.left-right i{
  font-size: 48px;
}
.slide img{
  // position: absolute;
   -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);
  width: 50vw;
  height: 50vh;
}
.left-right button{
  // width: 50px;
  height: 50px;
  width: 100px;
  
  color: red;
  border: none;
  background-color:orange;
  
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
   -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);
}

.store-img{
  background-color: white;
  width: 90vw;
  height: 50vh;
  overflow: scroll;
   display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  // width: 70vw;
 
// flex: 50%;

}

.select-buttons{
  // width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

 
}

.select-buttons img{
    width: 40vw;
  height: 50vh;
}


</style>
