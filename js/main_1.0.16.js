var app = angular.module('personalWeb', []);

app.controller('mainCtrl', function($scope) {
	/** Header */
	const convertLetter = (letter) => `pixel-font-${letter}`;
	$scope.headerHome = [...'HOME'].map(convertLetter);
	$scope.headerResearch = [...'RESEARCH'].map(convertLetter);
	$scope.headerTeaching = [...'TEACHING'].map(convertLetter);
	$scope.headerPapers = [...'PAPERS'].map(convertLetter);

    /** ----------------------------- Home ----------------------------- */


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
		abstractCollapsed: false,
		note: 'Revise and resubmit at ',
		journal: 'Journal of Economic Theory',
		image: null,
	}, {
		title: 'Stochastic Choice from Gradual Attention',
		url: 'docs/pdf/Stochastic_Choice_Gradual_Attention_Nov29.pdf',
		coauthor: null,
		abstract: `We propose a novel model of stochastic choices with limited 
		attention. A consumer evaluates a menu of options sequentially, 
		following an order that depends on the salience of the options 
		(called <span class="italic-font">salience order</span>). 
		Due to the time constraint, the consumer might not be able to evaluate 
		every option in the menu. The set of options she has evaluated forms her 
		consideration set and she chooses her most preferred option from the 
		consideration set. Her evaluation process is modeled by a counting 
		process. As a consequence, her consideration set and choice can be 
		stochastic. We provide an axiomatic characterization of this model. 
		With the rich data containing both the choices and the associated 
		contemplation time, we show the primitives of the models such as the 
		salience order and the preference can be uniquely recovered. A key 
		feature of our model is that the consumer makes better choices (in terms 
		of first-order stochastic dominance) as her contemplation time 
		increases. We test this choice pattern using the experimental data by 
		Caplin, Dean, and Martin (2011), and find suggestive evidence in support 
		of this choice pattern.`,
		abstractCollapsed: false,
		note: ``,
		image: {
			src: 'img/Empirical_CDF.png', 
			alt: 'Empirical CDF',
			description: `Experimental evidence of better choices with more 
			time: choices in blue first-order stochastically dominates choices 
			in red. (<span class="italic-font">Data Source</span>: 
			Caplin, Dean, and Martin (2011))`,
		},
	}, {
		title: 'Hard to Measure Well: Can Feasible Policies Reduce Methane Emissions?',
		url: 'docs/pdf/Karl_Dunkle_Werner_JMP.pdf',
		coauthor: {
			name: 'Karl Dunkle Werner',
			url: 'https://karldw.org',
		},
		abstract: `Oil and gas wells emit large quantities of methane, a 
		greenhouse gas 34 times more potent than carbon dioxide. Methane 
		emissions are rarely priced and lightly regulated—in part because they 
		are hard to measure—leading to a large climate externality. However, 
		measurement technology is improving, with remote sensing and other 
		techniques opening the door for policy innovation. We present a 
		theoretical model of emissions abatement at the well level and a range 
		of feasible policy options, then use data constructed from 
		cross-sectional scientific studies to estimate abatement costs. We 
		simulate audit policies under realistic constraints, varying the 
		information the regulator uses in choosing wells to audit. These 
		policies become more effective when they can target on well covariates, 
		detect leaks remotely, and charge higher fees for leaks. We estimate a 
		policy that audits 1% of wells with uniform probability achieves less 
		than 1% of the gains of the infeasible first best. Using the same number 
		of audits targeted on remotely sensed emissions data achieves gains of 
		30–60% of the first best. These results demonstrate that because leaks 
		are rare events, targeting is essential for achieving welfare gains and 
		emissions reductions. Auditing a small fraction of wells can have a 
		large impact when properly targeted.`,
		abstractCollapsed: false,
		note: ``,
		image: null,
	}, {
		title: 'Cherry Picking',
		url: 'https://osf.io/preprints/metaarxiv/as9zd/',
		coauthor: {
			name: 'Megan Lang',
			url: 'https://www.meganlangecon.com',
		},
		abstract: `Measures like pre-analysis plans ask researchers to describe 
		planned data collection and justify data exclusions, but they provide 
		little enforceable oversight of primary data collection. We show that a 
		simple algorithm can select large subsets of data that yield 
		economically meaningful and statistically significant treatment effects. 
		The subsets cannot be distinguished from a random sample of the original 
		data, rendering the selection undetectable if peer reviewers are unaware 
		of the size of the original dataset. Our results hold using simulated 
		data and replication data from a well-known study. We show that there 
		are few natural deterrents to dataset manipulation: the results in our 
		selected subset are robust to a range of alternative specifications, our 
		algorithm performs well under complex sampling strategies, and our 
		subset can yield artificially high effects on multiple outcomes. We 
		conclude by proposing a measure to prevent such manipulation in field 
		experiments.`,
		abstractCollapsed: false,
		note: '',
		image: null,
	}, {
		title: 'Information Design with Background Risk',
		url: '',
		coauthor: null,
		abstract: ``,
		abstractCollapsed: true,
		note: 'draft upon request',
		image: null,
	}];

	$scope.isShowContent = (content) => {
		return !!content;
	};

	$scope.isShowComma = (coauthors, idx) => {
		return coauthors.length > 1 && idx !== coauthors.length - 1;
	}

	$scope.clickAbstract = (paper) => {
		paper.abstractCollapsed = !paper.abstractCollapsed;
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

app.filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);
