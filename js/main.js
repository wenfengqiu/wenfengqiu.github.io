var app = angular.module('personalWeb', []);

app.controller('mainCtrl', function($scope) {
	/** Header */
	const convertLetter = (letter) => `pixel-font-${letter}`;
	$scope.headerHome = [...'HOME'].map(convertLetter);
	$scope.headerResearch = [...'RESEARCH'].map(convertLetter);
	$scope.headerTeaching = [...'TEACHING'].map(convertLetter);
	$scope.headerPapers = [...'PAPERS'].map(convertLetter);

    /** ----------------------------- Home ----------------------------- */
	$scope.selfIntroduction1 = `I am a 6th year PhD candidate in the Department
	of Agricultural and Resource Economics at UC Berkeley. I am on the 2020-21 
	job market.`;
	$scope.selfIntroduction2 = `My research interests are in microeconomic theory, 
	with focus on decision theory and information economics.`;
	$scope.selfIntroduction3 = ``;

    $scope.cv = 'docs/pdf/cv.pdf';
    $scope.email = 'wqiu03[at]berkeley.edu';



    /** ----------------------------- Research ----------------------------- */
    // (with ...) will be hidden if coauthors is an empty array coauthors: []
	$scope.papers = [{
		title: 'Uncertainty in the Small and Large',
		url: '',
		coauthor: {
			name: 'David Ahn',
			url: 'https://eml.berkeley.edu/~dahn/',
		},
		abstract: `hellow hou adfada`,
		note: ``,
	}, {
		title: 'Stochastic Choice with Gradual Attention',
		url: 'docs/pdf/paper2.pdf',
		coauthor: null,
		abstract: ``,
		note: ``,
	}, {
		title: 'Regulating Poorly-Measured Pollution: Feasible Policies to Address Methane Emissions',
		url: '',
		coauthor: {
			name: 'Karl Dunkle Werner',
			url: 'https://karldw.org',
		},
		abstract: ``,
		note: ``,
	}, {
		title: 'Information Design with Background Risk',
		url: '',
		coauthor: null,
		abstract: ``,
		note: ``,
	}];

	$scope.isShowContent = (content) => {
		return !!content;
	};

	$scope.isShowComma = (coauthors, idx) => {
		return coauthors.length > 1 && idx !== coauthors.length - 1;
	}

    /** ----------------------------- Teaching ----------------------------- */
    $scope.teachings = [{
    	title: 'Econ 201A - Graduate General Equilibrium Theory',
    	url: '',
    	description: `Fall 2019, 2018, 2017`,
    }, {
    	title: 'Econ 136 - Undergraduate Financial Economics',
    	url: '',
    	description: `Spring 2018`,
    }, {
    	title: 'Econ 138 - Undergraduate Financial and Behavioral Economics',
    	url: '',
    	description: `Spring 2019`,
    }]
});
