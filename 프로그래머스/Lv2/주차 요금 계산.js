const convertTime = (time) => {
  const split = time.split(":");
  return parseInt(split[0]) * 60 + parseInt(split[1]);
};

const covertPrice = (minutes, fees) => {
  if (minutes <= fees[0]) {
    return fees[1];
  } else {
    return fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3];
  }
};

function solution(fees, records) {
  let carObj = {};
  records = records.map((data) => data.split(" "));

  records.map((data) => {
    const startTime = data[0];
    const carNumberValue = data[1];

    if (!carObj[carNumberValue]) {
      carObj[carNumberValue] = {
        totalMinutes: 0,
      };
    }

    if (data[2] === "IN") {
      carObj[carNumberValue].start = startTime;
      carObj[carNumberValue].end = null;
    } else {
      carObj[carNumberValue].end = startTime;
      carObj[carNumberValue].totalMinutes +=
        convertTime(startTime) - convertTime(carObj[carNumberValue].start);
    }
  });

  Object.keys(carObj).map((data) => {
    if (carObj[data].end === null) {
      carObj[data].totalMinutes +=
        convertTime("23:59") - convertTime(carObj[data].start);
    }
  });

  const carNumbers = Object.keys(carObj).sort((a, b) => a - b);

  return carNumbers.map((carNumber) =>
    covertPrice(carObj[carNumber].totalMinutes, fees)
  );
}
