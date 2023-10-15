function anagramChecker() {
	let s = document.getElementById('s').value
	let t = document.getElementById('t').value
	const resultElement = document.getElementById('result')

	if (s.length != t.length) {
		return false
	}

	const sArr = new Array(26).fill(0)
	const tArr = new Array(26).fill(0)

	for (let i = 0; i < s.length; i++) {
		sArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
		tArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]++
	}

	for (let i = 0; i < 26; i++) {
		if (sArr[i] !== tArr[i]) {
			resultElement.innerHTML = 'Not Anagram'
			return
		}
	}

	resultElement.innerHTML = 'Anagram'
}
