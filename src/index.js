module.exports = function towelSort (matrix) {
    if(!matrix) return [];
	return matrix.reduce((acc, el, i) => {
		if(i%2 === 1) el.reverse();
		el.forEach(subEl => {
			acc.push(subEl);
		});
		return acc;
	}, []);
}
