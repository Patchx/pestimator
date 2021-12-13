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
          <div class="title">{{$store.state.CurrentProject.main.name}}</div>
          
          <p>{{$store.state.CurrentProject.main.description}}</p>

          <p>Time spent: <b>{{timeSpent}}</b></p>

          <div class="mt-20">
            <button 
              @click="toggleTimer"
              :class="timerBtnClass"
            >{{timerBtnText}}</button>

            <button 
              @click="open('https://vuejs.org/v2/guide/')"
              class="mb-10 mr-10"
            >Adjust Time Manually</button>
          
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
      },
      timeSpent () {
        const time = this.$store.state.CurrentProject.main.timeSpent

        if (!time) {
          return '0s'
        }

        return time + 's'
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },

      resumeTimer () {
        const timerId = setInterval(() => {
          this.$store.dispatch('incrementTimeSpent')
        }, 1000)

        this.$store.dispatch('setTimerId', timerId)
      },

      stopTimer () {
        clearInterval(this.$store.state.TimerId.main)
        this.$store.dispatch('setTimerId', null)
      },

      toggleTimer () {
        this.timerOn = !this.timerOn

        if (this.timerOn) {
          this.resumeTimer()
        } else {
          this.stopTimer()
        }
      }
    }
  }
</script>

<style>
</style>
