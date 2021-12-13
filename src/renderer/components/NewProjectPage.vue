<template>
  <div id="wrapper">
    <img 
      id="logo" 
      src="~@/assets/logo.png" 
      alt="Pestimator-logo"
    />
    
    <main>
      <div class="doc">
        <div class="title">Create New Project</div>
        
        <p>Name here</p>

        <div class="mt-20">
          <button 
            @click="goBack" 
            class="alt mb-10 mr-10"
            role="link"
          >Cancel</button>

          <button 
            @click="createProject"
            class="mb-10"
          >Save</button>        
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'new-project-page',
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      createProject () {
        // Just an example of how to save project info to VueX
        // this.$store.dispatch('changeProject', {
        //   name: 'test project 1'
        // })
        // console.log(this.$store.state.CurrentProject.main)

        // Just an example on how to increment a counter in VueX
        // this.$store.dispatch('incrementCounter')
        // console.log(this.$store.state.Counter.main)
      },
      goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
