const con = require("./mysqlconnection");
const express = require("express");
const router = express.Router();
router.get("/get", (req, res) => {
  res.json({ name: "logesh" });
});
router.get("/get/credentials/:email/:password", async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const data = await con
    .promise()
    .query("select * from credentials where email=?", [email]);
  if (data[0].length == 0) {
    res.json({
      statusCode: 404,
      message: "This email isnt registered yet",
    });
  } else if (data[0][0].email === email && data[0][0].password != password) {
    res.json({
      statusCode: 404,
      message: "Invalid password",
    });
  } else if (data[0][0].email === email && data[0][0].password === password) {
    res.json({
      statusCode: 200,
      data: data[0][0],
      message: "login successfully",
    });
  }
});
router.post("/post/credentials", async (req, res) => {
  try {
    const f = req.body;
    const data = await con
      .promise()
      .query("insert into credentials values(?,?,?,?,?,?,?,?)", [
        f.email,
        f.password,
        f.firstname,
        f.lastname,
        f.phn,
        f.district,
        f.state,
        f.country,
      ]);
    console.log("data posted to db");
    res.json({
      statusCode: 200,
      data: {},
      message: "Signup successfull",
    });
  } catch (error) {
    if (error.sqlState == "23000") {
      res.json({
        statusCode: 404,
        data: {},
        message: "Email aldready registered . So cannot sign up",
      });
    }
  }
});

router.put("/update/userDetails", async (req, res) => {
  const datas = req.body;
  try {
    con.query(
      "update credentials  SET firstname = ?, lastname = ?, phn = ?, district = ?, state = ?, country = ? WHERE email = ? ",
      [
        datas.firstname,
        datas.lastname,
        datas.phn,
        datas.district,
        datas.state,
        datas.country,
        datas.email,
      ]
    );
    console.log("updated");
    res.json({
      statusCode: 200,
      data: {},
      message: "updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/jobs/getall", async (req, res) => {
  try {
    con.query("select *from jobs", (err, results) => {
      console.log("succesfull get of data for jobs");
      res.json({
        statusCode: 200,
        data: results,
        message: "success",
      });
    });
  } catch (err) {
    console.log("ERROR IN GETING DATA");
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});
router.get("/jobs/getall/asc/:column", async (req, res) => {
  try {
    const { column } = req.params;
    con.query(`select *from jobs order by experience `, (err, results) => {
      console.log("succesfull sorted in asc for jobs");
      res.json({
        statusCode: 200,
        data: results,
        message: "success sorted in asc",
      });
    });
  } catch (err) {
    console.log("ERROR In sorting asc DATA");
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});
router.get("/jobs/getall/dsc/:column", async (req, res) => {
  try {
    const { column } = req.params;
    con.query(`select *from jobs order by experience desc`, (err, results) => {
      console.log("succesfull sorted in asc for jobs");
      res.json({
        statusCode: 200,
        data: results,
        message: "success sorted in asc",
      });
    });
  } catch (err) {
    console.log("ERROR In sorting asc DATA");
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});

router.get("/jobs/getByTitle/asc/:sort/:column", async (req, res) => {
  try {
    const { sort, column } = req.params;
    con.query(
      `select *from jobs where jobtitle=? order by experience`,
      [column],
      (err, results) => {
        console.log(
          "succesfull sorted in asc for jobs with job title",
          results
        );
        res.json({
          statusCode: 200,
          data: results,
          message: "error in asc for jobs with job title",
        });
      }
    );
  } catch (err) {
    console.log("ERROR In sorting asc DATA");
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});

router.get("/jobs/getByTitle/dsc/:sort/:column", async (req, res) => {
  try {
    const { sort, column } = req.params;

    con.query(
      `select *from jobs where jobtitle=? order by experience desc`,
      [column],
      (err, results) => {
        console.log("succesfull sorted in dsc for jobs with jobtitle");
        res.json({
          statusCode: 200,
          data: results,
          message: "success sorted in dsc",
        });
      }
    );
  } catch (err) {
    console.log("ERROR In sorting dsc DATA with jobtitle");
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});

router.get("/jobs/getAllTitle", async (req, res) => {
  try {
    console.log("getTitle");
    // const {column}=req.params;
    con.query(`select  distinct jobtitle from jobs`, (err, results) => {
      
      res.json({
        statusCode: 200,
        data: results,
        message: "success retrieved all job titles",
      });
    });
  } catch (err) {
    console.log("ERROR In feyching titles", err);
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});
router.get("/jobs/getAllCompany", async (req, res) => {
  try {
    console.log("getAllCompany");
    // const {column}=req.params;
    con.query(`select  distinct companyname from jobs`, (err, results) => {
      console.log("succesfull retrieved all company name");
      res.json({
        statusCode: 200,
        data: results,
        message: "success sorted in asc",
      });
    });
  } catch (err) {
    console.log("ERROR In feyching titles", err);
    res.json({
      statusCode: 404,
      data: {},
      message: "error",
    });
  }
});
router.get("/job/findbyid/:id", (req, res) => {
  
  con.query(
    `select *from jobs where jobid=?`,
    [req.params.id],
    (err, results) => {
      if (err) {
        console.log("error in finding job by id", err);
        res.json({
          statusCode: 404,
          data: {},
          message: "error",
        });
      } else {
        console.log("succesfull found job by id", results);
        res.json({
          statusCode: 200,
          data: results,
          message: "success",
        });
      }
    }
  );
});

router.post("/post/jobs", async (req, res) => {
  const datas = req.body;
  try {
    console.log(datas);
    const postedOn = new Date(datas.postedOn)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // const data=await con.promise().query("insert into credentials values(?,?,?,?,?,?,?,?)",[f.email,f.password,f.firstname,f.lastname,f.phn,f.district,f.state,f.country]);
    const response = await con
      .promise()
      .query(
        "insert into jobs(jobtitle, jobdescription, postedon, experience,companyname) values(?,?,?,?,?)",
        [datas.title, datas.jobDecription, postedOn, datas.experience,datas.companyname]
      );
    console.log("posted job");
    console.log(response);
    res.json({
      statusCode: 200,
      data: {},
      message: "posted successfully",
    });
  } catch (err) {
    res.json({
      statusCode: 400,
      data: {},
      message: "error not posted",
    });
    console.log(err);
  }
});


  router.get("/filter",(req,res)=>{
    const { titlecheckbox, jobcheckbox } = req.query;
    const respond=(results)=>{
      
      const updated=results.map(result => ({
        ...result,
        success: true
      }));
      res.json(
        {
          statusCode: 200,
          data: updated,
          message: "filter successfull",
        }
      )
      console.log(updated);

    }
    
    if(jobcheckbox && titlecheckbox)
      {
        const placeholder1=titlecheckbox.map(()=>'?').join(',');
        const placeholder2=jobcheckbox.map(()=>'?').join(',');
        const query=`select * from jobs where jobtitle in (${placeholder1}) and companyname in (${placeholder2})`
        console.log("both combined filters",jobcheckbox,titlecheckbox);
        con.query(query,[...titlecheckbox,...jobcheckbox],(err,results)=>{
          if(err)
            {
              console.log(err);
          }
          else
          {
            

            respond(results);
            
          }
        })
        
      }
      else if(titlecheckbox)
        {
          const placeholder=titlecheckbox.map(()=>'?').join(',');
          const query=`select * from jobs where jobtitle in (${placeholder})`
          con.query(query,titlecheckbox,(err,results)=>{
            if(err)
              {
                console.log(err);
              }
              else
              {
                
                
                respond(results);
               
            }
          })
        }
        
          
          else if(jobcheckbox)
            {
              
              const placeholder=jobcheckbox.map(()=>'?').join(',');
              const query=`select * from jobs where companyname in (${placeholder})`
              
              con.query(query,jobcheckbox,(err,results)=>{
                if(err)
                  {
                    
                    console.log(err);
                  }
                  else
                  {
                    respond(results);
              }
            })
          }

  
})
module.exports = router;
