import os
import shutil
import argparse

parser = argparse.ArgumentParser(
  prog = 'dist.py',
  description = ('Makes a distribution directory containing '
    'the index.html from ./src and the static files produced '
    'by webpack in ./static.'))

parser.add_argument('-d', '--destination',
  required=False,
  default='./dist',
  help=('The path used to create the distribution directory. '
  'Note if the directory already exists it will be overwritten.'
  'DEFAULT = ./dist'))

args = parser.parse_args()

if os.path.exists(args.destination):
  shutil.rmtree(args.destination)
os.makedirs(args.destination)

shutil.copy2('./src/index.html', args.destination)
shutil.copytree('./static', args.destination + '/static')