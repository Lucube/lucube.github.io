<?php
  // Request Handling
  header('Access-Control-Allow-Origin: https://lucube.github.io');

  // Pass url parameter as url
  $url = $_POST["url"];
  $query = array(
      'api_key' => $_POST["token"]
  );
  // additional parameters
  //$query['count'] = '20';

  // Response from RIOT API
  $options = array(
      'http' => array(
          'header' => "Accept-Charset: application/x-www-form-urlencoded\r\n" .
              "X-Riot-Token: " . $_POST["token"],
          'method' => 'GET',
          'content' => $query
      )
  );

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);

  if ($result === FALSE) {
      echo 'Error in request';
  }

  echo $result;