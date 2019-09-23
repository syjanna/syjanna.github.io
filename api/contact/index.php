<?php
// This file contains our email function.
// From the React app, we send a POST request to this php api.

// define domains from which requests are allowed (* means all sites)
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//php://input: read only stream; read raw POST data from the request body
//file_get_contents will read a file into a string.
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// verify that first name and email are filled in
if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "jos5@mcmaster.ca";
	$from = $_POST['email'];

	// data

	$msg = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
