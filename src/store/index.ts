import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gitGubReducer } from "./github/github.slice";

export const store = configureStore({
    reducer: {
        [gitHubApi.reducerPath]: gitHubApi.reducer,
        git: gitGubReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(gitHubApi.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>