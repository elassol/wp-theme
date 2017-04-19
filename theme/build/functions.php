<?php
/**
 * trest functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package trest
 */

if ( ! function_exists( 'trest_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function trest_setup() {
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on trest, use a find and replace
     * to change 'trest' to the name of your theme in all the template files.
     */
    load_theme_textdomain( 'trest', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary', 'trest' ),
    ) );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );

    /*
     * Enable support for Post Formats.
     * See https://developer.wordpress.org/themes/functionality/post-formats/
     */
    add_theme_support( 'post-formats', array(
        'aside',
        'image',
        'video',
        'quote',
        'link',
    ) );

    // Set up the WordPress core custom background feature.
    add_theme_support( 'custom-background', apply_filters( 'trest_custom_background_args', array(
        'default-color' => 'ffffff',
        'default-image' => '',
    ) ) );
}
endif;
add_action( 'after_setup_theme', 'trest_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function trest_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'trest_content_width', 640 );
}
add_action( 'after_setup_theme', 'trest_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function trest_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'trest' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'trest' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Sidebar 1',
        'id' => 'footer-sidebar-1',
        'description' => 'Appears in the footer area',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Sidebar 2',
        'id' => 'footer-sidebar-2',
        'description' => 'Appears in the footer area',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );
    register_sidebar( array(
        'name' => 'Footer Sidebar 3',
        'id' => 'footer-sidebar-3',
        'description' => 'Appears in the footer area',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );


}
add_action( 'widgets_init', 'trest_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function trest_scripts() {
    wp_enqueue_style( 'trest-style', get_stylesheet_uri() );

    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array('jquery'),'',true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }

    if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
        function my_jquery_enqueue() {
        wp_deregister_script('jquery');
        wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, null);
        wp_enqueue_script('jquery');
    }
}
add_action( 'wp_enqueue_scripts', 'trest_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


/**
 * Logo uploader
 */
function trest_customize_logo( $wp_customize ) {
    $wp_customize->add_section( 'trest_logo_section' , array(
    'title'       => __( 'Logo', 'trest' ),
    'priority'    => 30,
    'description' => 'Upload a logo to replace the default site name and description in the header',
    ) );

    $wp_customize->add_setting( 'trest_logo' ); // Add setting for logo uploader
         
    // Add control for logo uploader (actual uploader)
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'trest_logo', array(
        'label'   => __( 'Logo', 'trest' ),
        'section'  => 'trest_logo_section',
        'settings' => 'trest_logo',
    ) ) );
}
add_action( 'customize_register', 'trest_customize_logo' );


/**
* Excluding your theme from update checks
*/

function lassodesign_hidden_theme( $r, $url ) {
    if ( 0 !== strpos( $url, 'http://api.wordpress.org/themes/update-check' ) )
        return $r; // Not a theme update request. Bail immediately.
 
    $themes = unserialize( $r['body']['themes'] );
    unset( $themes[ get_option( 'template' ) ] );
    unset( $themes[ get_option( 'stylesheet' ) ] );
    $r['body']['themes'] = serialize( $themes );
    return $r;
}
 
add_filter( 'http_request_args', 'lassodesign_hidden_theme', 5, 2 );


/*
* Creating a function to create our CPT
*/

function trest_custom_post_type() {

// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => _x( 'Portfolio', 'Post Type General Name', 'trest' ),
        'singular_name'       => _x( 'Work', 'Post Type Singular Name', 'trest' ),
        'menu_name'           => __( 'Portfolio', 'trest' ),
        'parent_item_colon'   => __( 'Parent Work', 'trest' ),
        'all_items'           => __( 'All Works', 'trest' ),
        'view_item'           => __( 'View Work', 'trest' ),
        'add_new_item'        => __( 'Add New Work', 'trest' ),
        'add_new'             => __( 'Add New', 'trest' ),
        'edit_item'           => __( 'Edit Work', 'trest' ),
        'update_item'         => __( 'Update Work', 'trest' ),
        'search_items'        => __( 'Search Work', 'trest' ),
        'not_found'           => __( 'Not Found', 'trest' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'trest' ),
    );
    
// Set other options for Custom Post Type
    
    $args = array(
        'label'               => __( 'portfolio', 'trest' ),
        'description'         => __( 'Work pieces portfolio', 'trest' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'genres' ),
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */  
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
    );
    
    // Registering your Custom Post Type
    register_post_type( 'portfolio', $args );

}

/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/

add_action( 'init', 'trest_custom_post_type', 0 );


