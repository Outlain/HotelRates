const puppeteer = require('puppeteer');

const fetchKingSuiteRate = async (checkInDate, checkOutDate) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://www.wyndhamhotels.com/laquinta/west-palm-beach-florida/la-quinta-inn-west-palm-beach-florida-turnpike/rooms-rates?brand_id=LQ&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&useWRPoints=false&children=0&iata=00093796&adults=1&rooms=1`;

    await page.goto(url);

    // Locate the HTML element containing the king suite rate
    // Note: The following is a placeholder; you'll need to inspect the webpage to find the correct selector
    const kingSuiteRate = await page.$eval('YOUR_SELECTOR_HERE', el => el.textContent);

    console.log(`King Suite Rate for ${checkInDate} to ${checkOutDate}: ${kingSuiteRate}`);

    await browser.close();
};

// ... (rest of your code for setting intervals and dates)


let rooms = document.querySelectorAll('.room');
let final = [];
rooms.forEach((room) => {
    // Find the title element within the room, assuming it has a class name 'room-title'
    let titleElement = room.querySelector('.room-title .name-toggle.headline-e');

    // Check if the title exactly matches "1 King Bed, Deluxe Room, Non-Smoking"
    if (titleElement && titleElement.textContent.trim() === '1 King Bed, Deluxe Room, Non-Smoking') {
        // Find all rate elements within the room, assuming they have a class name 'rate'
        let rateElements = room.querySelectorAll('.cash-rate.pay-later');


        console.log(rateElements)
        rateElements.forEach((rate) => {

            if (rate.querySelector('.rate-title.headline-f').textContent.trim() === 'Best Available Rate, Flexible') {

                almost = rate.querySelectorAll(':is(.rate):not([class*=" "])')[0].textContent
                console.log(almost)

                trimmed = almost.slice(0, -3) + '.' + almost.slice(-3);
                console.log(trimmed)
            }

        })
    }
});
