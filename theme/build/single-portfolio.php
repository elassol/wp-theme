<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package lassodesign
 */

get_header(); ?>

	
		<h1>single portfolio template</h1> 
		<img class="my_class" <?php ar_responsive_image(get_field( 'myimage' ),'full'); ?>  alt="text" /> 
		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', get_post_format() );



			the_post_navigation();

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>



<?php get_footer();
