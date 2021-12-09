const UserList = [
    {
        id: 1,
        name : "kishan",
        email : "kishan@gamil.com",
        age : 20,
        isMarried : false,
        nationality : "INDIA",
        friends : [
            {
                id: 2,
                name : "shiva",
                email : "shiva@gamil.com",
                age : 1500,
                isMarried : true,
                nationality : "UNIVERSE"
        
            },
            {
                id: 3,
                name : "kruthik",
                email : "kruthik@gamil.com",
                age : 20,
                isMarried : false,
                nationality : "SRILANAKA"
        
            }
        ]
    },
    {
        id: 2,
        name : "shiva",
        email : "shiva@gamil.com",
        age : 1500,
        isMarried : true,
        nationality : "UNIVERSE",
        friends : [
            {
                id: 3,
                name : "kruthik",
                email : "kruthik@gamil.com",
                age : 20,
                isMarried : false,
                nationality : "SRILANAKA"
        
            },
            {
                id: 4,
                name : "hrx",
                email : "hrx@gamil.com",
                age : 45,
                isMarried : false,
                nationality : "CANADA"
        
            }
        ]

    },
    {
        id: 3,
        name : "kruthik",
        email : "kruthik@gamil.com",
        age : 20,
        isMarried : false,
        nationality : "SRILANAKA",
        friends : [
            {
                id: 4,
                name : "hrx",
                email : "hrx@gamil.com",
                age : 45,
                isMarried : false,
                nationality : "CANADA"
        
            },
            {
                id: 5,
                name : "Tony",
                email : "Tony@gamil.com",
                age : 52,
                isMarried : false,
                nationality : "USA"
            }
        ]

    },
    {
        id: 4,
        name : "hrx",
        email : "hrx@gamil.com",
        age : 45,
        isMarried : false,
        nationality : "CANADA",
        friends : [
            {
                id: 3,
                name : "kruthik",
                email : "kruthik@gamil.com",
                age : 20,
                isMarried : false,
                nationality : "SRILANAKA"
        
            },
            {
                id: 4,
                name : "hrx",
                email : "hrx@gamil.com",
                age : 45,
                isMarried : false,
                nationality : "CANADA"
        
            }
        ]

    },
    {
        id: 5,
        name : "Tony",
        email : "Tony@gamil.com",
        age : 52,
        isMarried : false,
        nationality : "USA",
        friends : [
            {
                id: 3,
                name : "kruthik",
                email : "kruthik@gamil.com",
                age : 20,
                isMarried : false,
                nationality : "SRILANAKA"
        
            },
            {
                id: 4,
                name : "hrx",
                email : "hrx@gamil.com",
                age : 45,
                isMarried : false,
                nationality : "CANADA"
        
            }
        ]
    },
]

const moviesList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019
      },
      {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007
      },
      {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009
      },
      {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035
      },
]
module.exports = {UserList, moviesList}