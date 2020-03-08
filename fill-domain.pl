#!/usr/bin/perl
while(<>){
  if (/"\/problems\//){
    my $line = $_;
    $line =~ s/\/problems/https:\/\/leetcode.com\/problems/;
    print $line;
  } else {
    print;
  }
}
