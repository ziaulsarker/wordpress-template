<?php


// load all Scripts
function my_theme_enqueue_scripts() {
	wp_enqueue_script( 'bundle', get_stylesheet_directory_uri() . '/dist/bundle.js', array('jquery'), 1, false );
}

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );



// feattured image
add_theme_support( 'post-thumbnails' ); 


// menues
function register_my_menu() {
  add_theme_support( "menus" );
  register_nav_menu( "primary", "Primary Nav" );
}
add_action( 'init', 'register_my_menu' );








