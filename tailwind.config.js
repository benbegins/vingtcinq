module.exports = {
	content: ["./**/*.php", "./**/*.twig"],
	theme: {
		colors: {
			"blue-dark": "#005B78",
			"blue-medium": "#1194BE",
			"blue-medium-menu": "#BCD9E2",
			"blue-light": "#F1F8FC",
			gold: "#E1C586",
			white: "#FFFFFF",
			dark: "#003A4D",
		},
		fontSize: {
			xs: ".75rem",
			sm: ".8125rem",
			base: [".9375rem", "1.6"],
			lg: "1.0625rem",
			xl: "1.125rem",
			"2xl": "1.25rem",
			"3xl": "1.375rem",
			"4xl": "2.75rem",
		},
		container: {
			padding: {
				DEFAULT: "1.5rem",
				md: "3rem",
			},
			center: true,
		},
		extend: {
			fontFamily: {
				"display-200": [
					'"Roboto Flex", sans-serif',
					{
						fontVariationSettings: '"wght" 200, "wdth" 130',
					},
				],
				"display-300": [
					'"Roboto Flex", sans-serif',
					{
						fontVariationSettings: '"wght" 300, "wdth" 120',
					},
				],
				"display-500": [
					'"Roboto Flex", sans-serif',
					{
						fontVariationSettings: '"wght" 500, "wdth" 34',
					},
				],
				"display-600": [
					'"Roboto Flex", sans-serif',
					{
						fontVariationSettings: '"wght" 600, "wdth" 120',
					},
				],
				"display-700": [
					'"Roboto Flex", sans-serif',
					{
						fontVariationSettings: '"wght" 700, "wdth" 120',
					},
				],
			},
		},
	},
	plugins: [],
}
