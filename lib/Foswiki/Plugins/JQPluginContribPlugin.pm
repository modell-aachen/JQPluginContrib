package Foswiki::Plugins::JQPluginContribPlugin;

use strict;
use warnings;

use Foswiki::Func ();
use Foswiki::Plugins ();

use version;
our $VERSION = version->declare( '1.0.0' );
our $RELEASE = '1.0.0';
our $NO_PREFS_IN_TOPIC = 1;
our $SHORTDESCRIPTION = 'Plugin handler for JQPluginContrib';

sub initPlugin {
  require Foswiki::Plugins::JQueryPlugin;
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::fancytree', 'Foswiki::Contrib::JQPluginContrib::FancyTree' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::justgage', 'Foswiki::Contrib::JQPluginContrib::JustGage' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::moment', 'Foswiki::Contrib::JQPluginContrib::Moment' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::moment::timezone', 'Foswiki::Contrib::JQPluginContrib::MomentTimezone' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::observe', 'Foswiki::Contrib::JQPluginContrib::Observe' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::raphael', 'Foswiki::Contrib::JQPluginContrib::Raphael' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::readmore', 'Foswiki::Contrib::JQPluginContrib::ReadMore' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::spin', 'Foswiki::Contrib::JQPluginContrib::Spin' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::sweetalert2', 'Foswiki::Contrib::JQPluginContrib::SweetAlert' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::tooltipster', 'Foswiki::Contrib::JQPluginContrib::Tooltipster' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::underscore', 'Foswiki::Contrib::JQPluginContrib::Underscore' );
  return 1;
}

1;

__END__
Foswiki - The Free and Open Source Wiki, http://foswiki.org/

Author: Modell Aachen GmbH

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version. For
more details read LICENSE in the root of this distribution.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

As per the GPL, removal of this notice is prohibited.
