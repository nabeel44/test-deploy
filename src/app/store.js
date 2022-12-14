import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi} from "../services/cryptoNewsApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoNewsApi.middleware)
});

setupListeners(store.dispatch)

/*
export default configureStore({
    reducer: {
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});
*/