function createMultiplyTable(from, to) {
	if (from < 1 || from > 1000 || to < 1 || to > 1000) {
		return "start number and the end number can be any number in a range of 1 to 1000 (inclusive)";
	} else if (from > to) {
		return null;
	} else {
		var result = "";
		for (var i = from; i <= to; i++) {
			for (var j = from; j <= i; j++) {
				result += j + "*" + i + "=" + (j * i);
				if (i !== j) result += " ";
			}
			result += "\r\n";
		}
		return result;
	}
}

module.exports = createMultiplyTable;
