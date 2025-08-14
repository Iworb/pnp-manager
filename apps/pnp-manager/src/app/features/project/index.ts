import { makeEnvironmentProviders } from '@angular/core';
import { ProjectStore } from './project.store';

export * from './models';

export function provideFeatureProject() {
  return makeEnvironmentProviders([ProjectStore]);
}
