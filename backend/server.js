const express = require('express');
const cors = require('cors');
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

 const db= mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database : "crud"
})

app.get("/list", (req,res)=>{

    const sql = "SELECT * FROM student";
    db.query(sql,(err,data)=>{

        if (err) return res.json("Error");
        return res.json(data);
    }
    
    )
}

)

/*app.post('/create', (req,res) => {

    const sql= "INSERT INTO student ('Name', 'Email') VALUES (?,?)" ;
    const values = [
        
        req.body.Name,
        req.body.Email

    ]

    db.query(sql, [values], (err,data) => {
        if (err) return res.json("Error");
        return res.json(data);
} 

)
})  */
app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
    const values = [
      req.body.Name,
      req.body.Email
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.json({ error: "Error occurred while inserting data." });
      }
      
      return res.json({ success: true, data });
    });
  });
  


  app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
    const values = [
      req.body.Name,
      req.body.Email,
      req.params.id
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.json({ error: "Error occurred while updating data." });
      }
    
      return res.json({ success: true, data });
    });
  });
  
  


const port = 4000; // Choose the port you want to use
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/l", (req,res)=>{

   res.send("hello")
}

);



