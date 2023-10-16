function arrayIntersection() {
	const nums1 = document.getElementById('nums1').value.split(' ')
	const nums2 = document.getElementById('nums2').value.split(' ')
	const resultElement = document.getElementById('result')

	const seen = new Set()

	for (const n of nums1) {
		seen.add(n)
	}

	const res = new Set()

	for (const n of nums2) {
		if (seen.has(n)) {
			res.add(n)
		}
	}

	resultElement.innerText = ''
	resultElement.innerText = [...res]
}
