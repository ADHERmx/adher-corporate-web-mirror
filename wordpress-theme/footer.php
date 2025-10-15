<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="logo" style="margin-bottom: 1.5rem;">
                <?php adher_custom_logo(); ?>
            </div>
            
            <nav class="footer-nav">
                <a href="#inicio">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#servicios">Servicios</a>
                <a href="#instalaciones">Instalaciones</a>
                <a href="#contacto">Contacto</a>
            </nav>
            
            <div class="footer-contact" style="margin-bottom: 1.5rem; opacity: 0.8;">
                <p><?php echo get_theme_mod('contact_address', 'Amado Nervo 2910 Norte, Col. Bella Vista, Monterrey, NL, 64410'); ?></p>
                <p>Tel: <?php echo get_theme_mod('contact_phone_1', '8183510648'); ?> | <?php echo get_theme_mod('contact_phone_2', '8183514881'); ?></p>
                <p>Email: <a href="mailto:<?php echo get_theme_mod('contact_email', 'ventas@adher.com.mx'); ?>" style="color: white;"><?php echo get_theme_mod('contact_email', 'ventas@adher.com.mx'); ?></a></p>
            </div>
        </div>
        
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; opacity: 0.6;">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
