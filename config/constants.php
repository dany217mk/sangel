<?php
    date_default_timezone_set('Europe/Moscow');
    define("SITE_ROOT", "/sangel");
    define("FULL_SITE_ROOT", "http://localhost" . SITE_ROOT);
    define("FILE_ROOT", "/sangel");
    define("FULL_FILE_ROOT", "D://laragon/www" . FILE_ROOT);
    define("ASSETS", FULL_SITE_ROOT . "/assets");
    define("JS", ASSETS . "/js");
    define("CSS", ASSETS . "/css");
    define("IMG", ASSETS . "/img");
    define("LIBS", ASSETS . "/libs");
    define("REQUEST_URI_EXIST", SITE_ROOT . "/");
    define("SERVER_NAME", 'Sangel');

    #contact_informations
    define("CONTACT_ADMIN", 'https://vk.com/sangel_78');
    define("ADMIN_EMAIL", 'sangel@yandex.ru');


    #statuses
    define("SITE_STATUS", 'open');
    define("SITE_DATE_RELEASE", '31.05.2024');




    #pages
    define("SITE_PAGE_DEVELOPMENT", FULL_SITE_ROOT . '/report/501');
    define("SITE_PAGE_TECHNICAL", SITE_ROOT . '/report/503');
    define("SITE_PAGE_NOT_FOUND", FULL_SITE_ROOT . '/report/404');

