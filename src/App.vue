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
          <v-col cols="4">
            <v-card>
              <v-list>
                <v-list-item>
                  <!--v-file-input
                    accept="*"
                    label="Notes file"
                    placeholder="Choose a file with saved Notes"
                    v-on:change="setFileVariable"
                  >

                  </v-file-input-->
                  <input v-on:change="setFileVariable" class="mb-2" type="file">
                </v-list-item>
                <v-list-item>
                  <v-spacer/>
                  <v-btn width="170" color="orange"
                      title="Save your Notes"
                      v-on:click="importNotesFromFile()">
                          Import Notes
                  </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-spacer/>
                  <v-btn width="170" color="orange"
                      title="Save your Notes"
                      v-on:click="exportNotesToFile()">
                        Download Notes
                  </v-btn>
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
    currentNoteIndex: 0,
    file: null
  }),

  mounted() {
    if (localStorage.jsonTodoNotes) {
      this.todoNotes = JSON.parse( localStorage.jsonTodoNotes);
    }
  },

  watch: {
    todoNotes(newNotes) {
      localStorage.jsonTodoNotes = JSON.stringify(newNotes);
    }
  },

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

      // set the file variable in Vue app to the value given in "input file" tag
      setFileVariable : function(event){

          if(event){
              const fileForImport = event.srcElement.files[0];
              // set the file variable in our Vue application
              this.file = fileForImport;
              console.log(this.file);
          }
      },      

      importNotesFromFile() {

        //console.log('uploading Notes from a file ...');
        const fileReader = new FileReader();

        // here we use arrow function to have appropriate context
        fileReader.onload = (event) => {

            let contents = event.target.result;
            let jsonObj = JSON.parse(contents);
            this.todoNotesBackup = this.todoNotes.slice();
            this.todoNotes = jsonObj.slice();
        }

        // here context is not critical
        fileReader.onerror = function(event) {
            console.error("Файл не может быть прочитан! код " + event.target.error.code);
        }

        // if file variable is not NULL
        if (this.file) {
            fileReader.readAsText(this.file);
        }
      },
      

      // saves (downloads) all todo notes to a file 'todo_notes.json' in DownLoads folder 
      exportNotesToFile() {

        const data = JSON.stringify(this.todoNotes);
        const file = new Blob([data], {type: 'application/json'});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, 'todo_notes.json');
        else { // Others
            const a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = 'todo_notes.json';
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        }
      }
      
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
