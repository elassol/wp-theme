<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lassodesigns
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
        <div class="inner-wrapper">

        <div id="footer-sidebar" class="widget-footer">
            <div id="footer-sidebar1" class="widget-wrapper">
                <?php
                    if(is_active_sidebar('footer-sidebar-1')){
                        dynamic_sidebar('footer-sidebar-1');
                    }
                ?>
            </div>
            <div id="footer-sidebar2" class="widget-wrapper">
                <?php
                    if(is_active_sidebar('footer-sidebar-2')){
                        dynamic_sidebar('footer-sidebar-2');
                    }
                ?>
            </div>
            <div id="footer-sidebar3" class="widget-wrapper">
                <?php
                    if(is_active_sidebar('footer-sidebar-3')){
                        dynamic_sidebar('footer-sidebar-3');
                    }
                ?>
            </div>
        </div><!-- #footer-sidebar -->
        

		<div class="site-info">
			<p>
                <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'lassodesigns' ) ); ?>">Lassodesigns LTD</a>
               
                &copy; <?php echo date("Y") ?>

                 <span class="sep"> | </span> All Rights Reserved.
            </p>
		</div><!-- .site-info -->

        </div><!-- .inner-wrapper -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

