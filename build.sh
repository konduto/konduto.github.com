#!/bin/bash
#
bundle exec rake build
find . -type d ! -name 'build' -delete
mv build/* .
rm -rf build/