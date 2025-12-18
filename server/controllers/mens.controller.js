const Products = require('../models/product.models');


exports.createMens = async (req, res) => {
  try {
    const mens = await Products.create(req.body);
    res.status(201).json(mens);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMens = async (req, res) => {
  try {
    const mens = await Products.find();
    res.status(200).json(mens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getMensById = async (req, res) => {
  try {
    const mens = await Products.findById(req.params.id);
    if (!mens)
      return res.status(404).json({ message: 'mens product not found' });

    res.status(200).json(mens);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// // UPDATE student
// exports.updateStudent = async (req, res) => {
//   try {
//     const student = await Student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!student)
//       return res.status(404).json({ message: 'Student not found' });

//     res.status(200).json(student);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // DELETE student
// exports.deleteStudent = async (req, res) => {
//   try {
//     const student = await Student.findByIdAndDelete(req.params.id);

//     if (!student)
//       return res.status(404).json({ message: 'Student not found' });

//     res.status(200).json({ message: 'Student deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid ID' });
//   }
// };
