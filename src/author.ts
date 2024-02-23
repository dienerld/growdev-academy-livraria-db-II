import { Router } from 'express';
import { prisma } from './database/prisma';

export const authorRoutes = Router();

authorRoutes.get('/', async (req, res) => {
  // buscar do banco
  const authors = await prisma.author.findMany();

  return res.json({
    message: 'Autores retornados com sucesso',
    data: authors,
  });
});

authorRoutes.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const authorExists = await prisma.author.findUnique({
      where: { name },
    });

    if (authorExists) {
      return res.status(409).json({
        field: 'name',
        message: 'Autor já cadastrado',
      });
    }

    // cadastrar autor no banco de dados

    const newAuthor = await prisma.author.create({
      data: {
        name,
      },
    });

    return res.status(201).json({
      message: 'Novo autor cadastrado com sucesso',
      data: newAuthor,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao cadastrar autor',
      error: err,
    });
  }
});

authorRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const author = await prisma.author.findUnique({
      where: { id },
    });

    if (!author) {
      return res.status(404).json({
        field: 'id',
        message: 'Autor não encontrado',
      });
    }

    return res.json({
      message: 'Autor retornado com sucesso',
      data: author,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao buscar autor',
      error: err,
    });
  }
});

authorRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const authorExists = await prisma.author.findUnique({
      where: { id },
    });

    if (!authorExists) {
      return res.status(404).json({
        field: 'id',
        message: 'Autor não encontrado',
      });
    }

    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: { name },
    });

    return res.json({
      message: 'Autor atualizado com sucesso',
      data: updatedAuthor,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao atualizar autor',
      error: err,
    });
  }
});

authorRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const authorExists = await prisma.author.findUnique({
      where: { id },
    });

    if (!authorExists) {
      return res.status(404).json({
        field: 'id',
        message: 'Autor não encontrado',
      });
    }

    await prisma.author.delete({
      where: { id },
    });

    return res.json({
      message: 'Autor deletado com sucesso',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao deletar autor',
      error: err,
    });
  }
});
