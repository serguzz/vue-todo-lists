<template>
      <v-app-bar
        
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-app-bar-title>Todo Notes</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
  
        <template v-slot:extension>
          <v-tabs align-with-title>
    

            <v-spacer/>
            <v-btn class="orange mr-1" @click="addTodoNote();">New Note
            </v-btn>
            <v-btn class="orange mr-1">Undo Action
            </v-btn>
            <v-btn class="orange mr-1">Export Notes
            </v-btn>
            <v-btn class="orange mr-1">Import Notes
            </v-btn>
          </v-tabs>
        </template>
 

      </v-app-bar>

    
</template>

<script>

export default ({
    setup() {
        
    },

    methods: {
        addTodoNote(){
            this.$emit('add_todo_note')
        }
    }

    
})
</script>

<style scoped>

</style>