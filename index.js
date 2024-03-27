var easyinvoice = require('easyinvoice');
var fs = require('fs');
var data = {
    "client":{
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": "Clientcountry"
    },
    "sender":{
        "company": "Sample Corp",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
    },
    "images": {
        logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
    },
    "information": {
        "number": "2024:0001",
        "date": "27-03-2024",
        "due-date": "01-04-2024"
    },
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax-rate": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax-rate": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 15 days.",
    "settings":{
        "currency": "USD",
    },
    
};

easyinvoice.createInvoice(data, function (result){
    fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});