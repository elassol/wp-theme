<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lassodesigns
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">




<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/main.css" type="text/css" media="screen" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="page" class="site-wrapper">

	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'lassodesigns' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="inner-wrapper">
			<div class="site-branding">
				
				<?php if ( get_theme_mod( 'lassodesigns_logo' ) ) : ?>
				    <div class='site-logo'>
				        <a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' rel='home'><img src='<?php echo esc_url( get_theme_mod( 'lassodesigns_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>'></a>
				    </div>
				<?php else : ?>
				    <hgroup>
				    	<a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' rel='home'>
					        <h1 class='site-title'><?php bloginfo( 'name' ); ?></h1>
					        <h2 class='site-description'><?php bloginfo( 'description' ); ?></h2>
				       </a>
				    </hgroup>
				<?php endif; ?>
				
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'lassodesigns' ); ?></button>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
		</div><!-- .inner-wrapper -->
	</header><!-- #masthead -->

	<section class="site-banner">
		<div class="inner-wrapper">
			<h1> LASSODESIGN'S</h1>
			<h3>Designer, Geek & Coffee lover</h3>
		</div>
	</section>

	<div id="content" class="site-content">
