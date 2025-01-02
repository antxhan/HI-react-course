const form = document.querySelector("form");

function selectLabels() {
  const nameLabel = form.querySelector('label[for="name"]');
  const emailLabel = form.querySelector('label[for="email"]');
  const phoneLabel = form.querySelector('label[for="phone"]');
  const messageLabel = form.querySelector('label[for="message"]');
  const optionsLabel = form.querySelector('label[for="options"]');
  const radioLabel =
    form.querySelector('input[id="radio1"]').previousElementSibling
      .previousElementSibling;
  const radio1Label = form.querySelector('label[for="radio1"]');
  const radio2Label = form.querySelector('label[for="radio2"]');
  const radio3Label = form.querySelector('label[for="radio3"]');
  return {
    nameLabel,
    emailLabel,
    phoneLabel,
    messageLabel,
    optionsLabel,
    radioLabel,
    radio1Label,
    radio2Label,
    radio3Label,
  };
}

function selectInputs() {
  const nameInput = form.querySelector('input[id="name"]');
  const emailInput = form.querySelector('input[id="email"]');
  const phoneInput = form.querySelector('input[id="phone"]');
  const messageInput = form.querySelector('textarea[id="message"]');
  const optionsSelect = form.querySelector('select[id="options"]');
  const optionsOptions = optionsSelect.querySelectorAll("option");
  const radio1 = form.querySelector('input[id="radio1"]');
  const radio2 = form.querySelector('input[id="radio2"]');
  const radio3 = form.querySelector('input[id="radio3"]');
  return {
    nameInput,
    emailInput,
    phoneInput,
    messageInput,
    optionsSelect,
    optionsOptions,
    radio1,
    radio2,
    radio3,
  };
}

function changeTextContent({
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  optionsLabel,
  optionsOptions,
  radioLabel,
  radio1Label,
  radio2Label,
  radio3Label,
}) {
  nameLabel.textContent = "Name";
  emailLabel.textContent = "Email";
  phoneLabel.textContent = "Phone";
  messageLabel.textContent = "Message";
  optionsLabel.textContent = "How can we assist you?";
  optionsOptions.forEach((option, index) => {
    const options = ["General Inquiry", "Technical Support", "Feedback"];
    option.textContent = options[index];
  });
  radioLabel.textContent = "Would you like to receive our newsletter?";
  radio1Label.textContent = "Yes, sign me up!";
  radio2Label.textContent = "No, thank you.";
  radio3Label.textContent = "Maybe later.";
}

const labels = selectLabels();
const inputs = selectInputs();
Object.values(inputs).forEach((input, index) => {
  const placeholders = [
    "John Doe",
    "john.doe@example.com",
    "+46 000 000 000",
    "Hello, I'm writing to you about...",
  ];
  input.placeholder = placeholders[index];
});
changeTextContent({ ...labels, ...inputs });

function applyStyles() {
  document.querySelectorAll("*").forEach((element) => {
    element.style.boxSizing = "border-box";
    element.style.padding = "0";
    element.style.margin = "0";
  });

  // body
  const body = document.querySelector("body");
  body.style.fontFamily = "Arial, sans-serif";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
  body.style.minHeight = "100vh";
  body.style.paddingBlock = "2rem";

  // form
  const form = document.querySelector("form");
  form.style.position = "relative";
  form.style.border = "1px solid #bcbcbc";
  form.style.padding = "1.5rem";
  form.style.borderRadius = "1rem";
  form.style.maxWidth = "400px";

  // labels
  const labels = document.querySelectorAll("label");
  labels.forEach((label) => {
    label.style.position = "absolute";
    label.style.backgroundColor = "white";
    label.style.fontSize = "14px";
    label.style.marginTop = "-7px";
    label.style.paddingInline = "7px";
    label.style.left = "calc(14px + 1rem)";
  });

  // radio labels
  const radioLabels = document.querySelectorAll(
    'label[for="radio1"], label[for="radio2"], label[for="radio3"]'
  );
  radioLabels.forEach((label) => {
    label.style.position = "initial";
    label.style.padding = "0";
    label.style.marginLeft = "7px";
  });

  // inputs, textarea, and select
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.style.width = "100%";
    input.style.fontSize = "16px";
    input.style.fontFamily = "Arial, sans-serif";
    input.style.padding = "0.5rem";
    input.style.paddingLeft = "calc(0.25rem + 7px)";
    input.style.paddingTop = "0.75rem";
    input.style.borderRadius = "0.5rem";
    input.style.border = "1px solid #bcbcbc";
  });

  // textarea
  const textareas = document.querySelectorAll("textarea");
  textareas.forEach((textarea) => {
    textarea.style.resize = "vertical";
    textarea.style.marginTop = "-17.5px";
  });

  // radio inputs
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  radioInputs.forEach((radio) => {
    radio.style.width = "max-content";
    radio.style.marginLeft = "calc(0.25rem + 7px)";
  });

  // submit button
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.style.cursor = "pointer";
}

applyStyles();
