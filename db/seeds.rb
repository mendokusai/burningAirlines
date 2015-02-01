
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

User.destroy_all

  # create_table "users", force: :cascade do |t|
  #   t.string   "email",                  default: "", null: false
  #   t.string   "encrypted_password",     default: "", null: false
  #   t.string   "reset_password_token"
  #   t.datetime "reset_password_sent_at"
  #   t.datetime "remember_created_at"
  #   t.integer  "sign_in_count",          default: 0,  null: false
  #   t.datetime "current_sign_in_at"
  #   t.datetime "last_sign_in_at"
  #   t.string   "current_sign_in_ip"
  #   t.string   "last_sign_in_ip"
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end

ryan = User.create(
	email: "admin@ryan.com",
	password: "password",
	admin: true
	)

regular_joe = User.create(
	email: "info@ryan.com",
	password: "password",
	admin: false
	)