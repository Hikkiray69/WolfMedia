'use client';

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import casesReducer from './casesSlice';

export const store = configureStore({
    reducer: {
        cases: casesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
