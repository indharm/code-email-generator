function generateEmail() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let skills = document.getElementById("skills").value;
    let company = document.getElementById("company").value;
    let purpose = document.getElementById("purpose").value;

    let output = document.getElementById("output");

    output.value = "✨ Generating...";

    setTimeout(() => {
        output.value = `Subject: Application for ${role}

Dear Hiring Manager,

My name is ${name}, and I have skills in ${skills}.

I am interested in working at ${company} as a ${role}.

Looking forward to your response.

Best regards,
${name}`;
    }, 800);
}

function copyEmail() {
    let output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Copied!");
}

/* 🌙 Dark Mode Toggle */
function toggleMode() {
    document.body.classList.toggle("dark");
}