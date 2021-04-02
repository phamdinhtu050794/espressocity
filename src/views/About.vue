<template>
  <div class="about">
    <!-- <div class="logo"> -->
      <img src="@/assets/logo2.jpeg" />
      
    <!-- </div> -->
    <div class="body">
      <div>
        <img src="@/assets/avatar.jpeg" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          vestibulum lectus mauris ultrices eros in cursus. At consectetur lorem
          donec massa. Quisque id diam vel quam elementum pulvinar etiam non.
          Turpis egestas sed tempus urna et pharetra. Non nisi est sit amet
          facilisis. Enim sed faucibus turpis in eu mi bibendum neque. Rhoncus
          est pellentesque elit ullamcorper dignissim cras tincidunt. Elementum
          sagittis vitae et leo duis. Urna nec tincidunt praesent semper.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
          Consectetur libero id faucibus nisl tincidunt eget nullam. Quam
          quisque id diam vel quam elementum pulvinar etiam. Egestas integer
          eget aliquet nibh praesent tristique magna sit. Lobortis feugiat
          vivamus at augue eget. Neque egestas congue quisque egestas. Sit amet
          cursus sit amet dictum sit amet justo donec. Blandit massa enim nec
          dui nunc.
        </p>
      </div>
    </div>
    <div>
       <router-link class="router-link" :to="{ name: 'Home', params: { residentialsId: 123 }}"><h1>Home</h1></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about{
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  padding: 0;
  margin: 0;

}
.logo{
  padding: 0px;
  background-color: aquamarine;
}
 img{
  width: 100vw;
  // height: 50vh;
}
.body{
 display: flex;
 flex-direction: row;
 justify-content: center; 
//  padding: 5%;
 background-color: rgb(252 , 231, 141);
}
.body img{
  width: 300px;
  height: 300px;
   border: 1px #d4d4d4 solid;
    // padding: 7px;
    border-radius:50%;
    // -moz-border-radius:50%;
    // -webkit-border-radius:50%;

  //    float: left;
  // shape-outside: url("~@/assets/avatar.jpeg");
  // shape-image-threshold: .2;
  // shape-margin: 20px;
}
.router-link{
 
  text-decoration: none;
  
}

@media only screen and (max-width: 480px){
  .body img{
   float: left;
  shape-outside: url("~@/assets/avatar.jpeg");
}
  
}
</style>

