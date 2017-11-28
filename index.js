const FtpSrv = require('ftp-srv');
const options = {
  anonymous:true
}
const ftpServer = new FtpSrv('fpt://0.0.0.0:11999', options);
ftpServer.on('login', ({con, user, passwd}, resolve, reject) => resolve({root: process.env.HOME+"/ftp",cwd:"/"}))

ftpServer.listen()
