<?php
   $title="CAMAGA - Contact and About";
   $description="Contact and About - CAMAGA - Carnatic Music Association of Georgia";   
?>

<!DOCTYPE html>
<html lang="us">
	<?php 
		define( "CAMAGA_ROOT", $_SERVER['DOCUMENT_ROOT'] . "/" );
		include( CAMAGA_ROOT . "common/html_head.php"); 
	?>
	<body id="contact">
		<div class="wrapper">
			<?php 
				include(CAMAGA_ROOT . "common/site_header.php"); 
			?>
			<div id="page-wrap">
				<h2>Contact</h2>
				<h3>About</h3>
				<p> 
					CAMAGA is a non-profit organization with an objective to encourage and promote the growth of Carnatic Music in Georgia.
				</p>
				<p>
					<a href="doc/2023/CAMAGA_bylaws.docx">Bylaws&nbsp;&nbsp;<i class="fas fa-download"></i></a>
				</p>
				<br/>
				<h3>Contact</h3>
				<dl>
					<dt><i class="fas fa-envelope"></i>&nbsp;address</dt>
						<dd>1417 Mandalay Ct SW</dd> 
                        <dd>Lilburn GA 30047</dd>
						<dd>U.S.A</dd> 
						<dd>&nbsp;</dd>
					<dt><i class="fas fa-at"></i>&nbsp;email</dt>
						<dd>camaga.atlanta@gmail.com</dd>
						<dd>&nbsp;</dd>
						<dd>&nbsp;</dd>
				</dl>
				<h3>Committee</h3>
				<dl>
					<dt>President</dt>
						<dd>Kalpana Rengarajan</dd>
						<dd>&nbsp;</dd>
					<dt>Treasurer</dt>
						<dd>Raj Rengarajan</dd>
						<dd>&nbsp;</dd>
					<dt>Secretary</dt>
						<dd>Krishnaswamy Thirumalai</dd>
						<dd>&nbsp;</dd>					
					<dt>Trustees</dt>
						<dd>Anu Moorthy</dd>
						<dd>Gnanaruban Balasubramaniam</dd>
						<dd>Lakshmi Prabhakar</dd>
						<dd>Prashanth Krishnamurthy</dd>
						<dd>Ramesh Vepure</dd>
						<dd>&nbsp;</dd>
						<dd>&nbsp;</dd>
				</dl>
			</div>
			<div class="push"></div>
		</div>
		<?php 
			include(CAMAGA_ROOT . "common/site_footer.php");
		?>
	</body>
</html>

