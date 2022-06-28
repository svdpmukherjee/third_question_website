const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
//const [value, setValue] = useState('');

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getEntry(req, res);
    }
    case 'POST': {
      return addEntry(req, res);
    }
    case 'PUT': {
      return updateEntry(req, res);
    }
    case 'DELETE': {
      return addIP(req, res);
    }
  }
}

async function updateEntry(req, res) {
  // console.log(req.body);
  try {
    let { db } = await connectToDatabase();

    await db.collection('updated_answer').updateOne(
      {
        question_no: req.body,
      },
      {
        $inc: {
          // answer: (parseFloat(answer.toFixed(3)) + 0.001).toString(),
          answer: 1,
        },
      }
    );
    return res.json({
      message: 'Post updated successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function addEntry(req, res) {
  const data = JSON.parse(req.body);
  // console.log(data);
  try {
    let { db } = await connectToDatabase();
    // console.log(db);
    const answer = await db
      .collection('updated_answer')
      .findOne({ question_no: data.questionNo });
    // console.log(answer);

    if (
      ((data.questionNo == '1') & (answer.answer == 42)) |
      ((data.questionNo == '2') & (answer.answer == 143)) |
      ((data.questionNo == '3') & (answer.answer == 678)) |
      ((data.questionNo == '4') & (answer.answer == 62)) |
      ((data.questionNo == '5') & (answer.answer == 1666)) |
      ((data.questionNo == '6') & (answer.answer == 94))
    ) {
      data.answer = parseInt(answer.answer) + 2;
      await db.collection('updated_answer').updateOne(
        {
          question_no: data.questionNo,
        },
        {
          $set: {
            answer: data.answer,
          },
        }
      );
    } else if (
      ((data.questionNo == '1') & (answer.answer == 77)) |
      ((data.questionNo == '2') & (answer.answer == 181)) |
      ((data.questionNo == '6') & (answer.answer == 151))
    ) {
      if ((data.questionNo == '1') & (answer.answer == 77))
        data.answer = parseInt(answer.answer) - 40;
      else data.answer = parseInt(answer.answer) - 80;
      await db.collection('updated_answer').updateOne(
        {
          question_no: data.questionNo,
        },
        {
          $set: {
            answer: data.answer,
          },
        }
      );
    } else data.answer = parseInt(answer.answer);

    db.collection('honeypot_website').insertOne(data);

    //  db.collection('exam_interface').insertOne(JSON.parse(req.body));

    return res.json({
      message: data.answer,
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
async function addIP(req, res) {
  const data = JSON.parse(req.body);

  try {
    let { db } = await connectToDatabase();
    console.log(data);
    db.collection('ip_db').insertOne(data);
    // console.log('Entering addIP');
    return res.json({
      message: 'Entry added successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
// async function getEntry(req, res) {
//   try {
//     let { db } = await connectToDatabase();
//     const data = await db
//       .collection('updated_answer')
//       .find({ question_no: req.body });

//     return res.json({
//       message: data,
//       // message: 'Get operation successful',
//       success: true,
//     });
//   } catch (error) {
//     return res.json({
//       message: new Error(error).message,
//       success: false,
//     });
//   }
// }
