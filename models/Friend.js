import _ from 'lodash'
import Sequelize from 'sequelize'
import casual from 'casual'

const seq = new Sequelize('database', null, null, {
    dialect: "sqlite",
    storage: "./friends.sqlite"
})

const Friends = seq.define('friends', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
})

Friends.sync({ force: true }).then(() => {
    _.times(10, (i) => {
        Friends.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
            gender: "MALE",
            email: casual.word

        })
    })
})

export { Friends }