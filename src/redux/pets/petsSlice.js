import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pets: [],
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload;
    },
    addPet: (state, action) => {
      state.pets.push(action.payload);
    },
    updatePet: (state, action) => {
      state.pets = state.pets.map(pet =>
        pet.id === action.payload.id ? action.payload : pet
      );
    },
    deletePet: (state, action) => {
      state.pets = state.pets.filter(pet => pet.id !== action.payload);
    },
  },
});

export const { setPets, addPet, updatePet, deletePet } = petsSlice.actions;
export default petsSlice.reducer;
