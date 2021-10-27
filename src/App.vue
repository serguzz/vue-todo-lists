<template>
  <v-app>
    <Navbar
      @add_todo_note="addTodoNote()"
      @undo_last_action="undoLastAction()"
    />
    <v-main style="scoped">
      
    </v-main>
    <v-container>
      <v-divider></v-divider>
      <v-stepper-header
        class="d-flex justify-center align-center">
        <h2>Create, add, modify notes for your puposes. </h2>
        
      </v-stepper-header>

      <v-subheader class="d-flex justify-center align-center">>
      

        <!-- Displaying information about present TODO Notes -->
        <div v-if="todoNotes.length === 0">
            <h2> No TODO-Notes found at the moment ! </h2>
        </div>
        <div v-else>
            <h2>You have {{ todoNotes.length }} TODO Notes </h2>
        </div>
      </v-subheader>

      <v-divider></v-divider>
      <v-row>
          <v-col cols="4" 
            v-for="(todoNote, noteIndex) in todoNotes"
            v-bind:key="(todoNote)"
            
          >
            <v-card>
              <v-card-title>
                Todo Note # {{noteIndex + 1}}
              </v-card-title>
              <v-card-subtitle>

                    <!-- Displaying information about current Note -->
                    <div v-if="todoNote.length === 0">
                        NO tasks found in this note !
                    </div>
                    <div v-else-if="countOpenTasks(noteIndex) === 0">
                        You have finished all the tasks !
                    </div>
                    <div v-else>
                        {{" You have " + countOpenTasks(noteIndex) + " tasks to do."}}
                    </div>
              </v-card-subtitle>
              <v-list>
                <v-list-item
                  v-for="(todoItem, itemIndex) in todoNote"
                  v-bind:key="(todoItem)"
                  >
                  <div v-bind:class="{crossed: todoItem.isDone === true}"> 
                    {{ todoItem.value }}
                  </div>
                  <v-spacer/>
                  <v-btn color="primary" @click="checkTodoItem(noteIndex, itemIndex)">✔️</v-btn>
                  <v-btn color="error" @click="removeTodoItem(noteIndex, itemIndex)">❌</v-btn>

                </v-list-item>
                <v-list-item>
             
                  <v-text-field
                    width="10px"
                    append-icon="✔️"
                    v-model="newTodoItems[noteIndex]"
                    class="centered-input"
                    v-on:keyup.enter="addTodoItem(noteIndex)"
                  >
                  New Todo Item
                  </v-text-field>
                 
                </v-list-item>
              </v-list>
              <v-divider/>
              <v-list>
                <v-list-item>
<!--------------------------------------------------------------->
                  <div class="text-center">
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="error"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          @click="setCurrentNote(noteIndex)"
                          
                        >
                           ❌ Delete Note ❌
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Delete confirmation
                        </v-card-title>

                        <v-card-text>
                          <br>
                          Are you sure you want to delete the Note?
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="error"
                            text
                            @click="dialog = false; deleteCurrentNote();"
                          >
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
<!----------------------------------------------------->

                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>

//import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
//    HelloWorld,
    Navbar
  },

  data: () => ({
    //
    dialog: false,

    todoNotes: [
             [          
              { 
                value: '1.1 Implement Calculator App',
                isDone: true,
              },
              {
                value: '1.2 Read a book "Vue.js in action',
                isDone: false,
              },
              { 
                value: '1.3 Learn Nest.js',
                isDone: false,
              },
          ],
          [          
              { 
                value:  '2.1 Implement a web store',
                isDone: false,
              },
              { 
                value:  '2.2 Read "Thinking Java" ',
                isDone: false,
              },
              { 
                value:  '2.3 Read "Gang of Four" ',
                isDone: false,
              }
          ]
   
    ],
    todoNotesBackup : [],
    newTodoItems: [],
    currentNoteIndex: 0
  }),

  methods: {

      // pushed new empty TODO Note to the end of the todoLists array
      addTodoNote() {
          this.todoNotesBackup = this.todoNotes.slice();
          this.todoNotes.push([]);
      },

      setCurrentNote(noteIndex){
        this.currentNoteIndex = noteIndex;
        console.log("current noteIndex is " + this.currentNoteIndex);
      },

      //
      deleteCurrentNote(){
        this.deleteTodoNote(this.currentNoteIndex);
        this.currentNoteIndex--;
      },

      // removes a TODO Note from the todoLists array
      deleteTodoNote(noteIndex){
          this.todoNotesBackup = this.todoNotes.slice();
          this.todoNotes.splice(noteIndex, 1);
      },

       // removes a TODO Item from the todoLists array 
      removeTodoItem(noteIndex, itemIndex){
          this.todoNotesBackup = this.todoNotes;
          this.todoNotes[noteIndex].splice(itemIndex , 1);
      },

      // cancels last action - uses backup variable "todoListsBackup"
      undoLastAction(){
          if (this.todoNotesBackup.length > 0) {
              this.todoNotes = this.todoNotesBackup.slice();
          }
      },

            // adds new TODO Item from the related input to the TODO Note
      addTodoItem(noteIndex) {
        if (this.newTodoItems[noteIndex].length > 0) {
          this.todoNotes[noteIndex].push({
            value: this.newTodoItems[noteIndex],
            isDone: false
          });
          this.newTodoItems[noteIndex] = '';
        }
      },

      // marks a TODO Item as done/not done - uses Boolean field  ".isDone"
      checkTodoItem(noteIndex, itemIndex){
          this.todoNotes[noteIndex][itemIndex].isDone = !this.todoNotes[noteIndex][itemIndex].isDone;
          //console.log(bool);
      },

            // returns the number of NOT DONE tasks in the todoList
      countOpenTasks (noteIndex){
          
          let i = 0;
          for (let todoItem of this.todoNotes[noteIndex]) {
            if (!todoItem.isDone) {
              i++;
            }
          }
          return i;
      },
      
  }
};
</script>

<style scoped>
  .input-todo-item{
    border: 1px dashed rgba(0,0,0, .4);
  }

  .crossed {
    text-decoration: line-through;
  }
</style>
