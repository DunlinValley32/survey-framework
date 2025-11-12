exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const timestamp = new Date().toISOString();
  const fileName = `response-${timestamp}.json`;

  const githubToken = process.env.GITHUB_TOKEN;
  const repoOwner = "dunlinvalley32"; // ← your GitHub username
  const repoName = "pollinator-responses";
  const branch = "main";

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/submissions/${fileName}`;
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString("base64");

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Authorization": `token ${githubToken}`,
      "Content-Type": "application/json",
      "User-Agent": "netlify-function"
    },
    body: JSON.stringify({
      message: `Add new survey response (${fileName})`,
      content,
      branch
    })
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("GitHub API error:", result);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save response", details: result })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ success: true, url: result.content.html_url })
  };
};