function rating(aDriver) {
	return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
	return aDriver.numberOfLateDeliveries > 5;
}

function ratingRefactor(aDriver) {
	return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function ratingCase2(aDriver) {
	return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveriesCase2(dvr) {
	return dvr.numberOfLateDeliveries > 5;
}

function ratingCase2Refactor(aDriver) {
	return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(aCustomer) {
	const lines = [];
	gatherCustomerData(lines, aCustomer);
	return lines;
}

function gatherCustomerData(out, aCustomer) {
	out.push(['name', aCustomer.name]);
	out.push(['location', aCustomer.location]);
}

function reportLinesRefactor(aCustomer) {
	const lines = [];
	lines.push(['name', aCustomer.name]);
	lines.push(['location', aCustomer.location]);
	// gatherCustomerData(lines, aCustomer);
	return lines;
}

export default rating;
export {ratingRefactor, ratingCase2Refactor, reportLines, reportLinesRefactor};
