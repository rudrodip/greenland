import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './slices/chatSlice'
import zenodoSlice from './slices/zenodoSlice'
import recordSlice from './slices/recordSlice'

export const store = configureStore({
  reducer: {
    chatSlice,
    zenodoSlice,
    recordSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch