function palindromeChecker() {
	const resultElement = document.getElementById('result')
	const s = document.getElementById('s').value

	const temp = s.split('')

	let left = 0,
		right = temp.length - 1

	while (left < right) {
		if (temp[left] !== temp[right]) {
			resultElement.innerText = 'Not Palindrome'
			return
		}

		left++
		right--
	}

	resultElement.innerText = 'Palindrome'
}
