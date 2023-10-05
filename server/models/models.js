const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_login: {type: DataTypes.STRING(20), unique: true, allowNull: false},
    user_password: {type: DataTypes.STRING(100), allowNull: false},
    role_id: {type: DataTypes.SMALLINT, defaultValue: 1, allowNull: false},
    user_name: {type: DataTypes.STRING(40), unique: true, allowNull: false},
    user_education: {type: DataTypes.STRING(100), allowNull: false},
    user_email: {type: DataTypes.STRING(100), allowNull: false},
    user_adr: {type: DataTypes.STRING(100), allowNull: false},
    user_rating: {type: DataTypes.SMALLINT, defaultValue: 1, allowNull: false},
})

const Role = sequelize.define('roles', {
  role_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  role_name: {type: DataTypes.STRING(30), unique: true, allowNull: false},
})

const Team = sequelize.define('teams', {
  team_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  user_id: {type: DataTypes.INTEGER, allowNull: false},
  pr_id: {type: DataTypes.INTEGER, allowNull: false},
  prof_id: {type: DataTypes.SMALLINT, allowNull: false},
  mentor_id: {type: DataTypes.INTEGER, allowNull: false},
})

const Test = sequelize.define('tests', {
  test_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  test_name: {type: DataTypes.STRING(50), unique: true, allowNull: false},
  tech_id: {type: DataTypes.SMALLINT},
  psychotype: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
})

const Technology = sequelize.define('technologies', {
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  tech_name: {type: DataTypes.STRING(20), unique: true, allowNull: false},
})

const TestUser = sequelize.define('tests_users', {
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true},
  mark_value: {type: DataTypes.SMALLINT, allowNull: false},
})

const ProjectTechnology  = sequelize.define('projects_technologies', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  tech_id: {type: DataTypes.SMALLINT, primaryKey: true},
})

const ProjectProfession = sequelize.define('projects_professions', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true},
})

const Profession = sequelize.define('professions', {
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  prof_name: {type: DataTypes.STRING(30), unique: true, allowNull: false},
})

const TasComent = sequelize.define('tas_coments', {
  tascom_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  tascom_crdate: {type: DataTypes.DATE, allowNull: false},
  tas_id: {type: DataTypes.INTEGER, allowNull: false},
  tascom_descr: {type: DataTypes.TEXT, allowNull: false},
})

const Task = sequelize.define('tasks', {
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

const TasChange = sequelize.define('tas_changes', {
  tasch_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  tasch_changedate: {type: DataTypes.DATE, allowNull: false},
  tas_id: {type: DataTypes.INTEGER, allowNull: false},
  tasch_descr: {type: DataTypes.TEXT, allowNull: false},
  tasch_status: {type: DataTypes.SMALLINT, allowNull: false},
})

const Status = sequelize.define('statuses', {
  stat_id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
  stat_name: {type: DataTypes.STRING(20), allowNull: false},
})

const TasEstimate = sequelize.define('tas_estimates', {
  tas_id: {type: DataTypes.INTEGER, primaryKey: true},
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  tasesti_mark: {type: DataTypes.STRING(100), allowNull: false},
  tasesti_deadline: {type: DataTypes.DATEONLY, allowNull: false},
})

const Project = sequelize.define('projects', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  pr_name: {type: DataTypes.STRING(20), allowNull: false},
  pr_descr: {type: DataTypes.TEXT, allowNull: false},
  manager_id: {type: DataTypes.INTEGER, allowNull: false},
  memb_num: {type: DataTypes.SMALLINT, allowNull: false},
  git_link: {type: DataTypes.STRING(100), allowNull: false},
  pr_deadline: {type: DataTypes.DATEONLY, allowNull: false},
})

const ProjectRequest = sequelize.define('project_requests', {
  pr_id: {type: DataTypes.INTEGER, primaryKey: true},
  req_accept: {type: DataTypes.BOOLEAN},
  user_id: {type: DataTypes.INTEGER, primaryKey: true},
  prof_id: {type: DataTypes.SMALLINT, primaryKey: true},
  pr_req_date: {type: DataTypes.DATE, allowNull: false},
  pr_req_mentoring: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
})



Technology.hasMany(Test)
Test.belongsTo(Technology, {foreignKey: 'tech_id'})

Technology.hasMany(ProjectTechnology)
ProjectTechnology.belongsTo(Technology, {foreignKey: 'tech_id'})

Project.hasMany(ProjectTechnology)
ProjectTechnology.belongsTo(Project, {foreignKey: 'pr_id'})

User.hasMany(TestUser)
TestUser.belongsTo(User, {foreignKey: 'user_id'})

Test.hasMany(TestUser)
TestUser.belongsTo(Test, {foreignKey: 'test_id'})

User.hasMany(Project)
Project.belongsTo(User, {foreignKey: 'manager_id'})

Project.hasMany(Task)
Task.belongsTo(Project, {foreignKey: 'pr_id'})

User.hasMany(TasEstimate)
TasEstimate.belongsTo(User, {foreignKey: 'user_id'})

Task.hasMany(TasEstimate)
TasEstimate.belongsTo(Task, {foreignKey: 'tas_id'})

Task.hasMany(TasComent)
TasComent.belongsTo(Task, {foreignKey: 'tas_id'})

Task.hasMany(TasChange)
TasChange.belongsTo(Task, {foreignKey: 'tas_id'})

Status.hasMany(TasChange)
TasChange.belongsTo(Status, {foreignKey: 'status_id'})

Role.hasMany(User)
User.belongsTo(Role, {foreignKey: 'role_id'})

User.hasMany(ProjectRequest)
ProjectRequest.belongsTo(User, {foreignKey: 'user_id'})

Project.hasMany(ProjectRequest)
ProjectRequest.belongsTo(Project, {foreignKey: 'pr_id'})

User.hasMany(Team)
Team.belongsTo(User, {foreignKey: 'user_id'})

User.hasMany(Team)
Team.belongsTo(User, {foreignKey: 'mentor_id'})

Project.hasMany(Team)
Team.belongsTo(Project, {foreignKey: 'pr_id'})

Project.hasMany(ProjectProfession)
ProjectProfession.belongsTo(Project, {foreignKey: 'pr_id'})

Profession.hasMany(ProjectProfession)
ProjectProfession.belongsTo(Profession, {foreignKey: 'prof_id'})

module.exports = {
    User,
    Role,
    Team,
    Test,
    Technology,
    TestUser,
    ProjectTechnology,
    ProjectProfession,
    Profession,
    TasComent,
    Task,
    TasChange,
    Status,
    TasEstimate,
    Project,
    ProjectRequest,
}