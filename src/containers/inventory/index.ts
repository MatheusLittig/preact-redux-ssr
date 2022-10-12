import { assetModel } from "./models/asset";
import { configureStore, Slice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { ReducersPayload } from "./@types/asset";
import { assetController } from "./controllers/assets";
import { assetSanitizer } from "./mappings/asset-sanitizer";

/* ============================================ */
/* Store                                        */
/* ============================================ */

export const store = configureStore({
  reducer: {
    asset: assetModel.reducer
  },
  devTools: true
})

const storeDispatch = <T>(model: Slice<any>, key: keyof T) =>
  (args: T[typeof key]) => store.dispatch(model.actions[key as any](args))

/* ============================================ */
/* Types                                        */
/* ============================================ */

export * as Asset from './@types/asset'

export type Inventory = { store: typeof store; state: ReturnType<typeof store["getState"]> }

/* ============================================ */
/* Utilitaries                                  */
/* ============================================ */

export const asset = {
  data: (store: Inventory['state']) => store.asset,
  dispatch: (key: keyof ReducersPayload) => storeDispatch<ReducersPayload>(assetModel, key),
  controller: assetController,
  sanitizer: assetSanitizer
}

export const SSRInventory = createWrapper<Inventory['store']>(() => store)