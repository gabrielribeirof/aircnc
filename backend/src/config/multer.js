const multer = require('multer');
const crypto = require('crypto');
const { resolve, extname } = require('path');

module.exports = {
  dest: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) cb(err);

        const ext = extname(file.originalname);

        cb(null, `${buf.toString('hex')}${ext}`);
      });
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'images/jpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
} 