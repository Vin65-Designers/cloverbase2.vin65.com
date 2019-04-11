<cfoutput> 
<!DOCTYPE html>
<html>
<head>
	<cf_metaTags>
	<cf_customFile file="/v65html/_head.html">

	<cf_vin65GlobalAssets>

	<cf_css files="/assets/css/screen.min.css,/assets/css/jquery.bxslider.css">
	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>

		<style type="text/css">
			.v65-wine-profile, .v65-wine-specs {
				display: block !important;
			}

			.v65-wine-specs-title:after, .v65-wine-profile-title:after {
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
						<cf_login>
					</div><!--/user-tools-->

					<div class="telephoneNumber">
						<a href='tel:<cf_contentBlock group="Phone Number">'><i class="icon-phone"></i><cf_contentBlock group="Phone Number"></a>
					</div>
				</div>
			</div>

			<div class="wrapper v65-group">
				<div class="user-tools cartNav">
					<cf_modalCart>	
				</div><!--/user-tools-->

				<cf_logo>

				<i class="icon-menu"></i>

				<nav class="mainMenu">
					<cf_layoutHeaderNav depth="2">
				</nav>
			</div>
		</header>

	<cf_contentBlock group="Page Background">

	<div class="pageContentWrapper">
		<cf_contentBlock group="Page Intro">

		<section class="content pageContent v65-group">
			<a class="backToTop" href="##"><i class="icon-arrow-up"></i></a>

			<div class="wrapper">
				<cf_mainContent>
			</div>
		</section><!--/pageContent-->
	</div>
	
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

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js,/assets/js/track-focus.min.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html>
 </cfoutput>
