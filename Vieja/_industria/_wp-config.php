<?php
define('WP_AUTO_UPDATE_CORE', 'minor');// Esta opción es imprescindible para garantizar que las actualizaciones de WordPress pueden gestionarse correctamente en el paquete de herramientas de WordPress. Si este sitio web WordPress ya no está gestionado por el paquete de herramientas de WordPress, elimine esta línea.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '7207187_wp_zcxq9' );

/** MySQL database username */
define( 'DB_USER', 'wp_6p45i' );

/** MySQL database password */
define( 'DB_PASSWORD', '#qoPm731CN' );

/** MySQL hostname */
define( 'DB_HOST', 'PMYSQL120.dns-servicio.com:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'tB;e&E7|4ZhGR1fLYp0i+gS[&Ls1;2n|zX11!5/H|G%0pI~2Ia]~ehq5]q8rDF0y');
define('SECURE_AUTH_KEY', '_507EaBp_*0KV1lSfTett9Kd@lo!D;)W72l)tw5L(/8fr+918nG7WyAybf75hzt+');
define('LOGGED_IN_KEY', '9C8pb)f*_]E_83#:9_vF]6K|XG(f*)44Ffz!;/WEAuu-3[3AT[#Z5h#J@~kVD_h~');
define('NONCE_KEY', 'J]%9h%08GztM:7(#2XhY2+D;TZ]%+WrKo#F8m8SLEr&#C9)_Y3:%S[~MiB58CzU@');
define('AUTH_SALT', 'u3|m1@+UIj8S*nF]|ji6bM|2k404N42N2o6*F5w!5i#/i|@F6XB2N+k567IYdP-V');
define('SECURE_AUTH_SALT', '7QJ41FmrdJ(mlbT(%2ip_Ue@%n!yNgQVe*vJNxq]cyNsv5LD5U5F3i74o%nL/-7[');
define('LOGGED_IN_SALT', 'KM@cBcY510B%!7eL%(]E1ebBw44vKBRy_R6H3spO!G_1(o/OE1nfiX/Dm~p31]b)');
define('NONCE_SALT', '9B8NHhwiC+MG297Vu&#kIp[Gst3SmQl8G8w0972j%Yz_tO;DhIA3C97)8C++:3I]');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'De6eMm_';


define('WP_ALLOW_MULTISITE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
