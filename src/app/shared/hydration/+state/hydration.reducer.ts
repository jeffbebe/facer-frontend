import { Action, ActionReducer } from '@ngrx/store';

import { AppState } from '../../../app.module';
import * as HydrationActions from './hydration.actions';

function isHydrateSuccess(
  action: Action
): action is ReturnType<typeof HydrationActions.hydrateSuccess> {
  return action.type === HydrationActions.hydrateSuccess.type;
}

export const hydrationMetaReducer = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return { ...state, ...action.state };
    } else {
      return reducer(state, action);
    }
  };
};
