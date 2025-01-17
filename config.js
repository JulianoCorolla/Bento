// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Juliano',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Bom dia,',
	greetingAfternoon: 'Boa tarde,',
	greetingEvening: 'Boa noite,',
	greetingNight: 'Vai dormir',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '07c87c666668957fefc40b014322c1b0', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pt_br', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-3.7227',
	defaultLongitude: '-38.5247',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '00:01',
	hourDarkThemeInactive: '00:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'searx',
			icon: 'search',
			link: 'https://searx.space/',
		},
		{
			id: '2',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '5',
			name: 'Soundcloud',
			icon: 'cloud',
			link: 'https://soundcloud.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'cpu',
			id: '1',
			links: [
				{
					name: 'ArchWiki',
					link: 'https://wiki.archlinux.org/',
				},
				{
					name: 'Ben Eater',
					link: 'https://www.youtube.com/c/BenEater/playlists',
				},
				{
					name: 'RoadMap',
					link: 'https://roadmap.sh/',
				},
				{
					name: 'Github',
					link: 'https://github.com/JulianoCorolla',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Youtube',
					link: 'https://tube.cadence.moe/',
				},
				{
					name: 'Mangá',
					link: 'https://mangadex.org/',
				},
				{
					name: 'Anime',
					link: 'https://nyaa.si/',
				},
				{
					name: 'MAL',
					link: 'https://myanimelist.net/profile/JulianoCorolla',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'globe-2',
			id: '1',
			links: [
				{
					name: 'Whatsapp',
					link: 'https://web.whatsapp.com/',
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com',
				},
			],
		},
		{
			icon: 'library',
			id: '2',
			links: [
				{
					name: 'Livros',
					link: '/home/juliano/Documentos/livros',
				},
				{
					name: 'G Scholar',
					link: 'https://scholar.google.com/',
				},
				{
					name: 'LibGen',
					link: 'https://libgen.rs/',
				},
				{
					name: 'SciHub',
					link: 'https://sci-hub.se/',
				},
			],
		},
	],
};
