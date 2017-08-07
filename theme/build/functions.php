<?php
/**
 * lassodesign functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package lassodesign
 */

if ( ! function_exists( 'lassodesign_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function lassodesign_setup() {
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on lassodesign, use a find and replace
     * to change 'lassodesign' to the name of your theme in all the template files.
     */
    load_theme_textdomain( 'lassodesign', get_template_directory() . '/languages' );

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
    register_nav_menus(
        array(
          'header-menu' => __( 'Header Menu' ),
          'extra-menu' => __( 'Extra Menu' )
        )
    );

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
    add_theme_support( 'custom-background', apply_filters( 'lassodesign_custom_background_args', array(
        'default-color' => 'ffffff',
        'default-image' => '',
    ) ) );
}
endif;
add_action( 'after_setup_theme', 'lassodesign_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lassodesign_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'lassodesign_content_width', 640 );
}
add_action( 'after_setup_theme', 'lassodesign_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lassodesign_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'lassodesign' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'lassodesign' ),
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
add_action( 'widgets_init', 'lassodesign_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function lassodesign_scripts() {
    wp_enqueue_style( 'lassodesign-style', get_stylesheet_uri() );

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
add_action( 'wp_enqueue_scripts', 'lassodesign_scripts' );

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
function lassodesign_customize_logo( $wp_customize ) {
    $wp_customize->add_section( 'lassodesign_logo_section' , array(
    'title'       => __( 'Logo', 'lassodesign' ),
    'priority'    => 30,
    'description' => 'Upload a logo to replace the default site name and description in the header',
    ) );

    $wp_customize->add_setting( 'lassodesign_logo' ); // Add setting for logo uploader
         
    // Add control for logo uploader (actual uploader)
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'lassodesign_logo', array(
        'label'   => __( 'Logo', 'lassodesign' ),
        'section'  => 'lassodesign_logo_section',
        'settings' => 'lassodesign_logo',
    ) ) );
}
add_action( 'customize_register', 'lassodesign_customize_logo' );


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

function lassodesign_custom_post_type() {

// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => _x( 'Portfolio', 'Post Type General Name', 'lassodesign' ),
        'singular_name'       => _x( 'Work', 'Post Type Singular Name', 'lassodesign' ),
        'menu_name'           => __( 'Portfolio', 'lassodesign' ),
        'parent_item_colon'   => __( 'Parent Work', 'lassodesign' ),
        'all_items'           => __( 'All Works', 'lassodesign' ),
        'view_item'           => __( 'View Work', 'lassodesign' ),
        'add_new_item'        => __( 'Add New Work', 'lassodesign' ),
        'add_new'             => __( 'Add New', 'lassodesign' ),
        'edit_item'           => __( 'Edit Work', 'lassodesign' ),
        'update_item'         => __( 'Update Work', 'lassodesign' ),
        'search_items'        => __( 'Search Work', 'lassodesign' ),
        'not_found'           => __( 'Not Found', 'lassodesign' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'lassodesign' ),
    );
    
// Set other options for Custom Post Type
    
    $args = array(
        'label'               => __( 'portfolio', 'lassodesign' ),
        'description'         => __( 'Work pieces portfolio', 'lassodesign' ),
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

add_action( 'init', 'lassodesign_custom_post_type', 0 );

/* Search in Custom Post Types
* Show posts of 'post', 'page', 'portfolio' post types on home page
* 
*/
function search_filter( $query ) {
  if ( !is_admin() && $query->is_main_query() ) {
    if ( $query->is_search ) {
      $query->set( 'post_type', array( 'post', 'page', 'portfolio' ) );
    }
  }
}
 
add_action( 'pre_get_posts','search_filter' );


/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for content images
 *
 * @since Twenty Sixteen 1.0
 *
 * @param string $sizes A source size value for use in a 'sizes' attribute.
 * @param array  $size  Image size. Accepts an array of width and height
 *                      values in pixels (in that order).
 * @return string A source size value for use in a content image 'sizes' attribute.
 */

function lassodesign_content_image_sizes_attr($sizes, $size) {
    $width = $size[0];


    
    1362 <= $width && $sizes = '(max-width: 767px) 85vw, (max-width: 768px) 96vw, (max-width: 1362px) 62vw, 1248px';

    if ( 'page' === get_post_type() ) {
        840 > $width && $sizes = '(max-width: ' . $width . 'px) 85vw, ' . $width . 'px';
    } else {
        840 > $width && 600 <= $width && $sizes = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 984px) 61vw, (max-width: 1362px) 45vw, 600px';
        600 > $width && $sizes = '(max-width: ' . $width . 'px) 85vw, ' . $width . 'px';
    }

    return $sizes;
}

add_filter('wp_calculate_image_sizes', 'lassodesign_content_image_sizes_attr', 10 , 2);


/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for post thumbnails
 *
 * @since Twenty Sixteen 1.0
 *
 * @param array $attr Attributes for the image markup.
 * @param int   $attachment Image attachment ID.
 * @param array $size Registered image size or flat array of height and width dimensions.
 * @return string A source size value for use in a post thumbnail 'sizes' attribute.
 */

function lassodesign_post_thumbnail_sizes_attr( $attr, $attachment, $size ) {
    if ( 'post-thumbnail' === $size ) {
        is_active_sidebar( 'sidebar-1' ) && $attr['sizes'] = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 984px) 60vw, (max-width: 1362px) 62vw, 840px';
        ! is_active_sidebar( 'sidebar-1' ) && $attr['sizes'] = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 88vw, 1200px';
    }
    return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', 'lassodesign_post_thumbnail_sizes_attr', 10 , 3 );


/**
 * Responsive Image Helper Function
 *
 * @param string $image_id the id of the image (from ACF or similar)
 * @param string $image_size the size of the thumbnail image or custom image size
 * @param string $max_width the max width this image will be shown to build the sizes attribute 
 */

function ar_responsive_image($image_id,$image_size,$max_width){
    
    // check the image ID is not blank
    if($image_id != '') {

        // set the default src image size
        $image_src = wp_get_attachment_image_url( $image_id, $image_size );

        // set the srcset with various image sizes
        $image_srcset = wp_get_attachment_image_srcset( $image_id, $image_size );

        // generate the markup for the responsive image
        echo 'src="'.$image_src.'" srcset="'.$image_srcset.'" sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw, (max-width: 1280px) 62vw, 1280px, (max-width: 1362px) 62vw, 1248px"';

    }
}



