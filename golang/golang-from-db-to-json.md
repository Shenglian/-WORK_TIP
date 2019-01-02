> From DB To Json Format
```go
	/**
		{
			"created_on": "27 may 2017",
			"todos": [
				"go get github.com/go-sql-driver/mysql",
				"postman(optional)",
				"browser(optional)",	
			],
			"aim": "Converting a table into JSON form",
			"created_by": "Rishikesh Agrawani"
		}
	*/


	/* 
		mysql> select * from users;
		+----+-----------+----------+----------+-------------------------------+--------------+-------------------------------------------------------------------------------------------------+
		| id | fname     | lname    | uname    | email                         | contact      | profile_pic                                                                                     |
		+----+-----------+----------+----------+-------------------------------+--------------+-------------------------------------------------------------------------------------------------+
		|  1 | Rishikesh | Agrawani | hygull   | rishikesh0014051992@gmail.com | 917353787704 | https://cdn4.iconfinder.com/data/icons/rcons-user/32/user_group_users_accounts_contacts-512.png |
		|  2 | Sandeep   | E        | sandeep  | sandeepeswar8@gmail.com       | 919739040038 | https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png                            |
		|  3 | Darshan   | Sidar    | darshan  | sidardarshan@gmail.com        | 917996917565 | https://cdn4.iconfinder.com/data/icons/rcons-user/32/child_boy-512.png                          |
		|  4 | Surendra  | Prajapat | surendra | surendrakgadwal@gmail.com     | 918385894407 | https://cdn4.iconfinder.com/data/icons/rcons-user/32/account_male-512.png                       |
		|  5 | Mukesh    | Jakhar   | mukesh   | mjakhar.kjakhar@gmail.com     | 919772254140 | https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png                        |
		+----+-----------+----------+----------+-------------------------------+--------------+-------------------------------------------------------------------------------------------------+
		5 rows in set (0.00 sec)
		mysql> 
	*/

	package main

	import "log"
	import "net/http"
	import "encoding/json"

	import (
		_"github.com/go-sql-driver/mysql"	
		"database/sql"
	)

	func users(w http.ResponseWriter, r *http.Request) {
		// db, err := sql.Open("mysql", "<username>:<password>@tcp(127.0.0.1:<port>)/<dbname>?charset=utf8"	)
		db, err := sql.Open("mysql", "hygull:admin@67@tcp(127.0.0.1:3306)/practice_db?charset=utf8")

		w.Header().Set("Content-Type", "application/json")

		if err != nil {
			log.Fatal(err)
		}

		rows, err := db.Query("select id, fname, lname, uname, email, contact, profile_pic from users")

		if err != nil {
			log.Fatal(err)
		}

		type User struct {
			Id int 		 `json:"id"`
			Fname string `json:"firstname"`
			Lname string `json:"lastname"`
			Uname string `json:"username"`
			Email string `json:"email"`
			Contact int `json:"contact"`
			ProfilePic string `json:"profile_pic"`
		}
			
		var users []User

		for rows.Next() {
			var id, contact int
			var fname string
			var lname string
			var uname, email, profile_pic string

			rows.Scan(&id ,&fname, &lname, &uname, &email, &contact, &profile_pic)
			users = append(users, User{id, fname, lname, uname, email, contact, &profile_pic })
		}
		
		usersBytes, _ := json.Marshal(&users)
		
		w.Write(usersBytes)
		db.Close()
	}

	func main() {
		http.HandleFunc("/users/", users)
		http.ListenAndServe(":8080", nil)
	}

	/* REQUSET
	   http://127.0.0.1:8080/users/
	*/

	/* RESPONSE
	[
	  {
	    "id": 1,
	    "firstname": "Rishikesh",
	    "lastname": "Agrawani",
	    "username": "hygull",
	    "email": "rishikesh0014051992@gmail.com",
	    "contact": 917353787704,
	    "profile_pic": "https://cdn4.iconfinder.com/data/icons/rcons-user/32/user_group_users_accounts_contacts-512.png"
	  },
	  {
	    "id": 2,
	    "firstname": "Sandeep",
	    "lastname": "E",
	    "username": "sandeep",
	    "email": "sandeepeswar8@gmail.com",
	    "contact": 919739040038,
	    "profile_pic": "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png"
	  },
	  {
	    "id": 3,
	    "firstname": "Darshan",
	    "lastname": "Sidar",
	    "username": "darshan",
	    "email": "sidardarshan@gmail.com",
	    "contact": 917996917565,
	    "profile_pic": "https://cdn4.iconfinder.com/data/icons/rcons-user/32/child_boy-512.png"
	  },
	  {
	    "id": 4,
	    "firstname": "Surendra",
	    "lastname": "Prajapat",
	    "username": "surendra",
	    "email": "surendrakgadwal@gmail.com",
	    "contact": 918385894407,
	    "profile_pic": "https://cdn4.iconfinder.com/data/icons/rcons-user/32/account_male-512.png"
	  },
	  {
	    "id": 5,
	    "firstname": "Mukesh",
	    "lastname": "Jakhar",
	    "username": "mukesh",
	    "email": "mjakhar.kjakhar@gmail.com",
	    "contact": 919772254140,
	    "profile_pic": "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"
	  }
	]
	*/ 
```