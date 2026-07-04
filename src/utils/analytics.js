export function getTotalClothes(clothes) {
  return clothes.length;
}

export function getAverageWear(clothes) {
  if (clothes.length === 0) return 0;

  const totalWear = clothes.reduce(
    (sum, item) => sum + (item.wearCount || 0),
    0
  );

  return (totalWear / clothes.length).toFixed(1);
}

export function getMostWorn(clothes) {
  if (clothes.length === 0) return null;

  return clothes.reduce((max, item) =>
    (item.wearCount || 0) > (max.wearCount || 0)
      ? item
      : max
  );
}

export function getSustainabilityScore(clothes) {
  if (clothes.length === 0) return 0;

  const totalWear = clothes.reduce(
    (sum, item) => sum + (item.wearCount || 0),
    0
  );

  return Math.min(100, Math.round((totalWear / clothes.length) * 15));
}

export function getFavouriteCount(clothes) {
  return clothes.filter(item => item.favorite).length;
}

export function getWardrobeValue(clothes) {
  return clothes.reduce(
    (sum, item) =>
      sum + Number(item.purchasePrice || 0),
    0
  );
}

export function getTotalWearCount(clothes) {
  return clothes.reduce(
    (sum, item) => sum + (item.wearCount || 0),
    0
  );
}