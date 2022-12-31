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

export type Team = {
	id: number;
	name: string;
	abbreviation: string;
	conference: Conference;
	division: Division;
	firstYearOfPlay: string;
	venue: Venue;
};
