function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const distanceFare = distanceInKm * chargePerKm;

  const totalFare = baseFare + distanceFare;

  console.log("Huko kwote? Io ni ${distanceInKm} km:");
  console.log("Ukikalia Pikipiki: KES ${baseFare}");
  console.log("Mpaka huko: KES ${distanceFare}");
  console.log("Total: KES ${totalFare}");
  console.log("\nPanda Pikipiki! 🛵")
}
const userInput = prompt("Unafika wapi mtu wangu? Kilometer ngapi?:");

const distanceInKm = Number(userInput);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Please input valid kilometers greater than zero.");
}