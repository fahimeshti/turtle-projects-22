<?php

$user_data = file_get_contents('https://gorest.co.in/public/v1/users');

print $user_data;