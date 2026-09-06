const create = (req, res) => {
  console.log("hello");
  console.log(req.body);
  res.status(201).json({
    message: "User created successfully",
    file: req.file?.filename ?? null,
  });
};

module.exports = create;
