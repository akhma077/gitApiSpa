import { bindActionCreators } from '@reduxjs/toolkit';
import {  gitGubActions } from './../store/github/github.slice';
import { useDispatch } from "react-redux"
const actions = {
    ...gitGubActions
}
export const useActions = () => {

    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}