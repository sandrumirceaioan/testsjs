let moment = require('moment');
let angular = require('angular');

angular.module('app',[]).controller('ctrl', function($scope){

let stats = [{"username":"unu","payout":14,"date":"2017-10-01"},{"username":"doi","payout":4,"date":"2017-10-01"},{"username":"trei","payout":68,"date":"2017-10-01"},{"username":"patru","payout":55,"date":"2017-10-01"},{"username":"cinci","payout":32,"date":"2017-10-01"},{"username":"sase","payout":6,"date":"2017-10-01"},{"username":"sapte","payout":89,"date":"2017-10-01"},{"username":"opt","payout":35,"date":"2017-10-01"},{"username":"noua","payout":60,"date":"2017-10-01"},{"username":"zece","payout":35,"date":"2017-10-01"},{"username":"unu","payout":68,"date":"2017-10-02"},{"username":"doi","payout":40,"date":"2017-10-02"},{"username":"trei","payout":27,"date":"2017-10-02"},{"username":"patru","payout":14,"date":"2017-10-02"},{"username":"cinci","payout":99,"date":"2017-10-02"},{"username":"sase","payout":9,"date":"2017-10-02"},{"username":"sapte","payout":47,"date":"2017-10-02"},{"username":"opt","payout":42,"date":"2017-10-02"},{"username":"noua","payout":92,"date":"2017-10-02"},{"username":"zece","payout":52,"date":"2017-10-02"},{"username":"unu","payout":5,"date":"2017-10-03"},{"username":"doi","payout":33,"date":"2017-10-03"},{"username":"trei","payout":63,"date":"2017-10-03"},{"username":"patru","payout":17,"date":"2017-10-03"},{"username":"cinci","payout":67,"date":"2017-10-03"},{"username":"sase","payout":13,"date":"2017-10-03"},{"username":"sapte","payout":56,"date":"2017-10-03"},{"username":"opt","payout":64,"date":"2017-10-03"},{"username":"noua","payout":97,"date":"2017-10-03"},{"username":"zece","payout":72,"date":"2017-10-03"},{"username":"unu","payout":87,"date":"2017-10-04"},{"username":"doi","payout":41,"date":"2017-10-04"},{"username":"trei","payout":87,"date":"2017-10-04"},{"username":"patru","payout":38,"date":"2017-10-04"},{"username":"cinci","payout":73,"date":"2017-10-04"},{"username":"sase","payout":79,"date":"2017-10-04"},{"username":"sapte","payout":80,"date":"2017-10-04"},{"username":"opt","payout":75,"date":"2017-10-04"},{"username":"noua","payout":94,"date":"2017-10-04"},{"username":"zece","payout":23,"date":"2017-10-04"},{"username":"unu","payout":8,"date":"2017-10-05"},{"username":"doi","payout":46,"date":"2017-10-05"},{"username":"trei","payout":28,"date":"2017-10-05"},{"username":"patru","payout":12,"date":"2017-10-05"},{"username":"cinci","payout":35,"date":"2017-10-05"},{"username":"sase","payout":10,"date":"2017-10-05"},{"username":"sapte","payout":83,"date":"2017-10-05"},{"username":"opt","payout":88,"date":"2017-10-05"},{"username":"noua","payout":15,"date":"2017-10-05"},{"username":"zece","payout":83,"date":"2017-10-05"},{"username":"unu","payout":77,"date":"2017-10-06"},{"username":"doi","payout":14,"date":"2017-10-06"},{"username":"trei","payout":71,"date":"2017-10-06"},{"username":"patru","payout":64,"date":"2017-10-06"},{"username":"cinci","payout":39,"date":"2017-10-06"},{"username":"sase","payout":54,"date":"2017-10-06"},{"username":"sapte","payout":9,"date":"2017-10-06"},{"username":"opt","payout":71,"date":"2017-10-06"},{"username":"noua","payout":82,"date":"2017-10-06"},{"username":"zece","payout":46,"date":"2017-10-06"},{"username":"unu","payout":23,"date":"2017-10-07"},{"username":"doi","payout":51,"date":"2017-10-07"},{"username":"trei","payout":89,"date":"2017-10-07"},{"username":"patru","payout":40,"date":"2017-10-07"},{"username":"cinci","payout":33,"date":"2017-10-07"},{"username":"sase","payout":18,"date":"2017-10-07"},{"username":"sapte","payout":74,"date":"2017-10-07"},{"username":"opt","payout":34,"date":"2017-10-07"},{"username":"noua","payout":49,"date":"2017-10-07"},{"username":"zece","payout":78,"date":"2017-10-07"},{"username":"unu","payout":48,"date":"2017-10-08"},{"username":"doi","payout":56,"date":"2017-10-08"},{"username":"trei","payout":90,"date":"2017-10-08"},{"username":"patru","payout":97,"date":"2017-10-08"},{"username":"cinci","payout":45,"date":"2017-10-08"},{"username":"sase","payout":46,"date":"2017-10-08"},{"username":"sapte","payout":22,"date":"2017-10-08"},{"username":"opt","payout":1,"date":"2017-10-08"},{"username":"noua","payout":4,"date":"2017-10-08"},{"username":"zece","payout":64,"date":"2017-10-08"},{"username":"unu","payout":34,"date":"2017-10-09"},{"username":"doi","payout":75,"date":"2017-10-09"},{"username":"trei","payout":50,"date":"2017-10-09"},{"username":"patru","payout":48,"date":"2017-10-09"},{"username":"cinci","payout":91,"date":"2017-10-09"},{"username":"sase","payout":82,"date":"2017-10-09"},{"username":"sapte","payout":50,"date":"2017-10-09"},{"username":"opt","payout":54,"date":"2017-10-09"},{"username":"noua","payout":83,"date":"2017-10-09"},{"username":"zece","payout":63,"date":"2017-10-09"},{"username":"unu","payout":7,"date":"2017-10-10"},{"username":"doi","payout":7,"date":"2017-10-10"},{"username":"trei","payout":61,"date":"2017-10-10"},{"username":"patru","payout":58,"date":"2017-10-10"},{"username":"cinci","payout":2,"date":"2017-10-10"},{"username":"sase","payout":15,"date":"2017-10-10"},{"username":"sapte","payout":78,"date":"2017-10-10"},{"username":"opt","payout":36,"date":"2017-10-10"},{"username":"noua","payout":63,"date":"2017-10-10"},{"username":"zece","payout":52,"date":"2017-10-10"},{"username":"unu","payout":22,"date":"2017-10-11"},{"username":"doi","payout":2,"date":"2017-10-11"},{"username":"trei","payout":54,"date":"2017-10-11"},{"username":"patru","payout":42,"date":"2017-10-11"},{"username":"cinci","payout":50,"date":"2017-10-11"},{"username":"sase","payout":23,"date":"2017-10-11"},{"username":"sapte","payout":88,"date":"2017-10-11"},{"username":"opt","payout":39,"date":"2017-10-11"},{"username":"noua","payout":68,"date":"2017-10-11"},{"username":"zece","payout":34,"date":"2017-10-11"},{"username":"unu","payout":50,"date":"2017-10-12"},{"username":"doi","payout":39,"date":"2017-10-12"},{"username":"trei","payout":41,"date":"2017-10-12"},{"username":"patru","payout":83,"date":"2017-10-12"},{"username":"cinci","payout":47,"date":"2017-10-12"},{"username":"sase","payout":94,"date":"2017-10-12"},{"username":"sapte","payout":73,"date":"2017-10-12"},{"username":"opt","payout":60,"date":"2017-10-12"},{"username":"noua","payout":21,"date":"2017-10-12"},{"username":"zece","payout":77,"date":"2017-10-12"},{"username":"unu","payout":19,"date":"2017-10-13"},{"username":"doi","payout":81,"date":"2017-10-13"},{"username":"trei","payout":54,"date":"2017-10-13"},{"username":"patru","payout":59,"date":"2017-10-13"},{"username":"cinci","payout":80,"date":"2017-10-13"},{"username":"sase","payout":24,"date":"2017-10-13"},{"username":"sapte","payout":33,"date":"2017-10-13"},{"username":"opt","payout":46,"date":"2017-10-13"},{"username":"noua","payout":99,"date":"2017-10-13"},{"username":"zece","payout":85,"date":"2017-10-13"},{"username":"unu","payout":40,"date":"2017-10-14"},{"username":"doi","payout":82,"date":"2017-10-14"},{"username":"trei","payout":35,"date":"2017-10-14"},{"username":"patru","payout":97,"date":"2017-10-14"},{"username":"cinci","payout":50,"date":"2017-10-14"},{"username":"sase","payout":3,"date":"2017-10-14"},{"username":"sapte","payout":51,"date":"2017-10-14"},{"username":"opt","payout":88,"date":"2017-10-14"},{"username":"noua","payout":23,"date":"2017-10-14"},{"username":"zece","payout":60,"date":"2017-10-14"},{"username":"unu","payout":70,"date":"2017-10-15"},{"username":"doi","payout":77,"date":"2017-10-15"},{"username":"trei","payout":48,"date":"2017-10-15"},{"username":"patru","payout":63,"date":"2017-10-15"},{"username":"cinci","payout":31,"date":"2017-10-15"},{"username":"sase","payout":11,"date":"2017-10-15"},{"username":"sapte","payout":94,"date":"2017-10-15"},{"username":"opt","payout":84,"date":"2017-10-15"},{"username":"noua","payout":74,"date":"2017-10-15"},{"username":"zece","payout":21,"date":"2017-10-15"},{"username":"unu","payout":93,"date":"2017-10-16"},{"username":"doi","payout":57,"date":"2017-10-16"},{"username":"trei","payout":76,"date":"2017-10-16"},{"username":"patru","payout":17,"date":"2017-10-16"},{"username":"cinci","payout":94,"date":"2017-10-16"},{"username":"sase","payout":27,"date":"2017-10-16"},{"username":"sapte","payout":5,"date":"2017-10-16"},{"username":"opt","payout":19,"date":"2017-10-16"},{"username":"noua","payout":48,"date":"2017-10-16"},{"username":"zece","payout":54,"date":"2017-10-16"},{"username":"unu","payout":76,"date":"2017-10-17"},{"username":"doi","payout":65,"date":"2017-10-17"},{"username":"trei","payout":23,"date":"2017-10-17"},{"username":"patru","payout":90,"date":"2017-10-17"},{"username":"cinci","payout":22,"date":"2017-10-17"},{"username":"sase","payout":54,"date":"2017-10-17"},{"username":"sapte","payout":5,"date":"2017-10-17"},{"username":"opt","payout":5,"date":"2017-10-17"},{"username":"noua","payout":78,"date":"2017-10-17"},{"username":"zece","payout":28,"date":"2017-10-17"},{"username":"unu","payout":76,"date":"2017-10-18"},{"username":"doi","payout":39,"date":"2017-10-18"},{"username":"trei","payout":29,"date":"2017-10-18"},{"username":"patru","payout":65,"date":"2017-10-18"},{"username":"cinci","payout":22,"date":"2017-10-18"},{"username":"sase","payout":35,"date":"2017-10-18"},{"username":"sapte","payout":21,"date":"2017-10-18"},{"username":"opt","payout":94,"date":"2017-10-18"},{"username":"noua","payout":68,"date":"2017-10-18"},{"username":"zece","payout":26,"date":"2017-10-18"},{"username":"unu","payout":41,"date":"2017-10-19"},{"username":"doi","payout":74,"date":"2017-10-19"},{"username":"trei","payout":47,"date":"2017-10-19"},{"username":"patru","payout":14,"date":"2017-10-19"},{"username":"cinci","payout":68,"date":"2017-10-19"},{"username":"sase","payout":57,"date":"2017-10-19"},{"username":"sapte","payout":69,"date":"2017-10-19"},{"username":"opt","payout":78,"date":"2017-10-19"},{"username":"noua","payout":64,"date":"2017-10-19"},{"username":"zece","payout":83,"date":"2017-10-19"},{"username":"unu","payout":32,"date":"2017-10-20"},{"username":"doi","payout":92,"date":"2017-10-20"},{"username":"trei","payout":79,"date":"2017-10-20"},{"username":"patru","payout":69,"date":"2017-10-20"},{"username":"cinci","payout":23,"date":"2017-10-20"},{"username":"sase","payout":99,"date":"2017-10-20"},{"username":"sapte","payout":11,"date":"2017-10-20"},{"username":"opt","payout":43,"date":"2017-10-20"},{"username":"noua","payout":32,"date":"2017-10-20"},{"username":"zece","payout":5,"date":"2017-10-20"},{"username":"unu","payout":87,"date":"2017-10-21"},{"username":"doi","payout":35,"date":"2017-10-21"},{"username":"trei","payout":79,"date":"2017-10-21"},{"username":"patru","payout":95,"date":"2017-10-21"},{"username":"cinci","payout":29,"date":"2017-10-21"},{"username":"sase","payout":18,"date":"2017-10-21"},{"username":"sapte","payout":16,"date":"2017-10-21"},{"username":"opt","payout":91,"date":"2017-10-21"},{"username":"noua","payout":15,"date":"2017-10-21"},{"username":"zece","payout":50,"date":"2017-10-21"},{"username":"unu","payout":59,"date":"2017-10-22"},{"username":"doi","payout":67,"date":"2017-10-22"},{"username":"trei","payout":74,"date":"2017-10-22"},{"username":"patru","payout":84,"date":"2017-10-22"},{"username":"cinci","payout":9,"date":"2017-10-22"},{"username":"sase","payout":85,"date":"2017-10-22"},{"username":"sapte","payout":66,"date":"2017-10-22"},{"username":"opt","payout":13,"date":"2017-10-22"},{"username":"noua","payout":44,"date":"2017-10-22"},{"username":"zece","payout":39,"date":"2017-10-22"},{"username":"unu","payout":84,"date":"2017-10-23"},{"username":"doi","payout":1,"date":"2017-10-23"},{"username":"trei","payout":74,"date":"2017-10-23"},{"username":"patru","payout":0,"date":"2017-10-23"},{"username":"cinci","payout":95,"date":"2017-10-23"},{"username":"sase","payout":33,"date":"2017-10-23"},{"username":"sapte","payout":19,"date":"2017-10-23"},{"username":"opt","payout":33,"date":"2017-10-23"},{"username":"noua","payout":82,"date":"2017-10-23"},{"username":"zece","payout":98,"date":"2017-10-23"},{"username":"unu","payout":42,"date":"2017-10-24"},{"username":"doi","payout":83,"date":"2017-10-24"},{"username":"trei","payout":61,"date":"2017-10-24"},{"username":"patru","payout":34,"date":"2017-10-24"},{"username":"cinci","payout":30,"date":"2017-10-24"},{"username":"sase","payout":21,"date":"2017-10-24"},{"username":"sapte","payout":61,"date":"2017-10-24"},{"username":"opt","payout":77,"date":"2017-10-24"},{"username":"noua","payout":45,"date":"2017-10-24"},{"username":"zece","payout":18,"date":"2017-10-24"},{"username":"unu","payout":56,"date":"2017-10-25"},{"username":"doi","payout":12,"date":"2017-10-25"},{"username":"trei","payout":20,"date":"2017-10-25"},{"username":"patru","payout":11,"date":"2017-10-25"},{"username":"cinci","payout":89,"date":"2017-10-25"},{"username":"sase","payout":97,"date":"2017-10-25"},{"username":"sapte","payout":7,"date":"2017-10-25"},{"username":"opt","payout":91,"date":"2017-10-25"},{"username":"noua","payout":24,"date":"2017-10-25"},{"username":"zece","payout":89,"date":"2017-10-25"},{"username":"unu","payout":97,"date":"2017-10-26"},{"username":"doi","payout":78,"date":"2017-10-26"},{"username":"trei","payout":48,"date":"2017-10-26"},{"username":"patru","payout":90,"date":"2017-10-26"},{"username":"cinci","payout":38,"date":"2017-10-26"},{"username":"sase","payout":23,"date":"2017-10-26"},{"username":"sapte","payout":92,"date":"2017-10-26"},{"username":"opt","payout":76,"date":"2017-10-26"},{"username":"noua","payout":15,"date":"2017-10-26"},{"username":"zece","payout":19,"date":"2017-10-26"},{"username":"unu","payout":38,"date":"2017-10-27"},{"username":"doi","payout":53,"date":"2017-10-27"},{"username":"trei","payout":84,"date":"2017-10-27"},{"username":"patru","payout":47,"date":"2017-10-27"},{"username":"cinci","payout":74,"date":"2017-10-27"},{"username":"sase","payout":23,"date":"2017-10-27"},{"username":"sapte","payout":51,"date":"2017-10-27"},{"username":"opt","payout":96,"date":"2017-10-27"},{"username":"noua","payout":40,"date":"2017-10-27"},{"username":"zece","payout":21,"date":"2017-10-27"},{"username":"unu","payout":14,"date":"2017-10-28"},{"username":"doi","payout":19,"date":"2017-10-28"},{"username":"trei","payout":76,"date":"2017-10-28"},{"username":"patru","payout":48,"date":"2017-10-28"},{"username":"cinci","payout":4,"date":"2017-10-28"},{"username":"sase","payout":75,"date":"2017-10-28"},{"username":"sapte","payout":72,"date":"2017-10-28"},{"username":"opt","payout":9,"date":"2017-10-28"},{"username":"noua","payout":58,"date":"2017-10-28"},{"username":"zece","payout":37,"date":"2017-10-28"},{"username":"unu","payout":4,"date":"2017-10-29"},{"username":"doi","payout":25,"date":"2017-10-29"},{"username":"trei","payout":30,"date":"2017-10-29"},{"username":"patru","payout":31,"date":"2017-10-29"},{"username":"cinci","payout":2,"date":"2017-10-29"},{"username":"sase","payout":42,"date":"2017-10-29"},{"username":"sapte","payout":92,"date":"2017-10-29"},{"username":"opt","payout":46,"date":"2017-10-29"},{"username":"noua","payout":36,"date":"2017-10-29"},{"username":"zece","payout":69,"date":"2017-10-29"},{"username":"unu","payout":84,"date":"2017-10-30"},{"username":"doi","payout":63,"date":"2017-10-30"},{"username":"trei","payout":86,"date":"2017-10-30"},{"username":"patru","payout":8,"date":"2017-10-30"},{"username":"cinci","payout":99,"date":"2017-10-30"},{"username":"sase","payout":18,"date":"2017-10-30"},{"username":"sapte","payout":49,"date":"2017-10-30"},{"username":"opt","payout":18,"date":"2017-10-30"},{"username":"noua","payout":93,"date":"2017-10-30"},{"username":"zece","payout":58,"date":"2017-10-30"},{"username":"unu","payout":88,"date":"2017-10-31"},{"username":"doi","payout":75,"date":"2017-10-31"},{"username":"trei","payout":75,"date":"2017-10-31"},{"username":"patru","payout":78,"date":"2017-10-31"},{"username":"cinci","payout":48,"date":"2017-10-31"},{"username":"sase","payout":96,"date":"2017-10-31"},{"username":"sapte","payout":18,"date":"2017-10-31"},{"username":"opt","payout":58,"date":"2017-10-31"},{"username":"noua","payout":4,"date":"2017-10-31"},{"username":"zece","payout":82,"date":"2017-10-31"}];


let users = [
	{
		username: 'unu',
		company: 'Company1',
		history: [{company:'Company1',startDate:'2017-10-05'}]
	},
		{
		username: 'doi',
		company: null,
		history: [{company:'Company1',startDate:'2017-10-05', endDate:'2017-10-20'}]
	},
		{
		username: 'trei',
		company: null,
		history: [{company:'Company1',startDate:'2017-10-10',endDate:'2017-10-30'}]
	},
		{
		username: 'patru',
		company: 'Company2',
		history: [{company:'Company1',startDate:'2017-10-15'}]
	},
		{
		username: 'cinci',
		company: null,
		history: [{company:'Company2',startDate:'2017-10-05',endDate:'2017-10-25'}]
	},
		{
		username: 'sase',
		company: 'Company1',
		history: [{company:'Company1',startDate:'2017-10-05'}]
	},
		{
		username: 'sapte',
		history: []
	},
		{
		username: 'opt',
		company: 'Company3',
		history: [{company:'Company2',startDate:'2017-10-05',endDate:'2017-10-10'},{company:'Company3',startDate:'2017-10-11'}]
	},	{
		username: 'noua',
		company: null,
		history: [{company:'Company2',startDate:'2017-10-05',endDate:'2017-10-10'},{company:'Company3',startDate:'2017-10-11',endDate:'2017-10-20'}]
	},
		{
		username: 'zece',
		company: null,
		history: [{company:'Company3',startDate:'2017-09-15',endDate:'2017-10-28'}]
	}
];

let companies = [
	{
		name: 'Company1',
		address: 'Address1'
	}
	// {
	// 	name: 'Company2',
	// 	address: 'Address2'
	// },
	// {
	// 	name: 'Company3',
	// 	address: 'Address3'
	// }
];

let firstDay = moment().startOf('month').format('YYYY-MM-DD');
let firstDayLastMonth = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');

console.log(firstDayLastMonth)

for (let c=0; c<companies.length; c++) {
	for (let i=0; i<users.length; i++) {
		if (users[i].history.length > 0) {
			// has company history
			for (let j=0; j<users[i].history.length; j++) {
				if (companies[c].name === users[i].history[j].company && users[i].history[j].startDate < firstDay && (!users[i].history[j].endDate || users[i].history[j].endDate >= firstDayLastMonth)) {
					console.log(users[i].username);
				}
			}
		} else {
			// has no company history

		}
	}
}


});