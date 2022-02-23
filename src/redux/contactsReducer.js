import { createReducer } from "@reduxjs/toolkit";
import shortid from 'shortid';

const initialState = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

export const сontactsReducer = createReducer(initialState, {
    'phonebook/addContact': (state, { payload }) => [...state, payload],
    'phonebook/deleteContact': (state, { payload }) =>
        state.filter(contact => contact.id !== payload)
});

export const filterReducer = createReducer('', {
    'phonebook/addToFilterState': (_, { payload }) => payload,
});

