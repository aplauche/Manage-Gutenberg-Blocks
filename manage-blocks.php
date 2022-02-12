<?php

/*
Paste this into functions.php to import:
require get_template_directory() . '/manage-blocks.php';
*/

function custom_gutenberg_scripts() {

    wp_enqueue_script(
        'custom-editor', // script handle
        get_template_directory_uri() . '/editor.js', // path to file
        array( 'wp-blocks', 'wp-dom' ), // dependencies
        filemtime( get_template_directory() . '/editor.js' ), // versioning 
        true // in footer
    );
    wp_localize_script( 
        'custom-editor', // handle of script to add varaibles to
        'postData', // name of the variable
        array( 
            'postType' => get_post_type( get_the_id() ),
            'postId' => get_the_id(),
        ) // data contained in the variable
    );
}
add_action( 'enqueue_block_editor_assets', 'custom_gutenberg_scripts' );