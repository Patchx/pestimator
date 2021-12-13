<template>
  <div id="wrapper">
    <img 
      id="logo" 
      src="~@/assets/logo.png" 
      alt="electron-vue"
    />
    
    <main>
      <div class="doc">
        <div class="title">Current Project</div>
        
        <p>Name here</p>

        <div style="margin-top: 20px;">
          <button 
            :class="timerBtnClass"
            style="margin-right: 10px;"
            @click="toggleTimer"
          >{{timerBtnText}}</button>
        
          <button 
            @click="open('https://vuejs.org/v2/guide/')"
          >Manage Projects</button>
        </div>

        <div style="margin-top: 40px;">
          <system-information></system-information>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    data () {
      return {
        timerOn: false
      }
    },
    computed: {
      timerBtnClass () {
        if (this.timerOn) {
          return 'alt'
        } else {
          return ''
        }
      },
      timerBtnText () {
        if (this.timerOn) {
          return 'Stop Timer'
        } else {
          return 'Start Timer'
        }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },

      toggleTimer () {
        this.timerOn = !this.timerOn
      }
    }
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

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 380px;
  }

  main {
    display: flex;
    justify-content: center;
  }

  main > div { flex-basis: 82%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

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

  .doc p {
    color: black;
    margin-bottom: 10px;
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
</style>
