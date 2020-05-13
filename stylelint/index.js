module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-order-config-yandex'],
	plugins: ['stylelint-order'],
	rules: {
		indentation: 'tab',
		'color-hex-length': 'long'
	}
}
