# 1. Imagen base
FROM php:8.2-apache

# 2. Dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    libpq-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 3. Extensiones PHP (POSTGRES + básicas Laravel)
RUN docker-php-ext-install \
    pdo_pgsql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd

# 4. Apache rewrite
RUN a2enmod rewrite

# 5. Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 6. Directorio de trabajo
WORKDIR /var/www/html

# 7. Copiar proyecto
COPY . .

# 8. Instalar dependencias Laravel
RUN composer install --no-dev --optimize-autoloader

# 9. Permisos
RUN chown -R www-data:www-data storage bootstrap/cache

# 10. Apache apunta a /public
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 11. Puerto Render
ENV PORT=80
EXPOSE 80

# 12. START SEGURO (IMPORTANTE)
CMD php artisan optimize && \
    php artisan migrate --force || true && \
    apache2-foreground