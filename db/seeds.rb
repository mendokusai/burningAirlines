
Airplane.destroy_all

plane1 = Airplane.create({
		name: "727A",
		rows: 4,
		columns: 6
	})

plane2 = Airplane.create({
		name: "727B",
		rows: 4,
		columns: 6
	})

plane3 = Airplane.create({
		name: "DC20",
		rows: 2,
		columns: 6
	})

plane4 = Airplane.create({
		name: "DC10",
		rows: 4,
		columns: 10
	})

Flight.destroy_all

Flight.create(flight_number: "JQ123", origin:"SYD", destination:"LA", date: 2014, plane_id:plane1.id)
Flight.create(flight_number: "FQ123", origin:"LA", destination:"BUL", date: 2014, plane_id:plane2.id)
Flight.create(flight_number: "KQ123", origin:"HK", destination:"SIN", date: 2014, plane_id:plane3.id)
Flight.create(flight_number: "TQ123", origin:"LON", destination:"CHINA", date: 2014, plane_id:plane4.id)
