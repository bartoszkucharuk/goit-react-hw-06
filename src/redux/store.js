import storage from 'redux-persist/lib/storage';// defaults to localStorage for web, more info https://www.npmjs.com/package/redux-persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";


//reducers config
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

//redux-persist config
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//prepare config for persisted store to export to main.jsx (store, persistor)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            }
        })
});
export const persistor = persistStore(store);
export default store;