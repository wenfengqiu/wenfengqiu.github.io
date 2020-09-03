var app = angular.module('personalWeb', []);

app.controller('mainCtrl', function($scope) {
	/** Header */
	const convertLetter = (letter) => `pixel-font-${letter}`;
	$scope.headerHome = [...'HOME'].map(convertLetter);
	$scope.headerResearch = [...'RESEARCH'].map(convertLetter);
	$scope.headerTeaching = [...'TEACHING'].map(convertLetter);
	$scope.headerPapers = [...'PAPERS'].map(convertLetter);

    /** ----------------------------- Home ----------------------------- */
    // Self introduction content displayed before the url content.
	$scope.selfIntroductionBeforeUrl = `Lorem ipsum dolor sit amet, consetetur 
	    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
		dolore magna  aliquyam erat, sed diam voluptua. At vero eos et accusam
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
		est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
		dolore magna aliquyam erat, sed diam voluptua.`;
    // The url content. The url content won't be displayed if it is an empty 
    // string $scope.selfIntroductionForUrl = ''.
    $scope.selfIntroductionForUrl = 'URL content type whatever or leave if empty';
    // Self introduction content displayed after the url content.
    $scope.selfIntroductionAfterUrl = `Lorem ipsum dolor sit amet, consetetur 
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua.`;
    // The link for the url.
    $scope.selfIntroductionUrl = 'docs/pdf/cv.pdf';

    $scope.cv = 'docs/pdf/cv.pdf';
    $scope.email = 'wqiu03@berkeley.edu';



    /** ----------------------------- Research ----------------------------- */
    // (with ...) will be hidden if coauthors is an empty array coauthors: []
	$scope.papers = [{
		title: 'Paper title 1',
		url: 'docs/pdf/paper1.pdf',
		coauthors: [{
			name: 'ABC EDF',
			url: 'https://www.google.com',
		}],
		description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
		sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
		est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
		sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
		dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
		takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
		amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`
	}, {
		title: 'Paper title 2',
		url: 'docs/pdf/paper2.pdf',
		coauthors: [],
		description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
		sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua.`
	}, {
		title: 'Paper title 3',
		url: 'docs/pdf/paper3.pdf',
		coauthors: [{
			name: 'ABC EDF',
			url: 'https://www.google.com',
		}, {
			name: 'XXX YYY',
			url: 'https://www.google.com',
		}, {
			name: 'John Harris',
			url: 'https://www.google.com',
		}],
		description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
		sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua.`
	}];

	$scope.isShowComma = (coauthors, idx) => {
		return coauthors.length > 1 && idx !== coauthors.length - 1;
	}

    /** ----------------------------- Teaching ----------------------------- */
    $scope.teachings = [{
    	title: 'Teaching 1',
    	url: 'https://www.google.com',
    	description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
		sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua.`,
    }, {
    	title: 'Teaching 2',
    	url: 'https://www.google.com',
    	description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
		sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
		aliquyam erat, sed diam voluptua.`,
    }]
});