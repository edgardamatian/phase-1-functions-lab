function distanceFromHqInBlocks(currentLocation) {
    const headquartersLocation = 42;
    const distanceInBlocks = Math.abs(currentLocation - headquartersLocation);
    return distanceInBlocks;
  }

  function distanceFromHqInFeet(currentLocation) {
    const blockLengthInFeet = 264;
    const distanceInBlocks = distanceFromHqInBlocks(currentLocation);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startingLocation, endingLocation) {
    const blockLengthInFeet = 264;
    const distanceInBlocks = Math.abs(endingLocation - startingLocation);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }