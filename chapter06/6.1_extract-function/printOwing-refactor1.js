function printOwing(invoice) {
	let outstanding = 0;
	
	printBanner();
	
	console.log('*****************');
	console.log('**** 고객 채무 ****');
	console.log('*****************');

	// 미해결 채무(outstanding) 계산
	for (const o of invoice.orders) {
		outstanding += o.amount;
	}

	// 마감일(dueDate) 기록
	const today = Clock.today;
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

	printDetails();

	// 세부 사항을 출력한다.
	function printDetails() {
		console.log(`고객명: ${invoice.customer}`);
		console.log(`채무액: ${outstanding}`);
		console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
	}
}

function printBanner() {
	console.log('*****************');
	console.log('**** 고객 채무 ****');
	console.log('*****************');
}


const Clock = {
	today: new Date()
};

export {printOwing}