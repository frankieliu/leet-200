my $a = 'AaaDddcC';
if ($a =~ /([aA]+)([bB]*|[dD]*)([cC]+)(e?)/) {
  print $1,"-", $2,"-", $3,'-',$4;
}
