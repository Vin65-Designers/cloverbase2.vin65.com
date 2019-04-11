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

	<!--[if IE 8]>
		<style type="text/css">
			.wineSpecs .v65-wine-specs,
			.wineProfile .v65-wine-profile {
				display: block !important;
			}

			.wineSpecs, .wineProfile {
				border: 0 !important;
			}

			.wineSpecs .v65-wine-specs-title:after,
			.wineSpecs .v65-wine-profile-title:after,
			.wineProfile .v65-wine-specs-title:after,
			.wineProfile .v65-wine-profile-title:after {
				content: "" !important;
			}
		</style>
	<![endif]-->
</head>
<body class="<cf_contentBlock group='Wine Club Width'>">
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
			<div class="pageContentWrapper">
				<section class="content pageContent v65-group">
					<a class="backToTop" href="##"><i class="icon-arrow-up"></i></a>

					<div class="wrapper">
						<cf_mainContent>
					</div>
				</section><!--/pageContent-->
			</div>
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
