import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ProjectV1 } from './models';

type ProjectState = {
  openedProjects: ProjectV1[];
  currentProjectIdx: number;
};

const initialProjectState: ProjectState = {
  openedProjects: [],
  currentProjectIdx: -1,
};

export const ProjectStore = signalStore(
  withState(initialProjectState),
  withComputed(({ openedProjects, currentProjectIdx }) => ({
    currentProject: computed(() =>
      currentProjectIdx() >= 0
        ? openedProjects()[currentProjectIdx()]
        : undefined
    ),
  })),
  withMethods((store) => ({
    createProject() {
      patchState(store, (state) => ({
        openedProjects: [...state.openedProjects, new ProjectV1()],
        currentProjectIdx: state.openedProjects.length,
      }));
    },
    async openFile(file: File) {
      try {
        const content = JSON.parse(await file.text()) as {
          version: string;
        } & unknown;
        switch (content.version) {
          case '1':
            patchState(store, (state) => ({
              openedProjects: [
                ...state.openedProjects,
                new ProjectV1({
                  ...content,
                  version: '1',
                  file,
                }),
              ],
              currentProjectIdx: state.openedProjects.length,
            }));
            break;
          default:
            break;
        }
      } catch (err) {
        console.log(err);
      }
    },
  }))
);
