const multer = require('multer');
const crypto = require('crypto');
const { resolve, extname } = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      crypto.randomBytes(16, (error, buf) => {
        if (error) callback(error, file.originalname);

        const ext = extname(file.originalname);

        callback(null, `${buf.toString('hex')}${ext}`);
      });
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter(request, file, callback) {
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type'));
    }
  },
};
