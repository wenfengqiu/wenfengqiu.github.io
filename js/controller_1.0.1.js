const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');


/** Email sender details. */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fakekateharris@gmail.com',
    pass: 'kateharris123'
  }
});

/** Send emails. */
const sendEmail = (text) => {
	transporter.sendMail({
		from: 'fakekateharris@gmail.com',
		to: 'ylq.7719@gmail.com, wenfengqiu@hotmail.com',
		subject: 'NBA TOP SHOT!!!',
		text,
	}, function(error, info){
		if (error) {
			console.log(error);
		}
	});
};

/**  
 * Extract content from the "https://nbatopshot.com/packs" website every 30 
 * minutes, and send emails if a new version is included. 
 */
async function webScraper() {
	const browser = await puppeteer.launch();
  	const page = await browser.newPage();
  	await page.goto('https://nbatopshot.com/packs');

 	page.on('console', (msg) => {
		const text = msg.text();

		// Send emails if a new version is included.
		if (text.includes('Release 23')) {
  			sendEmail(text);
  		}

  		// Re-check every 30 mins.
		setTimeout(() => {
			webScraper();
		}, 30 * 60 * 1000);
	 });

 	await page.evaluate(() => {
 		// Log the element content of the next drop element.
 		const className = '[class^="NextDrop__StyledDescription"]';
  		const nextDropDescriptionElement = document.body.querySelectorAll(className)[0];
  		console.log(nextDropDescriptionElement.outerText);
 	 });

  	await browser.close();
};

webScraper();


