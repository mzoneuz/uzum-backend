import { Project } from "ts-morph";

const getInterfaceKeys = (filePath: string, interfaceName: string): string[] => {
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });

  const file = project.addSourceFileAtPath(filePath);

  const iface = file.getInterface(interfaceName);
  if (!iface) {
    throw new Error(`Interface "${interfaceName}" topilmadi (${filePath})`);
  }

  return iface.getProperties().map(p => p.getName());
};

export default getInterfaceKeys;
