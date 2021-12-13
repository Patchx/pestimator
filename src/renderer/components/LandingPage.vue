<template>
  <div id="wrapper">
    <img 
      id="logo" 
      src="~@/assets/logo.png" 
      alt="Pestimator-logo"
    />
    
    <main>
      <div class="doc">
        <div
          v-if="!haveCurrentProject"
        >
          <p>Pestimator helps you make better time estimates, by comparing future tasks to old projects.</p>

          <p>Please click 'Create New Project' to get started.</p>

          <br>

          <router-link 
            class="mb-10"
            custom 
            to="/new-project"
            v-slot="{ navigate }"
          >
            <button 
              @click="navigate" 
              @keypress.enter="navigate" 
              role="link"
            >Create New Project</button>
          </router-link>
        </div>

        <div
          v-else
        >
          <div class="title">Current Project</div>
          
          <p>Name here</p>

          <div class="mt-20">
            <button 
              @click="toggleTimer"
              :class="timerBtnClass"
            >{{timerBtnText}}</button>
          
            <button 
              @click="open('https://vuejs.org/v2/guide/')"
              class="mb-10"
            >Manage Projects</button>
          </div>
        </div>

        <div class="mt-30">
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
      haveCurrentProject () {
        return this.$store.state.CurrentProject.main.name !== undefined
      },
      timerBtnClass () {
        var classes = 'mb-10 mr-10'

        if (this.timerOn) {
          classes += ' alt'
        }

        return classes
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

        // Just an example of how to save project info to VueX
        // this.$store.dispatch('changeProject', {
        //   name: 'test project 1'
        // })
        // console.log(this.$store.state.CurrentProject.main)

        // Just an example on how to increment a counter in VueX
        // this.$store.dispatch('incrementCounter')
        // console.log(this.$store.state.Counter.main)
      }
    }
  }
</script>

<style>
</style>
