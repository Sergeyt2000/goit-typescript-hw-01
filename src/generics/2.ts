type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  B extends Pick<AllType, "position" | "weight">
>(top: T, bottom: B): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function compare1(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
