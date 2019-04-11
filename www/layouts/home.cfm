<cfoutput> <!DOCTYPE html>
<html lang="en">
<head>
	<cf_metaTags>
	<cf_customFile file="/v65html/_head.html">

	<cf_vin65GlobalAssets>

	<cf_css files="/assets/slick/slick-winedirect.min.css,/assets/slick/slick-theme-winedirect.min.css,/assets/css/screen.min.css">
	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->

	<!--[if IE 9]>
		<style type="text/css">
			.imagePreloader {
				opacity: 1 !important;
			}

			.homepageGallery {
				z-index: 0 !important;
			}

			.homepageSection {
				padding: 6em 0 5.5em !important;
			}

			.homepageBanner {
				min-height: 0 !important;
			}
		</style>
	<![endif]-->

	<!--[if IE 8]>
		<style type="text/css">
			.homepageSection {
				border: 0 !important;
				padding: 6em 0 5.5em !important;
			}

			.homepageSection .homeIcon {
				border: 0 !important;
			}
		</style>
	<![endif]-->
</head>
<body> 
	<header class="primary v65-group">
		<div class="headerTop">
			<div class="wrapper v65-group">
				<div class="user-tools topUserTools">
					<cf_points>
					<cf_login>
				</div><!--/user-tools-->	
				<div class="telephoneNumber">
					<a href='tel:<cf_contentBlock group="Phone Number">'><span class="icon-phone" aria-hidden="true"></span><cf_contentBlock group="Phone Number"></a>
				</div>	
			</div>
		</div>

		<div class="wrapper v65-group flex-container">

			<cf_logo>

			<span class="icon-menu"></span>

			<nav class="mainMenu" aria-label="Main Menu">
				<cf_layoutHeaderNav depth="2">
			</nav>
			<div class="user-tools cartNav">
				<cf_modalCart>	
			</div><!--/user-tools-->

		</div>
	</header>
	<main>
		<div class="pageTop homepageHeader v65-group" role="region" aria-label="content carousel">
			<ul class="imagePreloader homepageGallery">
				<cf_contentBlock group="Homepage Photo Gallery">
			</ul>

			<section class="v65-group galleryContent fadeIn" aria-label="Homepage photo gallery">
				<cf_mainContent>
			</section>
		</div>

		<a class="backToTop" href="##" role="navigation"><span class="icon-arrow-up"></span></a>

		<section class="v65-group homepageSections flex-container" aria-label="Wines and Events">
			<a name="homeContent"></a>
				<cf_contentBlock group="Homepage Section">
		</section>

		<section class="v65-group homepageProductGroup" aria-label="Featured products">
			<div class="wrapper">
				<cf_product_group code="HomepageProductGroup">
			</div>
		</section>

		<cf_contentBlock group="Homepage Banner">

		<section class="v65-group homepageContent subscribeContent" aria-label="Newsletter sign up">
			<div class="wrapper">
				<cf_pods location="Footer Subscribe" type="description">
				<cf_subscribe contactType="Newsletter">
			</div>
		</section>
	</main>
	<footer>
		<div class="wrapper v65-group">
			<div class="footerSection">
				<h2><cf_pods location="Footer Left" type="title"></h2>
				<nav aria-label="Footer Menu">
					<cf_layoutFooterNav>
				</nav>
				<cf_pods location="Footer Left" type="description">
			</div>

			<div class="footerSection">
				<h2><cf_pods location="Footer Middle Left" type="title"></h2>
				<cf_pods location="Footer Middle Left" type="description">
			</div>

			<div class="footerSection">
				<h2><cf_pods location="Footer Middle Right" type="title"></h2>
				<cf_pods location="Footer Middle Right" type="description">
			</div>

			<div class="footerSection">
				<h2><cf_pods location="Footer Right Title" type="title"></h2>
				<cf_socialMediaLinks>
			</div>

			<div class="lowerFooter">
				<div class="copyright">
					<div class="footer-info"><cf_footerInfo></div>
					<cf_copyright>&nbsp;&##183;&nbsp;<cf_vin65Accolade>
				</div>
			</div>
		</div>
	</footer>
		
	<cf_js files="/assets/slick/slick-winedirect.js,/assets/js/scripts.js,/assets/js/track-focus.min.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
