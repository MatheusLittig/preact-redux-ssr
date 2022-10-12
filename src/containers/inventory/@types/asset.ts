type Model = {
  id: string
  name: string
  img: string
}

type Schemas = "weapons" | "shield" | "survivors"

type Store = {
  page: number
  list: Model[]
  schema: Schemas
}

type ReducersPayload = {
  setList: Model[],
  removeFromList: string,
  reset: undefined
}

export type { Schemas, Model, Store, ReducersPayload }