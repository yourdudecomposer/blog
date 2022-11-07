import { configureStore } from '@reduxjs/toolkit'
import mainPageSlice from './mainPageSlice'
import articlePageSlice from './articlePageSlice'

export default configureStore({
  reducer: {
   mainPageSlice,
   articlePageSlice,
  },
})