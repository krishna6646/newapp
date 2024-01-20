import React from "react";
import Mapboxgl from "mapbox-gl";
import SearchBox from "mapbox-gl/components/search-box";

const accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Map = () => {
  const [searchBox, setSearchBox] = React.useState(null);

  React.useEffect(() => {
    const searchBox = new SearchBox({
      accessToken,
    });

    setSearchBox(searchBox);
  }, []);

  if (!searchBox) {
    return null;
  }

  return (
    <Mapboxgl
      style={{ width: "100%", height: "100%" }}
      accessToken={accessToken}
    >
      {searchBox}
    </Mapboxgl>
  );
};

export default Map;