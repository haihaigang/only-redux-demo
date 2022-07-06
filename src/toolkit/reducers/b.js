import { createSlice } from "@reduxjs/toolkit"

const BReducer = createSlice({
    name: 'b',
    initialState: {count: 1},
    reducers:{
        add: (state, action) => {
            state.count *= action.payload
        }
    }
})
export default BReducer.reducer

export const { add } = BReducer.actions