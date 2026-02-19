async function sendToTrello(subject, body, from, listType) {
  const listId = LIST_IDS[listType];

  // Trello expects application/x-www-form-urlencoded
  const payload = new URLSearchParams({
    key: TRELLO_KEY,
    token: TRELLO_TOKEN,
    idList: listId,
    name: subject,
    desc: `From: ${from}\n\n${body}`
  });

  // Add urgent label if needed
  if (isUrgent(subject, body, from)) {
    payload.append("idLabels", LABELS.urgent);
  }

  const url = "https://api.trello.com/1/cards";

  try {
    const res = await fetch(url, {
      method: "POST",
      body: payload
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Trello error:", data);
      return null;
    }

    console.log("Card created:", data.url);
    return data.url; // Return Trello card link
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}


function generateRandomEmail() {
  const email = samples[Math.floor(Math.random() * samples.length)];

  document.getElementById("sender").value = email.sender;
  document.getElementById("subject").value = email.subject;
  document.getElementById("body").value = email.body;
}

async function sendEmail(){

    const sender = document.getElementById("sender").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;

    if (!sender || !subject || !body) {
        showStatus("Please fill out all fields.", false);
        return;
    }
    const classification = classifyEmail(subject, body, sender);
    
    try {
        const trelloUrl = await sendToTrello(subject, body, sender, classification);

        if (trelloUrl) {
            showStatus(
                `Success! This email was classified as <strong>${classification}</strong>. 
                 <a href="${trelloUrl}" target="_blank">Open Trello Card</a>`,
                true
            );
        } else {
            showStatus("An error occurred while sending to Trello.", false);
        }

    } catch (err) {
        showStatus("An unexpected error occurred.", false);
    }
}

function showStatus(message, success) {
  const statusBox = document.getElementById("statusBox");
  // Remove animation class to reset it, force reflow, then re-add
  statusBox.classList.remove("success", "error", "animate");
  void statusBox.offsetWidth; // forces the browser to reflow, restarting the animation
  
  statusBox.classList.add(success ? "success" : "error");
  statusBox.innerHTML = message;
}