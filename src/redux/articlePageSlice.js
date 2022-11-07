import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../services/Api/Api'


export const fetchArticle = createAsyncThunk(
    'users/fetchArticleStatus',
    async (slug) => {
        const response = await api.getArticle(slug)
        return response;
    }
)


export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: {
        article: {},
        loading: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchArticle.fulfilled, (state, action) => {
            console.log('fullfiled')

            console.table(action.payload.article)
            if (action.payload.article) {
                state.article = action.payload.article;
                state.loading = 'idle';
            } else{
                state.loading = 'failed';
                state.error = action.payload.errors;
                state.articlesCount = null;
            }


        })
        builder.addCase(fetchArticle.pending, (state, action) => {
            console.log('pending')
            state.loading = 'pending';
            state.article = {};
        })
        builder.addCase(fetchArticle.rejected, (state, action) => {
            console.log('rejected')
            state.loading = 'failed';
            state.error = action.error;
        })
    },
})


export default articlePageSlice.reducer