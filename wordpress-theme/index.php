<?php
/**
 * The main template file
 * This is used as a fallback if front-page.php doesn't exist
 */

// If front-page.php exists, use it for the homepage
if (is_front_page() && file_exists(get_template_directory() . '/front-page.php')) {
    get_template_part('front-page');
} else {
    // Otherwise display the default homepage
    get_header();
    ?>
    
    <div class="container" style="padding: 100px 1rem 50px;">
        <h1>Bienvenido a <?php bloginfo('name'); ?></h1>
        <p><?php bloginfo('description'); ?></p>
        
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div><?php the_excerpt(); ?></div>
                </article>
                <?php
            endwhile;
        else :
            ?>
            <p>No se encontraron publicaciones.</p>
            <?php
        endif;
        ?>
    </div>
    
    <?php
    get_footer();
}
?>
