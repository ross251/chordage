import yaml

dir_path = '/home/ross/dev/projects/chordage/data/tab_visualizations/tester1'

def getInstanceData(dir_path):
  with open(dir_path + '/notes.yaml', 'r') as yaml_file:
    instance_data = yaml.safe_load(yaml_file)

  measure_arr = []
  instance_arr = []
  for measure_obj in instance_data:
    for notes in measure_obj['instances']:
      measure_arr.append(measure_obj['measure'])
      instance_arr.append(notes)

  return {
    'instance_data': instance_arr,
    'measure_data': measure_arr
  }

###########################################
def getUnderlaysData(dir_path, instance_count):
  with open(dir_path + '/underlays.yaml', 'r') as yaml_file:
    underlays_data = yaml.safe_load(yaml_file)

  underlays_arr = []
  underlay_refs = [None] * instance_count
  index = 0
  for underlay in underlays_data:
    for instance_range in underlay['instances']:
      for idx_plus_one in range(instance_range[0], instance_range[1] + 1):
        underlay_refs[idx_plus_one - 1] = index
    underlays_arr.append(underlay['underlay'])
    index += 1

    return{
      'underlays_data': underlays_arr,
      'underlay_refs': underlay_refs
    }

#############################################################
def getInfosData(dir_path, instance_count):
  with open(dir_path + '/infos.yaml', 'r') as yaml_file:
    infos_data = yaml.safe_load(yaml_file)
  
  infos_arr = []
  info_refs = [None] * instance_count
  my_index = 0

  for info in infos_data:
    for instance_range in info['instances']:
      for idx in range(instance_range[0], instance_range[1] + 1):
        info_refs[idx] = my_index
    infos_arr.append(info['info'])
    my_index += 1

  return{
    'infos_data': infos_arr,
    'info_refs': info_refs
  }

##########################################################
def getTabVisData(dir_path):
  return_dict = {} 
  return_dict['instance_data'] = getInstanceData(dir_path)
  instance_count = len(return_dict['instance_data']['measure_data'])
  return_dict['underlays_data'] = getUnderlaysData(dir_path, instance_count)
  return_dict['infos_data'] = getInfosData(dir_path, instance_count)

  print(return_dict)
  return return_dict

getTabVisData(dir_path)
