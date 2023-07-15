
<?php

// Configure les fonctionnalités de bases
function vingtcinq_theme_setup(){

    // Prise en charge des images de mise en avant
    add_theme_support('post-thumbnails');

    // Ajouter automatiquement le titre du site dans l'entete
    add_theme_support('title-tag');

    // Ajouts des menus
    register_nav_menus( array(
        'menu-principal' => 'Menu Principal',
    ) );

}
add_action( 'after_setup_theme', 'vingtcinq_theme_setup' );

// Ajout des scripts
function vingtcinq_theme_register_assets(){

    // CSS
    wp_enqueue_style( 
        'style', 
        get_template_directory_uri() . '/dist/main.css',
        array(),
        '1.0'
    );

    // JS
    wp_enqueue_script( 
        'app', 
        get_template_directory_uri() . '/dist/main.js', 
        array(),
        '1.0',
        true
    );

}
add_action( 'wp_enqueue_scripts', 'vingtcinq_theme_register_assets');

// Create option page
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}

//Disable plugin auto-update email notification
add_filter('auto_plugin_update_send_email', '__return_false');

// Cleanup Wordpress
require get_template_directory() . '/inc/cleanup.php';


// Remove Articles & Commentaires from admin bar
function post_remove (){ 
   remove_menu_page('edit.php');
   remove_menu_page( 'edit-comments.php' );
}
add_action('admin_menu', 'post_remove'); 

// Use options page for ACF
add_filter( 'timber_context', 'mytheme_timber_context'  );

function mytheme_timber_context( $context ) {
    $context['options'] = get_fields('option');
    $context['menu'] = new \Timber\Menu( 'menu-principal' );
    return $context;
}