export function getTotalClothes(clothes) {
  return clothes.length;
}

export function getAverageWear(clothes) {

  if (clothes.length === 0) return 0;

  const total = clothes.reduce(
    (sum, item) => sum + item.wearCount,
    0
  );

  return (total / clothes.length).toFixed(1);

}

export function getMostWorn(clothes) {

  if (clothes.length === 0) return null;

  return [...clothes].sort(
    (a, b) => b.wearCount - a.wearCount
  )[0];

}

export function getLastWorn(clothes) {

  const worn = clothes.filter(
    item => item.lastWorn
  );

  if (worn.length === 0) return null;

  return worn[worn.length - 1];

}
export function getSustainabilityScore(clothes) {

  if (clothes.length === 0) return 100;

  const totalWear = clothes.reduce(
    (sum, item) => sum + item.wearCount,
    0
  );

  const score = Math.min(
    100,
    Math.round((totalWear / (clothes.length * 10)) * 100)
  );

  return score;

}