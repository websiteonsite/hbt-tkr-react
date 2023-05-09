import { configureStore }from "@reduxjs/toolkit";
import habitReducer from './reducers/HabitReducer'

const Store = configureStore({
    reducer:{
        habits:habitReducer,
    },
});
export default Store;