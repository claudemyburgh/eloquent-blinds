import React, { MutableRefObject, useRef } from "react"

const MapComponent = () => {
  // @ts-ignore
  let map: google.maps.Map

  const { lat, lng } = { lat: -33.89610642108077, lng: 18.649725110041995 }

  async function initMap() {
    // @ts-ignore
    const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary
    // @ts-ignore
    const { AdvancedMarkerElement, PinElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary

    map = new Map(mapRef.current as HTMLElement, {
      center: { lat, lng },
      zoom: 16,
      mapId: "87a17d4bc6260884",
    })

    const titleTag = document.createElement("div")
    titleTag.className = "title-tag"
    titleTag.textContent = "Eloquent Blinds"

    const marker = new AdvancedMarkerElement({
      map,
      position: { lat, lng },
      title: "Eloquent Blinds",
      content: titleTag,
    })

    map.addListener("zoom_changed", () => {
      const zoom = map.getZoom()
      marker.map = zoom > 12 ? map : null
    })
  }

  initMap()

  const mapRef: MutableRefObject<any> = useRef()

  return <div ref={mapRef} className={`w-full h-[500px] bg-gray-200`}></div>
}

export default MapComponent
