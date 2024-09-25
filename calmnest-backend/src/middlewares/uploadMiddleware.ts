// middleware/uploadMiddleware.ts

import multer from 'multer';
import path from 'path';

// Configuration de stockage pour multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Dossier où les fichiers seront stockés
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Filtrage des fichiers pour accepter uniquement les images
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

// Initialisation de multer avec les configurations
const upload = multer({
  storage: storage,
  // Limite de taille de fichier 
  limits: { fileSize: 1024 * 1024 * 5 }, 
  fileFilter: fileFilter
});

export default upload;