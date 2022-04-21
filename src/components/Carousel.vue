<template>
  <div class="container-bg">

  </div>
  <div class="container-bg-2">
      <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title">Lorems</div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title">Lorems</div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title">Lorems</div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title">Lorems</div> 
          <div class="star">XXX</div>
      </div>
  </div>
    <div class="container-bg-2">
      <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title"><p class="name">Lorems</p></div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title"><p class="name">Lorems</p></div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title"><p class="name">Lorems</p></div> 
          <div class="star">XXX</div>
      </div>
            <div class="col-movie">
          <div class="img-movie">
              <img src="" alt="">
          </div>
          <div class="title"><p class="name">Lorems</p></div> 
          <div class="star">XXX</div>
      </div>
  </div>

</template>

<script>
export default {
name:"Carousel",
}
</script>

<style scoped>
.container-bg{
    width: 100%;
    background-color: red;
    border:1px solid black;
    height: 80vh;
}
.container-bg-2{
    width: 100%;
    background-color: blue;
    border:1px solid black;
    height: 50vh;
    padding: 2%;
    justify-content: center;
    box-sizing: border-box;
}
.container-bg-2 .col-movie{
    width:calc(80% / 4);
    background-color:yellow;
    margin:20px;
    box-sizing:border-box;
    display: inline-flex;
    height: 100%;
}
.container-bg-2 .col-movie .title {
       width: 100%;
    display: inline-block;
    height: 10%;

    bottom: 2rem;
    position: absolute;
}
.container-bg-2 .col-movie{
    position: relative!important;
}
.container-bg-2 .col-movie .title .name{
    text-align: center;
}
.container-bg-2 .col-movie .star{
    width: 100%;
    bottom: .5rem;
    display: inline-block;
    position: absolute;
}
</style>