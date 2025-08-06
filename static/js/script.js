const surveyJson = {
    elements: [
        {
        name: "Region",
        title: "Enter your community or region:",
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
            "text": "Cryptic Bumblebee"
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
          },
          {
            "value": "forest",
            "imageLink": "images/pollinators/forestbumb.jpeg",
            "text": "Forest Bumblebee"
          },
          {
            "value": "frittilary",
            "imageLink": "images/pollinators/frittilary.jpg",
            "text": "Frittilary Butterfly"
          }
        ],
        "showLabel": true,
        "multiSelect": true
        },
        {
          "type": "matrixdropdown",
          "name": "seasobs",
          "title": "In which months do you see each pollinator?",
          "columns": [
            { 
              "name": "cryptic", 
              "title": "Cryptic Bumblebee", 
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'cryptic'"
            },
            { 
              "name": "swallowtail", 
              "title": "Swallowtail Butterfly",
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'swallowtail'"
            },
            { 
              "name": "hummermoth", 
              "title": "Hummingbird Moth",
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'hummermoth'"
            },
            { 
              "name": "syrphid", 
              "title": "Syrphid Fly",
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'syrphid'"
            },
            { 
              "name": "forest", 
              "title": "Forest Bumblebee",
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'forest'"
            }, 
            { 
              "name": "frittilary", 
              "title": "Frittilary Butterfly",
              "cellType": "checkbox",
              "choices": [""],
              "showLabel": false,
              "visibleIf": "{pollobs} contains 'frittilary'"
            }
          ],
            "rows": [
               {
                 "value": "apr", 
                 "text": "April" },
               { 
                "value": "may", 
                "text": "May" },
               { 
                "value": "jun", 
                "text": "June" },
               { 
                "value": "jul", 
                "text": "July" },
               { 
                "value": "aug", 
                "text": "August" },
               { 
                "value": "other", 
                "text": "Other", },
            ]
          },
          {
            "type": "comment",
            "name": "seasobs_text",
            "visibleIf": "{seasobs.other} notempty",
            "title": "You selected \"Other.\" Please describe the pollinator and season or month observed:",
          },
          {
            "type": "boolean",
            "name": "poll_lang",
            "title": "Do any of the pollinators have a name in your language?",
          }, 
          {
            "type": "comment",
            "name" : "poll_lang_yes",
            "visibleIf": "{poll_lang} = true",
            "title": "Please list the Native names for any pollinators:",
          },
          {
            "type": "boolean",
            "name": "poll_id",
            "title": "When you see a pollinator, can you usually identify it?",
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

survey.onAfterRenderQuestion.add(function (sender, options) {
  if (options.question.getType() === "imagepicker") {
    const images = options.htmlElement.querySelectorAll(".sv-imagepicker__image");
    images.forEach(img => {
      img.style.width = "150px";
      img.style.height = "150px";
      img.style.objectFit = "cover";
    });
  }
});
