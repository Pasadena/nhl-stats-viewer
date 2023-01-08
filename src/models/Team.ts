type Conference = {
	name: string;
};

type Division = {
	name: string;
};

type Venue = {
	city: string;
	name: string;
};

export type PositionType = 'Forward' | 'Defenseman' | 'Goalie';
export type PositionAbbreviation = 'LW' | 'RW' | 'C' | 'D' | 'G';

export type Team = {
	id: number;
	name: string;
	abbreviation: string;
	conference: Conference;
	division: Division;
	firstYearOfPlay: string;
	venue: Venue;
};

export type Roster = {
	link: string;
	roster: RosterMember[];
};

export type Player = {
	fullName: string;
	link: string;
	id: string;
	primaryNumber: number;
	nationality: string;
	birthDate: string;
	birthCity: string;
	currentAge: number;
	height: string;
	weight: number;
	currentTeam: {
		id: string;
		name: string;
	};
};

export type RosterMember = {
	person: Player;
	position: {
		code: string;
		type: PositionType;
		abbreviation: PositionAbbreviation;
	};
};
