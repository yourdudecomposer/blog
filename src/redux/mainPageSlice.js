import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../services/Api/Api'


export const fetchArticles = createAsyncThunk(
    'users/fetchArticlesStatus',
    async (ofset) => {
        const response = await api.getArticles(ofset)
        return response;
    }
)


export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState: {
        articles: [],
        loading: 'idle',
        articlesCount: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            console.log('fullfiled')

            console.log(action.payload)
            if (action.payload.articles) {
                state.articles = action.payload.articles;
                state.articlesCount = action.payload.articlesCount;
                // state.totalPage = Math.ceil(action.payload.articlesCount/Api.limit)
                state.loading = 'idle';
            } else{
                state.loading = 'failed';
                state.error = action.payload.errors;
                state.articlesCount = null;
            }


        })
        builder.addCase(fetchArticles.pending, (state, action) => {
            console.log('pending')
            state.loading = 'pending';
            state.articles = [];
            state.articlesCount = null
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            console.log('rejected')
            state.loading = 'failed';
            state.error = action.error;
            state.articlesCount = null;
        })
    },
})


export default mainPageSlice.reducer