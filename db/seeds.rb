# create_table "airplanes", force: :cascade do |t|
#     t.string   "name"
#     t.integer  "rows"
#     t.integer  "columns"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at"

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