	//#####################################
	//DEPARTMENT NAME
	//#default = default profile for that branch
	$('.dn').hide().css({'display': 'none'});
	$('.dashed-abbreviation').hide();

	$('#return-branches-dn').click(function(){
		opBranchNotClicked = true;
		$('.show-me').hide();
		$('#operations-square').addClass('show-me');
		$('#operations-square').show();
		$('.dn-cur-prof').addClass('ncp');
		$('.dn-cur-prof').removeClass('.dn-cur-prof');
		$('#default').removeClass('ncp');
		$('#default-des').removeClass('ncp');
		$('#default').addClass('dn-cur-prof');
		$('#default-des').addClass('dn-cur-prof');
		//$('.list-alt').hide();
		$('#operation-branches').hide();
		$('.ncp').hide();
		$('.dashed-abbreviation').hide();
		$('.dn').hide();
		$('.show-me').show();
		$('.list-group-item').show();


	});

	$('#busdev').click(function(){
		opBranchNotClicked = false;
		$('.show-me').hide();
		$('.list-group-item').hide();
		$('#operation-branches').hide();
		$('#default').addClass('sel-prof');
		$('#first-last-profile').show();
		$('#first-last-description').show();
		$('.dashed-abbreviation').show();
		$('.dn').show();
		$('.not-current-profile').hide();
		$('.ncp').hide();
		//$('.web-development').show();

	});



	//#####################################
	//[BRANCH NAME] PROFILES
	// #first-last = first name-last name (steven-chen)
	// #flast = first initial + last name (schen)
	// #dn = two-letter department abbreviation(wd = web development)
	var jchenSelect = true;
	$('#first-last').click(function(){
		// $('#jeremy-wan-profile').hide();
		// $('#jeremy-wan-description').hide();
		//if (!$('#jwan').hasClass('cur-prof') && !$('#jwan-des').hasClass('cur-prof')) {
		var selected = $('#flast').hasClass('dn-sel-prof');
		if (!selected)
		{
		$('.dn-cur-prof').hide();
		
		$('.dn-cur-prof').addClass('ncp');
		$('.dn-cur-prof').removeClass('.dn-cur-prof');
		$('#flast').removeClass('ncp');
		$('#flast-des').removeClass('ncp');
		$('#flast').addClass('dn-cur-prof');
		$('#flast-des').addClass('dn-cur-prof');
		$('.dn-sel-prof').removeClass('dn-sel-prof');
		$('#flast').addClass('dn-sel-prof');
		//$('.cur-prof').hide();
		$('dn-cur-prof').show();
		$('#flast').show();
		$('#flast-des').show();

	}



	});

	var aSidhuSelect = false;
	$('#first-last').click(function(){
		var selected = $('#flast').hasClass('dn-sel-prof');
		if (!selected)
		{


		$('.dn-cur-prof').hide();
		$('.dn-cur-prof').addClass('ncp');
		$('.dn-cur-prof').removeClass('.dn-cur-prof');
		$('#flast').removeClass('ncp');
		$('#flast-des').removeClass('ncp');
		$('#flast').addClass('dn-cur-prof');
		$('#flast-des').addClass('dn-cur-prof');
		$('.dn-sel-prof').removeClass('dn-sel-prof');
		$('#flast').addClass('dn-sel-prof');
		$('#flast').show();
		$('#flast-des').show();
		//changeProfile($('.cur-prof'), $('#schen'), $('#schen-des'));
	}

	});
