import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let service: RosterService;
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
service = TestBed.inject(RosterService);
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
  		it('should run setMatches()', () => {	
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
			var result = function () {
				component.setMatches();
			}
    			expect(result).toBeTruthy();
  		});

  		it('should create four matches with eight contestants', () => {	
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
    			expect(component.matches.length).toEqual(4);
  		});
	});

	describe('Complete Round', () => {
	});


});
