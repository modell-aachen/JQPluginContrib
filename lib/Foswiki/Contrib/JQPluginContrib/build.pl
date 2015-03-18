#!/usr/bin/perl -w
use strict;
BEGIN { unshift @INC, split( /:/, $ENV{FOSWIKI_LIBS} ); }

package JQPluginBuild;
use Foswiki::Contrib::Build;
our @ISA = qw( Foswiki::Contrib::Build );

sub new {
  my $class = shift;
  return bless( $class->SUPER::new('JQPluginContrib'), $class );
}

sub target_build {
  my $this = shift;

  local $| = 1;
  print "Fetching dependencies:\n";
  print $this->sys_action( qw(npm install) ) . "\n";
  print "Done!\n";

  print "Updating components:\n";
  print $this->sys_action( qw(bower install) ) . "\n";
  print "Done!\n";

  print "Building...\n";
  print $this->sys_action( qw(grunt build) ) . "\n";
  print $this->sys_action( qw(grunt copy) ) . "\n";
  print "Done!\n";
}

sub target_compress {}

package main;
my $build = new JQPluginBuild();
$build->build( $build->{target} );

