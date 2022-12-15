import yaml
import os

dir_path = '/home/ross/dev/projects/chordage/data/tab_visualizations'

def getTabList(dir_path):
  tab_dir_paths = [ f.path for f in os.scandir(dir_path) if f.is_dir() ]
  tab_list_data = []
  for path in tab_dir_paths:
    with open(path+'/meta.yaml', 'r') as stream:
      meta_dict = yaml.safe_load(stream)
      tab_list_data.append([meta_dict['name'], meta_dict['composer'], path])
  return tab_list_data

print(getTabList(dir_path))

