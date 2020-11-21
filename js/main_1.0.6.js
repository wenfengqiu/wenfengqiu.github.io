var app = angular.module('personalWeb', []);

app.controller('mainCtrl', function($scope) {
	/** Header */
	const convertLetter = (letter) => `pixel-font-${letter}`;
	$scope.headerHome = [...'HOME'].map(convertLetter);
	$scope.headerResearch = [...'RESEARCH'].map(convertLetter);
	$scope.headerTeaching = [...'TEACHING'].map(convertLetter);
	$scope.headerPapers = [...'PAPERS'].map(convertLetter);

    /** ----------------------------- Home ----------------------------- */
	$scope.selfIntroduction1 = `I am a PhD candidate in the Department
	of Agricultural and Resource Economics at UC Berkeley. I am on the job 
	market this year and am available for interviews during the 2020-21 job 
	market period.`;
	$scope.selfIntroduction2 = `My research interests are in microeconomic 
	theory, with focus on decision theory and information economics.`;
	$scope.selfIntroduction3 = ``;

    $scope.cv = 'docs/pdf/Wenfeng_Qiu_CV2.pdf';
    $scope.email = 'wqiu03[at]berkeley.edu';



    /** ----------------------------- Research ----------------------------- */
    // (with ...) will be hidden if coauthors is an empty array coauthors: []
	$scope.papers = [{
		title: 'Uncertainty in the Small and in the Large',
		url: 'docs/pdf/JMP.pdf',
		coauthor: {
			name: 'David Ahn',
			url: 'https://eml.berkeley.edu/~dahn/',
		},
		abstract: `Most decisions are observed in isolation without direct 
		measurement of correlation in beliefs across state spaces or 
		complementarity in tastes across prize spaces. We introduce a novel 
		model with two decision problems with distinct states and prizes, which 
		we call small worlds, without observation of bets that are contingent on 
		the realization of both worlds. We provide a characterization of 
		subjective expected utility, where choices are made as if there is a 
		joint distribution over the product of the state  spaces and a joint 
		utility index over pairs of prizes from both prize spaces. Turning to 
		the identification problem, we show that the joint utility index over 
		pairs of prizes and the marginal belief over each small world is 
		identified, but the uniqueness of the joint distribution is more subtle. 
		If the utility index is separable across prize spaces, then the 
		correlation across state spaces is unidentified; but if there is any 
		complementarity across prizes, then the joint distribution is exactly 
		identified. We apply our analysis to provide behavioral foundations for 
		independence of the distribution across state spaces. Finally, we 
		generalize the model to allow for ambiguity about correlations.`,
		note: 'Job Market Paper',
	}, {
		title: 'Stochastic Choice from Gradual Attention',
		url: '',
		coauthor: null,
		abstract: ``,
		note: ``,
	}, {
		title: 'Hard to Measure Well: Can Feasible Policies Reduce Methane Emissions?',
		url: 'docs/pdf/Karl_Dunkle_Werner_JMP.pdf',
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
