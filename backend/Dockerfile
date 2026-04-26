# 1. Imagen base
FROM php:8.2-apache

# 2. Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    sqlite3 \
    libsqlite3-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 3. Instalar extensiones PHP necesarias
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd pdo_sqlite

# 4. Activar mod_rewrite (CRÍTICO para Laravel)
RUN a2enmod rewrite

# 5. Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 6. Establecer directorio de trabajo
WORKDIR /var/www/html

# 7. Copiar proyecto
COPY . .

# 8. Instalar dependencias de Laravel (MUY IMPORTANTE)
RUN composer install --no-dev --optimize-autoloader

# 9. Permisos correctos
RUN chown -R www-data:www-data storage bootstrap/cache

# 10. Configurar Apache para usar /public
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 11. Puerto dinámico de Render (CLAVE)
ENV PORT=80
EXPOSE 80

# 12. Comando de inicio (con migraciones)
CMD php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache && \
    php artisan migrate --force && \
    apache2-foreground