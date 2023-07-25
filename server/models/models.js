const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_login: {type: DataTypes.STRING(20), unique: true, allowNull: false},
    user_password: {type: DataTypes.STRING(20), allowNull: false},
    role_id: {type: DataTypes.SMALLINT, defaultValue: 1, allowNull: false},
    user_name: {type: DataTypes.STRING(40), unique: true, allowNull: false},
    user_education: {type: DataTypes.STRING(100), allowNull: false},
    user_email: {type: DataTypes.STRING(100), allowNull: false},
    user_adr: {type: DataTypes.STRING(100), allowNull: false},
    user_rating: {type: DataTypes.SMALLINT, allowNull: false},
})

const Roles = sequelize.define('roles', {
  role_id: {type: DataTypes.SMALLINT, primaryKey: true},
  role_name: {type: DataTypes.STRING(10), unique: true, allowNull: false},
})

const Teams = sequelize.define('teams', {
  team_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  user_id: {type: DataTypes.INTEGER, allowNull: false},
  pr_id: {type: DataTypes.INTEGER, allowNull: false},
  prof_id: {type: DataTypes.SMALLINT, allowNull: false},
  mentor_id: {type: DataTypes.INTEGER, allowNull: false},
})

const Tests = sequelize.define('tests', {
  test_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  test_name: {type: DataTypes.STRING(50), unique: true, allowNull: false},
  tech_id: {type: DataTypes.SMALLINT},
  psychotype: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
})

const Technologies = sequelize.define('technologies', {
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  tech_name: {type: DataTypes.STRING(20), unique: true, allowNull: false},
})

const TestsUsers = sequelize.define('tests_users', {
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true},
  mark_value: {type: DataTypes.SMALLINT, allowNull: false},
})

const ProjectsTechnologies  = sequelize.define('projects_technologies', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true},
})

const ProjectsProfessions = sequelize.define('projects_professions', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true},
})

const Professions = sequelize.define('professions', {
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  prof_name: {type: DataTypes.STRING(30), unique: true, allowNull: false},
})

const TasComents = sequelize.define('tas_coments', {
  tascom_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  tascom_crdate: {type: DataTypes.DATE, allowNull: false},
  tas_id: {type: DataTypes.INTEGER, allowNull: false},
  tascom_descr: {type: DataTypes.TEXT, allowNull: false},
})

const Tasks = sequelize.define('tasks', {
  tas_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  pr_id: {type: DataTypes.INTEGER, allowNull: false},
  tas_descr: {type: DataTypes.TEXT, allowNull: false},
  tas_prior: {type: DataTypes.STRING(10), allowNull: false},
  tas_crdate: {type: DataTypes.DATE, allowNull: false},
  tas_deadline: {type: DataTypes.DATEONLY, allowNull: false},
  tas_enddate: {type: DataTypes.DATE},
  tas_status: {type: DataTypes.STRING(10), allowNull: false},
  tas_name: {type: DataTypes.STRING(50), allowNull: false},
})

const TasChanges = sequelize.define('tas_changes', {
  tasch_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  tasch_changedate: {type: DataTypes.DATE, allowNull: false},
  tas_id: {type: DataTypes.INTEGER, allowNull: false},
  tasch_descr: {type: DataTypes.TEXT, allowNull: false},
  tasch_status: {type: DataTypes.SMALLINT, allowNull: false},
})

const Statuses = sequelize.define('statuses', {
  stat_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  stat_name: {type: DataTypes.STRING(20), allowNull: false},
})

const TasEstimates = sequelize.define('tas_estimates', {
  tas_id: {type: DataTypes.INTEGER, primaryKey: true},
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  tasesti_mark: {type: DataTypes.STRING(100), allowNull: false},
  tasesti_deadline: {type: DataTypes.DATEONLY, allowNull: false},
})

const Projects = sequelize.define('projects', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  pr_name: {type: DataTypes.STRING(20), allowNull: false},
  pr_descr: {type: DataTypes.TEXT, allowNull: false},
  manager_id: {type: DataTypes.INTEGER, allowNull: false},
  memb_num: {type: DataTypes.SMALLINT, allowNull: false},
  git_link: {type: DataTypes.STRING(100), allowNull: false},
  pr_deadline: {type: DataTypes.DATEONLY, allowNull: false},
})

const ProjectRequests = sequelize.define('project_requests', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  req_accept: {type: DataTypes.BOOLEAN},
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true},
  pr_req_date: {type: DataTypes.DATE, allowNull: false},
  pr_req_mentoring: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
})



Technologies.hasMany(Tests)
Tests.belongsTo(Technologies, {foreignKey: 'tech_id'})

Technologies.hasMany(ProjectsTechnologies)
ProjectsTechnologies.belongsTo(Technologies, {foreignKey: 'tech_id'})

Projects.hasMany(ProjectsTechnologies)
ProjectsTechnologies.belongsTo(Projects, {foreignKey: 'pr_id'})

Users.hasMany(TestsUsers)
TestsUsers.belongsTo(Users, {foreignKey: 'user_id'})

Tests.hasMany(TestsUsers)
TestsUsers.belongsTo(Tests, {foreignKey: 'test_id'})

Users.hasMany(Projects)
Projects.belongsTo(Users, {foreignKey: 'manager_id'})

Projects.hasMany(Tasks)
Tasks.belongsTo(Projects, {foreignKey: 'pr_id'})

Users.hasMany(TasEstimates)
TasEstimates.belongsTo(Users, {foreignKey: 'user_id'})

Tasks.hasMany(TasEstimates)
TasEstimates.belongsTo(Tasks, {foreignKey: 'tas_id'})

Tasks.hasMany(TasComents)
TasComents.belongsTo(Tasks, {foreignKey: 'tas_id'})

Tasks.hasMany(TasChanges)
TasChanges.belongsTo(Tasks, {foreignKey: 'tas_id'})

Statuses.hasMany(TasChanges)
TasChanges.belongsTo(Statuses, {foreignKey: 'status_id'})

Roles.hasMany(Users)
Users.belongsTo(Roles, {foreignKey: 'role_id'})

Users.hasMany(ProjectRequests)
ProjectRequests.belongsTo(Users, {foreignKey: 'user_id'})

Projects.hasMany(ProjectRequests)
ProjectRequests.belongsTo(Projects, {foreignKey: 'pr_id'})

Users.hasMany(Teams)
Teams.belongsTo(Users, {foreignKey: 'user_id'})

Users.hasMany(Teams)
Teams.belongsTo(Users, {foreignKey: 'mentor_id'})

Projects.hasMany(Teams)
Teams.belongsTo(Projects, {foreignKey: 'pr_id'})

Projects.hasMany(ProjectsProfessions)
ProjectsProfessions.belongsTo(Projects, {foreignKey: 'pr_id'})

Professions.hasMany(ProjectsProfessions)
ProjectsProfessions.belongsTo(Professions, {foreignKey: 'prof_id'})

module.exports = {
    Users,
    Roles,
    Teams,
    Tests,
    Technologies,
    TestsUsers,
    ProjectsTechnologies,
    ProjectsProfessions,
    Professions,
    TasComents,
    Tasks,
    TasChanges,
    Statuses,
    TasEstimates,
    Projects,
    ProjectRequests,
}