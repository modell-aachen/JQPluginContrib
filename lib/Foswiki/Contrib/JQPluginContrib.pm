package Foswiki::Contrib::JQPluginContrib;

use strict;
use warnings;

our $VERSION = '1.0';
our $RELEASE = '1.0';
our $SHORTDESCRIPTION = 'A bundle of usefull jquery/js plugins';
our $NO_PREFS_IN_TOPIC = 1;

sub init {
  require Foswiki::Plugins::JQueryPlugin;

  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::moment', 'Foswiki::Plugins::JQPluginContrib::Moment' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::moment::timezone', 'Foswiki::Plugins::JQPluginContrib::MomentTimezone' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::observe', 'Foswiki::Plugins::JQPluginContrib::Observe' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::raphael', 'Foswiki::Plugins::JQPluginContrib::Raphael' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::spin', 'Foswiki::Plugins::JQPluginContrib::Spin' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::tooltipster', 'Foswiki::Plugins::JQPluginContrib::Tooltipster' );
  Foswiki::Plugins::JQueryPlugin::registerPlugin( 'jqp::underscore', 'Foswiki::Plugins::JQPluginContrib::Underscore' );
}

1;

__END__
Foswiki - The Free and Open Source Wiki, http://foswiki.org/

Author: Modell Aachen GmbH <http://www.modell-aachen.de>

Copyright (C) 2008-2015 Foswiki Contributors. Foswiki Contributors
are listed in the AUTHORS file in the root of this distribution.
NOTE: Please extend that file, not this notice.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version. For
more details read LICENSE in the root of this distribution.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

As per the GPL, removal of this notice is prohibited.

