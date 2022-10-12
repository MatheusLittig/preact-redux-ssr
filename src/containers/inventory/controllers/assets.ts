import { api } from "~/apis/atomic";
import { asset } from "..";
import { SchemaNames, schema_names } from "~/constants/envs";

export const assetController = {
  fetch: async (schema: SchemaNames, qtty: number) => {
    const raw = await api.getAssets({
      collection_name: process.env.NEXT_PUBLIC_COLLECTION,
      owner: 'littigkami21',
      schema_name: schema_names[schema]
    }, 1, qtty)

    const data = asset.sanitizer(raw)

    return asset.dispatch('setList')(data)
  },
}