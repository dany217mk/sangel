<?php

 require_once "./components/autoload.php";
 require_once "./config/constants.php";



  $status = SITE_STATUS;
  if ($status != "open" && $_SERVER['REQUEST_URI'] != SITE_PAGE_TECHNICAL) {
    header("Location: " . SITE_PAGE_TECHNICAL);
  }

 $router = new Router;
$router->run();
