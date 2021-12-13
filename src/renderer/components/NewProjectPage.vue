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
        
        <p class="mt-20">Name</p>

        <input
          class="full-width"
          v-model="projectName"
        />

        <p class="mt-20">Description</p>

        <textarea
          class="full-width"
          rows="5"
          v-model="projectDescription"
        ></textarea>

        <div class="mt-30">
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
        projectDescription: '',
        projectName: ''
      }
    },
    computed: {
    },
    methods: {
      createProject () {
        this.$store.dispatch('createProject', {
          description: this.projectDescription,
          name: this.projectName,
          timeSpent: 0
        })
        this.$router.push('/')
      },
      goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
