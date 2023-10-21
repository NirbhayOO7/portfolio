const http = require('http');
const fs = require('fs');

const port = 7000;

function requestHand(req, res){
    console.log(req.url);

    res.writeHead(200, {'content-type' : 'text/html'});

    fs.readFile('./make_resume_responsive.html', (err, data)=>{
        if(err)
        {
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
    
}

const server = http.createServer(requestHand);

server.listen(port, (err)=>{
    if(err)
    {
        console.log(`Connectivity over port ${port} fails`);
        return;
    }

    console.log(`Server is up and running over port ${port}`);
    return;
})