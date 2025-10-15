<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <?php adher_custom_logo(); ?>
            </div>
            
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'fallback_cb' => 'adher_default_menu',
                ));
                ?>
            </nav>
        </div>
    </div>
</header>

<?php
// Default menu if no menu is set
function adher_default_menu() {
    echo '<ul>';
    echo '<li><a href="#inicio">Inicio</a></li>';
    echo '<li><a href="#nosotros">Nosotros</a></li>';
    echo '<li><a href="#servicios">Servicios</a></li>';
    echo '<li><a href="#instalaciones">Instalaciones</a></li>';
    echo '<li><a href="#contacto">Contacto</a></li>';
    echo '</ul>';
}
?>
