import { Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { VacationSelectors } from './vacations/vacation.selectors';
import { VacationActions } from './vacations/vacation.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Vacation } from './vacations/vacation.model';
import { FavoritesSelectors } from '../favorites/store/favorites.selectors';
import { FavoriteActions } from '../favorites/store/favorite.actions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private store: Store
  ) { }


  public getVacations(): Signal<Vacation[] | never[]> {
    const loaded$ = this.store.select(VacationSelectors.selectVacationsLoaded)

    const vacations$ = loaded$.pipe(
      switchMap((loaded) => {
        if (!loaded) {
          this.store.dispatch(VacationActions.loadVacations())
        }
        return this.store.select(VacationSelectors.selectAllVacations)
      })
    )
    return toSignal(vacations$, { initialValue: [] });
  }

  public getSelectedFavorites(): Signal<Record<string, boolean>> {
    const selected$ = this.store.select(FavoritesSelectors.selectFavorites)
    return toSignal(selected$, { initialValue: {} })
  }

  public updateSelection(selected: Record<string, boolean>) {
    const action = FavoriteActions.updateSelectedFavoritesVacations({ selected })
    console.log(action)
    this.store.dispatch(action)
  }

}
