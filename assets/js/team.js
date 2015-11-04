var main = function() {
	var techBranchNotClicked = true;
	var opBranchNotClicked = true;
	var finBranchNotClicked = true;
	var markBranchNotClicked = true;
	$('.alt-list').hide();
	$('.list-alt').hide();
	$('.web-dev').hide();
	$('.wd').hide();
	$('.bus-dev').hide();
	$('.bd').hide();

	//$('.not-current-profile').hide();
	$('.ncp').hide();
	$('list-group-item-op').css({'display' : 'inline-block'});

	//#####################################
	//MAIN MENU
	$('#operations-square').mouseenter(function() {
		//$('.alt-list').show();
		$('.show-me').hide();
		$('#operations-square').removeClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').show();
		$('#operation-branches').show();
		$('.show-me').show();


	});

	$('#operation-branches').mouseleave(function() {
		// $('#operations-square').show();
		// $('#operation-branches').hide();
		if (opBranchNotClicked) {
		$('.show-me').hide();
		$('#operations-square').addClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').hide();
		$('#operation-branches').hide();
		$('.show-me').show();
}
	});

	$('#marketing-square').mouseenter(function() {
		//$('.alt-list').show();
		$('.show-me').hide();
		$('#marketing-square').removeClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').show();
		$('#marketing-branches').show();
		$('.show-me').show();


	});

	$('#marketing-branches').mouseleave(function() {
		// $('#operations-square').show();
		// $('#operation-branches').hide();
		if (markBranchNotClicked){
		$('.show-me').hide();
		$('#marketing-square').addClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').hide();
		$('#marketing-branches').hide();
		$('.show-me').show();}

	});


	$('#finance-square').mouseenter(function() {
		//$('.alt-list').show();
		$('.show-me').hide();
		$('#finance-square').removeClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').show();
		$('#finance-branches').show();
		$('.show-me').show();


	});

	$('#finance-branches').mouseleave(function() {
		// $('#operations-square').show();
		// $('#operation-branches').hide();
		if (finBranchNotClicked){
		$('.show-me').hide();
		$('#finance-square').addClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').hide();
		$('#finance-branches').hide();
		$('.show-me').show();}

	});


	$('#tech-square').mouseenter(function() {
		//$('.alt-list').show();
		$('.show-me').hide();
		$('#tech-square').removeClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').show();
		$('#tech-branches').show();
		$('.show-me').show();


	});

	$('#tech-branches').mouseleave(function() {
		// $('#operations-square').show();
		// $('#operation-branches').hide();
		if (techBranchNotClicked) {
		$('.show-me').hide();
		$('#tech-square').addClass('show-me');
		//$('#operation-branches').addClass('show-me'));
		$('.list-alt').hide();
		$('#tech-branches').hide();
		$('.show-me').show();

	}

	});


	//#####################################
	//BUSINESS DEVELOPMENT
	$('.ld').hide();
	var opBranchNotClicked = true;
	$('#return-branches-bd').click(function(){
		opBranchNotClicked = true;
		$('.show-me').hide();
		$('#operations-square').addClass('show-me');
		$('#operations-square').show();
		$('.bd-cur-prof').addClass('ncp');
		$('.bd-cur-prof').removeClass('.bd-cur-prof');
		$('#jchen').removeClass('ncp');
		$('#jchen-des').removeClass('ncp');
		$('#jchen').addClass('bd-cur-prof');
		$('#jchen-des').addClass('bd-cur-prof');
		//$('.list-alt').hide();
		$('#operation-branches').hide();
		$('.ncp').hide();
		$('.bus-dev').hide();
		$('.bd').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#busdev').click(function(){
		opBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#operation-branches').hide();
		$('#jchen').addClass('sel-prof');
		$('#jovian-chen-profile').show();
		$('#jovian-chen-description').show();
		$('.bus-dev').show();
		$('.bd').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});

	//#####################################
	//BUSINESS DEVELOPMENT PROFILES
	var jchenSelect = true;
	$('#jovian-chen').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#jchen').hasClass('bd-sel-prof');
		if (!selected)
		{
		$('.bd-cur-prof').hide();
		
		$('.bd-cur-prof').addClass('ncp');
		$('.bd-cur-prof').removeClass('.bd-cur-prof');
		$('#jchen').removeClass('ncp');
		$('#jchen-des').removeClass('ncp');
		$('#jchen').addClass('bd-cur-prof');
		$('#jchen-des').addClass('bd-cur-prof');
		$('.bd-sel-prof').removeClass('bd-sel-prof');
		$('#jchen').addClass('bd-sel-prof');
		//$('.cur-prof').hide();
		$('bd-cur-prof').show();
		$('#jchen').show();
		$('#jchen-des').show();

	}



	});

	var aSidhuSelect = false;
	$('#anais-sidhu').click(function(){
		var selected = $('#asidhu').hasClass('bd-sel-prof');
		if (!selected)
		{


		$('.bd-cur-prof').hide();
		$('.bd-cur-prof').addClass('ncp');
		$('.bd-cur-prof').removeClass('.bd-cur-prof');
		$('#asidhu').removeClass('ncp');
		$('#asidhu-des').removeClass('ncp');
		$('#asidhu').addClass('bd-cur-prof');
		$('#asidhu-des').addClass('bd-cur-prof');
		$('.bd-sel-prof').removeClass('bd-sel-prof');
		$('#asidhu').addClass('bd-sel-prof');
		
		$('bd-cur-prof').show();
		$('#asidhu').show();
		$('#asidhu-des').show();
		//changeProfile($('.cur-prof'), $('#schen'), $('#schen-des'));
	}

	});

		var rSeoSelect = false;
	$('#reno-seo').click(function(){
		var selected = $('#rseo').hasClass('bd-sel-prof');
		if (!selected)
		{


		$('.bd-cur-prof').hide();
		$('.bd-cur-prof').addClass('ncp');
		//$('.bd-cur-prof').removeClass('.bd-cur-prof');
		$('#rseo').removeClass('ncp');
		$('#rseo-des').removeClass('ncp');
		$('#rseo').addClass('bd-cur-prof');
		$('#rseo-des').addClass('bd-cur-prof');
		$('.bd-sel-prof').removeClass('bd-sel-prof');
		$('#rseo').addClass('bd-sel-prof');
		
		//$('bd-cur-prof').show();
		$('#rseo').show();
		$('#rseo-des').show();
		//changeProfile($('.cur-prof'), $('#schen'), $('#schen-des'));
	}

	});

	//#####################################
	//LEGAL DEPARTMENT
	//#default = default profile for that branch
	$('.ld').hide();
	$('.leg-dep').hide();
	$('#return-branches-ld').click(function(){
		opBranchNotClicked = true;
		$('.show-me').hide();
		$('#operations-square').addClass('show-me');
		$('#operations-square').show();
		$('.ld-cur-prof').addClass('ncp');
		$('.ld-cur-prof').removeClass('.ld-cur-prof');
		$('#nrazavian').removeClass('ncp');
		$('#nrazavian-des').removeClass('ncp');
		$('#nrazavian').addClass('ld-cur-prof');
		$('#nrazavian-des').addClass('ld-cur-prof');
		//$('.list-alt').hide();
		$('#operation-branches').hide();
		$('.ncp').hide();
		$('.leg-dep').hide();
		$('.ld').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#legdep').click(function(){
		opBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#operation-branches').hide();
		$('#nrazavian').addClass('sel-prof');
		$('#noosha-razavian-profile').show();
		$('#noosha-razavian-description').show();
		$('.leg-dep').show();
		$('.ld').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});



	//#####################################
	//Legal Department PROFILES
	// #first-last = first name-last name (steven-chen)
	// #flast = first initial + last name (schen)
	// #dn = two-letter department abbreviation(wd = web development)
	var nrazavianSelect = true;
	$('#noosha-razavian').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#nrazavian').hasClass('ld-sel-prof');
		if (!selected)
		{
		$('.ld-cur-prof').hide();
		
		$('.ld-cur-prof').addClass('ncp');
		$('.ld-cur-prof').removeClass('.ld-cur-prof');
		$('#nrazavian').removeClass('ncp');
		$('#nrazavian-des').removeClass('ncp');
		$('#nrazavian').addClass('ld-cur-prof');
		$('#nrazavian-des').addClass('ld-cur-prof');
		$('.ld-sel-prof').removeClass('ld-sel-prof');
		$('#nrazavian').addClass('ld-sel-prof');
		//$('.cur-prof').hide();
		$('ld-cur-prof').show();
		$('#nrazavian').show();
		$('#nrazavian-des').show();

	}



	});
		//#####################################
	//Human Resources
	//#default = default profile for that branch
	$('.hr').hide().css({'display': 'none'});
	$('.hum-res').hide();

	$('#return-branches-hr').click(function(){
		finBranchNotClicked = true;
		$('.show-me').hide();
		$('#finance-square').addClass('show-me');
		$('#finance-square').show();
		$('.hr-cur-prof').addClass('ncp');
		$('.hr-cur-prof').removeClass('.hr-cur-prof');
		$('#mgoel').removeClass('ncp');
		$('#mgoel-des').removeClass('ncp');
		$('#mgoel').addClass('hr-cur-prof');
		$('#mgoel-des').addClass('hr-cur-prof');
		//$('.list-alt').hide();
		$('#finance-branches').hide();
		$('.ncp').hide();
		$('.hum-res').hide();
		$('.hr').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#humres').click(function(){
		finBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#finance-branches').hide();
		$('#mgoel').addClass('sel-prof');
		$('#madhav-goel-profile').show();
		$('#madhav-goel-description').show();
		$('.hum-res').show();
		$('.hr').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});



	//#####################################
	//[BRANCH NAME] PROFILES
	// #first-last = first name-last name (steven-chen)
	// #flast = first initial + last name (schen)
	// #dn = two-letter department abbreviation(wd = web development)
	var mGoelSelect = true;
	$('#madhav-goel').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#mgoel').hasClass('hr-sel-prof');
		if (!selected)
		{
		$('.hr-cur-prof').hide();
		
		$('.hr-cur-prof').addClass('ncp');
		$('.hr-cur-prof').removeClass('.hr-cur-prof');
		$('#mgoel').removeClass('ncp');
		$('#mgoel-des').removeClass('ncp');
		$('#mgoel').addClass('hr-cur-prof');
		$('#mgoel-des').addClass('hr-cur-prof');
		$('.hr-sel-prof').removeClass('hr-sel-prof');
		$('#mgoel').addClass('hr-sel-prof');
		//$('.cur-prof').hide();
		$('hr-cur-prof').show();
		$('#mgoel').show();
		$('#mgoel-des').show();

	}



	});


		//#####################################
	//Evangelism
	//#default = default profile for that branch
	$('.ev').hide().css({'display': 'none'});
	$('.ev-ism').hide();

	$('#return-branches-ev').click(function(){
		finBranchNotClicked = true;
		$('.show-me').hide();
		$('#finance-square').addClass('show-me');
		$('#finance-square').show();
		$('.ev-cur-prof').addClass('ncp');
		$('.ev-cur-prof').removeClass('.ev-cur-prof');
		$('#aguo').removeClass('ncp');
		$('#aguo-des').removeClass('ncp');
		$('#aguo').addClass('ev-cur-prof');
		$('#aguo-des').addClass('ev-cur-prof');
		//$('.list-alt').hide();
		$('#finance-branches').hide();
		$('.ncp').hide();
		$('.ev-ism').hide();
		$('.ev').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#evism').click(function(){
		finBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#finance-branches').hide();
		$('#aguo').addClass('sel-prof');
		$('#albert-guo-profile').show();
		$('#albert-guo-description').show();
		$('.ev-ism').show();
		$('.ev').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});



	//#####################################
	//EVANGELISM PROFILES
	// #first-last = first name-last name (steven-chen)
	// #flast = first initial + last name (schen)
	// #dn = two-letter department abbreviation(wd = web development)
	var aguoSelect = true;
	$('#albert-guo').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#aguo').hasClass('ev-sel-prof');
		if (!selected)
		{
		$('.ev-cur-prof').hide();
		
		$('.ev-cur-prof').addClass('ncp');
		$('.ev-cur-prof').removeClass('.ev-cur-prof');
		$('#aguo').removeClass('ncp');
		$('#aguo-des').removeClass('ncp');
		$('#aguo').addClass('ev-cur-prof');
		$('#aguo-des').addClass('ev-cur-prof');
		$('.ev-sel-prof').removeClass('ev-sel-prof');
		$('#aguo').addClass('ev-sel-prof');
		//$('.cur-prof').hide();
		$('ev-cur-prof').show();
		$('#aguo').show();
		$('#aguo-des').show();

	}



	});

	var aQuintanillaSelect = false;
	$('#andrea-quintanilla').click(function(){
		var selected = $('#aquintanilla').hasClass('ev-sel-prof');
		if (!selected)
		{


		$('.ev-cur-prof').hide();
		$('.ev-cur-prof').addClass('ncp');
		$('.ev-cur-prof').removeClass('.ev-cur-prof');
		$('#aquintanilla').removeClass('ncp');
		$('#aquintanilla-des').removeClass('ncp');
		$('#aquintanilla').addClass('ev-cur-prof');
		$('#aquintanilla-des').addClass('ev-cur-prof');
		$('.ev-sel-prof').removeClass('ev-sel-prof');
		$('#aquintanilla').addClass('ev-sel-prof');
		$('#aquintanilla').show();
		$('#aquintanilla-des').show();
		//changeProfile($('.cur-prof'), $('#schen'), $('#schen-des'));
	}

	});

	// //#####################################
	// //DATA ANALYSIS
	// //#default = default profile for that branch
	// $('.da').hide();
	// $('.dat-an').hide();

	// $('#return-branches-da').click(function(){
	// 	techBranchNotClicked = true;
	// 	$('.show-me').hide();
	// 	$('#tech-square').addClass('show-me');
	// 	$('#tech-square').show();
	// 	$('.da-cur-prof').addClass('ncp');
	// 	$('.da-cur-prof').removeClass('.da-cur-prof');
	// 	$('#mjavanmard').removeClass('ncp');
	// 	$('#mjavanmard-des').removeClass('ncp');
	// 	$('#mjavanmard').addClass('da-cur-prof');
	// 	$('#mjavanmard-des').addClass('da-cur-prof');
	// 	//$('.list-alt').hide();
	// 	$('#tech-branches').hide();
	// 	$('.ncp').hide();
	// 	$('.dat-an').hide();
	// 	$('.da').hide();
	// 	$('.show-me').show();
	// 	$('.list-group-item').show();


	// });

	// $('#datan').click(function(){
	// 	techBranchNotClicked = false;
	// 	$('.show-me').hide();
	// 	$('.list-group-item').hide();
	// 	$('#tech-branches').hide();
	// 	$('#mjavanmard').addClass('sel-prof');
	// 	$('#maryam-javanmard-profile').show();
	// 	$('#maryam-javanmard-description').show();
	// 	$('.dat-an').show();
	// 	$('.da').show();
	// 	$('.not-current-profile').hide();
	// 	$('.ncp').hide();
	// 	//$('.web-development').show();

	// });



	// //#####################################
	// //DATA ANALYSIS PROFILES
	// // #first-last = first name-last name (steven-chen)
	// // #flast = first initial + last name (schen)
	// // #dn = two-letter department abbreviation(wd = web development)
	// var mjavanmardSelect = true;
	// $('#maryam-javanmard').click(function(){
	// 	// $('#jeremy-wan-profile').hide();
	// 	// $('#jeremy-wan-description').hide();
	// 	//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
	// 	var selected = $('#mjavanmard').hasClass('da-sel-prof');
	// 	if (!selected)
	// 	{
	// 	$('.da-cur-prof').hide();
		
	// 	$('.da-cur-prof').addClass('ncp');
	// 	$('.da-cur-prof').removeClass('.da-cur-prof');
	// 	$('#mjavanmard').removeClass('ncp');
	// 	$('#mjavanmard-des').removeClass('ncp');
	// 	$('#mjavanmard').addClass('da-cur-prof');
	// 	$('#mjavanmard-des').addClass('da-cur-prof');
	// 	$('.da-sel-prof').removeClass('da-sel-prof');
	// 	$('#mjavanmard').addClass('da-sel-prof');
	// 	//$('.cur-prof').hide();
	// 	$('da-cur-prof').show();
	// 	$('#mjavanmard').show();
	// 	$('#mjavanmard-des').show();

	// }



	// });


	//#####################################
	//App Development
	//#default = default profile for that branch
	$('.ad').hide();
	$('.app-dev').hide();

	$('#return-branches-ad').click(function(){
		techBranchNotClicked = true;
		$('.show-me').hide();
		$('#tech-square').addClass('show-me');
		$('#tech-square').show();
		$('.ad-cur-prof').addClass('ncp');
		$('.ad-cur-prof').removeClass('.ad-cur-prof');
		$('#lvalle').removeClass('ncp');
		$('#lvalle-des').removeClass('ncp');
		$('#lvalle').addClass('ad-cur-prof');
		$('#lvalle-des').addClass('ad-cur-prof');
		//$('.list-alt').hide();
		$('#tech-branches').hide();
		$('.ncp').hide();
		$('.app-dev').hide();
		$('.ad').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#appdev').click(function(){
		techBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#tech-branches').hide();
		$('#lvalle').addClass('ad-sel-prof');
		$('#luis-valle-profile').show();
		$('#luis-valle-description').show();
		$('.app-dev').show();
		$('.ad').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});



	//#####################################
	//[BRANCH NAME] PROFILES
	// #first-last = first name-last name (steven-chen)
	// #flast = first initial + last name (schen)
	// #dn = two-letter department abbreviation(wd = web development)
	var lvalleSelect = true;
	$('#luis-valle').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#lvalle').hasClass('ad-sel-prof');
		if (!selected)
		{
		$('.ad-cur-prof').hide();
		
		$('.ad-cur-prof').addClass('ncp');
		$('.ad-cur-prof').removeClass('.ad-cur-prof');
		$('#lvalle').removeClass('ncp');
		$('#lvalle-des').removeClass('ncp');
		$('#lvalle').addClass('ad-cur-prof');
		$('#lvalle-des').addClass('ad-cur-prof');
		$('.ad-sel-prof').removeClass('ad-sel-prof');
		$('#lvalle').addClass('ad-sel-prof');
		//$('.cur-prof').hide();
		$('ad-cur-prof').show();
		$('#lva').show();
		$('#lvalle-des').show();

	}



	});


	//#####################################
	//WEB DEVELOPMENT
	
	$('#return-branches-wd').click(function(){
		techBranchNotClicked = true;
		$('.show-me').hide();
		$('#tech-square').addClass('show-me');
		$('#tech-square').show();
		$('.cur-prof').addClass('ncp');
		$('.cur-prof').removeClass('.cur-prof');
		$('#jwan').removeClass('ncp');
		$('#jwan-des').removeClass('ncp');
		$('#jwan').addClass('cur-prof');
		$('#jwan-des').addClass('cur-prof');
		$('.list-alt').hide();
		$('#tech-branches').hide();
		$('.ncp').hide();
		$('.web-dev').hide();
		$('.wd').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#webdev').click(function(){
		techBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#tech-branches').hide();
		$('#jwan').addClass('sel-prof');
		$('.web-dev').show();
		$('.wd').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});

	// function changeProfile(current, picture, description) {

	// 	//current.slideUp();
	// 	current.addClass('ncp');
	// 	current.removeClass('cur-prof');
	// 	picture.removeClass('ncp');
	// 	description.removeClass('ncp');
	// 	picture.addClass('cur-prof');
	// 	description.addClass('cur-prof')
	// 	current.show();
	// 	//picture.slideDown();
	// 	//description.slideDown();
	// }

	//#####################################
	//WEB DEVELOPMENT PROFILES
	var jwanSelect = true;
	$('#jeremy-wan').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#jwan').hasClass('sel-prof');
		if (!selected)
		{
		$('.cur-prof').hide();
		
		$('.cur-prof').addClass('ncp');
		$('.cur-prof').removeClass('.cur-prof');
		$('#jwan').removeClass('ncp');
		$('#jwan-des').removeClass('ncp');
		$('#jwan').addClass('cur-prof');
		$('#jwan-des').addClass('cur-prof');
		$('.sel-prof').removeClass('sel-prof');
		$('#jwan').addClass('sel-prof');
		//$('.cur-prof').hide();
		$('cur-prof').show();
		$('#jwan').show();
		$('#jwan-des').show();

	}



	});

	var schenSelect = false;
	$('#steven-chen').click(function(){
		var selected = $('#schen').hasClass('sel-prof');
		if (!selected)
		{


		$('.cur-prof').hide();
		$('.cur-prof').addClass('ncp');
		$('.cur-prof').removeClass('.cur-prof');
		$('#schen').removeClass('ncp');
		$('#schen-des').removeClass('ncp');
		$('#schen').addClass('cur-prof');
		$('#schen-des').addClass('cur-prof');
		$('.sel-prof').removeClass('sel-prof');
		$('#schen').addClass('sel-prof');
		
		$('cur-prof').show();
		$('#schen').show();
		$('#schen-des').show();
		//changeProfile($('.cur-prof'), $('#schen'), $('#schen-des'));
	}

	});


	$('#vaibhav-sri').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();

		var selected = $('#vsri').hasClass('sel-prof');
		if (!selected)
		{
			$('.cur-prof').hide();
			$('.cur-prof').addClass('ncp');
			$('.cur-prof').removeClass('.cur-prof');
			$('#vsri').removeClass('ncp');
			$('#vsri-des').removeClass('ncp');
			$('#vsri').addClass('cur-prof');
			$('#vsri-des').addClass('cur-prof');
			$('.sel-prof').removeClass('sel-prof');
			$('#vsri').addClass('sel-prof');
			//$('.cur-prof').hide();
			$('cur-prof').show();
			$('#vsri').show();
			$('#vsri-des').show();
		}


	});

	$('#drake-wang').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();

		var selected = $('#dwang').hasClass('sel-prof');
		if (!selected)
		{
			$('.cur-prof').hide();
			$('.cur-prof').addClass('ncp');
			$('.cur-prof').removeClass('.cur-prof');
			$('#dwang').removeClass('ncp');
			$('#dwang').removeClass('ncp');
			$('#dwang').addClass('cur-prof');
			$('#dwang-des').addClass('cur-prof');
			$('.sel-prof').removeClass('sel-prof');
			$('#dwang').addClass('sel-prof');
			//$('.cur-prof').hide();
			$('cur-prof').show();
			$('#dwang').show();
			$('#dwang-des').show();
		}


	});

	$('#wei-song').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();

		var selected = $('#wsong').hasClass('sel-prof');
		if (!selected)
		{
			$('.cur-prof').hide();
			$('.cur-prof').addClass('ncp');
			$('.cur-prof').removeClass('.cur-prof');
			$('#wsong').removeClass('ncp');
			$('#wsong-des').removeClass('ncp');
			$('#wsong').addClass('cur-prof');
			$('#wsong-des').addClass('cur-prof');
			$('.sel-prof').removeClass('sel-prof');
			$('#wsong').addClass('sel-prof');
			//$('.cur-prof').hide();
			$('cur-prof').show();
			$('#wsong').show();
			$('#wsong-des').show();
		}


	});

	$('#nimalen-siv').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();

		var selected = $('#snimalen').hasClass('sel-prof');
		if (!selected)
		{
			$('.cur-prof').hide();
			$('.cur-prof').addClass('ncp');
			$('.cur-prof').removeClass('.cur-prof');
			$('#snimalen').removeClass('ncp');
			$('#snimalen-des').removeClass('ncp');
			$('#snimalen').addClass('cur-prof');
			$('#snimalen-des').addClass('cur-prof');
			$('.sel-prof').removeClass('sel-prof');
			$('#snimalen').addClass('sel-prof');
			//$('.cur-prof').hide();
			$('cur-prof').show();
			$('#snimalen').show();
			$('#snimalen-des').show();
		}


	});
	$('#junyu-wang').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();

		var selected = $('#jwang').hasClass('sel-prof');
		if (!selected)
		{
			$('.cur-prof').hide();
			$('.cur-prof').addClass('ncp');
			$('.cur-prof').removeClass('.cur-prof');
			$('#jwang').removeClass('ncp');
			$('#jwang-des').removeClass('ncp');
			$('#jwang').addClass('cur-prof');
			$('#jwang-des').addClass('cur-prof');
			$('.sel-prof').removeClass('sel-prof');
			$('#jwang').addClass('sel-prof');
			//$('.cur-prof').hide();
			$('cur-prof').show();
			$('#jwang').show();
			$('#jwang-des').show();
		}


	});


}

$(document).ready(main);
