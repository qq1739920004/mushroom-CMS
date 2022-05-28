import { coordinateData } from './coordinate-data'
export function purifyMap(mapData: any) {
  const res: any[] = []
  for (let i = 0; i < mapData.length; i++) {
    const geoCoord = coordinateData[mapData[i].name]
    if (geoCoord) {
      res.push({
        name: mapData[i].name,
        value: geoCoord.concat(mapData[i].value)
      })
    }
  }
  return res
}
