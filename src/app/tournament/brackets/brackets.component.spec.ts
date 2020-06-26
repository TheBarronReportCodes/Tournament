import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsComponent ],
      providers: [ RosterService ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

	describe('Constructor and initialization', () => {
  		it('should create', () => {
    			expect(component).toBeTruthy();
  		});

    		it('should load message field as null', () => {
    			expect(component.message).toEqual(null);
  		});

	});

	describe('Set Matches', () => {
	});

	describe('Complete Round', () => {
	});


});
