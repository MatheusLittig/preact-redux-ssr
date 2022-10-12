export const nfts_collection = process.env.NEXT_PUBLIC_COLLECTION

export const schema_names = {
  weapons: process.env.NEXT_PUBLIC_WEAPONS_SCHEMA
}

export type SchemaNames = keyof typeof schema_names