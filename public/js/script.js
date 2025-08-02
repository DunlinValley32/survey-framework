const surveyJson = {
    elements: [
        {
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
        }, 
        {
            name: "LastName",
            title: "Enter your last name:",
            type: "text"
        },
        {
        "type": "imagepicker",
        "name": "pollobs",
        "title": "Which of these pollinators have you seen?",
        "description": "Please select all that apply.",
        "isRequired": true,
        "choices": [
          {
            "value": "cryptic",
            "imageLink": "images/pollinators/cryptic.jpg",
            "text": "Bumblebee (white tailed)"
          },
          {
            "value": "swallowtail",
            "imageLink": "images/pollinators/swallowtail.jpeg",
            "text": "Swallowtail Butterfly"
          },
          {
            "value": "hummermoth",
            "imageLink": "images/pollinators/hummer.jpeg",
            "text": "Hummingbird Moth"
          },
          {
            "value": "syrphid",
            "imageLink": "images/pollinators/syrphid.jpeg",
            "text": "Syrphid Fly"
          }
        ],
        "showLabel": true,
        "multiSelect": true
        }
    ]
};

const survey = new Survey.Model(surveyJson);
function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});