import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // * index -> lista todos os usuários -> GET
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(null);
    }
  }

  // * show -> mostra um usuário -> GET
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      return res.json(users);
    } catch (error) {
      return res.status(null);
    }
  }

  //* update -> atualiza um usuário -> PATCH ou PUT
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usúario não encontrado'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  //* delete -> apaga um usuário -> DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usúario não encontrado'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
