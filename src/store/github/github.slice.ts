import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk'
interface GitHubState{
    favourites: string[]
}

const initialState: GitHubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'git',
    initialState,
    reducers: {
         addFav(state, {payload}: PayloadAction<string> ){
            state.favourites.push(payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
         },
         removeFav(state, {payload}: PayloadAction<any>){
            state.favourites = state.favourites.filter((id) => id !== payload )
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))

         }
    }
})
export const gitGubActions = githubSlice.actions
export const gitGubReducer = githubSlice.reducer