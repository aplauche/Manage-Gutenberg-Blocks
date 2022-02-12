wp.domReady(function () {
    /**
    * Manage Block Types By Post Type
    * This is not possible in php unfortunately.
    */

    // DEFINE THE BLOCKS WE WANT ON PAGES
    if(postData.postType == 'page'){
        wp.blocks.getBlockTypes().forEach(function(block){

            // UNCOMMENT TO CHECK BLOCK HANDLES
            // console.log(block) 

            // FILTER BY CATEGORY
            if(block.category == 'custom') return

            if(block.category == 'text') return
            
            if(block.category == 'media') return
            
            // REMOVE VARIATIONS
            if(block.name === 'core/embed'){
                block.variations.forEach(variant => {
                    wp.blocks.unregisterBlockVariation( block.name, variant.name );
                })
                return
            }
            
            // FILTER BY NAME
            if(block.name == 'core/columns' 
              || block.name == 'core/separator' 
              || block.name == 'core/spacer' ) return

            // UNREGISTER ALL OTHER BLOCKS
            wp.blocks.unregisterBlockType(block.name);
        })
    }


    // DEFINE THE BLOCKS WE WANT ON POSTS
    else if(postData.postType == 'post'){
        wp.blocks.getBlockTypes().forEach(function(block){

            if(block.category == 'text') return
            

            wp.blocks.unregisterBlockType(block.name);
        })
    }

    // SAFE DEFAULTS FOR NEW POST TYPES
    else {

        wp.blocks.getBlockTypes().forEach(function(block){

            if(block.category == 'text') return
            
            if(block.category == 'media') return
            
            if(block.category == 'embed') return
            

            wp.blocks.unregisterBlockType(block.name);
        })
    }
});