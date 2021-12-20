<template>
  <div id="wrapper">
    <img 
      id="logo" 
      src="~@/assets/logo.png" 
      alt="Pestimator-logo"
    />
    
    <main>
      <div class="doc">
        <div class="title">{{$store.state.CurrentProject.main.name}}</div>
        
        <p>
          <pre 
            style="
              font-family: inherit;
              line-height: 15px;
            "
          >{{$store.state.CurrentProject.main.description}}</pre>
        </p>

        <p>Time spent:</p>

        <div class="mt-20">
          <input
            v-model="hours"
            style="width: 60px"
          />

          <input
            v-model="minutes"
            style="width: 60px"
          />

          <input
            v-model="seconds"
            style="width: 60px"
          />
        </div>

        <div>
          <p 
            class="inline-block"
            style="width: 60px" 
          >Hours</p>

          <p 
            class="inline-block"
            style="width: 60px" 
          >Minutes</p>

          <p 
            class="inline-block"
            style="width: 60px" 
          >Seconds</p>
        </div>

        <div class="mt-20">
          <router-link 
            class="alt mb-10 mr-10"
            custom 
            to="/"
            v-slot="{ navigate }"
          >
            <button 
              @click="navigate" 
              @keypress.enter="navigate" 
              role="link"
            >Cancel</button>
          </router-link>

          <button 
            @click="saveTime"
            class="mb-10"
          >Save</button>          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import TimeHelpers from '../../main/TimeHelpers'

  export default {
    name: 'landing-page',
    data () {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    },
    computed: {},
    mounted () {
      const time = this.$store.state.CurrentProject.main.timeSpent
      const timeArray = TimeHelpers.secondsToTimeBreakdown(time)
      this.hours = timeArray.hours
      this.minutes = timeArray.minutes
      this.seconds = timeArray.seconds
    },
    methods: {
      saveTime () {
        const updatedSeconds = TimeHelpers.convertTimeUnitsToSeconds({
          hours: this.hours,
          minutes: this.minutes,
          seconds: this.seconds
        })

        this.$store.dispatch('adjustTimeSpent', updatedSeconds)
        this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
