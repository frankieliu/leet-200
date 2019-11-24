#!/usr/bin/perl
use strict;
use warnings;

while(<>){
  if(/^(\d+)/){
    my $number = $1;
    chomp($number);
    while(<>){
      if (/^([0-9A-Z].+)(\d\d\.\d%)\s(\S+)/) {
        my $prob = $1; chomp($prob);
        my $percent = $2; chomp($percent);
        my $level = $3; chomp($level);
        print "|$number|$prob|$percent|$level|\n";
        last;
      } else {
        print $_;
      }
    }
  } else {
    print $_;
  }
}
