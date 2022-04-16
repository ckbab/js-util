export const getDistanceBetweenCoordinates = (lat1, lng1, lat2, lng2) => {
  const R = 6371 * 1000; // Radius of the earth in meter.
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const getGoogleMapsUrl = (lat, lng) => {
  const baseUrl = "https://www.google.com/maps/place";
  if (lat && lng) {
    return `${baseUrl}/${lat},${lng}`;
  }
  return null;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};
