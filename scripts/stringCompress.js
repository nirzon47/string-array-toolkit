function stringCompress() {
	const s = document.getElementById('s').value
	const resultElement = document.getElementById('result')
	let res = '',
		i

	const len = s.length
	let count = 1
	let check = s[0]

	if (len == 1) {
		res += check + count
		return
	}

	for (i = 1; i < len; i++) {
		if (check == s[i]) {
			count++
		} else {
			res += check + count
			count = 1
			check = s[i]
		}
	}

	if (s[i - 1] == s[i - 2]) {
		res += s[i - 1] + count
	} else {
		res += s[i - 1] + '1'
	}

	resultElement.innerText = res
}
