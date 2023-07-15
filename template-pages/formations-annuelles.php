<?php
/*
Template Name: Formations annuelles
*/


$context = Timber::context();

$context['post'] = new Timber\Post();

Timber::render( 'pages/formations-annuelles.twig', $context );