const experienceAPI = 'http://localhost:3000/experience';
const skillsAPI = 'http://localhost:3000/skills';

//Experience field data
fetch(experienceAPI)
    .then(res => res.json())
    .then(data => data.forEach(element => {
        createExperience(element)
    }))
function createExperience(data) {
    const randomEXP = data;
    const divJobDate = document.createElement('div');
    divJobDate.classList.add('job-date');
    const experienceYear = document.createElement('h4').innerText = `${randomEXP.startYear}-${randomEXP.finishYear}`;
    const divExperienceYear = document.createElement('div');
    divExperienceYear.classList.add('skills-p')
    const company = document.createElement('p').innerText = randomEXP.companyName;
    const divCompany = document.createElement('div');
    divCompany.classList.add('date-p')
    const divJobExp = document.createElement('div');
    divJobExp.classList.add('job-experience');
    const position = document.createElement('h4').innerText = randomEXP.position;
    const divPosition = document.createElement('div');
    divPosition.classList.add('skills-p')
    const tasks = document.createElement('p').innerText = randomEXP.tasks;
    const divTasks = document.createElement('div');
    const article = document.createElement('article');
    article.classList.add('job-info');
    const container = document.querySelector('.experience-field');
    divExperienceYear.append(experienceYear)
    divCompany.append(company)
    divJobDate.append(divExperienceYear, divCompany)
    divPosition.append(position)
    divTasks.append(tasks)
    divJobExp.append(divPosition, divTasks)
    article.append(divJobDate, divJobExp);
    container.append(article);
}

//Skills field data

fetch(skillsAPI)
    .then(res => res.json())
    .then(data => data.forEach(element => {
        createSkills(element)
    }))

function createSkills(data) {
    const randomSkills = data;
    const divSkillsBar = document.createElement('div');
    divSkillsBar.classList.add('skills-bar');
    const titleOfSkills = document.createElement('p').innerText = randomSkills.title;
    const divTitleOfSkills = document.createElement('div');
    divTitleOfSkills.classList.add('skills-p')
    const skillsLevel = document.createElement('p').innerText = `${randomSkills.level}%`;
    const divSkillsLevel = document.createElement('div');
    divTitleOfSkills.classList.add('skills-p')
    const divBar = document.createElement('div');
    divBar.classList.add('container');
    const bar = document.createElement('div');
    bar.classList.add('skill');
    bar.style.width = `${randomSkills.level}%`;
    const article = document.createElement('article');
    const containSkills = document.querySelector('.skills-field');
    divTitleOfSkills.append(titleOfSkills)
    divSkillsLevel.append(skillsLevel)
    divSkillsBar.append(divTitleOfSkills, divSkillsLevel)
    divBar.append(bar);
    article.append(divSkillsBar, divBar);
    containSkills.append(article)
}