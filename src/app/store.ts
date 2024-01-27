import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ModalReducer from '../features/modal';
// eslint-disable-next-line import/no-cycle
// import usersReducer from '../features/users';
// import authorReducer from '../features/author';
// import selectedPostReducer from '../features/selectedPost';
// import postsReducer from '../features/posts';
// import commentsReducer from '../features/comments';

export const store = configureStore({
  reducer: {
    isModalShow: ModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
