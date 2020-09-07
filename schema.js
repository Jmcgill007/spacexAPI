const { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLSchema } = require('graphql');
const Axios = require('axios')
//Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: ()=> ({
        rocket_id: { type: GraphQLInt },
        rocket_name: { type: GraphQLString },
        launch_year: { type: GraphQLString }
    })

})
//LaunchType
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: ()=> ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
})
// Queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type:  new GraphQLList(LaunchType),
             async resolve (parent, args) {
                const response = await Axios.get('https://api.spacexdata.com/v3/launches')
                return response.data
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            async resolve (parent, args) {
                const response = await Axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                console.log(response.data)
                return response.data
            }
        },
        rockets: {
            type:  new GraphQLList(RocketType),
             async resolve (parent, args) {
                const response = await Axios.get('https://api.spacexdata.com/v3/rockets')
                return response.data
            }
        },
        rocket: {
            type: LaunchType,
            args: {
                id: { type: GraphQLInt }
            },
            async resolve (parent, args) {
                const response = await Axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                return response.data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});