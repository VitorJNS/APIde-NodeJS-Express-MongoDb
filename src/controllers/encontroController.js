import encontro from "../models/Encontro.js";

class EncontroController {
  static async listarEncontros(req, res) {
    try {
      const listarEncontros = await encontro.find({});
      res.status(200).json(listarEncontros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao listar encontros` });
    }
  }

  static async listarEncontrosPorId(req, res) {
    try {
      const id = req.params.id;
      const listarEncontroPorId = await encontro.findById(id);
      res.status(200).json(listarEncontroPorId);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao listar encontros por id`,
      });
    }
  }

  static async cadastrarEncontros(req, res) {
    try {
      const cadastrarEncontro = await encontro.create(req.body);
      res.status(201).json(cadastrarEncontro);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar encontros` });
    };
  };

  static async atualizarEncontros(req, res) {
    try {
      const id = req.params.id;
      const atualizarEncontros = await encontro.findByIdAndUpdate(id, req.body);
      res.status(200).json("Encontro atualizado", atualizarEncontros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar encontro` });
    };
  };

  static async deletarEncontros(req, res) {
    try {
      const id = req.params.id;
      await encontro.findByIdAndDelete(id);
      res.status(200).send({ message: "Encontro deletado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar encontro` });
    };
  };

  static async listarEncontrosPorAno(req, res) {
    const ano = req.query.ano;
    try {
      const listarEncontrosPorAno = await encontro.find({ ano: ano });
      res.status(200).json(listarEncontrosPorAno);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao listar encontros por ano` });
    }
  }
};

export default EncontroController;
