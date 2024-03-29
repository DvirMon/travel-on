import { createReducer, on } from '@ngrx/store';
import { FavoriteActions } from './favorite.actions';
import { initialState } from './favorite.state';
import { Favorite } from './favorite.model';
import { AuthActions } from 'src/app/auth/store/auth.actions';


export const favoriteReducer = createReducer(
  initialState,
  on(FavoriteActions.loadFavoriteSuccess,
    (state, action) => ({
      favorite: {
        ...action.favorite,
      },
      loaded: true,
    })
  ),

  on(FavoriteActions.updateSelectedFavoritesPlaces,
    (state, action) => (
      {
        ...state,
        favorite: {
          ...state.favorite as Favorite,
          vacationIds: [...Object.keys(action.selected)]
        },
      })),

  on(AuthActions.logout, () => ({
    ...initialState
  }))
);

