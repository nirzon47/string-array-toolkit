function reverseString() {
	const resultElement = document.getElementById('result')
	const s = document.getElementById('string').value

	if (s === '') {
		resultElement.innerHTML = '&nbsp;'
		return
	}

	res = s.split('')

	let left = 0,
		right = s.length

	while (left < right) {
		let temp = res[left]
		res[left] = res[right]
		res[right] = temp

		left++
		right--
	}

	res = res.join('')

	resultElement.innerText = ''
	resultElement.innerText = res
}
