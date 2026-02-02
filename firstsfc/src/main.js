import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)
app.component('food-item', FoodItem)


app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')
app.component('rest-api', RestApi)