import { IAsset } from "atomicassets/build/API/Explorer/Objects";
import { Asset } from "..";

export function assetSanitizer(raw: IAsset[]): Asset.Model[] {
  return raw.map(asset => ({
    id: asset.asset_id,
    name: asset.name,
    img: `${process.env.NEXT_PUBLIC_IMG_URL}/${asset.data.img}`
    // img: asset.data.img,
  }))
}