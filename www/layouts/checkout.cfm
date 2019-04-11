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

		<style type="text/css">
			##pageBackground {
				min-height: 0 !important;
				background-position: 0 !important;
			}
		</style>
	<![endif]-->

	<!--[if IE 9]>
		<style type="text/css">
			##pageBackground {
				min-height: 0 !important;
				background-position: 0 !important;
			}
		</style>
	<![endif]-->
</head>
<body>
	<header class="primary v65-group checkoutHeader">
			<div class="wrapper v65-group">
				<cf_logo>
			</div>
		</header>
		<main>
			<section class="content wideContent v65-group">	
				<a class="backToTop" href="##"><i class="icon-arrow-up"></i></a>

				<div class="wrapper">
					<cf_mainContent>
				</div>
					
			</section><!--/contentWide-->
		</main>
	<footer>
		<div class="wrapper v65-group">
			<div class="footerSection">
				<h2><cf_pods location="Footer Left" type="title"></h2>
				<nav>
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
