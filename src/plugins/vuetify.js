import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
// Vuetify
import { VCalendar } from 'vuetify/labs/VCalendar' 
// export default createVuetify
const vuetify = createVuetify({
    components: {
        VCalendar,
    },
   
  })
  
// const vuetify = createVuetify({
//     components,
//     directives,
// });
export default vuetify;
// createApp(App).use(vuetify).mount('#app')
