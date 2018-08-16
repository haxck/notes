module.exports = {
	base: "/notes/",
	title: "haxck's notebook",
	description: "haxck's learning notes",
	themeConfig: {
		nav: [{
				text: 'f2e',
				link: '/f2e/'
			},
			{
				text: 'd&c',
				link: '/dc/'
			}
		],
		sidebar:{
			'/f2e/':[
				'',
				'test'
			],
			'/dc/': [
				'',
				'queue',
				'stack'
			],
			'/': [
				''
			]
		}
	}
}