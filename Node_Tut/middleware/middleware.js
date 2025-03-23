module.exports =  reqFilter = (req, resp, next) => {
    if (!req.query.age) {
      resp.send("Please submit your age");
    }
    else if (req.query.age<18) {
      resp.send("Your age is below 18");
    } else {
      next();
    }
  };