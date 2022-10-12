import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { Asset } from '..';

/* ============================================ */
/* Redux Slice                                  */
/* ============================================ */

export const assetModel = createSlice({
  name: 'asset',

  initialState: {
    page: 1,
    list: [],
    schema: 'weapons'
  } as Asset.Store,

  reducers: {
    setList: (state, { payload }: PayloadAction<Asset.ReducersPayload['setList']> ) => {
      state.list = payload
    },

    removeFromList: (state, { payload }: PayloadAction<Asset.ReducersPayload['removeFromList']>) => {
      state.list.filter(asset => asset.id !== payload)
    },

    reset: (state) => {
      state = {
        list: [],
        page: 1,
        schema: 'weapons'
      }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
       return {...state, ...action.payload.asset}
    },
  },
})