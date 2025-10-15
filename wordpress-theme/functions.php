<?php
/**
 * ADHER Theme Functions
 */

// Theme Setup
function adher_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'adher'),
    ));
}
add_action('after_setup_theme', 'adher_theme_setup');

// Enqueue styles and scripts
function adher_enqueue_assets() {
    // Main stylesheet
    wp_enqueue_style('adher-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom scripts
    wp_enqueue_script('adher-script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'adher_enqueue_assets');

// Customizer Settings
function adher_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('adher_hero', array(
        'title' => __('Hero Section', 'adher'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Recubrimientos en Polvo de Alta Calidad',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'adher'),
        'section' => 'adher_hero',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Protección y estética profesional para sus productos metálicos',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'adher'),
        'section' => 'adher_hero',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_image', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', array(
        'label' => __('Hero Background Image', 'adher'),
        'section' => 'adher_hero',
    )));
    
    // Contact Section
    $wp_customize->add_section('adher_contact', array(
        'title' => __('Contact Information', 'adher'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('contact_phone_1', array(
        'default' => '8183510648',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone_1', array(
        'label' => __('Phone 1', 'adher'),
        'section' => 'adher_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_phone_2', array(
        'default' => '8183514881',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone_2', array(
        'label' => __('Phone 2', 'adher'),
        'section' => 'adher_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_whatsapp', array(
        'default' => '8119103216',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_whatsapp', array(
        'label' => __('WhatsApp', 'adher'),
        'section' => 'adher_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'ventas@adher.com.mx',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email', 'adher'),
        'section' => 'adher_contact',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => 'Amado Nervo 2910 Norte, Col. Bella Vista, Monterrey, NL, 64410',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'adher'),
        'section' => 'adher_contact',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'adher_customize_register');

// Custom Logo Support
function adher_custom_logo() {
    if (has_custom_logo()) {
        the_custom_logo();
    } else {
        echo '<a href="' . esc_url(home_url('/')) . '">';
        echo '<img src="' . get_template_directory_uri() . '/assets/adher-logo.png" alt="' . get_bloginfo('name') . '" style="height: 50px;">';
        echo '</a>';
    }
}

// Smooth Scroll Navigation
function adher_smooth_scroll() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });
        }
    });
    </script>
    <?php
}
add_action('wp_footer', 'adher_smooth_scroll');
