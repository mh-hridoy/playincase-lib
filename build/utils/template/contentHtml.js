"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentHtml = void 0;
const contentHtml = (email, title, message, typeCategory, downloadLink, count, totalMb) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
      <title></title>
      <style>
          :root{
              --primary-text: #d7c8c8;
              --primary-2: #7a7777;
              --blue-color:#5068FF
          }
          *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          h1,h2,h3,h4,h5,h6,p,a,span{
              font-family: 'Urbanist', sans-serif;
          }
          .main{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
          }
          .box_wrapper{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 750px;
              border-radius: 5px;
              padding: 20px;
          }
          .email_items{
              display: flex;
              align-items: center;
              gap: 15px;
          }
          .dot{
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: var(--primary-text);
          }
          .email_title{
              color: var(--blue-color);
              font-size: 32px;
              font-weight: 600;
          }
          .box_wrapper h2{
              font-size: 24px;
              font-weight: 400;
              margin-top: 5px;
              margin-bottom: 5px;
          }
          .email_items{
              margin-top: 10px;
          }
          .email_items p{
              color: var(--primary-2);
          }
          .email_content{
              display: flex;
              gap: 10px;
              margin-top: 30px;
              background-color: #f2f1f1;
          }
          .email_content img{
              width: 200px;
              height: 180px;
              object-fit: cover;
          }
          .top{
              margin-bottom: 20px;
          }
          .bottom{
              margin-top: 20px;
          }
          .app_btn{
              border: none;
              outline: none;
              background-color: var(--blue-color);
              color: white;
              font-size: 16px;
              padding: 15px 25px;
              border-radius: 10px;
              margin-top: 20px;
              text-decoration: none;
          }
  
          @media (max-width:550px){
              .box_wrapper{
                  width: 100%;
              }
              .email_items{
                  flex-direction: column;
              }
              .email_content{
                  flex-direction: column;
              }
              .email_content img{
                  width: 100%;
              }
          }
      </style>
  </head>
  
  <body>
  
     <main class="main">
      <div class="box_wrapper">
          <h1 class="email_title">
          ${email}
          </h1>
          <h2>Sent you a message</h2>
          <p>${count} items, ${totalMb}MB in total.</p>
          <div class="email_content">
              <img style="max-widht : 80px; image-fit: cover" src=${downloadLink} alt="Email Images">
              <div>
                 <p style="max-width : 150px; overflow-wrap: break-word; word-wrap: break-word; hyphens: auto; " >
                 ${message}
                 </p>
              </div>
          </div>
          <p style="margin-top: 30px; text-align: center;">
              Please download the app if you don't have it installed and login/signup with this email to view the message
          </p>
          <a class="app_btn" href="https://play.google.com/store/apps/details?id=com.hridoymahmud.playincase&hl=en_IN">Download Link</a>
      </div>
     </main>
      
  </body>
  </html>`;
};
exports.contentHtml = contentHtml;
module.exports = {
    contentHtml: exports.contentHtml,
};
