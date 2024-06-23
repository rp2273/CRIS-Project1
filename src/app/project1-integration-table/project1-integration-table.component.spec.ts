import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1IntegrationTableComponent } from './project1-integration-table.component';

describe('Project1IntegrationTableComponent', () => {
  let component: Project1IntegrationTableComponent;
  let fixture: ComponentFixture<Project1IntegrationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project1IntegrationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1IntegrationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
