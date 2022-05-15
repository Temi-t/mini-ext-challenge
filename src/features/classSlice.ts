import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../app/store';



let url ='https://jsonplaceholder.typicode.com/todos/1'
let userId = 567;


export const fetchClassRecords = createAsyncThunk(
  'classeRecord/fetchById',
  async (userId: number) => {
    //const res = await fetch(`https://reqres.in/api/users/${userId}`)
    const response = await fetch(url)
      return (await response.json());
  }
);

// the parameter of `fetchUserById` is automatically inferred to `number` here
// and dispatching the resulting thunkAction will return a Promise of a correctly
// typed "fulfilled" or "rejected" action.
//const lastReturnedAction = await store.dispatch(fetchUserById(3))

interface ClassState {
  value: [];
  status: string,
  error: string | null
}

const initialState: ClassState = {
  value: [],
  status: "idle", //idle | succeeded | loading | failed
  error: null
};


export const classSlice = createSlice({
  name: "classRecord",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchClassRecords.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchClassRecords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchClassRecords.rejected, (state, action) => {
        state.status = 'failed';
      })
  }
});

export const selectAllClasses = (state: RootState) => state.classRecord.value
export const selectClassStatus = (state: RootState) => state.classRecord.status
export const selectClassError = (state: RootState) => state.classRecord.error

//export const { addReservation, removeReservation } = classSlice.actions;
export default classSlice.reducer;
