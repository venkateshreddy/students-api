import Marks from './model';
import Students from '../students/model';
import Subjects from '../subjects/model';

export const create = (req, res) => {
  Marks.create(req.body, (err, result) => {
    if (err) {
      res.send({ error: true, message: err.message });
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
  Marks.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  Marks.find({}, (err, marks) => {
    if (err) {
      res.send(err);
    } else {
      const allpromises = marks.map(record => {
        return new Promise((resolve, reject) => {
          Students.findById(record.student, (er, student) => {
            if (er) {
              reject(er);
            } else {
              Subjects.findById(record.subject, (errr, subject) => {
                if(errr) {
                  reject(errr);
                } else {
                  resolve(resolve({
                    marks: record.marks,
                    student,
                    subject
                  }))
                }
              })
            }
          })
        })
      });
      Promise.all(allpromises)
      .then(results => {
          res.send(results);
      })
      .catch(err => {
        res.send(err);
      })
    }
  })
  
// export const index = (req, res) =>
//   Marks.find({}).populate('student subject').exec((err, marks) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(marks);
//     }
//   })

export const update = (req, res) => {
  Marks.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  Marks.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 