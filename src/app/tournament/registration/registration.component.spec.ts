import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { RosterService } from '../../services/roster.service';
import { FormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      providers: [ RosterService ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

	describe('Constructor and Initialization', () => {
  		it('should create', () => {
    			expect(component).toBeTruthy();
  		});

    		it('should load array of empty strings', () => {
    			expect(component.players).toEqual(['','','','','','','','']);
  		});

    		it('should load players of length 8 on init', () => {
    			expect(component.players.length).toEqual(8);
  		});

    		it('should load message field as null', () => {
    			expect(component.message).toEqual(null);
  		});
	});

	describe('Duplicate Names', () => {
		it('should update message to say player is duplicate', () => {
			component.players[0] = 'goku';
			component.players[1] = 'gohan';
			component.players[2] = 'GOKU';
			component.players[3] = 'vegeta';
			component.registerContestants();
    			expect(component.message).toEqual('player is duplicate');
  		});

		it('should update message to say player is duplicate with empty strings in between', () => {
			component.players[0] = 'VeGeta';
			component.players[7] = 'vEgEtA';
			component.registerContestants();
    			expect(component.message).toEqual('player is duplicate');
  		});
	});

	describe('Invalid number of players', () => {
		it('should update message to say information on roster size', () => {
			component.players[0] = 'trunks';
			component.players[1] = 'tien';
			component.players[2] = 'yamcha';
			component.registerContestants();
    			expect(component.message).toEqual('Roster can only be 2, 4, or 8 players');
  		});

		it('should update message to say information on roster size with empty space between', () => {
			component.players[0] = 'omega shenron';
			component.players[2] = 'CELL';
			component.players[3] = 'yamcha';
			component.players[5] = 'cooler';
			component.players[7] = 'frieza';
			component.registerContestants();
    			expect(component.message).toEqual('Roster can only be 2, 4, or 8 players');
  		});

		it('should update message to say information on roster size with no valid players submitted', () => {
			component.registerContestants();
    			expect(component.message).toEqual('Roster can only be 2, 4, or 8 players');
  		});

		it('should update message to say information on roster size with more empty players submitted', () => {
			component.players[0] = '';
			component.players[2] = '    ';
			component.registerContestants();
    			expect(component.message).toEqual('Roster can only be 2, 4, or 8 players');
  		});
	});

	describe('Successful registration', () => {
		it('should return a message with the full roster of eight contestants', () => {
			component.players[0] = 'naruto';
			component.players[1] = 'sasuke';
			component.players[2] = 'sakura';
			component.players[3] = 'neji';
			component.players[4] = 'hinata';
			component.players[5] = 'gaara';
			component.players[6] = 'shikamaru';
			component.players[7] = 'shino';
			component.registerContestants();
    			expect(component.message).toEqual('naruto,sasuke,sakura,neji,hinata,gaara,shikamaru,shino');
  		});

		it('should return a message with the roster of four contestants with empty spaces', () => {
			component.players[1] = 'Orochimaru';
			component.players[3] = 'Tsunade';
			component.players[5] = 'Jaryaiah';
			component.players[7] = 'Sanin';
			component.registerContestants();
    			expect(component.message).toEqual('Orochimaru,Tsunade,Jaryaiah,Sanin');
  		});

		it('should return a message with the roster of two contestants with empty spaces', () => {
			component.players[5] = 'chunin';
			component.players[6] = 'jonin';
			component.registerContestants();
    			expect(component.message).toEqual('chunin,jonin');
  		});

	});

});
