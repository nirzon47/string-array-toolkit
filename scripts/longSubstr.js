function longSubstr() {
	const s = document.getElementById('s').value
	const resultElement = document.getElementById('result')

	if (s === '') {
		resultElement.innerHTML = '&nbsp;'
		return
	}

	let seen = new Set()
	let left = 0
	let maxSize = 0
	let res = ''

	for (let i = 0; i < s.length; i++) {
		while (seen.has(s[i])) {
			seen.delete(s[left])
			left++
		}
		seen.add(s[i])

		if (maxSize < i - left + 1) {
			maxSize = i - left + 1
			res = s.substring(left, i + 1)
		}
		maxSize = Math.max(maxSize, i - left + 1)
	}

	resultElement.innerText = ''
	resultElement.innerText = res
}
