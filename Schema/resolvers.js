const {UserList} = require('../FakeData')
const {moviesList} = require('../FakeData')

const resolvers = {
    Query : {
        users: () => {
            return UserList
        },
        user : (parent,arg) =>{
            console.log('id',Number(arg.id))
            return UserList.find((ele) =>{
                return ele.id === Number(arg.id)
            })
        },
        movies : () =>{
            return moviesList
        },
        movie : (name) =>{
            return moviesList.find((movie) =>{
                return movie.name === name
            })
        }
    },

    User : {
        moviesLiked : () =>{
            return moviesList.filter((movie) =>{
                return movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            })
        }
    },

    Mutation : {
        createUser : (parent,args) =>{
            const user = args.input
            const lastId = UserList[UserList.length - 1].id + 1
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, name } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
              if (user.id === Number(id)) {
                user.name = name;
                userUpdated = user;
              }
            });
      
            return userUpdated;
        },
        deleteUser : (parent,arg) =>{
            const id = arg.id
            UserList.splice(id,1,0)
            return null
        }
    }
}

module.exports = { resolvers }