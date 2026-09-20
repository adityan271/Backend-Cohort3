const create = (req, res) => {
  console.log(req.body);
  console.log(req.files);

  res.status(201).json({
    message: "User created successfully",
    user: req.body,
    file: req.file,
  });
};

module.exports = { create };
