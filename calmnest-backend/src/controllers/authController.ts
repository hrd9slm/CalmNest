// authController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt';
import { hashPassword, comparePasswords } from '../utils/password';

const prisma = new PrismaClient();

// Fonction pour enregistrer un nouvel utilisateur
async function register(req: Request, res: Response) {
  const { firstName, lastName, email, password, gender, birthDate } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
    }

    // Hacher le mot de passe
    const hashedPassword = await hashPassword(password);

    // Créer un nouvel utilisateur avec un profil par défaut
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        gender,
        birthDate: new Date(birthDate), // Assurez-vous que birthDate est un objet Date
        role: 'user',
        profile: {
          create: {
            qualifications: [],
            experience: [],
            profilePicture: null,
            bio: '',
          },
        },
      },
    });

    const token = generateToken({ id: newUser.id, email: newUser.email });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
  }
}

// Fonction pour connecter un utilisateur
async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Comparer le mot de passe
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    // Générer un token JWT
    const token = generateToken({ id: user.id, email: user.email });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
}

// Fonction pour obtenir tous les utilisateurs (CRUD)
async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
  }
}

// Fonction pour obtenir un utilisateur par ID
async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { profile: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur.' });
  }
}

// Fonction pour mettre à jour un utilisateur
async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { firstName, lastName, email, role } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        firstName,
        lastName,
        email,
        role,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur.' });
  }
}

// Fonction pour supprimer un utilisateur
async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return res.status(204).send(); // No Content
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur.' });
  }
}

export { register, login, getAllUsers, getUserById, updateUser, deleteUser };