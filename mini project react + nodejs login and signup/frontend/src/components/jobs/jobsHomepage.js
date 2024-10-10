import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Checkbox,
  Dialog,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import JobPaper from "./jobPaper";
import { useNavigate } from "react-router";
import axios from "axios";
import "boxicons";
import PostJobs from "./postJobs";
import { useSelector } from "react-redux";
const JobsHomepage = () => {
  const [jobid, setJobId] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [postedon, setPostedOn] = useState("");
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [opendilog, setOpendilog] = useState(false);
  const [titlecheckbox, setTitlecheckbox] = useState([]);
  const [jobcheckbox, setJobcheckbox] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const jobSelectedidfromstore = useSelector(
    (state) => state.jobReducer.jobSelected
  );
  const [alljobs, setAlljobs] = useState([]);
  const [alljobTitle, setAlljobTitle] = useState([]);
  const [allcompanyname, setAllCompanyname] = useState([]);
  const [sort, setSort] = useState("all");
  const nav = useNavigate();
  const [jobSelectedId, setJobSelectdId] = useState(1);
  const handletitlecheckboxes = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    setCheckedItems({ ...checkedItems, [value]: checked });
    setTitlecheckbox((prevalues) => {
      return prevalues.includes(value)
      ? prevalues.filter((v) => v !== value)
      : [...prevalues, value];
    });
  };
  const handleJobcheckboxes = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    setCheckedItems({ ...checkedItems, [value]: checked });
    
    setJobcheckbox((prevalues) => {
      return prevalues.includes(value)
        ? prevalues.filter((v) => v !== value)
        : [...prevalues, value];
    });
  };

  const fetchdataforfilter = async () => {
    try {
    
        const res = await axios.get(
          `http://localhost:3005/app/filter`,{
            params:{
              jobcheckbox:jobcheckbox,
              titlecheckbox:titlecheckbox
          }
        }
        );
        console.log(res.data.data);
        setAlljobs(res.data.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  const findbyid = async (id) => {
    try {
      console.log(id);
      const p = await axios.get(`http://localhost:3005/app/job/findbyid/${id}`);
      console.log("pppppppppppppppp", p.data.data[0]);
      setJobId(p.data.data[0].jobid);
      setJobTitle(p.data.data[0].jobtitle);
      setJobDescription(p.data.data[0].jobdescription);
      setPostedOn(p.data.data[0].postedon);
      setExperience(p.data.data[0].experience);
      setCompany(p.data.data[0].companyname);
    } catch (err) {}
  };
  const l = async () => {
    const f = await axios.get("http://localhost:3005/app/jobs/getall");
    const alljob = f.data.data;
    setAlljobs(alljob);
    console.log(alljobs);
    const k = await axios.get("http://localhost:3005/app/jobs/getAllTitle");
    setAlljobTitle(k.data.data);
    const g = await axios.get("http://localhost:3005/app/jobs/getAllCompany");
    setAllCompanyname(g.data.data);
    
  };
  const sortasc = async (column) => {
    try {
      console.log(column);
      if (sort === "all") {
        const f = await axios.get(
          `http://localhost:3005/app/jobs/getall/asc/${column}`
        );

        const alljob = f.data.data;
        setAlljobs(alljob);
        console.log("Sorted in asc");
      } else {
        const f = await axios.get(
          `http://localhost:3005/app/jobs/getByTitle/asc/${column}/${sort}`
        );

        const alljob = f.data.data;
        setAlljobs(alljob);
        console.log("Sorted in asc");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const sortdsc = async (column) => {
    try {
      if (sort === "all") {
        const f = await axios.get(
          `http://localhost:3005/app/jobs/getall/dsc/${column}`
        );

        const alljob = f.data.data;
        setAlljobs(alljob);
        console.log("Sorted in dsc");
      } else {
        const f = await axios.get(
          `http://localhost:3005/app/jobs/getByTitle/dsc/${column}/${sort}`
        );

        const alljob = f.data.data;
        setAlljobs(alljob);
        console.log("Sorted in dsc");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    try {
      l();
      findbyid(1);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout called!");
      console.log("job selected id is ", jobSelectedidfromstore);
      findbyid(jobSelectedidfromstore);
    }, 300);
    return () => clearTimeout(timer);
  }, [jobSelectedidfromstore]);

  // useEffect(()=>{
  //     try{
  //     }
  //     catch(err)
  //     {
  //         console.log("error in react use effect for jobselected id",err);
  //     }
  // },[jobSelectedidfromstore])

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography>Job o Mania</Typography>
          <div
            style={{
              marginLeft: "35dvw",
              marginRight: "35dvw",
              width: "100dvw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>JOBS</Typography>

            <Typography
              onClick={() => {
                nav("/postjobsHome");
              }}
            >
              POST JOB
            </Typography>
            <Typography onClick={()=>{
              nav("/contact")
            }}>Contact</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div
        style={{ display: "flex", flexDirection: "row", position: "absolute" }}
      >
        <div
          style={{
            height: "100vh",
            width: "30%",
            backgroundColor: "white",
            overflowY: "scroll",
            paddingBottom: "5vh",
            paddingTop: "10vh",
            paddingLeft: "1.6dvh",
            paddingRight: "1.6dvh",
            backgroundImage:
              'url("https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="outlined"
              sx={{ borderRadius: "1vh" }}
              onClick={() => {
                setOpendilog(true);
              }}
            >
              Filter
            </Button>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSort(e.target.value);
                }}
                label="Age"
                sx={{ width: "20vh", height: "6vh" }}
              >
                {alljobTitle.map((titles) => {
                  return (
                    <MenuItem value={titles.jobtitle}>
                      {titles.jobtitle}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <box-icon
              name="sort-a-z"
              style={{ border: "solid black", width: "5vh", height: "4vh" }}
              onClick={() => {
                sortasc("experience");
              }}
            ></box-icon>
            <box-icon
              name="sort-z-a"
              style={{ border: "solid black", width: "5vh", height: "4vh" }}
              onClick={() => {
                sortdsc("experience");
              }}
            ></box-icon>
          </div>
          {alljobs.map((job) => {
            return (
              <div
                style={{
                  marginTop: "2vh",
                  marginLeft: "1vh",
                  marginRight: "1vh",
                }}
              >
                <JobPaper key={job.jobid} data={job}></JobPaper>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "70dvw",
            backgroundColor: "white",
            overflowY: "hidden",
            paddingTop: "9vh",
            backgroundImage:
              'url("https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={5}
                sx={{
                  width: "40%",
                  padding: "3dvh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  paddingTop: "6dvh",
                  paddingBottom: "6dvh",
                  borderRadius: "2dvh",
                  marginTop: "13dvh",
                  backgroundColor: "rgba(184, 236, 242,0.2)",
                }}
              >
                <div style={{ marginTop: "0vh" }}>
                  <h1>{jobtitle}</h1>
                </div>
                <div style={{ marginTop: "0dvh" }}>
                  <Typography sx={{ fontSize: "2.5dvh", fontWeight: "600" }}>
                    {company}
                  </Typography>
                  <Divider></Divider>
                </div>
                <div style={{ marginTop: "1dvh" }}>
                  <label>
                    <Typography>Description : </Typography>
                    <Typography>{jobdescription}</Typography>
                  </label>
                </div>
                <div style={{ marginTop: "2dvh" }}>
                  <label>
                    <Typography>Posted On : </Typography>
                    <Typography>{postedon}</Typography>
                  </label>
                </div>

                <div style={{ marginTop: "2dvh" }}>
                  <label>
                    <Typography>Experinece Required : </Typography>
                    <Typography>{experience}</Typography>
                  </label>
                </div>

                <Dialog open={opendilog} sx={{}}>
                  <div style={{ padding: "1vh" }}>
                    <label>Company Name : </label>
                    <div
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        padding: "3vh",
                        gap: "1vh",
                        gridTemplateColumns: "auto auto auto",
                        width: "max-content",
                      }}
                    >
                      {allcompanyname.map((job) => {
                        return (
                          <div>
                            <Checkbox
                              value={job.companyname}
                              checked={checkedItems[job.companyname] || false}
                              onChange={handleJobcheckboxes}
                            ></Checkbox>
                            <label>{job.companyname}</label>
                          </div>
                        );
                      })}
                    </div>
                    <label>Job Title : </label>
                    <div
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        padding: "3vh",
                        gap: "1vh",
                        gridTemplateColumns: "auto auto auto",
                        width: "max-content",
                      }}
                    >
                      {alljobTitle.map((job) => {
                        return (
                          <div>
                            <Checkbox
                              value={job.jobtitle}
                              checked={checkedItems[job.jobtitle] || false}
                              onChange={handletitlecheckboxes}
                            ></Checkbox>
                            <label>{job.jobtitle}</label>
                          </div>
                        );
                      })}
                    </div>
                    <Button variant="contained" sx={{margin:"2vh"}}
                      onClick={() => {
                        setOpendilog(false);
                        fetchdataforfilter();
                      }}
                    >
                      Apply filters
                    </Button>
                  </div>
                </Dialog>
              </Paper>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobsHomepage;
