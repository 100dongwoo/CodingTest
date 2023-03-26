function solution(park, routes) {
  const isValueCheck = (value, origin, newLocation) => {
    //     값 체크
    let checkList = [];

    if (value === undefined || value === "X") {
      return false;
    }

    //     S체크
    const isRowMove = origin[0] === newLocation[0];
    const maxValue = isRowMove
      ? origin[1] > newLocation[1]
        ? origin[1]
        : newLocation[1]
      : origin[0] > newLocation[0]
      ? origin[0]
      : newLocation[0];
    const minValue = isRowMove
      ? origin[1] > newLocation[1]
        ? newLocation[1]
        : origin[1]
      : origin[0] > newLocation[0]
      ? newLocation[0]
      : origin[0];

    if (isRowMove) {
      checkList = park[origin[0]].slice(minValue, maxValue).split("");
    } else {
      for (let i = minValue + 1; i <= maxValue; i++) {
        checkList.push(park[i][origin[1]]);
      }
    }
    return !checkList.includes("X");
  };

  let location;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        location = [i, j];
      }
    }
  }

  routes.map((route) => {
    const splitValue = route.split(" ");
    const direction = splitValue[0];
    const directionValue = parseInt(splitValue[1]);

    let newLocation = [...location];
    if (direction === "N") {
      newLocation = [newLocation[0] - directionValue, newLocation[1]];
    } else if (direction === "S") {
      newLocation = [newLocation[0] + directionValue, newLocation[1]];
    } else if (direction === "W") {
      newLocation = [newLocation[0], newLocation[1] - directionValue];
    } else if (direction === "E") {
      newLocation = [newLocation[0], newLocation[1] + directionValue];
    }
    if (
      newLocation[0] >= 0 &&
      newLocation[0] < park.length &&
      newLocation[1] >= 0 &&
      newLocation[1] < park[0].length
    ) {
      if (
        isValueCheck(
          park[newLocation[0]][newLocation[1]],
          location,
          newLocation
        )
      ) {
        location = newLocation;
      }
    }
  });
  return location;
}
