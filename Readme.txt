SETUP PROJECT
-vue create [prodject name]
-vue add vuetify
-Extension
    -> vetur
    -> vue 2 snippet
    -> vscode-icon
    -> Highlight Matching Tag
    -> prettier - code formatter
    -> vuetify -vscode
    -> Live Server(for real show webserver)
-npm install --save material-design-icons-iconfont
    **main.js**-> import 'material-design-icons-iconfont/dist/material-design-icons.css' 

-Set default theme vuetify at plugins/vuetify.js can see procress
    -> https://vuetifyjs.com/en/features/theme/

-set Page create file in /views/...vue and set router 
-set structure of web as Header ,content ,footer
-set file: Content.vue,Header.vue,Menu.vue in components >> core
-npm add vue2-filters (for customize format)
    -> after install go import at main.js
        -> import Vue2filters from "vue2-filters"
           Vue.use(Vue2filters)
-npm add axios (is libary connect network)
-------------------------------------------------------------------
set backend dummy (package.json for node js)
-mkdir backend_dummy
 -cd backend_dummy
 -touch server.js
 -npm init -y
 -npm add express body-parser formidabel fs-extra cors
 -sudo npm global add nodemon
 -------------------------------------------------------------------
** Dummby data table ** 
<v-data-table
        :headers="[
          { text: 'Firstname', value: 'firstname' },
          { text: 'Lastname', value: 'lastname' },
        ]"
        :items="[
          { firstname: 'March', lastname: 'Ponsapak' },
          { firstname: 'March', lastname: 'Rattanaka' },
        ]"
      >
      </v-data-table>
