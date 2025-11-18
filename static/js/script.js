const surveyJson = {
    pages: [
      {
        name: "Your Background",
        title: "Your Background",
        elements: [
        {
        name: "comm",
        title: "What community are you from?",
        type: "text",
        }, 
        {
        name: "live",
        title: "Where do you currently live?",
        type: "text",
        }, 
        {
        name: "natv",
        title: "Are you Alaska Native?",
        type: "boolean",
        }, 
        {
          name: "cultgrp",
          "visibleIf": "{natv} = true",
          title: "If you are comfortable, please list your cultural group(s). (This will only be used to ensure we have adequate cultural representation for this survey and a future workshop).",
          type: "text",
        },
        {
          name: "org",
          title: "What organization do you work for?",
          type: "text",
        },
        {
          name: "pos",
          title: "What is your title/position?",
          type: "text",
        },
        ],
      },
      {
        name: "Your Interests in Pollinators",
        title: "Your Interests in Pollinators",
        elements: [
        {
        "type": "matrix",
        "name": "familiarity",
        "title": "On a scale of 1-5, indicate your level of familiarity with the following groups of pollinating insects in Alaska:",
        "cellType": "radiogroup",
        "columns": [
          { 
            "value": "1", 
            "text": "Not familiar at all" 
          },
          { "value": "2", 
            "text": "2" 
          },
          { "value": "3", 
            "text": "3" 
          },
          { "value": "4", 
            "text": "4" 
          },
          { "value": "5", 
            "text": "Very familiar" 
          },
        ],
        "rows": [
          {
            "value": "bumblebees",
            "text": "Bumblebees",
          },
          {
            "value": "otherbees",
            "text": "Other Bees",
          },
          {
            "value": "butterflies",
            "text": "Butterflies",
          },
          {
            "value": "moths",
            "text": "Moths",
          },
          {
            "value": "flies",
            "text": "Flies",
          },
          {
            "value": "wasp",
            "text": "Wasps",
          },
          {
            "value": "beetles",
            "text": "Beetles",
          },
        ],
        },
        {
          "type": "checkbox",
          "name": "knowl",
          "title": "Which topics related to pollinators do you know something about?",
          "choices": [
            {
              "value":"pollid",
              "text": "Pollinator Identification & Monitoring",
            },
            {
              "value": "pollecol",
              "text": "Pollinator Ecology/Natural History",
            },
            {
              "value": "protect",
              "text": "Protecting at-risk or Endangered Species",
            },
            {
              "value": "habitat",
              "text": "Pollinator Habitat",
            },
            {
              "value": "foods",
              "text": "Pollination of berry plants and other traditional foods",
            },
            {
              "value": "steward",
              "text": "How to steward pollinators in gardens, farms, food forests",
            },
            {
              "value": "tk",
              "text": "Traditional Knowledge of pollinators",
            },
          ],
           "showOtherItem": true,
            "otherPlaceholder": "List other topics here",
            "otherText": "Other (please describe)",
            "showSelectAllItem": true,
        },
           {
          "type": "checkbox",
          "name": "learn",
          "title": "Which topics related to pollinators do you want to learn more about?",
          "choices": [
            {
              "value":"pollid",
              "text": "Pollinator Identification & Monitoring",
            },
            {
              "value": "pollecol",
              "text": "Pollinator Ecology/Natural History",
            },
            {
              "value": "protect",
              "text": "Protecting at-risk or Endangered Species",
            },
            {
              "value": "habitat",
              "text": "Pollinator Habitat",
            },
            {
              "value": "foods",
              "text": "Pollination of berry plants and other traditional foods",
            },
            {
              "value": "steward",
              "text": "How to steward pollinators in gardens, farms, food forests",
            },
            {
              "value": "tk",
              "text": "Traditional Knowledge of pollinators",
            },
          ],
           "showOtherItem": true,
            "otherPlaceholder": "List other topics here",
            "otherText": "Other (please describe)",
            "showSelectAllItem": true,
        },
        {
          "type": "text",
          "name": "platpoll",
          "title": "Would you like to know the pollinators of any specific plants? (If so, please list the plant names)",
        },
        {
          "type": "text",
          "name": "specpoll",
          "title": "5.	Would you like to know about any specific pollinators? (Please describe)",
        },
        ],
      },
      {
        name: "current work",
        title: "Your current work related to pollinator stewardship",
        elements: [
          {
            "type": "text",
            "name": "goals",
            "title": "1.	What are your main goals related to pollinator stewardship?",
          }, 
          {
              "type": "boolean",
              "name": "efforts",
              "title": "Are you currently working on anything related to pollinators or their stewardship? (examples include agriculture, food forests, medicinal gardens, habitat restoration, monitoring, Traditional foods, Traditional Knowledge, language revitalization, research and monitoring)",
          },
          {
            "type": "comment",
            "name": "workdescribe",
            "title":"Please tell us a little more about your work:",
            "visibleIf": "{efforts} = true",  
          },
          {
            "type": "comment",
            "name": "partners",
            "title": "Who are your main partners in this work? (other Tribes/communities, Native orgs, non-Native orgs, universities, agencies)",
          },
          {
            "type": "comment",
            "name": "needs",
            "title": "What, if anything, do you need to support this work over the long-term?",
          }
        ]
      }, 
      {
        name: "workshop",
        title: "Interest in a Workshop",
        description: "We intend to host a workshop in Fairbanks about pollinator stewardship across Alaska, focusing on knowledge-exchange, networking, and developing a pollinator stewardship plan for your community or organization (or building on the work you are doing already). The workshop will include cultural practices, identification and monitoring activities, and local site visits. Invitational travel, accommodations, and transportation will be provided.",
        elements: [
          {
            "type": "boolean",
            "name": "wkshp",
            "title": "Would you be interested in coming to Fairbanks for an in-person workshop about pollinator stewardship and planning?",
          },
          {
            "type": "checkbox",
            "name": "avail",
            "title": "What months in 2026 would you most likely be available to attend a 3-day workshop?",
            "colCount" : 2,
            "showNoneItem": true,
            "showSelectAllItem": true,
            "separateSpecialChoices": true,
            "choices": [
              {
                "value": "jan",
                "text": "January",
              },
              {
                "value": "feb",
                "text" : "February",
              },
              {
                "value": "mar",
                "text" : "March",
              },
              {
                "value": "april",
                "text" : "April",
              },
              {
                "value": "may",
                "text" : "May",
              },
              {
                "value": "june",
                "text" : "June",
              },
            ],
          },
          {
           "type": "boolean",
           "name": "planning",
           "title": "Would you be interested in joining the workshop planning team? (meeting twice a month over Zoom)",   
          },
          {
            "type": "text",
            "name": "contact",
            "title": "Please provide your best contact information for follow-up:",
            "visibleIf": "{planning} = true",
          },
          {
            "type": "text",
            "name": "deleg",
            "title": "We are hoping to invite delegations to attend the workshop and participate together. Who else from your community, region, or partners might be interested?",
          },
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
  fetch("https://strong-sprinkles-dbf42e.netlify.app/.netlify/functions/submit", {
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
