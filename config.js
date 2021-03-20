module.exports = {
  port: (process.env.PORT || 5000),
  s3: {
    key: '',
    secret: '',
    bucket: ''
  },
  s3_enabled: false,
  upload_dir: './uploads'
};
