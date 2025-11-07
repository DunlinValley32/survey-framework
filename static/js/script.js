const surveyJson = {
    pages: [
      {
        name: "Pollinator Observations",
        elements: [
        {
        name: "loc",
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
          "description": "Please select all that apply.",
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
                 "text": "April"
              },
              { 
                "value": "may", 
                "text": "May"
              },
              { 
                "value": "jun", 
                "text": "June"
              },
              { 
                "value": "jul", 
                "text": "July"
              },
              { 
                "value": "aug", 
                "text": "August"
              },
              { 
                "value": "other", 
                "text": "Other",
              },
            ],
          },
          {
            "type": "comment",
            "name": "seasobs_text",
            "visibleIf": "{seasobs.other} notempty",
            "title": "You selected \"Other.\" Please describe the pollinator and season or month observed:",
          },
          {
            "type": "boolean",
            "name": "poll_id",
            "title": "When you see a pollinator, can you usually identify it?",
          }
        ]
      },
      {
        name: "Pollinator Names",
        elements: [
          {
            "type": "boolean",
            "name": "poll_lang",
            "title": "Do any of the pollinators have a name in your language?",
          }, 
          {
              "type": "matrixdynamic",
              "name": "poll_names",
              "visibleIf": "{poll_lang} = true",
              "title": "Please select a pollinator and write its name in your language.",
              "columns": [
                {
                  "name": "poll_select",
                  "title": "Pollinator:",
                  "cellType": "dropdown",
                  "choices": [
                    {
                      "value": "forest",
                      "text": "Forest Bumblebee"
                    },
                    {
                      "value": "hummermoth",
                      "text": "Hummingbird Moth"
                    },
                    {
                      "value": "swallowtail",
                      "text": "Swallowtail Butterfly"
                    },
                    {
                      "value": "frittilary",
                      "text": "Frittilary Butterfly"
                    },
                    {
                      "value": "cryptic",
                      "text": "Cryptic Bumblebee"
                    },
                    {
                      "value": "syrphid",
                      "text": "Syrphid Fly"
                    }
                  ],
                  "showOtherItem": true,
                  "otherPlaceholder": "Please list the other pollinator here"
                },
                {
                  "name": "poll_name",
                  "title": "Name in your language:",
                  "cellType": "text"
                }
              ]
          }
        ]
      },
      {
        name: "Plants & Changes",
        elements: [
          {
            "type": "checkbox",
            "name": "plants",
            "title": "Where do you usually see the pollinators?",
            "description": "Please select all that apply.",
            "choices": [
              {
                "value": "berry",
                "text": "Berry plants",
              },
              {
                "value": "nat",
                "text": "Other native plants",
              },
              {
                "value": "nonnat",
                "text": "Nonnative plants",
              },
              {
                "value": "gard",
                "text": "Planted flowers or gardens",
              },
            ],
            "showOtherItem": true,
            "otherPlaceholder": "List other plants or locations here",
            "otherText": "Other (please describe)",
            "showSelectAllItem": true,
            "colCount": 2,
          },
          {
            "type": "matrix",
            "name": "pbdelta",
            "title": "In the last 5 years, have you observed any changes in:",
            "description": "Please select one in each row.",
            "columns": [
              {
                "value": "nodelta",
                "text": "No change"
              },
              {
                "value": "somedelta",
                "text": "Some change"
              },
              {
                "value": "delta",
                "text": "A lot of change"
              },
              {
                "value": "idk",
                "text": "I don't know"
              }
            ],
            "rows": [
              {
                "value": "poll",
                "text": "Pollinators"  
              },
              {
                "value": "berry",
                "text": "Berry Plants or Harvests"
              },
              {
                "value": "rain",
                "text": "Rainfall"
              },
              {
                "value": "temp",
                "text": "Summer Temperatures"
              }
            ],
          },
          {
            "type": "text",
            "name": "delta_text",
            "visibleIf": "{pbdelta.poll} anyof ['somedelta', 'delta'] or {pbdelta.berry} anyof ['somedelta', 'delta'] or {pbdelta.rain} anyof ['somedelta', 'delta'] or {pbdelta.temp} anyof ['somedelta', 'delta'] ", 
            "title": "Please describe the changes you have seen:",
          }
        ]
      }
    ]
};

const survey = new Survey.Model(surveyJson);
survey.completedHtml = "<div class='thank-you'><h2>Thank you for your response!</h2><p>Your observations have been recorded.</p></div>";
function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}
// Submit data to Google Apps Script
survey.onComplete.add(function (sender) {
  fetch("https://script.google.com/macros/s/AKfycbwJ3Y2PTMWZ2HZljB6R5hFUIFCQjHDdI6Xy9HY3FwDpSw78ww6eEgcLJGfDknj-h9u8Zw/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sender.data),
  })
  .then(response => response.json())
  .then(result => console.log("Survey submitted:", result))
  .catch(error => console.error("Submission error:", error));
});

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
