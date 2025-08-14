export class ProjectV1 {
  version: '1';
  file: File | undefined;
  isModified: boolean;
  name: string;

  constructor(props?: Partial<ProjectV1>) {
    this.version = props?.version ?? '1';
    this.file = props?.file;
    this.isModified = props?.isModified ?? false;
    this.name = props?.name ?? 'Default project';
  }
}
