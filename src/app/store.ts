// eslint-disable-next-line import/no-cycle
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  Middleware,
} from '@reduxjs/toolkit';
import debounce from 'debounce';
import { createLogger } from 'redux-logger';
import { apiSlice } from '../api/apiSlice';
import { notificationReducer } from '../storage/notification';
import { addFav, favoritesReducer, removeFav } from '../storage/favorites';
import {
  loadFromLocalStorage, saveToLocalStorage,
} from '../hooks/useLocalStorage';
import { Pet } from '../types/Pet';

const reducers = combineReducers({
  notification: notificationReducer,
  favorites: favoritesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const favoritesPets = loadFromLocalStorage('favorites', [] as Pet[]);

const favoritesInitialState = favoritesPets;

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === addFav.type || action.type === removeFav.type) {
    const favoritesState = store.getState().favorites;

    saveToLocalStorage('favorites', favoritesState);
  }

  return result;
};

const logger = createLogger();

let middleware: Middleware[] = [];

middleware.push(apiSlice.middleware as Middleware);
middleware.push(localStorageMiddleware as Middleware);

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger as Middleware];
}

export const store = configureStore({
  reducer: reducers,
  preloadedState: {
    favorites: favoritesInitialState,
  },
  middleware: (gDM) => gDM().concat(middleware),
});

store.subscribe(debounce(() => {
  saveToLocalStorage(
    'favorites', store.getState().favorites,
  );
}, 800));

export type AppDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TypeRootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
