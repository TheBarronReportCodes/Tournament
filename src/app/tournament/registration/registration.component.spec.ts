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
			component.players[8] = 'vEgEtA';
			component.registerContestants();
    			expect(component.message).toEqual('player is duplicate');
  		});
	});

});
