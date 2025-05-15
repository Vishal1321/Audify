import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import PlayerReducer from "./player"
const store=configureStore({
    reducer:{
        auth:authReducer,
        player:PlayerReducer,
    }
});
export default store;