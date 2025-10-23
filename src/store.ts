import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import todoReducer from './features/ToDoList'
import { ToDoList } from './components/ToDoList/ToDoList'
import reducer from './features/ToDoList'

const saveToLocalStorage = (state: RootState) => {
  try {const appState = JSON.stringify(state)
      localStorage.setItem('appState', appState)
    } catch (e) {
      console.warn(e);
    }
}

const loadFromLocalStorage = () => {
   try {const appState = localStorage.getItem('appState')
        if (!appState) return undefined
        return JSON.parse(appState)
      } catch (e) {
        console.warn(e)
        return undefined
      }
}

export const store = configureStore({
  reducer,
  preloadedState: loadFromLocalStorage()})





store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch