import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../services/roster.service';
import { Match } from '../../model/match';
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
    service = TestBed.inject(RosterService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

	describe('Constructor and initialization', () => {
  		it('should create component', () => {
    			expect(component).toBeTruthy();
  		});

    		it('should load message field as null', () => {
    			expect(component.message).toEqual(null);
  		});

    		it('should load matches field as empty array', () => {
    			expect(component.matches).toEqual([]);
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

  		it('should create four matches given eight contestants', () => {	
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
			component.setMatches();

    			expect(component.getMatches().length).toEqual(4);
  		});


  		it('should create four matches given eight contestants with correct values for matches', () => {	
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
			component.setMatches();
			var result = component.getMatches();

    			expect(result).toEqual([new Match('Kim Possible', 'Ron Stoppable'), 
						new Match('Lilo', 'Stitch'), 
						new Match('Marquis De Carabas', 'Door'), 
						new Match('Richard Mayhew', 'Jessica')
						]);
  		});

  		it('should create two matches given four contestants', () => {	
			service.addContestant('Ex Machina');
			service.addContestant('Lady Bird');
			service.addContestant('Tiger King');
			service.addContestant('The Social Network');
			component.setMatches();

    			expect(component.getMatches().length).toEqual(2);
  		});


  		it('should create two matches given four contestants with correct values for matches', () => {	
			service.addContestant('Ex Machina');
			service.addContestant('Lady Bird');
			service.addContestant('Tiger King');
			service.addContestant('The Social Network');
			component.setMatches();
			var result = component.getMatches();

    			expect(result).toEqual([new Match('Ex Machina', 'Lady Bird'), 
						new Match('Tiger King', 'The Social Network')
						]);
  		});

  		it('should create one match given two contestants', () => {	
			service.addContestant('Up');
			service.addContestant('Toy Story');
			component.setMatches();

    			expect(component.getMatches().length).toEqual(1);
  		});


  		it('should create one match given two contestants with correct values for matches', () => {	
			service.addContestant('Up');
			service.addContestant('Toy Story');
			component.setMatches();
			var result = component.getMatches();

    			expect(result).toEqual([new Match('Up', 'Toy Story')
						]);
  		});
	});

	describe('Complete Round', () => {
		  it('should change match length from 4 to 2', () => {	
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
			component.setMatches();
			expect(component.getMatches().length).toEqual(4);

			component.getMatches()[0].setWinner(component.getMatches()[0].firstContestant);
			component.getMatches()[1].setWinner(component.getMatches()[1].firstContestant);
			component.getMatches()[2].setWinner(component.getMatches()[2].secondContestant);
			component.getMatches()[3].setWinner(component.getMatches()[3].secondContestant);

			component.completeRound();
			expect(component.getMatches().length).toEqual(2);	
  		});
	});
});
