// Upload and display profile picture
const uploadImg = document.getElementById("upload-img");
var image = " ";
uploadImg.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", ()=> {
        image = reader.result;
        document.getElementById("display-img").style.backgroundImage = `url(${image})`
        uploadImg.style.display = "none"
    });
    reader.readAsDataURL(this.files[0])
})


// Enter and dsplay skills
let skillsList = []
const skillsInput = document.getElementById("skills-input")
const skillsUl = document.getElementById("skills-ul")
const skillsBtn = document.getElementById("skills-btn")

skillsBtn.addEventListener("click", function() {
    skillsList.push(skillsInput.value)
    skillsInput.value = ""
    renderSkills()
})

function renderSkills() {
    let listItems = ""
    for (let i = 0; i < skillsList.length; i++) {
        // Refactor the code below to use a template string
        listItems += `<li>${skillsList[i]}</li>`
    }
    skillsUl.innerHTML = listItems  
}

const doneBtn = document.getElementById("done-btn")
doneBtn.addEventListener("click", function() {
    document.querySelector(".contact-details").style.outline = "none"
})