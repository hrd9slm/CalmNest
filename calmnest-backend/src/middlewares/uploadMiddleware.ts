import multer from 'multer';


const storage = multer.memoryStorage();


const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, 
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  },
});
const uploadVideos = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 50 }, // Limit file size to 50MB for videos
  fileFilter: (req, file, cb) => {
    const allowedTypes = /mp4|avi|mkv|mov/;
    const extname = allowedTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only videos are allowed'));
    }
  },
});


export  {upload,uploadVideos};