import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTransloco } from '@jsverse/transloco';
import { ProjectStore } from '../../features/project/project.store';
import { ThemeStore } from '../../themes';
import { Appbar } from './appbar';

describe('Appbar', () => {
  let component: Appbar;
  let fixture: ComponentFixture<Appbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appbar],
      providers: [
        ProjectStore,
        ThemeStore,

        provideTransloco({
          config: {},
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Appbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
