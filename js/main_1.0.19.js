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
		title: 'Uncertainty from the Small to the Large',
		url: 'docs/pdf/Uncertainty_Oct_2021.pdf',
		coauthor: {
			name: 'David Ahn',
			url: 'https://sites.wustl.edu/ahnd/',
		},
		abstract: `Related decisions are often observed in isolation without 
		direct measurement of correlation in beliefs across state spaces or 
		complementarity in tastes across prize spaces. We introduce a novel 
		model with two decision problems with distinct states and prizes, which 
		we call small worlds, without observation of bets that are contingent on 
		the realization of both worlds. We characterize an appropriate version 
		of subjective expected utility, where choices are made as if there is a 
		joint distribution over the product of the state spaces and a joint 
		utility index over pairs of prizes from both prize spaces. Turning to 
		identification, the joint utility index over pairs of prizes and the 
		marginal belief over each small world is identified, but the uniqueness 
		of the joint distribution is more subtle. If the utility index is 
		separable across prize spaces, then the correlation across state spaces 
		is unidentified; but if there is any complementarity across prizes, then 
		the joint distribution is exactly identified.`,
		abstractCollapsed: true,
		note: 'Accepted at ',
		journal: 'Journal of Economic Theory',
		journalUrl: 'https://www.sciencedirect.com/science/article/pii/S0022053121001848',
		image: null,
	}, {
		title: 'A Choice Model of Gradual Attention',
		url: 'docs/pdf/A_Choice_Model_of_Gradual_Attention_Oct29_2021.pdf',
		coauthor: null,
		abstract: `Despite a growing interest in choice models with limited 
		attention, there is a lack of studies modeling limited attention itself. 
		In this paper, I propose a choice model with gradual attention, in which 
		a decision maker’s attention is limited due to time constraints. With 
		richer choice data including the associated decision time, I provide an 
		axiomatic characterization of this model. I show the model primitives 
		such as the preference can be uniquely identified. To make the model 
		comparable to existing choice models with limited attention, I consider 
		its static version without time data and show identification is not 
		always possible, which highlights the novelty of utilizing the decision 
		time information in understanding choice behaviors. I examine 
		aggregation issues of this model and give necessary and sufficient 
		conditions for the existence of a representative agent under 
		heterogeneity. In my model, the decision maker’s consideration set is 
		growing monotonically as decision time increases. As a consequence, more 
		time leads to better choices. I test this choice pattern using 
		experimental data from a well-known study and find supportive 
		evidence.`,
		abstractCollapsed: true,
		note: ``,
		image: {
			src: 'img/Empirical_CDF.png', 
			alt: 'Empirical CDF',
			description: `Experimental evidence of better choices with more 
			time: choices in blue first-order stochastically dominates choices 
			in red.`,
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
		abstractCollapsed: true,
		note: ``,
		image: null,
	}, {
		title: 'Cherry Picking &#127826;',
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
		abstractCollapsed: true,
		note: '',
		image: null,
	}, {
		title: 'Persuasion and Receiver’s Risk Attitudes',
		url: 'docs/pdf/Persuasion_Oct_2021.pdf',
		coauthor: null,
		abstract: `This paper studies how the receiver’s risk attitudes affect 
		the set of implementable outcomes in a persuasion problem. I consider a 
		two-period consumption model, where the receiver’s future income is 
		uncertain and he has the option to transfer his wealth intertemporally 
		through saving. I present a local comparative statics result, showing 
		that any marginal change in the receiver’s prudence either expands or 
		shrinks the set of implementable persuasion outcomes. Risk aversion does 
		not affect persuasion outcomes, except through pivoting the receiver’s 
		optimal action under the prior belief. Other higher order risk attitudes 
		have no direct impact on persuasion outcomes.`,
		abstractCollapsed: true,
		note: '',
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
