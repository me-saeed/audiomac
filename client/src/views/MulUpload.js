import React , { useState ,useEffect}  from 'react'
import socketIOClient from "socket.io-client";
//import { Progress, Segment } from 'semantic-ui-react'
import axios from "axios";


import {Progress} from 'reactstrap';


import {
    Button,
    Input,
    Label,
    FormGroup,
   Card,
   Modal,
   ModalBody,
   CardHeader,
   CardBody,
   NavItem,
   NavLink,
   Nav,
   TabContent,
   TabPane,
   Container,
    Row,
    Col
} from "reactstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import Sidebar from "components/Sidebar/Sidebar.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
function Upload() {
  const ENDPOINT = "https://listenmusichere.herokuapp.com";
  const [response, setResponse] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [tags, setTags] = React.useState([]);

  const [artistname, setartistname] = useState("");
  const [songtitle, setsongtitle] = useState("");
  const [featuring, setfeaturing] = useState("");
  const [producers, setproducers] = useState("");
  const [genre, setgenre] = useState("");
  const [tag1, settag1] = useState("");
 
  const [tag2, settag2] = useState("");
  const [tag3, settag3] = useState("");
  const [tag4, settag4] = useState("");
  
  const [album, setalbum] = useState("");
  const [youtubeurl, setyoutubeurl] = useState("");
  const [songdescription, setsongdescription] = useState("");
  const [songurl, setsongurl] = useState("");
  const [privacy, setprivacy] = useState("Public");

  const [imagecheck, setimagecheck] = useState("");
 
  const [imageurl, setimageurl] = useState("");



  const [songpic, setsongpic] = useState("");
   const [modal1, setModal1] = React.useState(false);
   const [modal2, setModal2] = React.useState(false);
    const [iconPills, setIconPills] = React.useState("1");
    const [filesize, setfilesize] = React.useState("0");
    
    const [pills, setPills] = React.useState("1");
    const [key, setKey] = useState("metadata");
    var myModule = require("views/database");
   
    const [load, setload] = useState("0");
    


    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on(localStorage.getItem('token'), data => {
        setResponse(data);
       
      });
    }, []);










    const onChangeHandler = (e) => {
      let size = 262000000 ;
      if (e.target.files[0].size > size){
alert('your size is greater')
setfilesize(0);
      }
      else{
        setfilesize(1);
        setselectedFile(e.target.files[0]);
      }
    
    };

    const songpichandler= (e) => {
      let file = e.target.files[0];
      let size = 262000000 ;
      if (e.target.files[0].size > size){
alert('your size is greater')
setfilesize(0);
      }
      else{
///setfilesize(1);
        setsongpic(e.target.files[0]);

        let reader = new FileReader();
       
    
        reader.onloadend = () => {
          
            setimageurl (reader.result)
        
        }
    
        reader.readAsDataURL(file)








      }
  
    };

    const perNext = () => {
setKey("metadata")

    }
//     checkFileSize=(event)=>{
//       let files = event.target.files
//       let size = 15000 
//       let err = ""; 
//       for(var x = 0; x<files.length; x++) {
//       if (files[x].size > size) {
//        err += files[x].type+'is too large, please pick a smaller file\n';
//      }
//    };
//    if (err !== '') {
//       event.target.value = null
//       console.log(err)
//       return false
//  }
 
//  return true;
 
//  }
    const user = {
      name: artistname
    };
 
    const getalldata =  async() => {



      const data = new FormData();
 
      data.append("file", selectedFile);
      data.append('artistname', artistname);
      data.append('songtitle', songtitle);
      data.append('featuring', featuring);
      data.append('producers', producers);
      data.append('genre', genre);
      data.append('tag1', tag1);
      data.append('tag2', tag2);
      data.append('tag3', tag3);
      data.append('tag4', tag4);
      data.append('album', album);
      data.append('youtubeurl', youtubeurl);
      data.append('privacy', privacy);
    //  let json=JSON.stringify(tags);
    ///  let post_data={json_data:json}
      data.append('tags', tags.toString());
      data.append('uploderid', localStorage.getItem('token'));
     



      const data1 = new FormData();
 
      data.append("file", songpic);
    ///  data.append("file", selectedFile);
      if(filesize=='1'){
        const profile = {};
        //...fill your object like this for example
        profile[key] = "i am saaaaaaaaaadi";


    axios
        .post(myModule.servername + "/api/users/files", data, {
          onUploadProgress: ProgressEvent => {
            
             setload(ProgressEvent.loaded / ProgressEvent.total*100);
        
        
        },
          // receive two    parameter endpoint url ,form data
        })
      //   .then((res) => {
      //     // then print response status
      //     console.log(res.statusText);
      //     axios
      //   .post(myModule.servername + "/api/users/uploadsongpic", data1, {
        
      //     // receive two    parameter endpoint url ,form data
      //   })
      //   .then((res) => {
         
      //   //    fetch(
      //   //   myModule.servername + "/api/users/singlesongdetails",
      //   //   {
      //   //     method: "post",
      //   //     headers: {
      //   //       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      //   //     },
      //   //     body: `artistname=${artistname}&songtitle=${songtitle}&featuring=${featuring}&producers=${producers}
      //   //     &genre=${genre}&tag1=${tag1}&tag2=${tag2}
      //   //   &tag3=${tag3}}&tag4${tag4}

      //   //   &album=${album}&youtubeurl=${youtubeurl}&songdescription=${songdescription}
      //   //   &songurl=${songurl}&privacy=${privacy}&uploderid=${localStorage.getItem('token')}`,


      //   //   }
      //   // );
 
      //     console.log(res.statusText);
      //   });



      //   });
        
        // fetch(
        //   myModule.servername + "/api/users/singlesongdetails",
        //   {
        //     method: "post",
        //     headers: {
        //       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        //     },
        //     body: `artistname=${artistname}&songtitle=${songtitle}&featuring=${featuring}&producers=${producers}
        //     &genre=${genre}&tag1=${tag1}&tag2=${tag2}
        //   &tag3=${tag3}}&tag4${tag4}

        //   &album=${album}&youtubeurl=${youtubeurl}&songdescription=${songdescription}
        //   &songurl=${songurl}&privacy=${privacy}&uploderid=${localStorage.getItem('token')}`,


        //   }
        // );
        



      }
      else{
        alert('not avaiablr');
      }

        
      
      


    }

    
    return (
     
      
        <div>
          <IndexNavbar/>
          <br/>
          
                 <Row>
          <Col lg="2" md="2" sm="2" xs="2">
<div id="demo" class="collapse in">
<Sidebar/>
</div>

</Col>
<Col md="9" lg="9"  sm="10" xs="10">
<br/>
          <br/>
          <br/>
          
            <Container>
          <Row>
            <Col className="" md="10" xl="10">
            <Card>
                <CardHeader>
                  <Nav
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >

<NavItem>
                      <NavLink
                       eventKey="information"
                        className={pills === "1" ? "active" : ""}
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
      Uploads
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                       eventKey="information"
                        className={pills === "2" ? "active" : ""}
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
      info
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                       eventKey="metadata"
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Metadata
                      </NavLink>
                    </NavItem>
                    
                      
                    
                  </Nav>
                </CardHeader>
                <CardBody>


                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >

<TabPane tabId="pills1">
                      <div>
                      <Input
                  type="file"
                  name="file"
                  accept=".mp3,audio/*"
                  id="exampleFile"
                  onChange={onChangeHandler}
                />
                      </div>
                    </TabPane>







                    <TabPane tabId="pills2">
                      <div>
                      <Container>
                <h2>Basic Information</h2>
                <p>
      It's <time dateTime={response}>{response}</time>
    </p>
                <Row>
                    <Col md="3" lg="3" sm="5" xs="5">
                    {  imageurl!="" ? <>
                    
                    <img
                  alt="..."
                  className="rounded img-raised"
                
                
                  src={imageurl}
                ></img>
                    </>:<>
                    <img
                  alt="..."
                  className="rounded img-raised"
                
                
                  src={require("assets/img/no.jpg")}
                ></img></>}
                     
                     <Button className="btn-round" color="primary" type="file">
                    
                         <i className="now-ui-icons media-1_camera-compact"></i>
                         &nbsp;
                Add Image

               
              </Button>
              <Input
                  type="file"
                  name="songpic"
                  accept="image/*"
                  id="exampleFile"
                  onChange={songpichandler}
                />
            
                      {/* <Input type="file" nameName="info" id="exampleFile" /> */}
                    </Col>
 <Col md="9" lg="9" sm="7" xs="7">

<Row>

                <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Artist<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setartistname(e.target.value)}
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
                    <br/>
                    <Row>
 <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Song Title<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setsongtitle(e.target.value)}
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
</Col>
                </Row>

 <Row>
 <Col md="5" lg="5" sm="8" xs="9">

 <Label for="ShopName">
Featuring</Label>


<ReactTagInput 
      tags={tags} 
      
      onChange={
       
        (newTags) => setTags(newTags)
      
      }
  
    />




              
     </Col>
<Col md="5" lg="5" sm="8" xs="9">

 <Label for="ShopName">Producer(s)</Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setproducers(e.target.value)}
                  ></Input>
                </FormGroup>
     </Col>
     </Row>
<br/>

<Row>
 <Col md="7" lg="7" sm="8" xs="9">
<Label for="ShopName">Genre<span className="sred">*</span></Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect"   onChange={(e) =>setgenre(e.target.value)}>
          <option >--select genre--</option>
          <option value="Carnival">Carnival</option>
          <option value="Rap Kreyo">Rap Kreyol</option>
          <option value="Trap Kreyol">Trap Kreyol</option>
          <option value="Kompa">Kompa</option>
          <option value="Racine">Racine</option>
          <option value="Rara">Rara</option>
          <option value="Trap">Trap kompa</option>
         <option value="World">World</option>
         <option value="Afrobeats">Afrobeats</option>
       
        </Input>
      </FormGroup>
</Col>
</Row>
<br/>
<Row>
 <Col md="4" lg="4" sm="7" xs="7">
<Label for="ShopName">Tags</Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect"  onChange={(e) =>settag1(e.target.value)}>
          <option>--select tag one--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
        
        </Input>
       
      </FormGroup>
</Col>

 <Col md="4" lg="4" sm="7" xs="7">
<Label for="ShopName">Tags<span className="sred">*</span></Label>
 <FormGroup>
     
        <Input type="select" name="select" id="exampleSelect" onChange={(e) =>settag2(e.target.value)}>
          <option>--select tag three--</option>
          <option>Carnival</option>
          <option>Rap Kreyol</option>
          <option>Trap Kreyol</option>
          <option>Kompa</option>
          <option>Racine</option>
          <option>Rara</option>
          <option>Trap kompa</option>
         <option>World</option>
         <option>Afrobeats</option>
           
        </Input>
      </FormGroup>
</Col>


</Row>

<br/>




<Row>
 <Col md="8" lg="8" sm="8" xs="8">
     </Col>

<Col md="4" lg="4" sm="7" xs="7">
      <Button className="btn-round" color="info" type="file" onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}>
                         <i className="now-ui-icons arrows-1_minimal-right"></i>
                         &nbsp;
                Next
              </Button>
     </Col>

</Row>
            </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="pills3" eventKey="metadata">

                      <div>
                      
                     <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Release</h4>
                </div>
                <ModalBody>
                  <Row>
                   <Col md="6">
                     <h3>Share on facebook</h3>
                   </Col>
                 <Col md="6">
                     <h3>Share on twitter</h3>
                   </Col>

                  </Row>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button"
                    href="/upload"
                    onClick={"Upload"}

                  >
                    New Song
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>



               <h2>Enter Metadata</h2>
                      <Row>
                    
 <Col md="7" lg="7" sm="8" xs="9">

<Row>

                <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Album</Label>
               <FormGroup >
                  <Input
                  name="check"
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setalbum(e.target.value)}
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
                    <br/>
                    <Row>
 <Col md="7" lg="7" sm="8" xs="9">
                     <Label for="ShopName">Youtube Url<span className="sred"></span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setyoutubeurl(e.target.value)}
                  ></Input>
                </FormGroup>
                    
                    
                    </Col>
                    </Row>
</Col>
<Col md="4" lg="4" sm="5" xs="5">
   <Label for="ShopName">Song Description</Label>
<div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder = "Add Description"
                    rows="4"
                    type="textarea"
                    onChange={(e) =>setsongdescription(e.target.value)}
                  ></Input>
                </div>
  </Col>
                </Row>
<br/>
 <Row>
 <Col md="3" lg="3" sm="6" xs="6">
 <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                    onChange={(e) =>setprivacy("Public")}
                  ></Input>
                  <span className="form-check-sign"></span>
                  Public
                </Label>
              </FormGroup>
   </Col>
   </Row>
<Row>
 <Col md="3" lg="3" sm="6" xs="6">
 <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                   
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                    onChange={(e) =>setprivacy("Private")}
                  ></Input>
                  <span className="form-check-sign"></span>
                  Private
                </Label>
              </FormGroup>
   </Col>
   </Row>
<br/>

<Row>
 <Col md="6" lg="6" sm="8" xs="9">
<Label for="ShopName">Song Url<span className="sred"></span></Label>



  {/* <div class="ui red inverted progress" data-percent="32">
    <div class="bar" style="width:32%"  style={{color: "red"}}><div class="progress">32%</div></div>
  </div> */}
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                    onChange={(e) =>setsongurl(e.target.value)}
                  ></Input>
                </FormGroup>
   </Col>
   </Row>
   <Row>
 <Col md="4" lg="4" sm="7" xs="7">
<div class="area">
    <div id="dropZone">
   
<br></br>
<Progress max="100" color="info" value={load} style={{height:"50px"}} >
{Math.round(load,2) }
</Progress>
  
    </div>
     
</div>
</Col>
</Row>

   
<br/><br/>

<Row>
 <Col md="8" lg="4" sm="8" xs="8">
    <Button className="btn-round" color="danger" type="file">
                         <i className="now-ui-icons arrows-1_minimal-left"></i>
                         &nbsp;
                Back
              </Button>
     </Col>
<Col md="8" lg="4" sm="8" xs="8">
     </Col>
<Col md="4" lg="4" sm="7" xs="7">
      <Button className="btn-round" color="info" type="button" onClick={getalldata} >
                         <i className="now-ui-icons arrows-1_minimal-right"></i>
                         &nbsp;
                Next
              </Button>
     </Col>

</Row>
                      </div>
                    </TabPane>
                   
                    
                  </TabContent>
                </CardBody>
              </Card>
</Col>
</Row>
</Container>
</Col>
</Row>
        </div>
    )
}

export default Upload

