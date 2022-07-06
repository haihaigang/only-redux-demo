
import { createSlice } from "@reduxjs/toolkit"

const AReducer = createSlice({
    name: "a",
    initialState: { count: 4 },
    reducers: {
        add(state) {
            state.count += 1
        }
    }
})
export default AReducer.reducer

export const { add } = AReducer.actions