<?php
/**
 * Front Page Template
 */
get_header();

$hero_image = get_theme_mod('hero_image', get_template_directory_uri() . '/assets/hero-powder-coating.jpg');
?>

<!-- Hero Section -->
<section id="inicio" class="hero-section" style="background-image: url('<?php echo esc_url($hero_image); ?>');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1 class="hero-title"><?php echo get_theme_mod('hero_title', 'Recubrimientos en Polvo de Alta Calidad'); ?></h1>
        <p class="hero-subtitle"><?php echo get_theme_mod('hero_subtitle', 'Protección y estética profesional para sus productos metálicos'); ?></p>
        <a href="#contacto" class="hero-button">Contáctanos</a>
    </div>
</section>

<!-- About Us Section -->
<section id="nosotros">
    <div class="container">
        <h2 class="section-title">Sobre Nosotros</h2>
        <p class="section-subtitle">Líderes en recubrimientos en polvo desde 1995</p>
        
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <p style="font-size: 1.1rem; line-height: 1.8; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                Con más de 25 años de experiencia, ADHER se ha consolidado como líder en la industria de 
                recubrimientos en polvo en México. Nuestra dedicación a la calidad, innovación tecnológica y 
                servicio al cliente nos distingue en el mercado.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; color: hsl(var(--muted-foreground));">
                Contamos con tecnología de punta y un equipo de profesionales altamente capacitados para 
                garantizar acabados excepcionales que protegen y embellecen sus productos metálicos.
            </p>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="servicios" style="background: hsl(var(--muted));">
    <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="section-subtitle">Soluciones integrales de recubrimiento</p>
        
        <div class="card-grid">
            <div class="card">
                <div class="card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <h3 class="card-title">Recubrimiento en Polvo</h3>
                <p class="card-description">
                    Aplicación profesional de pintura en polvo con acabados duraderos y resistentes a la corrosión, 
                    disponible en amplia gama de colores y texturas.
                </p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                </div>
                <h3 class="card-title">Preparación de Superficies</h3>
                <p class="card-description">
                    Limpieza y preparación especializada mediante granallado y desengrase químico para garantizar 
                    máxima adherencia del recubrimiento.
                </p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                </div>
                <h3 class="card-title">Control de Calidad</h3>
                <p class="card-description">
                    Rigurosos procesos de inspección y pruebas en nuestro laboratorio para asegurar la máxima 
                    calidad en cada proyecto.
                </p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                </div>
                <h3 class="card-title">Acabados Personalizados</h3>
                <p class="card-description">
                    Amplio catálogo de colores y texturas según especificaciones del cliente, incluyendo acabados 
                    especiales y colores corporativos.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Facilities Section -->
<section id="instalaciones">
    <div class="container">
        <h2 class="section-title">Nuestras Instalaciones</h2>
        <p class="section-subtitle">Tecnología de vanguardia</p>
        
        <div class="card-grid">
            <div class="card facility-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/facility-monorail-line.jpg" alt="Línea de Monorriel" class="facility-image">
                <h3 class="card-title">Tecnología de Aplicación Continua con Línea en Monorriel</h3>
                <p class="card-description">Sistema automatizado de última generación para aplicación continua.</p>
                <ul style="text-align: left; margin-top: 1rem; color: hsl(var(--muted-foreground)); line-height: 1.8;">
                    <li>Túnel de Desengrase con 5 etapas, ofreciendo la mejor tecnología en químicos para maximizar la adherencia de pintura y proteger el metal contra la corrosión.</li>
                    <li>Cabina de aplicación de pintura con cambio de color rápido</li>
                    <li>Horno de secado y curado de alta eficiencia energética</li>
                </ul>
            </div>
            
            <div class="card facility-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/facility-curing-oven.jpg" alt="Horno de Quemado" class="facility-image">
                <h3 class="card-title">Horno de Quemado de la Más Alta Tecnología</h3>
                <p class="card-description">Curado perfecto con tecnología de vanguardia para acabados excepcionales y durabilidad superior.</p>
            </div>
            
            <div class="card facility-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/facility-blasting-room.jpg" alt="Cuarto de Granallado" class="facility-image">
                <h3 class="card-title">Cuarto de Granallado con Equipo de GOFF de la Más Alta Tecnología</h3>
                <p class="card-description">Preparación de superficies con equipo GOFF de última generación para máxima adherencia.</p>
            </div>
            
            <div class="card facility-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/facility-quality-control.jpg" alt="Control de Calidad" class="facility-image">
                <h3 class="card-title">Laboratorio de Calidad</h3>
                <p class="card-description">Laboratorio equipado con tecnología de medición y prueba para garantizar los más altos estándares de calidad.</p>
            </div>
            
            <div class="card facility-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/facility-shipping-area.jpg" alt="Área de Envío" class="facility-image">
                <h3 class="card-title">Área de Envío</h3>
                <p class="card-description">Espacio organizado para el embalaje y despacho seguro de productos terminados.</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contacto" style="background: hsl(var(--muted));">
    <div class="container">
        <h2 class="section-title">Contáctanos</h2>
        <p class="section-subtitle">Estamos para servirle</p>
        
        <div class="contact-grid">
            <div class="card contact-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <h3 class="card-title">Dirección</h3>
                <div class="card-description">
                    <p><strong>Oficinas Generales</strong></p>
                    <p>Amado Nervo 2910 Norte</p>
                    <p>Col. Bella Vista</p>
                    <p>Monterrey, NL, 64410</p>
                    <br>
                    <p><strong>Planta</strong></p>
                    <p>Amado Nervo 2902 Norte</p>
                    <p>Col. Bella Vista</p>
                    <p>Monterrey, NL, 64410</p>
                </div>
            </div>
            
            <div class="card contact-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </div>
                <h3 class="card-title">Teléfonos</h3>
                <div class="card-description">
                    <p><a href="tel:<?php echo get_theme_mod('contact_phone_1', '8183510648'); ?>">(81) 8351 0648</a></p>
                    <p><a href="tel:<?php echo get_theme_mod('contact_phone_2', '8183514881'); ?>">(81) 8351 4881</a></p>
                </div>
            </div>
            
            <div class="card contact-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </div>
                <h3 class="card-title">WhatsApp</h3>
                <div class="card-description">
                    <p><a href="https://wa.me/52<?php echo get_theme_mod('contact_whatsapp', '8119103216'); ?>" target="_blank">(81) 1910 3216</a></p>
                </div>
            </div>
            
            <div class="card contact-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <h3 class="card-title">Correo</h3>
                <div class="card-description">
                    <p><a href="mailto:<?php echo get_theme_mod('contact_email', 'ventas@adher.com.mx'); ?>"><?php echo get_theme_mod('contact_email', 'ventas@adher.com.mx'); ?></a></p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
