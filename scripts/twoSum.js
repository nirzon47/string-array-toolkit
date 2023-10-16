function twoSum() {
	const arr = document.getElementById('arr').value
	const nums = arr.split(' ')
	const target = Number(document.getElementById('target').value)
	const resultElement = document.getElementById('result')

	const seen = new Map()

	for (let i = 0; i < nums.length; i++) {
		let complement = target - Number(nums[i])

		if (seen.has(complement)) {
			resultElement.innerText = nums[i] + ', ' + complement
			return
		}

		seen.set(Number(nums[i]), i)
	}

	resultElement.innerText = ''
	resultElement.innerText = 'No two sum solution'
}
