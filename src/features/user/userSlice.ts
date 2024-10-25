import { Action } from '@radix-ui/react-toast';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  username:string,
  jwt:string
}

type UserState = {
  user: User | null
}

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user')
  if(!user) return null
  return JSON.parse(user)
}

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action:PayloadAction<User>) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
      if(user.username === 'default user'){
        console.log('welcome default guest')
        return
      }
    },
    logOutUser: (state)  => {
      state.user = null
      localStorage.removeItem('user')
    }
  },
});

export default userSlice.reducer;