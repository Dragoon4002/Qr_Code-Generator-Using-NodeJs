let QRCode=require('qrcode');
let sharing_code = "RickRoll";//content, link, anything you want to appear when a person scans the qr
let image_name = "qr1.png"//the file name in which the code will be stored in with . extension
let foreground_colour = "#000000";//hex code for qr foreground color (traditionally used black or #000000)
let background_color = "#ffffff";//hex code for qr foreground color (traditionally used black or #000000)
QRCode.toFile(`./qrcodes/${image_name}`,sharing_code,{color:{dark:foreground_colour,light:background_color,},},
    //./(Photo name or change the location as per wish).(extension),'(Content, link, anything)',(dark for forground and light for background)
    function(err){
        if(err) throw err;
        console.log('done');
});