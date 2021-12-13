<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'pestimator'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  main {
    display: flex;
    justify-content: center;
  }

  main > div { flex-basis: 82%; }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 380px;
  }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .mb-0 {margin-bottom: 0px;}
  .mb-10 {margin-bottom: 10px;}
  .mb-20 {margin-bottom: 20px;}
  .mb-30 {margin-bottom: 30px;}

  .ml-0 {margin-left: 0px;}
  .ml-10 {margin-left: 10px;}
  .ml-20 {margin-left: 20px;}
  .ml-30 {margin-left: 30px;}

  .mr-0 {margin-right: 0px;}
  .mr-10 {margin-right: 10px;}
  .mr-20 {margin-right: 20px;}
  .mr-30 {margin-right: 30px;}

  .mt-0 {margin-top: 0px;}
  .mt-10 {margin-top: 10px;}
  .mt-20 {margin-top: 20px;}
  .mt-30 {margin-top: 30px;}

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }
</style>
