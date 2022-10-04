import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';
import Foto from '../models/FotoModel';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
