export const selectPets = state => state.pets.pets;
export const selectPetById = petId => state =>
  state.pets.pets.find(pet => pet.id === petId);
export const selectIsLoadingPets = state => state.pets.isLoading;
